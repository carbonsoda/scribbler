import React from 'react';

import { useAuth0 } from '@auth0/auth0-react';
import { mount } from 'enzyme';

import VerifyEmail from '../VerifyEmail';

// create a dummy user profile
const user = {
  email: 'johndoe@me.com',
  email_verified: true,
  sub: 'google-oauth2|2147627834623744883746',
};

const verifyMsg = 'Verify your email to keep track of your shared scribbles';

jest.mock('@auth0/auth0-react');

describe('<VerifyEmail />', () => {
  describe('with a verified email', () => {
    beforeEach(() => {
      // Mock the Auth0 hook and make it return a logged in state
      useAuth0.mockReturnValue({
        isAuthenticated: true,
        user,
        logout: jest.fn(),
        loginWithRedirect: jest.fn(),
      });
    });

    it('Renders without crashing', async () => {
      const wrapper = mount(<VerifyEmail />);
      expect(wrapper).toBeTruthy();
    });

    it('Renders with empty content', async () => {
      const wrapper = mount(<VerifyEmail />);
      expect(wrapper.text()).not.toContain(verifyMsg);
    });
  });

  describe('with an unverified email', () => {
    beforeEach(() => {
      user.email_verified = false;
      // Mock the Auth0 hook and make it return a logged in state
      useAuth0.mockReturnValue({
        isAuthenticated: false,
        user,
        logout: jest.fn(),
        loginWithRedirect: jest.fn(),
      });
    });

    it('Renders without crashing', async () => {
      const wrapper = mount(<VerifyEmail />);
      expect(wrapper).toBeTruthy();
    });

    it('Renders with Alert content', async () => {
      const wrapper = mount(<VerifyEmail />);
      expect(wrapper.text()).toContain(verifyMsg);
    });
  });
});
