import * as AT from '@/data/checkout/actionTypes';
import apis from '@/apis';

export const checkoutLoading = () => ({
  type: AT.CHECKOUT_LOADING,
});

export const checkoutSuccess = (data) => ({
  type: AT.CHECKOUT_SUCCESS,
  data,
});

export const checkoutFail = (error) => ({
  type: AT.CHECKOUT_FAIL,
  error,
});

export const checkout = (order) => async (dispatch, getState) => {
  dispatch(checkoutLoading());
  try {
    const product = await apis.checkoutApi.checkout(order);
    dispatch(checkoutSuccess(product));
  } catch (e) {
    dispatch(checkoutFail(e));
  }
};
