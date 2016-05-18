var express = require('express');
var router = express.Router();
var SodaModel = require('../models/SodaModel.js');
/*
* GET
*/
router.get('/', function (req, res) {
    SodaController.list(req, res);
});

/*
* GET
*/
router.get('/:id', function (req, res) {
  SodaController.show(req, res);
});

/*
* POST
*/
router.post('/', function (req, res) {
  SodaController.create(req, res);
  });

  /*
* PUT
*/
router.put('/:id', function (req, res) {
    SodaController.update(req, res);
});

/*
* DELETE
*/
router.delete('/:id', function (req, res) {
    SodaController.remove(req, res);
});

module.exports = router;
