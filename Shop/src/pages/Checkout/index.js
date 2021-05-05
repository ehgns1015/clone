/* eslint-disable react/prop-types */
import React, { memo, createRef, useContext, useEffect } from 'react';
import Breadcrumb from '@/components/Breadcrumb';
import ShippingForm from './ShippingForm';
import allImage from '@/assets/images/products/*.jpeg';
import PaymentForm from './PaymentForm';
import { Store } from '@/data/configureStore';
import { getTotal } from '@/data/cart/selectors';
import { removeCartItem } from '@/data/cart/actions';
import { getTotal } from '@/data/cart/selectors';
import CartItem from './CartItem';
import { Formik } from 'formik';
import { checkout } from '@/data/checkout/actions';
import { whoAmI } from '@/data/user/actions';
import { getWhoAmI } from '@/data/user/selectors';
import { Alert } from 'react-bootstrap';

const INITIAL_VALUES = {
  customer: {
    email: '',
    phoneNumber: '',
    firstName: '',
    lastName: '',
  },
  orderNote: '',
  address: {
    city: '',
    state: '',
    street: '',
    postCode: '',
  },
  payment: {
    cardNumber: '',
    fullName: '',
    expDate: '',
    cvc: '',
  },
};

export default function Checkout() {
  const { cartItemState, userState, userDispatch, checkoutDispatch } = useContext(Store);
  const breadcrumbLinks = [{ to: '/home', name: 'Home' }, { name: 'Checkout' }];
  const cartItems = cartItemState;
  const total = getTotal(cartItems);
  const userLogged = getWhoAmI(userState);

  useEffect(() => {
    userDispatch(whoAmI());
  }, []);

  const isDisabled = (touched, errors) => {
    const isTouched = Object.keys(touched).length > 0;
    return !(isTouched && Object.keys(errors).length == 0);
  };

  const handleOrderComplete = (values, error) => {
    checkoutDispatch(checkout(values));
  };

  return (
    <>
      <Breadcrumb title="Checkout" links={breadcrumbLinks} />
      {!userLogged && (
        <section className="checkout-section container mb-5 login-please">
          <Alert variant="danger">
            <h1>로그인 해주세요!</h1>
          </Alert>
        </section>
      )}
      {userLogged && (
        <section className="checkout-section container mb-5">
          <Formik initialValues={INITIAL_VALUES}>
            {({ values, validateForm, errors, isValid, touched }) => (
              <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 p-xs">
                  <h2 className="m-0">Shipping address</h2>
                  <ShippingForm />
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
                  <PaymentForm />
                  <div className="mt-5">
                    <button
                      disabled={isDisabled(touched, errors)}
                      onClick={(event) => {
                        event.preventDefault();
                        validateForm().then((error) => {
                          handleOrderComplete(values, error);
                        });
                      }}
                      className="btn btn-lg btn-primary checkout-btn"
                      role="button">
                      Complete Order
                    </button>
                  </div>
                </div>
              </div>
            )}
          </Formik>
        </section>
      )}

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
        .order-panel .checkout-btn:disabled {
          color: #fff;
          background-color: #6c757d;
          border-color: #495057;
        }
        .checkout-section :global(.form-group label) {
          display: inline-block;
          max-width: 100%;
          margin-bottom: 5px;
          font-weight: 700;
        }
        .login-please {
          height: 500px;
        }
      `}</style>
    </>
  );
}
