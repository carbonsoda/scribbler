import React from 'react';

import { useAuth0 } from '@auth0/auth0-react';
import { shallow } from 'enzyme';

import App from './App';

jest.mock('@auth0/auth0-react');

describe('<App />', () => {
  describe('while loading', () => {
    beforeEach(() => {
      useAuth0.mockReturnValue({
        isLoading: true,
        logout: jest.fn(),
        loginWithRedirect: jest.fn(),
      });
    });
    it('Renders without crashing', () => {
      const wrapper = shallow(<App />);
      expect(wrapper).toBeTruthy();
    });
    it('Has only one child', () => {
      const wrapper = shallow(<App />);
      expect(wrapper.children()).toHaveLength(1);
    });
    it('Has just <Loading /> as child', () => {
      const wrapper = shallow(<App />);
      expect(wrapper.find('Loading')).toHaveLength(1);
    });
  });
  describe('when loaded', () => {
    beforeEach(() => {
      useAuth0.mockReturnValue({
        isLoading: false,
        logout: jest.fn(),
        loginWithRedirect: jest.fn(),
      });
    });
    it('Renders without crashing', () => {
      const wrapper = shallow(<App />);
      expect(wrapper).toBeTruthy();
    });
    it('<Loading /> is not a child', () => {
      const wrapper = shallow(<App />);
      expect(wrapper.find('Loading')).toHaveLength(0);
    });
    it('Has a header tag', () => {
      const wrapper = shallow(<App />);
      expect(wrapper.find('header')).toHaveLength(1);
    });
    it('Has a main tag', () => {
      const wrapper = shallow(<App />);
      expect(wrapper.find('main')).toHaveLength(1);
    });
  });
});
