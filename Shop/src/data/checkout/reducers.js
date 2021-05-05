import * as AT from '@/data/checkout/actionTypes';

const checkoutInitialState = {};

const checkout = (state = checkoutInitialState, { type, payload }) => {
  switch (type) {
    case AT.CHECKOUT_SUCCESS:
      return payload;
    case AT.CHECKOUT_FAIL:
      return state;
    default:
      return state;
  }
};

export { checkoutInitialState, checkout };
