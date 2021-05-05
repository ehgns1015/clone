import * as AT from '@/data/relatedProductList/actionTypes';
import apis from '@/apis';

export const getRelatedProductListLoading = () => ({
  type: AT.GET_RELATED_PRODUCT_LIST_LOADING,
});

export const getRelatedProductListSuccess = (data) => ({
  type: AT.GET_RELATED_PRODUCT_LIST_SUCCESS,
  payload: data,
});

export const getRelatedProductListFail = (error) => ({
  type: AT.GET_RELATED_PRODUCT_LIST_FAIL,
  payload: error,
});

export const getRelatedProductList = (productId) => async (dispatch) => {
  dispatch(getRelatedProductListLoading());
  try {
    const relatedProductList = await apis.productApi.fetchRelatedProductList(productId);
    dispatch(getRelatedProductListSuccess(relatedProductList));
  } catch (e) {
    dispatch(getRelatedProductListFail(e));
  }
};
