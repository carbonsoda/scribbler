import React from 'react';

import { shallow } from 'enzyme';

import Loading from '../Loading';

describe('<Loading />', () => {
  it('renders without crashing', () => {
    shallow(<Loading />);
  });

  it('renders Loading test', () => {
    const wrapper = shallow(<Loading />);
    const welcome = 'Loading...';
    expect(wrapper.contains(welcome)).toEqual(true);
  });
});
