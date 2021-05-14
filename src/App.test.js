import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import Header from './components/header/Header';

describe('App Component', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it('should render Header', () => {
    const h1 = wrapper.find(Header);
    expect(h1.exists()).toBe(true);
  });
});
