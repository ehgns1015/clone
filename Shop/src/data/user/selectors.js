import * as AT from './actionTypes';

export const getUser = (user) => user[AT.LOG_IN];

export const getLoginError = (user) => user.error;

export const getWhoAmI = (user) => user[AT.WHO_AM_I];
