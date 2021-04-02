import React from 'react';
import NavItem from './NavItem';
import Logo from './Logo';
import TopBar from './TopBar';

export default function Navitation({ onCartClick, cartItemCounts }) {
  return (
    <>
      <nav className="navbar navbar-expand-md fixed-top navbar-dark p-0 flex-column align-items-stretch">
      <TopBar onCartClick={onCartClick} cartItemCounts={cartItemCounts} />
        <div className="container align-items-start menu">
          <Logo />
          <button className="navbar-toggler" type="button">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
            <ul className="navbar-nav">
              <NavItem to="#" text="Home" active />
              <NavItem to="#" text="Products" />
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
