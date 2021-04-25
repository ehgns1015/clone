/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import Drawer from '@/components/Drawer';
import Cart from './Cart';
import Footer from './Footer';
import Navigation from '@/components/Navigation';

export default function PublicLayout({ component, ...rest }) {
  const Component = component;
  const [isShoppingCartOpen, setShoppingCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const handleCartClicked = () => setShoppingCartOpen(!isShoppingCartOpen);

  const handleCheckout = ({ items, total }) => console.log(`Checkout ${JSON.stringify(items)} total: ${total}`);

  const handleCartClosed = () => setShoppingCartOpen(false);

  const addCartItem = (product, qty) => {
    const found = cartItems.find((v) => v.product.id === product.id);
    if (found) {
      found.count += qty ? qty : 1;
      setCartItems([...cartItems]);
    } else {
      setCartItems([...cartItems, { product, count: qty ? qty : 1 }]);
    }
  };

  const handleCartItemRemoved = ({ id }) => {
    const foudnItem = cartItems.find((v) => v.product.id === id);
    if (foudnItem == null) {
      throw new Error(`Can not find the item (${id})`);
    }
    if (foudnItem && foudnItem.counts > 1) {
      foudnItem.counts -= 1;
    } else {
      const index = cartItems.indexOf(foudnItem);
      cartItems.splice(index, 1);
    }
    setCartItems([...cartItems]);
  };

  return (
    <Route
      {...rest}
      render={(matchProps) => (
        <>
          <Drawer
            isOpen={isShoppingCartOpen}
            component={Cart}
            items={cartItems}
            onItemRemove={handleCartItemRemoved}
            onCheckout={handleCheckout}
            onClose={handleCartClosed}
          />
          <Navigation
            onCartClick={handleCartClicked}
            cartItemCounts={cartItems.length}
            stickyPaths={['/products', '/products/.*', '/checkout']}
          />
          <Component {...matchProps} onAddCartItem={addCartItem} />
          <Footer />
        </>
      )}></Route>
  );
}
