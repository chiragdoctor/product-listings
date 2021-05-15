import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import CollectionPreview from './CollectionPreview';
import CollectionItem from '../collection-item/CollectionItem';

describe('Collection Preview Component', () => {
  let wrapper;
  let store;
  const mockProducts = [
    {
      id: '1',
      date: '2021-02-21T20:17:26.366Z',
      name: 'Arch Blick',
      img: 'https://placeimg.com/640/360/any',
      sold: true,
    },
    {
      id: '2',
      date: '2021-02-22T06:28:38.305Z',
      name: 'Ms. Fiona Spencer',
      img: 'https://placeimg.com/640/360/any',
      sold: true,
    },
    {
      id: '3',
      date: '2021-02-22T06:48:22.667Z',
      name: 'April Gusikowski',
      img: 'https://placeimg.com/640/360/any',
      sold: true,
    },
    {
      id: '4',
      date: '2021-02-21T20:08:38.075Z',
      name: 'Lindsay McLaughlin',
      img: 'https://placeimg.com/640/360/any',
      sold: false,
    },
  ];
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
    wrapper = mount(
      <Provider store={store}>
        <CollectionPreview />
      </Provider>,
    );
  });

  it('should render component', () => {
    const cp = wrapper.find(CollectionPreview);
    expect(cp.exists()).toBe(true);
  });

  it('should render CollectionItem based on number of products', () => {
    const ci = wrapper.find(CollectionItem);
    expect(ci.exists()).toBe(true);
    expect(ci).toHaveLength(4);
  });
});
