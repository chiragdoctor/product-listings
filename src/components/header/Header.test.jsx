import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import Header from './Header';
import Logo from './Logo';
import FavoritePreview from '../favorite-preview/FavoritePreview';
import productList from '../../data/products.json';
import FavoriteDropdown from '../favorite-dropdown/FavoriteDropdown';

describe('Header Component', () => {
  let wrapper;
  let store;
  const mockProducts = [productList[0], productList[1], productList[2]];
  let initialState = {
    products: {
      products: mockProducts,
      liked: mockProducts,
      hidden: true,
    },
  };
  const mockStore = configureStore([thunk]);
  store = mockStore(initialState);
  store.dispatch = jest.fn();
  beforeEach(() => {
    wrapper = mount(
      <Provider store={store}>
        <Header />
      </Provider>,
    );
  });

  it('should render logo', () => {
    const logo = wrapper.find(Logo);
    expect(logo.exists()).toBe(true);
  });

  it('should render Favorite', () => {
    const fc = wrapper.find(FavoritePreview);
    expect(fc.exists()).toBe(true);
  });

  it('should not render FavoriteDropdown component if hidden is true', () => {
    const fd = wrapper.find(FavoriteDropdown);
    expect(fd.exists()).toBe(false);
  });

  it('should not render FavoriteDropdown component if hidden is false', () => {
    initialState.products.hidden = false;
    const fd = wrapper.find(FavoriteDropdown);
    expect(fd.exists()).toBe(false);
  });
});
