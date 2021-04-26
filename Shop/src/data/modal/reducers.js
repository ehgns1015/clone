import { CLOSE_MODAL, SHOW_MODAL } from './actionTypes';

const modalsInitialState = [];

const modals = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case CLOSE_MODAL:
      state.shift();
      return [...state];
    case SHOW_MODAL: {
      return state.filter((x) => x.type === type).length === 0 ? [payload, ...state] : state;
    }
    default:
      return state;
  }
};

export { modalsInitialState, modals };
