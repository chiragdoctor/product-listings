import {
  LIKE_PRODUCT,
  SET_ALL_PRODUCTS,
  UNLIKE_PRODUCT,
} from './product.types';

export const setAllProducts = products => {
  return {
    type: SET_ALL_PRODUCTS,
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
