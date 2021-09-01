const router = require('express').Router();

const apiRoutes = require('./api/');
const soccerRoutes = require('./soccer-routes.js');
const dashboardRoutes = require('./dashboard-routes');
const basketballRoutes = require('./basketball-routes.js');
const homepageRoutes = require('./homepage-routes');
const footballRoutes = require('./football-routes');

router.use('/', homepageRoutes);
router.use('/dashboard', dashboardRoutes);
router.use('/soccer', soccerRoutes);
router.use('/basketball', basketballRoutes);
router.use('/football', footballRoutes);
router.use('/api', apiRoutes)

module.exports = router;