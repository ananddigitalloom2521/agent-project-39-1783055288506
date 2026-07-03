const express = require('express');
const router = express.Router();
const indexModel = require('../models/index');
router.get('/', (req, res) => {
  const data = indexModel.getData();
  res.render('index', data);
});
module.exports = router;