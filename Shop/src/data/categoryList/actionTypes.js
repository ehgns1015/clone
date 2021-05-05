import { fail, loading, success } from '@/data/utils';

export const GET_CATEGORY_LIST = 'GET_CATEGORY_LIST';
export const GET_CATEGORY_LIST_SUCCESS = success(GET_CATEGORY_LIST);
export const GET_CATEGORY_LIST_FAIL = fail(GET_CATEGORY_LIST);
export const GET_CATEGORY_LIST_LOADING = loading(GET_CATEGORY_LIST);
