import React from 'react';
import PropTypes from 'prop-types';

function PaymentForm(props, ref) {
  return (
    <form ref={ref} action="" className="form-horizontal" role="form">
      <div className="form-group">
        <label className="control-label">Card Number</label>
        <input
          className="form-control"
          autoComplete="cc-number"
          name="cardNumber"
          type="text"
          placeholder="**** **** **** ****"
        />
      </div>
      <div className="form-group">
        <label className="control-label">Full Name</label>
        <input className="form-control" autoComplete="cc-name" name="fullName" type="text" placeholder="Full Nmae" />
      </div>
      <div className="form-group">
        <div className="row">
          <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
            <label className="control-label">MM/YYYY</label>
            <input className="form-control" name="expDate" type="text" placeholder="01/2019" autoComplete="cc-exp" />
          </div>
          <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
            <label className="control-label">CVC</label>
            <input className="form-control" name="cvc" type="text" placeholder="***" autoComplete="cc-csc" />
          </div>
        </div>
      </div>
    </form>
  );
}

export default React.forwardRef(PaymentForm);
