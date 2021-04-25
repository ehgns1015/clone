import React, { useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';

export default function Drawer(props) {
  const Component = props.component;
  const open = () => (document.body.style.transform = 'translateX(-320px)');
  const close = () => (document.body.style.transform = 'none');

  useEffect(() => {
    document.body.style.transition = 'all 0.25s ease-out';
    props.isOpen ? open() : close();
  });

  useMemo(() => {
    props.isOpen ? open() : close();
    return true;
  });

  return (
    <>
      <div className="drawer">
        <Component {...props} />
      </div>
      <style jsx>
        {`
          .drawer {
            position: fixed;
            width: 320px;
            right: -320px;
            top: 0;
            bottom: 0;
            max-width: 95%;
            z-index: 10;
            color: #333;
            background-color: #fff;
            border-left: none;
            box-shadow: 0 0px 36px 0 rgba(0, 0, 0, 0.1);
          }
        `}
      </style>
    </>
  );
}

Drawer.propTypes = {
  isOpen: PropTypes.bool,
  component: PropTypes.elementType.isRequired,
};
