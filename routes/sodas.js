var express = require('express');
var router = express.Router();
var SodaModel = require('../models/SodaModel.js');
/*
* GET
*/
router.get('/', function (req, res) {
SodaModel.find(function(err, sodas) {
    return res.json(sodas);
});
});

/*
* GET
*/
router.get('/:id', function (req, res) {
  var id = req.params.id;
  SodaModel.findOne({_id: id}, function(err, soda)
{
  return res.json(soda);
});
});

/*
* POST
*/
router.post('/', function (req, res) {
  // create a new TaskModel
  var soda = new SodaModel({
    // here we grab the text attribute from the request body
        soda : req.body.soda
  });

  // save the task model to the database
  soda.save(function (err, soda) {
    // since this command is asyncronous, we have to put the return in a callback
    return res.json(soda);
  });
});

/*
* PUT
*/
router.put('/:id', function (req, res) {
var id = req.params.id;
SodaModel.findOne({_id: id}, function(err, soda) {
  soda.soda = req.body.soda ? req.body.soda : soda.soda;

  soda.save(function(err, soda){
    return res.json(soda);
  });
});
});

/*
* DELETE
*/
router.delete('/:id', function (req, res) {
var id = req.params.id;
SodaModel.findByIdAndRemove(id, function(err, soda){
return res.json(soda);
});
});

module.exports = router;
