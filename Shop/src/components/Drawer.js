import React, { useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';

function Drawer(props) {
  const open = () => (document.body.style.transform = 'translateX(-320px)');
  const close = () => (document.body.style.transform = 'translateX(0)');
  const isOpen = props.isOpen;
  const Component = props.component;
  useEffect(() => {
    document.body.style.transition = 'all 0.25s ease-out';
    if (isOpen) {
      open();
    } else {
      close();
    }
  });

  useMemo(() => {
    isOpen ? open() : close();
    return true;
  });

  return <div className="drawer">
      <Component  {...props}/>
  </div>;
}

export default Drawer;
