const router = require('express').Router();
const apiRoutes = require('./apiRoutes')
router.use('/api', apiRoutes)
const homeRoutes = require('./homeRoutes.js') 
router.use('/', homeRoutes)

module.exports = router