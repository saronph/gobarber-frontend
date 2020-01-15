import axios from 'axios';

const api = axios.create({
  baseURL: 'http://159.65.219.37',
});

export default api;
