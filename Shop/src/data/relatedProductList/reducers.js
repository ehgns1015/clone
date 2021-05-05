import * as AT from '@/data/relatedProductList/actionTypes';

const relatedProductInitialState = [];

const relatedProduct = (state = relatedProductInitialState, { type, payload }) => {
  switch (type) {
    case AT.GET_RELATED_PRODUCT_LIST_SUCCESS:
      return payload;
    case AT.GET_RELATED_PRODUCT_LIST_FAIL:
      return state;
    default:
      return state;
  }
};

export { relatedProductInitialState, relatedProduct };
