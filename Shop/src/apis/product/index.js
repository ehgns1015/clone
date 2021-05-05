import { apiClient } from '@/apis/clients';

export const api = {
  async fetchNewArrivals() {
    const { data } = await apiClient.get('/product', {
      params: {
        isNewArrival: true,
      },
    });
    return data;
  },

  async fetchProductDetail(productId) {
    const { data } = await apiClient.get(`/product/${productId}`);
    return data;
  },

  async fetchRelatedProductList(productId) {
    const { data } = await apiClient.get(`/product/${productId}/related`);
    return data;
  },

  async fetchProductList(categoryId, { sortBy, gtePrice, ltePrice } = {}) {
    const headers = categoryId ? { Prefer: `example=${categoryId}` } : {};
    const { data } = await apiClient.get(`/product`, {
      params: {
        categoryId,
        sortBy,
        gtePrice,
        ltePrice,
      },
      headers,
    });
    return data;
  },
};
