import axios from 'axios';
const PRODUCT_URL =
  'https://5c78274f6810ec00148d0ff1.mockapi.io/api/v1/products';

export const getProducts = () => {
  return axios
    .get(PRODUCT_URL)
    .then(({ data }) => {
      return data;
    })
    .catch(error => {
      throw error;
    });
};
