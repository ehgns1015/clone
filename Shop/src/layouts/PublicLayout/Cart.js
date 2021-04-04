import React, { memo, PureComponent } from 'react';
import allImage from '@/assets/images/products/*.jpeg';
import { Link } from 'react-router-dom';

class PureCartItem extends PureComponent {
  render() {
    const { id, name, price, count } = this.props;
    console.log('Cart Item Render', id, name, price, count);
    return (
      <li className="cart-item">
        <a href="#remove" className="navy-link remove-item">
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
  }
}

const CartItem = memo(function C({ id, name, price, count, onItemRemove }) {
  const handleItemBtnClicked = (evt) => {
    evt.preventDefault();
    evt.stopPropagation();
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

  const handleCheckoutBtnClicked = (evt) => {
    if (total == 0) {
      evt.preventDefault();
      evt.stopPropagation();
    }
  };

  const handleCloseBtnClicked = (evt) => {
    evt.preventDefault();
    evt.stopPropagation();
    onClose();
  };

  return (
    <React.Fragment>
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
      <style jsx>{`
        .shopping-cart {
          height: 100%;
        }
        :global(.cart-item) {
          border-bottom: 1px solid rgba(0, 0, 0, 0.1);
          position: relative;
          display: block;
          padding: 20px 50px 0 125px;
          min-height: 100px;
          width: 100%;
          overflow: hidden;
          -webkit-transition: all 0.3s ease;
          transition: all 0.3s ease;
          color: #4a4a4a;
        }
        :global(.cart-item a) {
          display: block;
          font-weight: bold;
          line-height: 1.5;
          color: #4a4a4a;
          text-decoration: none;
        }
        :global(.cart-item a.remove-item) {
          position: absolute;
          top: 20px;
          right: 30px;
          margin: 0;
          font-size: 20px;
          font-weight: bold;
          cursor: pointer;
        }
        :global(.cart-item img) {
          position: absolute;
          top: 0;
          left: 0;
          display: block;
          max-width: 100px;
          width: 100px;
          height: 100px;
        }
        :global(.cart-item .quantity) {
          padding-bottom: 15px;
          display: inline-block;
          color: rgba(0, 0, 0, 0.35);
        }
        .shopping-cart .total-section {
          border-bottom: 1px solid rgba(0, 0, 0, 0.1);
        }
        .shopping-cart .checkout-btn {
          width: 100%;
        }
      `}</style>
    </React.Fragment>
  );
}
