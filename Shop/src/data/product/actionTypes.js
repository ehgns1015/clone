import { fail, loading, success } from '@/data/utils';

export const GET_PRODUCT_DETAIL = 'GET_PRODUCT_DETAIL';
export const GET_PRODUCT_DETAIL_SUCCESS = success(GET_PRODUCT_DETAIL);
export const GET_PRODUCT_DETAIL_FAIL = fail(GET_PRODUCT_DETAIL);
export const GET_PRODUCT_DETAIL_LOADING = loading(GET_PRODUCT_DETAIL);
