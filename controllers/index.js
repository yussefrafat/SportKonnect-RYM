const router = require('express').Router();
const apiRoutes = require('./api/');
const dashboardRoutes = require('./dashboard-routes');
const homepageRoutes = require('./home-routes');
const loginRoutes = require('./login-routes')
const signupRoutes = require('./signup-routes');

router.use('/login', loginRoutes)
router.use('/', homepageRoutes);
router.use('/dashboard', dashboardRoutes);
router.use('/signup', signupRoutes);
// router.use('/api', apiRoutes)

module.exports = router;
