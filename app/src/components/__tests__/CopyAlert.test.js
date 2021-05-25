import React from 'react';

import { shallow } from 'enzyme';

import CopyAlert from '../CopyAlert';

describe('<CopyAlert />', () => {
  describe('without props', () => {
    it('Renders without crashing', async () => {
      const wrapper = shallow(<CopyAlert />);
      expect(wrapper).toBeTruthy();
    });
  });

  describe('with props', () => {
    it('Renders without crashing', async () => {
      const wrapper = shallow(<CopyAlert urlCopied />);
      expect(wrapper).toBeTruthy();
    });

    it('Renders success text', async () => {
      const wrapper = shallow(<CopyAlert urlCopied />);
      expect(wrapper.text()).toContain('Scribble link copied to clipboard!');
    });

    it('Renders no text otherwise', async () => {
      const wrapper = shallow(<CopyAlert urlCopied={false} />);
      expect(wrapper.text()).toContain('');
    });
  });
});
