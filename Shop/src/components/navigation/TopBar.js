import React from 'react';

export default function TopBar({ onCartClick, cartItemCounts }) {
  const handleCartBtnClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    onCartClick();
  };
  return (
    <>
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
    </>
  );
}
