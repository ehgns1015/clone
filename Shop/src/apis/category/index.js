import { apiClient } from '@/apis/clients';

export const api = {
  async getAllCategories() {
    const { data } = await apiClient.get('/category');
    return data;
  },
};
