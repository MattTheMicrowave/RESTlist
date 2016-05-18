var express = require('express');
var router = express.Router();
// var SodaModel = require('../models/SodaModel.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express'});
});

module.exports = router;
