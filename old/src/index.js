import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import reducer from './store/reducer';

const logger = store => {
  return next => {
    return action => {
      console.log('[Middlware] Dispatching',  action);
      const result = next(action);
      console.log('[Middlware] next State', store.getState());
      return result;
    }
  }
}

const store = createStore(reducer, null, applyMiddleware);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
