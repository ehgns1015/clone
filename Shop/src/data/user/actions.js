import * as AT from '@/data/user/actionTypes';
import apis from '@/apis';
import { closeModal } from '../modal/actions';
import { setAuthToken, clearAuthToken } from '@/data/tokenManager';

export const logout = () => (dispatch) => {
  clearAuthToken();
  dispatch(logoutSuccess());
};

export const logoutSuccess = (payload) => ({
  type: AT.LOG_OUT,
  payload,
});

export const login = ({ email, password }) => async (dispatch, getState) => {
  apis;
  dispatch(loginLoading());
  try {
    const token = await apis.userApi.login({ email, password });
    setAuthToken(token.apiToken);
    dispatch(whoAmI());
    dispatch(closeModal());
  } catch (e) {
    console.error(e);
    const data = e.response ? e.response.data : e;
    dispatch(loginFailure(data));
  }
};

export const loginLoading = () => ({
  type: AT.LOG_IN_LOADING,
});

export const loginSuccess = (payload) => ({
  type: AT.LOG_IN_SUCCESS,
  payload,
});

export const loginFailure = (error) => ({
  type: AT.LOG_IN_FAIL,
  error,
});

export const setUserSession = (userSession) => ({
  type: AT.SET_USER_SESSION,
  userSession,
});

export const resetAuth = () => ({
  type: AT.RESET_AUTH,
});

export const whoAmI = () => async (dispatch, getState) => {
  dispatch(whoAmILoading());
  try {
    const result = await apis.userApi.me();
    console.log(result);
    dispatch(whoAmISuccess(result));
  } catch (error) {
    dispatch(whoAmILoading(error));
  }
};

export const whoAmILoading = () => ({
  type: AT.WHO_AM_I_LOADING,
});

export const whoAmISuccess = (payload) => ({
  type: AT.WHO_AM_I_SUCCESS,
  payload,
});

export const whoAmIFailure = (error) => ({
  type: AT.WHO_AM_I_FAILURE,
  error,
});

export const register = (payload) => ({
  type: AT.REGISTER,
  payload,
});

export const registerLoading = () => ({
  type: AT.REGISTER_LOADING,
});

export const registerSuccess = (data) => ({
  type: AT.REGISTER_SUCCESS,
  data,
});

export const registerFailure = (error) => ({
  type: AT.REGISTER_FAILURE,
  error,
});