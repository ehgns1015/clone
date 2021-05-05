import { apiClient } from '@/apis/clients';

export const api = {
  async login(payload) {
    const { data } = await apiClient.post('/auth', payload);
    return data;
  },
  async join(payload) {
    const { data } = await apiClient.post('/user/join', payload);
    return data;
  },
  async me(payload) {
    const { data } = await apiClient.post('/user/me', payload);
    return data;
  },
};
