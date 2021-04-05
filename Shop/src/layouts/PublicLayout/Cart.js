import React, { memo } from 'react';
import allImage from '@/assets/images/products/*.jpeg';
import { Link } from 'react-router-dom';

const CartItem = memo(function C({ id, name, price, count, onItemRemove }) {
  const handleItemBtnClicked = (e) => {
    e.preventDefault();
    e.stopPropagation();
    onItemRemove({ id, name, price });
  };

  return (
    <li className="cart-item">
      <a onClick={handleItemBtnClicked} className="navy-link remove-item">
        ×
      </a>
      <a href="./product-detail.html">
        <img width="250" height="250" src={allImage[`item${id}`]} alt={name} className="p-3" />
        {name}
      </a>
      <span className="quantity">
        {' '}
        {count} × <span className="price">{price} WON</span>{' '}
      </span>
    </li>
  );
});

// eslint-disable-next-line react/prop-types
export default function Cart({ items, onItemRemove, onClose }) {
  const total = items.reduce((acc, o) => acc + o.count * o.product.price, 0);

  const handleCheckoutBtnClicked = (e) => {
    if (total == 0) {
      e.preventDefault();
      e.stopPropagation();
    }
  };

  const handleCloseBtnClicked = (e) => {
    e.preventDefault();
    e.stopPropagation();
    onClose();
  };

  return (
    <div className="shopping-cart">
        <div className="cart-header text-center p-3">
          <a href="#" className="drawer-close navy-link float-left" onClick={handleCloseBtnClicked}>
            <i className="fa fa-chevron-left fa-lg" aria-hidden="true"></i>
          </a>
          <span className="navy">SHOPPING CART</span>
          <div className="navy-line"></div>
        </div>
        <div className="cart-content">
          <ul className="list-unstyled">
            {items.map((item) => (
              <CartItem
                key={item.product.id}
                id={item.product.id}
                name={item.product.name}
                price={item.product.price}
                count={item.count}
                onItemRemove={onItemRemove}
              />
            ))}
          </ul>
          <div className="total-section px-3 py-4 gray-bg">
            <span>TOTAL:</span>
            <span className="float-right m-0 price">{total}</span>
          </div>
        </div>
        <div className="cart-footer p-3">
          <Link onClick={handleCheckoutBtnClicked} className="btn btn-lg btn-primary checkout-btn" to="/checkout">
            Checkout
          </Link>
        </div>
      </div>
  );
}
