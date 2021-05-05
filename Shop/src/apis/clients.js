import { getAuthToken } from '@/data/tokenManager';
import axios from 'axios';

const SERVER_URL = 'http://localhost:9000/api/v1';

const apiClient = axios.create({
  baseURL: SERVER_URL,
});

apiClient.interceptors.request.use((request) => {
  const token = getAuthToken();
  console.log('token', token);
  if (token) {
    request.headers['Authorization'] = token;
  }
  return request;
});

export { apiClient };
