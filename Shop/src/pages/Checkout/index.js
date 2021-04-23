/* eslint-disable react/prop-types */
import React, { PureComponent, createRef, useRef } from 'react';
import Breadcrumb from '@/components/Breadcrumb';
import ShippingForm from './ShippingForm';
import allImage from '@/assets/images/products/*.jpeg';
import PaymentForm from './PaymentForm';

const CartItem = ({ cartItem, onItemRemove }) => {
  const img = allImage[`item${cartItem.product.id}`];
  return (
    <li key={cartItem.product.id} className="cart-item">
      <a href="#remove" className="navy-link remove-item">
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

export default function Checkout() {
  const breadcrumbLinks = [{ to: '/home', name: 'Home' }, { name: 'Checkout' }];
  const shippingFormRef = useRef(null);
  const paymentFormRef = useRef(null);
  const cartItems = [
    {
      product: {
        id: '3',
        name: 'React Product 3',
        price: 4000,
        info: 'Lorem ipsum dolor sit amet',
        avg_stars: 2,
        total_reviews: 10,
        category: { id: 5, name: 'Clothes' },
      },
      count: 3,
    },
  ];
  const total = () => cartItems.reduce((acc, o) => acc + o.count * o.product.price, 0);
  const handleOrderComplete = (e) => {
    e.preventDefault();
    const shippingFormData = new FormData(this.shippingFormRef.current);
    const paymentFormData = new FormData(this.paymentFormRef.current);
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
            <ul className="list-unstyled mb-4">{cartItems.map((cartItem) => CartItem({ cartItem }))}</ul>
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
    </>
  );
}
