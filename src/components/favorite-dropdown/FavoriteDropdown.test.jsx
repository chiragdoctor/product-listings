import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import productList from '../../data/products.json';
import FavoriteDropdown from './FavoriteDropdown';

describe('Favorite Dropdown Component', () => {
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
        <FavoriteDropdown />
      </Provider>,
    );
  });

  it('should render component', () => {
    const fd = wrapper.find(FavoriteDropdown);
    expect(fd.exists()).toBe(true);
  });

  it('should render three favorite items', () => {
    const items = wrapper.find('.fav-item-list');
    expect(items.exists()).toBe(true);
    expect(items).toHaveLength(3);
  });

  it('should dispatch UNLIKE action on click of button', () => {
    const removeBtn = wrapper.find('button').first();
    removeBtn.props().onClick();
    expect(store.dispatch).toHaveBeenCalledWith({
      type: 'UNLIKE_PRODUCT',
      product: mockProducts[0],
    });
  });
});
