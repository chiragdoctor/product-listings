import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import FavoritePreview from '../favorite-preview/FavoritePreview';
import productList from '../../data/products.json';
import { ReactComponent as ThumbsUpIcon } from '../../assets/thumbs-up.svg';

describe('Favorite Preview Component', () => {
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
        <FavoritePreview />
      </Provider>,
    );
  });

  it('should render component', () => {
    const fp = wrapper.find(FavoritePreview);
    expect(fp.exists()).toBe(true);
  });

  it('should dispatch toggleFavoriteDropdown on click of icon', () => {
    const container = wrapper.find('.fav-icon-container');
    expect(container.exists()).toBe(true);
    container.props().onClick();
    expect(store.dispatch).toHaveBeenCalledWith({
      type: 'TOGGLE_FAVORITE_DROPDOWN',
    });
  });

  it('should render ThumbsUp icon', () => {
    const icon = wrapper.find(ThumbsUpIcon);
    expect(icon.exists()).toBe(true);
  });
});
