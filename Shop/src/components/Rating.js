import React from 'react';
import PropTypes from 'prop-types';

function Rating({ value, total }) {
  const stars = Array(total)
    .fill(0)
    .map((x, i) => (i + 1 <= value ? 1 : 0));

  return (
    <>
      {stars.map((star, i) => (
        <i className={`${star ? 'fas fa-star' : 'far fa-star'}`} key={i}></i>
      ))}
    </>
  );
}

Rating.propTypes = {
  value: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
};

export default Rating;
