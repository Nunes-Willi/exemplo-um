import axios from 'axios';

const api = axios.create({
  baseURL: 'http://191.52.59.52:19003',
});

export default api;