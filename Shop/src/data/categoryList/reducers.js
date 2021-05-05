import * as AT from '@/data/categoryList/actionTypes';

const categoryInitialState = [];

const category = (state = categoryInitialState, { type, payload }) => {
  switch (type) {
    case AT.GET_CATEGORY_LIST_SUCCESS:
      return payload;
    case AT.GET_CATEGORY_LIST_FAIL:
      return state;
    default:
      return state;
  }
};

export { categoryInitialState, category };
