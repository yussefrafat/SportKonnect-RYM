const router = require('express').Router();

// const apiRoutes = require('./api/');
const homeRoutes = require('./home-routes.js');
const dash = require('./dashboard-routes.js')

router.use('/', homeRoutes);
router.use('/dashboard', dash);
// router.use('/api', apiRoutes);

module.exports = router;
