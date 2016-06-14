var Backbone = require('backbone');
var SodaModel = require('../models/SodaModel.js');

var SodasCollection = Backbone.Collection.extend({
  url: '/sodas',
  model: SodaModel
});

module.exports = SodasCollection;
