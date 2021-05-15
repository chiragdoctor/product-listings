import {
  LIKE_PRODUCT,
  SET_ALL_PRODUCTS,
  UNLIKE_PRODUCT,
  TOGGLE_FAVORITE_DROPDOWN,
  SET_FILTERED_PRODUCTS,
} from './product.types';

export const setAllProducts = products => {
  return {
    type: SET_ALL_PRODUCTS,
    products,
  };
};

export const setFilteredProducts = products => {
  return {
    type: SET_FILTERED_PRODUCTS,
    products,
  };
};

export const likeProduct = product => {
  return {
    type: LIKE_PRODUCT,
    product,
  };
};

export const unlikeProduct = product => {
  return {
    type: UNLIKE_PRODUCT,
    product,
  };
};

export const toggleFavoriteDropdown = () => {
  return {
    type: TOGGLE_FAVORITE_DROPDOWN,
  };
};
