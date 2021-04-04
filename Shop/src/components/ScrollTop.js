import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
function ScrollTop({ children }) {
  const history = useHistory();
  useEffect(() => {
    const unlisten = history.listen(() => {
      window.scrollTo(0, 0);
    });
    return () => {
      unlisten();
    };
  }, []);

  return <React.Fragment>{children}</React.Fragment>;
}

export default ScrollTop;
