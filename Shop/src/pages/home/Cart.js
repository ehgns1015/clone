import React from 'react';
import allImage from '@/assets/images/products/*.jpeg';

const CartItem = React.memo(function C({ id, name, price, count, onItemRemove }) {
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

export default function Cart({ items, onItemRemove, onCheckout, onClose }) {
  const total = items.reduce((acc, o) => acc + o.count * o.product.price, 0);
  const handleCheckoutBtnClicked = (evt) => {
    evt.preventDefault();
    evt.stopPropagation();
    onCheckout({ items, total: total });
  };

  const handleCloseBtnClicked = (evt) => {
    evt.preventDefault();
    evt.stopPropagation();
    onClose();
  };
  return (
    <>
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
            <span className="float-right m-0 price">5000</span>
          </div>
        </div>
        <div className="cart-footer p-3">
          <a
            className="btn btn-lg btn-primary checkout-btn"
            href="./checkout.html"
            role="button"
            onClick={handleCheckoutBtnClicked}>
            Checkout
          </a>
        </div>
      </div>
    </>
  );
}
