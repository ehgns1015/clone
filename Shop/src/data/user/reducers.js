import { LOG_IN, RESET_AUTH } from './actionTypes';

const userInitialState = {
  [LOG_IN]: null,
};

const user = (state = userInitialState, action = {}) => {
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

export { userInitialState, user };
