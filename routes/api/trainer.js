const router = require('express').Router();

router.route('/').get(function (req, res) {
  res.json('allll the trainers!');
});

module.exports = router;
