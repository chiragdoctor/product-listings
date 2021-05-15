import {
  LIKE_PRODUCT,
  SET_ALL_PRODUCTS,
  UNLIKE_PRODUCT,
} from './product.types';

const INITIAL_STATE = {
  products: [],
  liked: [],
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_ALL_PRODUCTS:
      return {
        ...state,
        products: action.products,
      };
    case LIKE_PRODUCT:
      return {
        ...state,
        liked: [...state.liked, action.product],
      };
    case UNLIKE_PRODUCT:
      return {
        ...state,
        liked: state.liked.filter(p => p.id !== action.product.id),
      };
    default:
      return state;
  }
};

export default reducer;
