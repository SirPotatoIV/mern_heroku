const router = require('express').Router();

router.use('/').get(function (res, req) {
  res.send('allll the trainers!');
});
