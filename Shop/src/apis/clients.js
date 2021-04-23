import axios from 'axios';

const SERVER_URL = 'http://localhost:4010';

const apiClient = axios.create({
  baseURL: SERVER_URL,
});

export { apiClient };
