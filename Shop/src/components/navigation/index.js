import React, { useState, useRef, useLayoutEffect, useContext } from 'react';
import NavItem from './NavItem';
import Logo from './Logo';
import TopBar from './TopBar';
import classNames from 'classnames';
import { useLocation } from 'react-router-dom';
import { Store } from '@/data/configureStore';
import { selectCartItemCounts } from '@/data/cart/selectors';
import { toggleCart } from '@/data/cart/actions';

export default function Navigation({ stickyPaths }) {
  const location = useLocation();
  const {cartItemState, cartOpenDispatch} = useContext(Store)
  const isStickyPath = stickyPaths.some((v) => new RegExp(v).test(location.pathname));
  const [isSticky, setSticky] = useState(false);
  const ref = useRef(null);
  const changeHeaderOn = 200;
  const cartItemCounts = selectCartItemCounts(cartItemState);
  const onCartClick = () => cartOpenDispatch(toggleCart())

  const handleScroll = () => {
    const sy = window.pageYOffset || document.documentElement.scrollTop;
    setSticky(sy >= changeHeaderOn ? true : false);
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
    <>
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
      <style jsx global>{`
        .navbar-scroll {
          background-color: #fff;
          border-color: #fff;
          padding-top: 0;
          padding-bottom: 5px;
          border-bottom: 1px solid #e7eaec;
          border-radius: 0;
        }
        .navbar-scroll .top-bar.no-hide {
          display: block;
        }
        .navbar-scroll > .active > a:focus {
          background: transparent;
          color: inherit;
        }
        .navbar-scroll .menu .navbar-nav .nav-item > a.nav-link,
        .navbar-scroll .menu .navbar-nav .nav-item.active > a.nav-link {
          color: #676a6c;
        }
        .navbar-scroll .menu .navbar-nav .nav-item a.nav-link:hover {
          color: #1ab394;
        }
        .navbar-scroll .navbar-nav > li > a {
          padding: 20px 10px;
        }
        .navbar.navbar-scroll .navbar-brand {
          margin-top: 15px;
          border-radius: 5px;
          font-size: 12px;
          padding: 10px;
          height: auto;
        }
      `}</style>
    </>
  );
}
