import React from 'react';

import { shallow } from 'enzyme';

import App from './App';
import Loading from './components/Loading';

it('renders without crashing', () => {
  shallow(<App />);
});

it('renders without crashing', () => {
  shallow(<Loading />);
});

it('renders Loading header', () => {
  const wrapper = shallow(<Loading />);
  const welcome = 'Loading...';
  expect(wrapper.contains(welcome)).toEqual(true);
});
