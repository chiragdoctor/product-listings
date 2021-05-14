import { SET_ALL_PRODUCTS } from './product.types';

export const setAllProducts = products => {
  return {
    type: SET_ALL_PRODUCTS,
    products,
  };
};
