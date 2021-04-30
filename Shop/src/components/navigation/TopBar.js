import React, { useContext } from 'react';
import { getUser } from '@/data/user/selectors.js';
import { Store } from '@/data/configureStore';
import { selectCartItemCounts } from '@/data/cart/selectors';
import { toggleCart } from '@/data/cart/actions';
import { showModal } from '@/data/modal/actions';

const LoginSingup = () => {
  const { modalsDispatch } = useContext(Store);
  const handleLoginClick = (e) => {
    e.preventDefault();
    modalsDispatch(showModal('LoginModal'));
  };
  const handleSignupClick = (e) => {
    e.preventDefault();
    modalsDispatch(showModal('SignupModal'));
  };

  return (
    <span>
      <a onClick={handleLoginClick} data-toggle="modal" data-target="#login-modal">
        Log in
      </a>
      <small>or</small>
      <a onClick={handleSignupClick} data-toggle="modal" data-target="#login-modal">
        Sign Up
      </a>
    </span>
  );
};

const UserInfo = ({ user }) => (
  <a>
    {user.name} ({user.email})
  </a>
);

// eslint-disable-next-line react/prop-types
export default function TopBar() {
  const { userState, cartItemState, cartOpenDispatch } = useContext(Store);
  const cartItemCounts = selectCartItemCounts(cartItemState);
  const user = getUser(userState);
  toggleCart;
  const handleCartBtnClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    cartOpenDispatch(toggleCart());
  };

  return (
    <>
      <div className="flex-fill top-bar bg-dark">
        <div className="container">
          <ul className="flex-fill nav justify-content-end">
            <li className="nav-item account-login mr-3">{user ? <UserInfo user={user} /> : <LoginSingup />}</li>
            <li className="nav-item cart">
              <a href="#" className="shopping-cart-btn" onClick={handleCartBtnClick}>
                <i className="fas fa-shopping-cart"></i> Cart <span className="item-number">({cartItemCounts})</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <style jsx>{`
        .top-bar {
          min-height: 36px;
        }
        .top-bar ul li a {
          padding: 0 19px;
          line-height: 35px;
          font-size: 14px;
          color: #ffffff;
        }
        .cart a {
          font-size: 12px;
          display: inline-block;
          background-color: #1dc5a3;
          line-height: 35px;
          min-height: 36px;
          font-size: 14px;
          color: #ffffff;
        }
        .cart .item-number {
          font-weight: 800;
        }
        .account-login small {
          color: rgba(255, 255, 255, 0.5);
          padding: 0 10px;
        }
      `}</style>
    </>
  );
}
