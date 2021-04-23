import React, { useReducer } from 'react';
import Store from './configureStore';
import {reducer, initialState} from './user/reducers'

export const StoreProvider = ({ children }) => {
  const [userState, userDispatch] = useReducer(reducer, initialState);
  return <Store.Provider value={{ userState, userDispatch }}>{children}</Store.Provider>;
};
