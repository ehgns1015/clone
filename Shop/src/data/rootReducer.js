import React, { useReducer } from 'react';
import { Store } from './configureStore';
import { userInitialState, user } from './user/reducers';
import { homeInitialState, home } from './home/reducers';
import { modalsInitialState, modals } from './modal/reducers';
import { shoppingCartOpenInitialState, shoppingCartOpen, cartItemInitialState, cartItem } from './cart/reducers';

const StoreProvider = ({ children }) => {
  const [userState, userDispatch] = useReducer(user, userInitialState);
  const [homeState, homeDispatch] = useReducer(home, homeInitialState);
  const [modalsState, modalsDispatch] = useReducer(modals, modalsInitialState);
  const [cartOpenState, cartOpenDispatch] = useReducer(shoppingCartOpen, shoppingCartOpenInitialState);
  const [cartItemState, cartItemDispatch] =useReducer(cartItem, cartItemInitialState)
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
        cartItemDispatch
      }}>
      {children}
    </Store.Provider>
  );
};

export { StoreProvider };
