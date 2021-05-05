import { fail, loading, success } from '@/data/utils';

export const CHECKOUT = 'CHECKOUT';
export const CHECKOUT_SUCCESS = success(CHECKOUT);
export const CHECKOUT_FAIL = fail(CHECKOUT);
export const CHECKOUT_LOADING = loading(CHECKOUT);
