import React from 'react';
import { Form, Field } from 'formik';
import { required, composeValidators, validEmail, validPhoneNumber } from '@/validators';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import TextMessage from '@/components/forms/TextMessage';

function ShippingForm() {
  return (
    <Form className="form-horizontal mt-4">
      <div className="form-group">
        <Row>
          <Col>
            <label className="control-label">Customer Info</label>
          </Col>
        </Row>
        <Row>
          <Col>
            <Field
              validate={required}
              name="customer.firstName"
              type="text"
              className="form-control"
              placeholder="Firtst Name"
            />
            <TextMessage name="customer.firstName" />
          </Col>
          <Col>
            <Field
              validate={required}
              name="customer.lastName"
              type="text"
              className="form-control"
              placeholder="Last Name"
            />
            <TextMessage name="customer.lastName" />
          </Col>
        </Row>
      </div>
      <div className="form-group">
        <Field
          validate={composeValidators(required, validEmail)}
          name="customer.email"
          type="email"
          className="form-control"
          placeholder="Email"
        />
        <TextMessage name="customer.email" />
      </div>
      <div className="form-group">
        <Field
          validate={composeValidators(required, validPhoneNumber)}
          name="customer.phoneNumber"
          type="text"
          className="form-control"
          placeholder="0xx-xxxx-xxxx"
        />
        <TextMessage name="customer.phoneNumber" />
      </div>
      <div className="form-group">
        <Row>
          <Col>
            <label className="control-label">Address</label>
          </Col>
        </Row>
        <Row>
          <Col>
            <Field validate={required} name="address.state" type="text" className="form-control" placeholder="State" />
            <TextMessage name="address.state" />
          </Col>
          <Col>
            <Field validate={required} name="address.city" type="text" className="form-control" placeholder="City" />
            <TextMessage name="address.city" />
          </Col>
        </Row>
      </div>
      <div className="form-group">
        <Row>
          <Col lg={8}>
            <Field
              validate={required}
              name="address.street"
              type="text"
              className="form-control"
              placeholder="Street Address"
            />
            <TextMessage name="address.street" />
          </Col>
          <Col>
            <Field
              validate={required}
              name="address.postCode"
              type="text"
              className="form-control"
              placeholder="Postal Code"
            />
            <TextMessage name="address.postCode" />
          </Col>
        </Row>
      </div>
      <div className="form-group">
        <label htmlFor="orderNote" className="control-label">
          Order Notes
        </label>
        <Field
          id="orderNote"
          cols="20"
          rows="5"
          name="orderNote"
          component="textarea"
          className="form-control"
          placeholder="Note your order"
        />
      </div>
    </Form>
  );
}

export default ShippingForm;
