import React from 'react';
import PropTypes from 'prop-types';
import jQuery from 'jquery';
import 'bootstrap-slider/dist/css/bootstrap-slider.min.css';
import 'bootstrap-slider';
import './bsslider.css';

function BootstrapSlider(props) {
  const ref = React.useRef(null);
  React.useLayoutEffect(() => {
    //jQuery for bootstrapslider function
    const slider = jQuery(ref.current).slider({
      min: props.min,
      max: props.max,
      value: props.value,
      step: props.step,
    });

    slider.on('slide', (v) => {
      props.onSlide(v.value);
    });
  }, []);
  return <input ref={ref} type="text" />;
}

BootstrapSlider.propTypes = {
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  step: PropTypes.number.isRequired,
  value: PropTypes.arrayOf(PropTypes.number).isRequired,
  onSlide: PropTypes.func.isRequired,
};

export default BootstrapSlider;
