import React from 'react';

// eslint-disable-next-line react/prop-types
export default function TopBar({ onCartClick, cartItemCounts }) {
  const handleCartBtnClick = (evt) => {
    evt.preventDefault();
    evt.stopPropagation();
    onCartClick();
  };

  return (
    <React.Fragment>
      <div className="flex-fill top-bar bg-dark">
        <div className="container">
          <ul className="flex-fill nav justify-content-end">
            <li className="nav-item account-login mr-3">
              <span>
                <a href="#" data-toggle="modal" data-target="#login-modal">
                  Log in
                </a>
                <small>or</small>
                <a href="#" data-toggle="modal" data-target="#signup-modal">
                  Sign Up
                </a>
              </span>
            </li>
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
    </React.Fragment>
  );
}
