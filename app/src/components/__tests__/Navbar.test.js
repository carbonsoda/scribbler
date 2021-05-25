import React from 'react';

import { shallow } from 'enzyme';

import Navbar from '../Navbar';

describe('<Navbar />', () => {
  it('Renders without crashing', async () => {
    const wrapper = shallow(<Navbar />);
    expect(wrapper).toBeTruthy();
  });

  it('Renders title', async () => {
    const wrapper = shallow(<Navbar />);
    expect(wrapper.text()).toContain('Scribbler');
  });

  it('Renders two children', async () => {
    const wrapper = shallow(<Navbar />);
    expect(wrapper.find('nav').children()).toHaveLength(2);
  });
});
