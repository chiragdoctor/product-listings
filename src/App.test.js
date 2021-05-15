import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import App from './App';
import Header from './components/header/Header';
import * as products from './services/product';
import CollectionPreview from './components/collection-preview/CollectionPreview';
import productList from './data/products.json';

describe('App Component', () => {
  let wrapper;
  let store;
  let getProductsSpy;
  const mockProducts = [productList[0], productList[1], productList[2]];
  let initialState = {
    products: {
      products: mockProducts,
      liked: mockProducts,
    },
  };
  const mockStore = configureStore([thunk]);
  store = mockStore(initialState);
  store.dispatch = jest.fn();
  beforeEach(() => {
    jest.clearAllMocks();
    getProductsSpy = jest
      .spyOn(products, 'getProducts')
      .mockReturnValue(Promise.resolve(mockProducts));
    wrapper = mount(
      <Provider store={store}>
        <App />
      </Provider>,
    );
  });

  it('should render Header', () => {
    const header = wrapper.find(Header);
    expect(header.exists()).toBe(true);
  });

  it('should render CollectionPreview component', () => {
    const cp = wrapper.find(CollectionPreview);
    expect(cp.exists()).toBe(true);
  });

  it.skip('should call getProducts on initial render', () => {
    expect(getProductsSpy).toHaveBeenCalled();
  });

  it('should should dispatch setAllProducts on initial render', () => {
    expect(store.dispatch).toHaveBeenCalled();
  });
});
