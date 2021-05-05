/* eslint-disable react/prop-types */
import React, { useContext } from 'react';
import { Route } from 'react-router-dom';
import Drawer from '@/components/Drawer';
import Cart from './Cart';
import Footer from './Footer';
import Navigation from '@/components/Navigation';
import LoginModal from '@/components/modals/LoginModal';
import SignupModal from '@/components/modals/SignupModal';
import { Store } from '@/data/configureStore';

export default function PublicLayout({ component, ...rest }) {
  const Component = component;
  const { cartOpenState } = useContext(Store);
  const isShoppingCartOpen = cartOpenState;

  return (
    <Route
      {...rest}
      render={(matchProps) => (
        <>
          <Drawer isOpen={isShoppingCartOpen} component={Cart} />
          <Navigation stickyPaths={['/products', '/products/.*', '/checkout']} />
          <Component {...matchProps} />
          <Footer />
          <LoginModal />
          <SignupModal />
        </>
      )}></Route>
  );
}
