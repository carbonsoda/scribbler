import jwt from 'express-jwt';
import jwksRsa from 'jwks-rsa';

// eslint-disable-next-line import/extensions
import { domain, audience } from './env.dev.mjs';

const checkJwt = jwt({
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: `https://${domain}/.well-known/jwks.json`,
  }),
  audience,
  issuer: `https://${domain}/`,
  algorithms: ['RS256'],
});

export default checkJwt;
