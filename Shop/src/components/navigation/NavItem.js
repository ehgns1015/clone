import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { NavLink } from 'react-router-dom';

// eslint-disable-next-line react/display-name
const LinkItem = React.forwardRef((props, ref) => {
  const handleClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    props.navigate();
  };
  return (
    <li className={classNames('nav-item', props.className)}>
      <a ref={ref} href="" className="nav-link" onClick={handleClick}>
        {props.text}
      </a>
    </li>
  );
});

const NaviItem = ({ to, text }) => {
  return (
    <React.Fragment>
      <NavLink to={to} activeClassName="active" text={text} exact component={LinkItem}></NavLink>
      <style jsx>
        {`
          :global(.nav-item > .nav-link) {
            color: #fff;
            font-family: 'Open Sans', helvetica, arial, sans-serif;
            font-weight: 700;
            letter-spacing: 1px;
            text-transform: uppercase;
          }
          :global(.nav-link) {
            padding-top: 25px;
            border-top: 6px solid transparent;
          }
          :global(.nav-item.active > .nav-link, .nav-item.active > .nav-link:hover) {
            background: transparent;
            color: #fff;
            border-top: 6px solid #1ab394;
          }
          :global(.nav-item > .nav-link:hover) {
            color: #1ab394;
          }
          :global(.active > a:focus) {
            background: transparent;
            color: #fff;
          }
        `}
      </style>
    </React.Fragment>
  );
};
NaviItem.propTypes = {
  to: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  active: PropTypes.bool,
  action: PropTypes.func,
  show: PropTypes.bool,
};
export default NaviItem;
