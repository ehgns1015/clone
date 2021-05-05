import React from 'react';
import { Form, Field } from 'formik';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { required, validCardExpDate, composeValidators, validCvc } from '@/validators';
import TextMessage from '@/components/forms/TextMessage';

function PaymentForm() {
  return (
    <Form className="form-horizontal">
      <div className="form-group">
        <label className="control-label">Card Number</label>
        <Field
          validate={required}
          name="payment.cardNumber"
          type="text"
          className="form-control"
          autoComplete="cc-number"
          placeholder="**** **** **** ****"
        />
        <TextMessage name="payment.cardNumber" />
      </div>
      <div className="form-group">
        <label className="control-label">Full Name</label>
        <Field
          validate={required}
          name="payment.fullName"
          type="text"
          className="form-control"
          autoComplete="cc-name"
          placeholder="Full Nmae"
        />
        <TextMessage name="payment.fullName" />
      </div>
      <div className="form-group">
        <Row>
          <Col>
            <label className="control-label">MM/YYYY</label>
            <Field
              validate={composeValidators(required, validCardExpDate)}
              name="payment.expDate"
              type="text"
              className="form-control"
              autoComplete="cc-exp"
              placeholder="01/2019"
            />
            <TextMessage name="payment.expDate" />
          </Col>
          <Col>
            <label className="control-label">CVC</label>
            <Field
              validate={composeValidators(required, validCvc)}
              name="payment.cvc"
              type="text"
              className="form-control"
              autoComplete="cc-csc"
              placeholder="***"
            />
            <TextMessage name="payment.cvc" />
          </Col>
        </Row>
      </div>
    </Form>
  );
}

export default PaymentForm;
