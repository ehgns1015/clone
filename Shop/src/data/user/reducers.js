import { LOG_IN, RESET_AUTH } from './actionTypes.js';

const initialState = {
  [LOG_IN]: null,
};

function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case LOG_IN:
      return {
        [LOG_IN]: action.user,
      };
    case RESET_AUTH:
      return {
        [LOG_IN]: null,
      };

    default:
      return state;
  }
}

export { reducer, initialState };
