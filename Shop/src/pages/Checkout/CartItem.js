/* eslint-disable react/prop-types */
import React, { memo, createRef, useContext } from 'react';
import allImage from '@/assets/images/products/*.jpeg';
import { Store } from '@/data/configureStore';
import { removeCartItem } from '@/data/cart/actions';

//onItemRemove
const CartItem = ({ cartItem }) => {
  const { cartItemDispatch } = useContext(Store);
  const handleItemBtnClicked = (e) => {
    e.preventDefault();
    e.stopPropagation();
    cartItemDispatch(removeCartItem(cartItem.product.id));
  };
  const img = allImage[`item${cartItem.product.id}`];
  return (
    <li key={cartItem.product.id} className="cart-item">
      <a onClick={handleItemBtnClicked} href="#remove" className="navy-link remove-item">
        ×
      </a>
      <a href="./product-detail.html">
        <img width="250" height="250" src={img} alt={cartItem.product.name} className="p-3" />
        {cartItem.product.name}
      </a>
      <span className="quantity">
        {' '}
        {cartItem.count} × <span className="price">{cartItem.product.price}</span>{' '}
      </span>
    </li>
  );
};

export default CartItem;
