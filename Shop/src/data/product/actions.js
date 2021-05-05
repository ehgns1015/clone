import * as AT from '@/data/product/actionTypes';
import apis from '@/apis';

export const getProductDetailLoading = () => ({
  type: AT.GET_PRODUCT_DETAIL_LOADING,
});

export const getProductDetailSuccess = (data) => ({
  type: AT.GET_PRODUCT_DETAIL_SUCCESS,
  payload: data,
});

export const getProductDetailFail = (error) => ({
  type: AT.GET_PRODUCT_DETAIL_FAIL,
  payload: error,
});

export const getProductDetail = (productId) => async (dispatch, getState) => {
  dispatch(getProductDetailLoading());
  try {
    const product = await apis.productApi.fetchProductDetail(productId);
    dispatch(getProductDetailSuccess(product));
  } catch (e) {
    dispatch(getProductDetailFail(e));
  }
};
