import * as AT from '@/data/productList/actionTypes';
import apis from '@/apis';
import { debounce } from 'lodash';
import { selectCatoryFilter, selectSortFilter } from './selectors';

export const getProductListLoading = () => ({
  type: AT.GET_PRODUCT_LIST_LOADING,
});

export const getProductListSuccess = (data) => ({
  type: AT.GET_PRODUCT_LIST_SUCCESS,
  payload: data,
});

export const getProductListFail = (error) => ({
  type: AT.GET_PRODUCT_LIST_FAIL,
  payload: error,
});

const createAction = (type) => (data) => ({ type, data });

export const setCategoryFilter = createAction(AT.SET_CATEGORY_FILTER);

export const setPriceRangeFilter = createAction(AT.SET_PRICE_RANGE_FILTER);

export const setSortByFilter = createAction(AT.SET_SORT_BY_FILTER);

export const resetSortByFilter = createAction(AT.RESET_SORT_BY_FILTER);

export const resetPriceRangeFilter = createAction(AT.RESET_PRICE_RANGE_FILTER);

const getProductListThunk = async (dispatch, categoryId, { sortBy, gtePrice, ltePrice } = {}) => {
  console.log('get Product list');
  dispatch(getProductListLoading);
  try {
    const productList = await apis.productApi.fetchProductList(categoryId, { sortBy, gtePrice, ltePrice });
    dispatch(getProductListSuccess(productList));
  } catch (error) {
    // console.error(error.response);
    dispatch(getProductListFail(error));
  }
};

const debouncedGetProductListThunk = debounce(getProductListThunk, 300);

export const getProductList = () => (dispatch, getState) => {
  const sortBy = selectSortFilter(getState());
  const categoryId = selectCatoryFilter(getState())?.id;
  getProductListThunk(dispatch, categoryId, { sortBy: sortBy ? sortBy : null });
};

export const getProductListWithPrice = (priceRange) => (dispatch, getState) => {
  const categoryId = selectCatoryFilter(getState())?.id;
  debouncedGetProductListThunk(dispatch, categoryId, {
    gtePrice: priceRange[0],
    ltePrice: priceRange[1],
  });
};
