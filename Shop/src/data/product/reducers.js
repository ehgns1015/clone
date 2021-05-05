import * as AT from '@/data/Product/actionTypes';

const productInitialState = {};

const product = (state = productInitialState, { type, payload }) => {
  switch (type) {
    case AT.GET_PRODUCT_DETAIL_SUCCESS:
      return payload;
    case AT.GET_PRODUCT_DETAIL_FAIL:
      return state;
    default:
      return state;
  }
};

export { productInitialState, product };
