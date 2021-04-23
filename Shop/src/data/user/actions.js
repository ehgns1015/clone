import { LOG_IN, RESET_AUTH } from './actionTypes';

export const logout = () => ({
  type: RESET_AUTH,
});

export const login = ({ email, password }) => ({
  type: LOG_IN,
  user: {
    id: '1',
    name: 'harry',
    email: 'tester00@gmail.com',
  },
});