import * as AT from '@/data/productList/actionTypes';

const initalPriceRange = [0, 1000];
const filterInitialState = {
  category: null,
  priceRange: initalPriceRange,
  sortBy: '',
};
const filter = (state = filterInitialState, { type, payload }) => {
  switch (type) {
    case AT.SET_CATEGORY_FILTER:
      return {
        ...state,
        category: payload,
      };
    case AT.SET_PRICE_RANGE_FILTER:
      return {
        ...state,
        priceRange: payload,
      };
    case AT.SET_SORT_BY_FILTER:
      return {
        ...state,
        sortBy: payload,
      };
    case AT.RESET_SORT_BY_FILTER:
      return {
        ...state,
        sortBy: '',
      };
    case AT.RESET_PRICE_RANGE_FILTER:
      return {
        ...state,
        priceRange: initalPriceRange,
      };
    default:
      return state;
  }
};
const filteredListInitialState = [];
const filteredList = (state = filteredListInitialstate, { type, payload }) => {
  switch (type) {
    case AT.GET_PRODUCT_LIST_SUCCESS:
      return payload;
    case AT.GET_PRODUCT_LIST_FAIL:
      return [];
    default:
      return state;
  }
};

export default { filterInitialState, filter, filteredListInitialState, filteredList };
