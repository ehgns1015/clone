import { apiClient } from '@/apis/clients';

export const api = {
  async checkout(order) {
    const { data } = await apiClient.post('/checkout', order);
    return data;
  },
};
