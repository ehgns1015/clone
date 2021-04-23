import { combineReducers } from 'redux';

const INITIAL_STATE = {
  name: 'jay',
  email: 'jay.ko@fastcampus.com',
};

const userReducer = (state = INITIAL_STATE, action) => {
  return state;
};

export default combineReducers({
  user: userReducer,
});