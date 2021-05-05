import * as AT from '@/data/categoryList/actionTypes';
import apis from '@/apis';
import { getRelatedProductListFail } from '../relatedProductList/actions';

export const getCategoryListLoading = () => ({
  type: AT.GET_CATEGORY_LIST_LOADING,
});

export const getCategoryListSuccess = (data) => ({
  type: AT.GET_CATEGORY_LIST_SUCCESS,
  payload: data,
});

export const getCategoryListFail = (error) => ({
  type: AT.GET_CATEGORY_LIST_FAIL,
  payload: error,
});

export const getCategoryList = () => async (dispatch) => {
  dispatch(getCategoryListLoading);
  try {
    const categoryList = await apis.categoryApi.getAllCategories();
    dispatch(getCategoryListSuccess(categoryList));
  } catch (error) {
    dispatch(getRelatedProductListFail(error));
  }
};
