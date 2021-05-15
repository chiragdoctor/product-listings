import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import CollectionItem from '../collection-item/CollectionItem';
import products from '../../data/products.json';
import { act } from 'react-dom/test-utils';
describe('Collection Item Component', () => {
  let wrapper;
  let store;
  const mockProducts = [products[0], products[1], products[2]];
  const mockLiked = [products[0]];
  let initialState = {
    products: {
      products: mockProducts,
      liked: mockLiked,
    },
  };
  const mockProduct = products[0];
  const mockStore = configureStore([thunk]);
  store = mockStore(initialState);
  store.dispatch = jest.fn();
  beforeEach(() => {
    jest.clearAllMocks();
    wrapper = mount(
      <Provider store={store}>
        <CollectionItem product={mockProduct} />
      </Provider>,
    );
  });

  it('should render component', () => {
    const ci = wrapper.find(CollectionItem);
    expect(ci.exists()).toBe(true);
  });

  it('should render img of product', () => {
    const img = wrapper.find('.image');
    expect(img.exists()).toBe(true);
  });

  it('should render name of product', () => {
    const name = wrapper.find('.desc').first();
    expect(name.exists()).toBe(true);
    expect(name.text()).toEqual(mockProduct.name);
  });

  it('should render brand of product', () => {
    const brand = wrapper.find('.desc').at(1);
    expect(brand.exists()).toBe(true);
    expect(brand.text()).toEqual(mockProduct.brand);
  });

  it('should render size of product', () => {
    const size = wrapper.find('.desc').at(2);
    expect(size.exists()).toBe(true);
    expect(size.text()).toEqual(mockProduct.size);
  });

  it('should render price of product with "$" sign', () => {
    const price = wrapper.find('.price');
    expect(price.exists()).toBe(true);
    expect(price.text()).toEqual(`$${mockProduct.price}`);
  });

  it('should render product as liked', () => {
    const container = wrapper.find('.thumbs-up-container');
    expect(container.props().className).toBe(
      'thumbs-up-container container-red',
    );
  });

  it('should dispatch UNLINK action when thumbs up button is clicked', () => {
    const container = wrapper.find('.thumbs-up-container');
    container.props().onClick(mockProduct);
    expect(store.dispatch).toHaveBeenCalledWith({
      type: 'UNLIKE_PRODUCT',
      product: mockProduct,
    });
  });

  it('should dispatch LIKE action when thumbs up button is clicked and there are no liked products in the list', async () => {
    let initialState = {
      products: {
        products: mockProducts,
        liked: [],
      },
    };
    const mockProduct = products[0];
    const mockStore = configureStore([thunk]);
    store = mockStore(initialState);
    store.dispatch = jest.fn();
    wrapper = mount(
      <Provider store={store}>
        <CollectionItem product={mockProduct} />
      </Provider>,
    );
    const container = wrapper.find('.thumbs-up-container');
    container.props().onClick(mockProduct);
    expect(store.dispatch).toHaveBeenCalledWith({
      type: 'LIKE_PRODUCT',
      product: mockProduct,
    });
  });
});
