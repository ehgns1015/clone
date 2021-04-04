import React from 'react';
import PropTypes from 'prop-types';

function ShippingForm(props, ref) {
  return (
    <form ref={ref} action="" className="form-horizontal mt-4" role="form">
      <div className="form-group">
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <label className="control-label">Customer Info</label>
          </div>
          <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
            <input type="text" name="firstName" className="form-control" placeholder="Firtst Name" />
          </div>
          <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
            <input type="text" name="lastName" className="form-control" placeholder="Last Name" />
          </div>
        </div>
      </div>
      <div className="form-group">
        <input type="email" name="email" className="form-control" placeholder="Email" />
      </div>
      <div className="form-group">
        <input type="text" name="phone" className="form-control" placeholder="Phone Number" />
      </div>
      <div className="form-group">
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <label className="control-label">Address</label>
          </div>
          <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
            <input type="text" name="state" className="form-control" placeholder="State" />
          </div>
          <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
            <input type="text" name="city" className="form-control" placeholder="City" />
          </div>
        </div>
      </div>
      <div className="form-group">
        <div className="row">
          <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
            <input type="text" name="street" className="form-control" placeholder="Street Address" />
          </div>
          <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
            <input type="text" name="postCode" className="form-control" placeholder="Postal Code" />
          </div>
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="orderNote" className="control-label">
          Order Notes
        </label>
        <textarea
          className="form-control"
          name="orderNote"
          id="orderNote"
          cols="20"
          rows="5"
          placeholder="Note your order"></textarea>
      </div>
    </form>
  );
}

export default React.forwardRef(ShippingForm);
