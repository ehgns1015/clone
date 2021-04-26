import { OPEN_CART, CLOSE_CART, TOGGLE_CART, ADD_CART_ITEM, REMOVE_CART_ITEM } from './actionTypes';

export const openCart = () => ({
  type: OPEN_CART,
});

export const closeCart = () => ({
  type: CLOSE_CART,
});

export const toggleCart = () => ({
  type: TOGGLE_CART,
});

export const addCartItem = (product, qty) => ({
  type: ADD_CART_ITEM,
  payload: { product, qty },
});

export const removeCartItem = (id) => ({
  type: REMOVE_CART_ITEM,
  payload: { id },
});