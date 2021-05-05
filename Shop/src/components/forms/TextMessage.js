import React from 'react';
import { useFormikContext, getIn } from 'formik';
import PropTypes from 'prop-types';

const TextMessage = ({ name }) => {
  const { errors } = useFormikContext();
  const errorMessage = getIn(errors, name);
  return errorMessage ? (
    <small id="emailHelp" className="form-text text-danger">
      {errorMessage}
    </small>
  ) : null;
};

TextMessage.propTypes = {
  name: PropTypes.string.isRequired,
};

export default TextMessage;
