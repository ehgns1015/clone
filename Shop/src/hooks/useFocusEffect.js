import React, { useEffect, useRef } from 'react';

export default () => {
  const ref = useRef();

  useEffect(() => ref.current && ref.current.focus(), []);

  return ref;
};
