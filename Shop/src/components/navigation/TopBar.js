import React, { useContext, useEffect } from 'react';
import { getUser } from '@/data/user/selectors.js';
import { Store } from '@/data/configureStore';
import { selectCartItemCounts } from '@/data/cart/selectors';
import { toggleCart } from '@/data/cart/actions';
import { showModal } from '@/data/modal/actions';
import { getWhoAmI } from '@/data/user/selectors.js';
import { showModal } from '@/data/modal/actions.js';
import { whoAmI, logout } from '@/data/user/actions';

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
      <a onClick={handleLoginClick}>Log in</a>
      <small>or</small>
      <a onClick={handleSignupClick}>Sign Up</a>
    </span>
  );
};

const UserInfo = ({ user }) => {
  const { userDispatch } = useContext(Store);
  const handleClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    userDispatch(logout());
  };
  return (
    <a onClick={handleClick}>
      {user.name} ({user.email})
    </a>
  );
};

// eslint-disable-next-line react/prop-types
export default function TopBar({ onCartClick, cartItemCounts }) {
  const { userState, cartOpenDispatch } = useContext(Store);
  const user = getUser(userState);
  const handleCartBtnClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    onCartClick();
  };
  useEffect(() => {
    cartOpenDispatch(whoAmI());
  }, []);
  const user = getWhoAmI(userState);
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
        .top-bar :global(ul li a) {
          padding: 0 19px;
          line-height: 35px;
          font-size: 14px;
          color: #ffffff;
          cursor: pointer;
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
