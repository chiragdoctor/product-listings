import React from 'react';
import { mount } from 'enzyme';
import CollectionItem from '../collection-item/CollectionItem';

describe('App Component', () => {
  let wrapper;
  const mockProduct = {
    id: '1',
    date: '2021-02-21T20:17:26.366Z',
    name: 'Arch Blick',
    img: 'https://placeimg.com/640/360/any',
    sold: true,
    price: '584.00',
    brand: 'Practical Steel Cheese',
    description: 'Executive backing up Function-based',
    seller: 'Leonor30',
    size: 'M',
  };
  beforeEach(() => {
    jest.clearAllMocks();
    wrapper = mount(<CollectionItem product={mockProduct} />);
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
});
