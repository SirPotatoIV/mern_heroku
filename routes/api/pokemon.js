const router = require('express').Router();
const db = require('../../models');

router
  .route('/')
  .get(async function (req, res) {
    const data = await db.Pokemon.find({});
    res.json(data);
  })
  .post(async function (req, res) {
    const data = await db.Pokemon.create(req.body);
    res.json(data);
  });

module.exports = router;
