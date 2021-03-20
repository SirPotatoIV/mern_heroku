const router = require('express').Router();

const trainerRoutes = require('./trainer');
const pokemonRoutes = require('./pokemon');

router.use('/trainer', trainerRoutes);
router.use('/pokemon', pokemonRoutes);

module.exports = router;
