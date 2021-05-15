import {
  LIKE_PRODUCT,
  SET_ALL_PRODUCTS,
  SET_FILTERED_PRODUCTS,
  TOGGLE_FAVORITE_DROPDOWN,
  UNLIKE_PRODUCT,
} from './product.types';

const INITIAL_STATE = {
  products: [],
  filteredProducts: [],
  liked: [],
  hidden: true,
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_ALL_PRODUCTS:
      return {
        ...state,
        products: action.products,
      };
    case SET_FILTERED_PRODUCTS:
      return {
        ...state,
        filteredProducts: action.products,
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
    case TOGGLE_FAVORITE_DROPDOWN:
      return {
        ...state,
        hidden: !state.hidden,
      };
    default:
      return state;
  }
};

export default reducer;
