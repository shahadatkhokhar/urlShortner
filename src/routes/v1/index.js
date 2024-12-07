const express = require('express');
const urlRoute = require('./url.route');

const router = express.Router();

const defaultRoutes = [
  {
    path: '/url',
    route: urlRoute,
  },
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

module.exports = router;
