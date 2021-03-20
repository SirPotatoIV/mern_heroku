const router = require('express').Router();
const trainerRoutes = require('./trainer');

router('/trainer', trainerRoutes);

module.exports = router;
