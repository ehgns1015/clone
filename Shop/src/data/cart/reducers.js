import { ADD_CART_ITEM, CLOSE_CART, OPEN_CART, TOGGLE_CART, REMOVE_CART_ITEM } from './actionTypes';
const shoppingCartOpenInitialState = false;
const shoppingCartOpen = (state = shoppingCartOpenInitialState, { type, payload }) => {
  switch (type) {
    case OPEN_CART:
      return true;
    case CLOSE_CART:
      return false;
    case TOGGLE_CART:
      return !state;
    default:
      return state;
  }
};
const cartItemInitialState = [];
const cartItem = (state = cartItemsInitialState, { type, payload = {} }) => {
  const { product = {}, qty, id } = payload;
  let found = {};

  switch (type) {
    case ADD_CART_ITEM:
      found = state.find((v) => v.product.id === product.id);
      if (found) {
        found.count += qty ? qty : 1;
        return [...state];
      } else {
        return [...state, { product, count: qty ? qty : 1 }];
      }

    case REMOVE_CART_ITEM:
      found = state.find((v) => v.product.id === id);
      if (found == null) {
        throw new Error(`Can not find the item (${id})`);
      }
      if (found && found.count > 1) {
        found.count -= 1;
      } else {
        const index = state.indexOf(found);
        state.splice(index, 1);
      }
      return [...state];

    default:
      return state;
  }
};

export { shoppingCartOpenInitialState, shoppingCartOpen, cartItemInitialState, cartItem };
