import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';
import Logo from './Logo';

describe('Header Component', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Header />);
  });

  it('should render logo', () => {
    const logo = wrapper.find(Logo);
    expect(logo.exists()).toBe(true);
  });

  it('should render Favorite', () => {
    const fc = wrapper.find('.favorite-container');
    expect(fc.exists()).toBe(true);
    expect(fc.text()).toBe('Favorites');
  });
});
