import { SET_ALL_PRODUCTS } from './product.types';

const INITIAL_STATE = {
  products: [],
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_ALL_PRODUCTS:
      return {
        ...state,
        products: action.products,
      };
    default:
      return state;
  }
};

export default reducer;
