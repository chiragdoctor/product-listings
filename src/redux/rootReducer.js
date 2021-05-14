import { combineReducers } from 'redux';

import productReducer from './Product/product.reducer';

const rootReducer = combineReducers({
  products: productReducer,
});

export default rootReducer;
