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

const NavItem = ({ to, text }) => (
  <NavLink to={to} activeClassName="active" text={text} exact component={LinkItem}></NavLink>
);
NavItem.propTypes = {
  to: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  active: PropTypes.bool,
  action: PropTypes.func,
  show: PropTypes.bool,
};
export default NavItem;
