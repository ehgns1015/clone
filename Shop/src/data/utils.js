// import { selectApiLoadingStatus } from '@/data/loading/selectors';

export const loading = (action) => `${action}_LOADING`;

export const fail = (action) => `${action}_FAIL`;

export const success = (action) => `${action}_SUCCESS`;

export const notAsked = (action) => `${action}_NOT_ASKED`;

// export const createLoadingSelector = (actions) => (state) =>
//   actions.some((action) => selectApiLoadingStatus(state)[action]);
