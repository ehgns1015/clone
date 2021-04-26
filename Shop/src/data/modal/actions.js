import { CLOSE_MODAL, SHOW_MODAL } from './actionTypes';

export const closeModal = (props = {}) => ({
  type: CLOSE_MODAL,
  payload: { props },
});

export const showModal = (type, props = {}) => ({
  type: SHOW_MODAL,
  payload: { type, props },
});