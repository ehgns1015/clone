import React, { useState, useRef, useLayoutEffect, memo } from 'react';
import NavItem from './NavItem';
import Logo from './Logo';
import TopBar from './TopBar';
import classNames from 'classnames';
import { useLocation } from 'react-router-dom';

export default function Navitation({ onCartClick, cartItemCounts, stickyPaths }) {
  const location = useLocation();
  const isStickyPath = stickyPaths.some((v) => new RegExp(v).test(location.pathname));
  const [isSticky, setSticky] = useState(false);
  const ref = useRef(null);
  const changeHeaderOn = 200;

  console.log('Navitation rendered!');

  const handleScroll = () => {
    console.log('handleScroll called! ');
    const sy = window.pageYOffset || document.documentElement.scrollTop;
    if (sy >= changeHeaderOn) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };

  useLayoutEffect(() => {
    if (isStickyPath) {
      window.removeEventListener('scroll', handleScroll);
      return;
    }
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isStickyPath]);

  return (
    <nav
      ref={ref}
      className={classNames('navbar navbar-expand-md fixed-top navbar-dark p-0 flex-column align-items-stretch', {
        'navbar-scroll': isSticky || isStickyPath,
      })}>
      <TopBar onCartClick={onCartClick} cartItemCounts={cartItemCounts} />
      <div className="container align-items-start menu">
        <Logo />
        <button className="navbar-toggler" type="button">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
          <ul className="navbar-nav">
            <NavItem to="/home" text="Home" />
            <NavItem to="/products" text="Products" />
          </ul>
        </div>
      </div>
    </nav>
  );
}
