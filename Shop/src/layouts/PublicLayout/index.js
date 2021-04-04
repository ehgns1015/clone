/* eslint-disable react/prop-types */
import React from 'react';
import { Route } from 'react-router-dom';
import Drawer from '@/components/Drawer';
import Cart from './Cart';
import Footer from './Footer';
import Navitation from '@/components/Navigation';

export default class PublicLayout extends React.Component {
  state = {
    isShopingCartOpen: false,
    cartItems: [],
  };

  handleCartClicked = () =>
    this.setState({
      isShopingCartOpen: !this.state.isShopingCartOpen,
    });

  handleCheckout = ({ items, total }) => {
    console.log(`Checkout ${JSON.stringify(items)} total: ${total}`);
  };

  handleCartClosed = () => {
    this.setState({ isShopingCartOpen: false });
  };

  addCartItem = (product, qty) => {
    const found = this.state.cartItems.find((v) => v.product.id === product.id);
    if (found) {
      if (qty) {
        found.count += qty;
      } else {
        found.count += 1;
      }
      this.setState({
        cartItems: [...this.state.cartItems],
      });
    } else {
      this.setState({
        cartItems: [...this.state.cartItems, { product, count: qty ? qty : 1 }],
      });
    }
  };

  handleCartItemRemoved = ({ id }) => {
    const foudnItem = this.state.cartItems.find((v) => v.product.id === id);
    if (foudnItem == null) {
      throw new Error(`Can not find the item (${id})`);
    }
    if (foudnItem && foudnItem.counts > 1) {
      foudnItem.counts -= 1;
    } else {
      const index = this.state.cartItems.indexOf(foudnItem);
      this.state.cartItems.splice(index, 1);
    }
    this.setState({
      cartItems: [...this.state.cartItems],
    });
  };

  render() {
    const { component: Component, ...rest } = this.props;

    return (
      <Route
        {...rest}
        render={(matchProps) => (
          <React.Fragment>
            <Drawer
              isOpen={this.state.isShopingCartOpen}
              component={Cart}
              items={this.state.cartItems}
              onItemRemove={this.handleCartItemRemoved}
              onCheckout={this.handleCheckout}
              onClose={this.handleCartClosed}
            />
            <Navitation
              onCartClick={this.handleCartClicked}
              cartItemCounts={this.state.cartItems.length}
              stickyPaths={['/products', '/products/.*', '/checkout']}
            />
            <Component {...matchProps} onAddCartItem={this.addCartItem} />
            <Footer />
          </React.Fragment>
        )}></Route>
    );
  }
}
