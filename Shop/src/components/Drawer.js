import React, { useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';
import './drawer.css';

function Drawer({ isOpen, component, ...rest }) {
  const Component = component;
  const open = () => (document.body.style.transform = 'translateX(-320px)');
  const close = () => (document.body.style.transform = 'none');
  useEffect(() => {
    document.body.style.transition = 'all 0.25s ease-out';
    isOpen? open() : close()
  });

  useMemo(() => {
    isOpen ? open() : close();
    return true;
  })
  return (
    <div className="drawer">
      <Component {...rest} />
    </div>
  );
}

Drawer.propTypes = {
  isOpen: PropTypes.bool,
  component: PropTypes.elementType.isRequired,
};


export default Drawer;
