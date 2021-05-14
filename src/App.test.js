import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import App from './App';
import Header from './components/header/Header';
import * as products from './services/product';

describe('App Component', () => {
  let wrapper;
  let store;
  let getProductsSpy;
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

  it('should call getProducts on initial render', () => {
    expect(getProductsSpy).toHaveBeenCalled();
  });

  it('should should dispatch setAllProducts on initial render', () => {
    expect(store.dispatch).toHaveBeenCalled();
  });
});
