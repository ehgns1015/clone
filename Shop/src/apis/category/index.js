import { apiClient } from '@/apis/clients';

export const api = {
  async getAllCategories() {
    try {
      await apiClient.get('/catergory');
    } catch (e) {
      throw Error(e.message);
    }
  },
};