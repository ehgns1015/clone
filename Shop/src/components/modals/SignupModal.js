import React, { useContext } from 'react';
import Modal from 'react-bootstrap/Modal';
import useFocusEffect from '@/hooks/useFocusEffect';
import { closeModal } from '@/data/modal/actions';
import { Store } from '@/data/configureStore';

export default function LoginModal({ show, onHide }) {
  const { modalsDispatch } = useContext(Store);
  const handleHide = () => modalsDispatch(closeModal());
  const ref = useFocusEffect();
  return (
    <>
      <Modal show={show} className="login-signup">
        <Modal.Header>
          <button type="button" onClick={handleHide} className="close" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </Modal.Header>
        <form action="" method="POST" className="form-horizontal p-5" role="form">
          <div className="modal-body">
            <h4 className="modal-title mb-5">Sign Up</h4>
            <div className="form-group">
              <label htmlFor="signup-email">EMAIL</label>
              <input
                ref={ref}
                type="text"
                id="signup-email"
                name="email"
                className="form-control email"
                placeholder="example@gmail.com"
              />
            </div>
            <div className="form-group">
              <label htmlFor="signup-password">PASSWORD</label>
              <input
                type="password"
                id="signup-password"
                name="email"
                className="form-control email mb-xxs-sm"
                placeholder="example@gmail.com"
              />
            </div>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-primary">
              Sign Up
            </button>
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
