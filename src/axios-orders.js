import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://react-app-bc4e6.firebaseio.com/'
});

export default instance;
