import React, { useReducer } from 'react';
import { Store } from './configureStore';
import { userInitialState, user } from './user/reducers';
import { homeInitialState, home } from './home/reducers';
import { modalsInitialState, modals } from './modal/reducers';
import { shoppingCartOpenInitialState, shoppingCartOpen, cartItemInitialState, cartItem } from './cart/reducers';
import { categoryInitialState, category } from './categoryList/reducers';
import { checkoutInitialState, checkout } from './checkout/reducers';
import { productInitialState, product } from './product/reducers';
import { filterInitialState, filter, filteredListInitialState, filteredList } from './productList/reducers';
import { relatedProductInitialState, relatedProduct } from './relatedProductList/reducers';

const StoreProvider = ({ children }) => {
  const [userState, userDispatch] = useReducer(user, userInitialState);
  const [homeState, homeDispatch] = useReducer(home, homeInitialState);
  const [modalsState, modalsDispatch] = useReducer(modals, modalsInitialState);
  const [cartOpenState, cartOpenDispatch] = useReducer(shoppingCartOpen, shoppingCartOpenInitialState);
  const [cartItemState, cartItemDispatch] = useReducer(cartItem, cartItemInitialState);
  const [categoryState, categoryDispatch] = useReducer(category, categoryInitialState);
  const [checkoutState, checkoutDispatch] = useReducer(checkout, checkoutInitialState);
  const [productState, productDispatch] = useReducer(product, productInitialState);
  const [filterState, filterDispatch] = useReducer(filter, filterInitialState);
  const [filteredListState, filteredListDispatch] = useReducer(filteredList, filteredListInitialState);
  const [relatedProductState, relatedProductDispatch] = useReducer(relatedProduct, relatedProductInitialState);

  return (
    <Store.Provider
      value={{
        userState,
        userDispatch,
        homeState,
        homeDispatch,
        modalsState,
        modalsDispatch,
        cartOpenState,
        cartOpenDispatch,
        cartItemState,
        cartItemDispatch,
        categoryState,
        categoryDispatch,
        checkoutState,
        checkoutDispatch,
        productState,
        productDispatch,
        filterState,
        filterDispatch,
        filteredListState,
        filteredListDispatch,
        relatedProductState,
        relatedProductDispatch,
      }}>
      {children}
    </Store.Provider>
  );
};

export { StoreProvider };
