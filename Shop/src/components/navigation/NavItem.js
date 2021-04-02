import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const NavItem = ({ to, text, action, active }) => {
  const onClickAnchor = (e) => {
    if (action) {
      e.preventDefault();
      e.stopPropagation();
      action();
    }
  };

  return (
    <>
      <li
        className={classNames('nav-item', {
          active,
        })}>
        <a href={to} onClick={onClickAnchor} className="nav-link">
          {text}
        </a>
      </li>
    </>
  );
};
NavItem.propTypes = {
  to: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  active: PropTypes.bool,
  action: PropTypes.func,
  show: PropTypes.bool,
};
export default NavItem;