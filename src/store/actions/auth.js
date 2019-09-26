import axios from "axios";

import * as actionTypes from './actionTypes';
import { dispatch } from 'rxjs/internal/observable/pairs';

export const authStart = () => {
  return {
    type: actionTypes.AUTH_START
  };
};

export const authSuccess = (token, userId) => {
  return {
    type: actionTypes.AUTH_SUCCESS,
    idToken: token,
    userId: userId
  }
}

export const authFail = (error) => {
  return {
    type: actionTypes.AUTH_FAIL,
    error: error
  }
}



export const logout = () => {
  return  {
    type: actionTypes.AUTH_LOGOUT
  };
}

export const checkAuthTimeout = (experationTime) => {
  return dispatch => {
    setTimeout(() => {
      dispatch(logout());
    }, experationTime*1000);
  };
}

export const auth = (email, password, isSignup) => {
  return dispatch => {
    dispatch(authStart());
    const authData = {
      email: email,
      password: password,
      returnSecureToken: true
    };

    let url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBbPnNDXjMPBo9AeY-8LmZz4BFZC2biS8A';
    if (!isSignup) {
      url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBbPnNDXjMPBo9AeY-8LmZz4BFZC2biS8A'

    } /* вместо  verify signInWith */
    axios.post(url, authData)
      .then(response => {
        console.log(response);
        dispatch(authSuccess(response.data.idToken, response.data.localId));
        dispatch(checkAuthTimeout(response.data.expiresIn));
      })
      .catch(err => {
        console.log(err);
        dispatch(authFail(err.response.data.error));
      })
  }
};

export const setAuthRedirectPath = (path) => {
  return {
    type: actionTypes.SET_AUTH_REDIRECT_PATH,
    path: path
  }
}
