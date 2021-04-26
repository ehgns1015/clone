/* eslint-disable react/prop-types */
import React, { memo, createRef, useContext } from 'react';
import Breadcrumb from '@/components/Breadcrumb';
import ShippingForm from './ShippingForm';
import allImage from '@/assets/images/products/*.jpeg';
import PaymentForm from './PaymentForm';
import { Store } from '@/data/configureStore';
import { getTotal } from '@/data/cart/selectors';
import { removeCartItem } from '@/data/cart/actions';

//onItemRemove
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

export default function Checkout() {
  const { cartItemState } = useContext(Store);
  const breadcrumbLinks = [{ to: '/home', name: 'Home' }, { name: 'Checkout' }];
  const shippingFormRef = createRef(null);
  const paymentFormRef = createRef(null);
  const cartItems = cartItemState;
  const handleOrderComplete = (e) => {
    e.preventDefault();
    const shippingFormData = new FormData(shippingFormRef.current);
    const paymentFormData = new FormData(paymentFormRef.current);
    const rawFormData = Object.assign(
      {},
      Object.fromEntries(shippingFormData.entries()),
      Object.fromEntries(paymentFormData.entries())
    );
    console.log({
      customer: {
        email: rawFormData.email,
        phoneNumber: rawFormData.phoneNumber,
        firstName: rawFormData.firstName,
        lastName: rawFormData.lastName,
      },
      items: cartItems,
      orderNote: rawFormData.orderNote,
      address: {
        city: rawFormData.city,
        state: rawFormData.state,
        street: rawFormData.street,
        postCode: rawFormData.postCode,
      },
      payment: {
        cardNumber: rawFormData.cardNumber,
        fullName: rawFormData.fullName,
        expDate: rawFormData.expDate,
        cvc: rawFormData.cvc,
      },
      totalPrice: total,
    });
  };

  const total = getTotal(cartItems);

  return (
    <>
      <Breadcrumb title="Checkout" links={breadcrumbLinks} />
      <section className="checkout-section container mb-5">
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 p-xs">
            <h2 className="m-0">Shipping address</h2>
            <ShippingForm ref={shippingFormRef} />
          </div>

          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 p-3 order-panel">
            <h2 className="m-0">YOUR ORDER</h2>
            <ul className="list-unstyled mb-4">{cartItems.map((cartItem, i) => <CartItem key={i} {...cartItem }/>)}</ul>
            <div className="navy-line-full" />
            <div className="total-section px-3 py-4">
              <span>TOTAL:</span>
              <span className="float-right m-0 price">{total}</span>
            </div>
            <h2 className="mt-5">PAYMENT</h2>
            <PaymentForm ref={paymentFormRef} />
            <div className="mt-5">
              <a
                onClick={handleOrderComplete}
                className="btn btn-lg btn-primary checkout-btn"
                href="./checkout.html"
                role="button">
                Complete Order
              </a>
            </div>
          </div>
        </div>
      </section>
      <style jsx>{`
        .checkout-section .form-horizontal .form-group {
          margin: 0;
          margin-bottom: 8px;
        }
        .order-panel {
          border: 1px solid #ddd;
          min-height: 500px;
        }
        .order-panel .total-section span {
          font-size: 18px;
          font-weight: 500;
        }
        .order-panel .checkout-btn {
          width: 100%;
        }
        .checkout-section :global(.form-group label) {
          display: inline-block;
          max-width: 100%;
          margin-bottom: 5px;
          font-weight: 700;
        }
      `}</style>
    </>
  );
}
