const express = require('express');
const authRoute = require('./auth.route');
const userRoute = require('./user.route');
const cybersecurityRoute = require('./cybersecurity.route');
const stripeRoute = require('./stripe.route');
const teamRoute = require('./team.route');
const docsRoute = require('./docs.route');
const config = require('../../config/config');


const router = express.Router();

const defaultRoutes = [
  {
    path: '/cs',
    route: cybersecurityRoute,
  },
  {
    path: '/auth',
    route: authRoute,
  },
  {
    path: '/users',
    route: userRoute,
  },
  {
    path: '/stripe',
    route: stripeRoute,
  },
  {
    path: '/team',
    route: teamRoute,
  }
];

const devRoutes = [
  // routes available only in development mode
  {
    path: '/docs',
    route: docsRoute,
  },
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

/* istanbul ignore next */
if (config.env === 'development') {
  devRoutes.forEach((route) => {
    router.use(route.path, route.route);
  });
}

module.exports = router;
