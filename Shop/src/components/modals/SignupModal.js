import React, { useContext } from 'react';
import Modal from 'react-bootstrap/Modal';
import useFocusEffect from '@/hooks/useFocusEffect';
import { closeModal } from '@/data/modal/actions';
import { Store } from '@/data/configureStore';
import { selectIsOpen } from '@/data/modal/selectors';
import { Form, Formik, Field, useFormikContext } from 'formik';
import { composeValidators, required, validEmail, createConfirmedPasswordValidator } from '@/validators';
import Alert from 'react-bootstrap/Alert';

const INITIAL_VALUES = { email: '', password: '', confirmPassword: '' };

const ConfirmPasswordField = ({ targetName, name }) => {
  const { values } = useFormikContext();
  const validConfirmPassword = createConfirmedPasswordValidator(values[targetName]);

  return (
    <Field
      validate={composeValidators(required, validConfirmPassword)}
      name={name}
      className="form-control"
      type="password"
      placeholder="비밀번호 확인"
    />
  );
};

export default function SignupModal({ show }) {
  const { modalsDispatch } = useContext(Store);
  const handleHide = () => modalsDispatch(closeModal());
  const handleSubmit = (values) => {
    console.log(values);
  };
  const ref = useFocusEffect();
  return (
    <>
      <Modal show={show} onHide={handleHide} className="login-signup">
        <Modal.Header>
          <button type="button" onClick={handleHide} className="close" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </Modal.Header>
        <Formik initialValues={INITIAL_VALUES} onSubmit={handleSubmit}>
          {({ errors }) => (
            <Form className="form-horizontal p-5">
              <div className="modal-body">
                <h4 className="modal-title mb-5">Sign Up</h4>
                <div className="form-group">
                  <label htmlFor="signup-email">EMAIL</label>
                  <Field
                    id="signup-email"
                    innerRef={ref}
                    validate={composeValidators(required, validEmail)}
                    name="email"
                    type="email"
                    className="form-control email"
                    placeholder="example@gmail.com"
                  />
                  {errors.email && (
                    <Alert className="mt-3" variant="danger">
                      {errors.email}
                    </Alert>
                  )}
                </div>
                <div className="form-group">
                  <label htmlFor="signup-password">PASSWORD</label>
                  <Field
                    id="signup-password"
                    validate={required}
                    name="password"
                    type="password"
                    className="form-control mb-1"
                    placeholder="비밀번호"
                    minLength="5"
                  />
                  <ConfirmPasswordField name="confirmPassword" targetName="password" />
                  {errors.password && (
                    <Alert className="mt-3" variant="danger">
                      {errors.password}
                    </Alert>
                  )}
                  {errors.confirmPassword && (
                    <Alert className="mt-3" variant="danger">
                      {errors.confirmPassword}
                    </Alert>
                  )}
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-primary">
                  Sign Up
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </Modal>
      <style jsx global>{`
        .login-signup label {
          display: inline-block;
          max-width: 100%;
          margin-bottom: 5px;
          font-weight: 700;
        }
        .login-signup .modal-dialog {
          width: 420px;
        }
        .login-signup .modal-content {
          border-radius: 0;
        }
        .login-signup .modal-header {
          border-bottom: none;
        }
        .login-signup .modal-footer {
          border-top: none;
        }
        .login-signup .modal-title {
          font-size: 18px;
          font-weight: bold;
          color: #4a4a4a;
        }
        .login-signup .form-horizontal .form-group {
          margin-left: 0;
          margin-right: 0;
        }
        .login-signup .signup-today {
          padding: 36px;
          background-color: #f3f3f4;
        }
        .login-signup button:focus {
          outline: none;
        }
      `}</style>
    </>
  );
}
