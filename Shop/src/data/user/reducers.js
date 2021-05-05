import * as AT from './actionTypes.js';

const userInitialState = {
  [AT.LOG_IN]: null,
  [AT.WHO_AM_I]: null,
};

const user = (state = userInitialState, action) => {
  switch (action.type) {
    case AT.LOG_IN_SUCCESS:
      return {
        [AT.LOG_IN]: action.payload,
      };
    case AT.LOG_IN_LOADING:
      return state;
    case AT.LOG_IN_FAIL:
      return { [AT.LOG_IN]: null, error: action.error };
    case AT.LOG_OUT:
      return {
        [AT.LOG_IN]: null,
        [AT.WHO_AM_I]: null,
      };
    case AT.WHO_AM_I_LOADING:
      return state;
    case AT.WHO_AM_I_SUCCESS:
      return { [AT.WHO_AM_I]: action.payload };
    case AT.WHO_AM_I_FAILURE:
      return state;
    default:
      return state;
  }
};

export { userInitialState, user };
