const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = (phase) => {
  switch (phase) {
    case PHASE_DEVELOPMENT_SERVER:
      return {
        // environment varibales for local development
        env: {
          IDP_DOMAIN: process.env.DEV_IDP_DOMAIN,
          USER_POOL_ID: process.env.DEV_USER_POOL_ID,
          USER_POOL_CLIENT_ID: process.env.DEV_USER_POOL_CLIENT_ID,
          REDIRECT_SIGN_IN: "http://localhost:3000/token",
          REDIRECT_SIGN_OUT: "http://localhost:3000/",
          AUTH_COOKIE_DOMAIN: "localhost",
        },
      };
    default:
      return {
        // environment varibales for production
        env: {
          IDP_DOMAIN: process.env.PROD_IDP_DOMAIN,
          USER_POOL_ID: process.env.PROD_USER_POOL_ID,
          USER_POOL_CLIENT_ID: process.env.PROD_USER_POOL_CLIENT_ID,
          REDIRECT_SIGN_IN: "https://upwork-proposal-brooklyn-ny.vercel.app/token",
          REDIRECT_SIGN_OUT: "https://upwork-proposal-brooklyn-ny.vercel.app",
          AUTH_COOKIE_DOMAIN: "https://upwork-proposal-brooklyn-ny.vercel.app",
        },
      };
  }
};