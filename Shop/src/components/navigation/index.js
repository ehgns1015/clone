import React, { useState, useRef, useLayoutEffect } from 'react';
import NavItem from './NavItem';
import Logo from './Logo';
import TopBar from './TopBar';
import classNames from 'classnames';
import { useLocation } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
export default function Navigation({ onCartClick, cartItemCounts, stickyPaths }) {
  const location = useLocation();
  const isStickyPath = stickyPaths.some((v) => new RegExp(v).test(location.pathname));
  const [isSticky, setSticky] = useState(false);
  const ref = useRef(null);
  const changeHeaderOn = 200;
  const handleScroll = () => {
    const sy = window.pageYOffset || document.documentElement.scrollTop;
    if (sy >= changeHeaderOn) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };

  useLayoutEffect(() => {
    // for (let i = 0; i < 100; i++) {
    //   console.log(i);
    //   setSticky(false);
    // }
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
    <React.Fragment>
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
    </React.Fragment>
  );
}
