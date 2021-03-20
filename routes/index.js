const router = require('express').Router();
const apiRoutes = require('./api/index');
const path = require('path');

// // Define API routes here
router.use('/api', apiRoutes);

// Send every other request to the React app
// Define any API routes before this runs
router.use((req, res) => {
  res.sendFile(path.join(__dirname, './client/build/index.html'));
});

module.exports = router;
