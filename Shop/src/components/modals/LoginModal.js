import React, { useContext, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import useFocusEffect from '@/hooks/useFocusEffect';
import { showModal, closeModal } from '@/data/modal/actions';
import { Store } from '@/data/configureStore';

export default function LoginModal({ show }) {
  const { modalsDispatch } = useContext(Store);
  const handleHide = () => modalsDispatch(closeModal());
  const handleSignupClick = (e) => {
    e.preventDefault();
    handleHide();
    modalsDispatch(showModal('SignupModal'));
  };
  const ref = useFocusEffect();
  useEffect(() => ref.current && ref.current.focus(), []);
  return (
    <>
      <Modal show={show} onHide={handleHide} className="login-signup">
        <Modal.Header>
          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </Modal.Header>
        <form action="" method="POST">
          <div className="modal-body p-5">
            <h4 className="modal-title mb-5">Login</h4>
            <div className="form-group">
              <label htmlFor="login-email">EMAIL</label>
              <input
                ref={ref}
                type="text"
                id="login-email"
                name="email"
                className="form-control email"
                placeholder="example@gmail.com"
              />
            </div>
            <div className="form-group">
              <label htmlFor="login-password">PASSWORD</label>
              <input
                type="password"
                id="login-password"
                name="email"
                className="form-control email"
                placeholder="example@gmail.com"
              />
              <a href="" className="navy-link">
                Login Lost your password?
              </a>
            </div>
          </div>
          <div className="modal-footer flex-column p-0">
            <button type="button" className="btn btn-primary align-self-end mr-5">
              Login
            </button>
            <div className="signup-today text-center align-self-stretch flex-fill m-0 mt-3">
              <p>Don’t have an account?</p>
              <a onClick={handleSignupClick} className="navy-link">
                Sign Up Today
              </a>
            </div>
          </div>
        </form>
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
