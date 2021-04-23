import { GET_NEW_ARRIVALS_LOADING, GET_NEW_ARRIVALS_SUCCESS, GET_NEW_ARRIVALS_FAIL } from './actionTypes';
import { createActions } from 'redux-actions';
import apis from '@/apis';

const { getNewArrivalsLoading, getNewArrivalsSuccess, getNewArrivalsFail } = createActions(
  GET_NEW_ARRIVALS_LOADING,
  GET_NEW_ARRIVALS_SUCCESS,
  GET_NEW_ARRIVALS_FAIL
);

export const getNewArrivals = () => async (dispatch) => {
  dispatch(getNewArrivalsLoading());
  try {
    const r = await apis.productApi.fetchNewArrivals();
    dispatch(getNewArrivalsSuccess(r));
  } catch (e) {
    dispatch(getNewArrivalsSuccess(e));
  }
};