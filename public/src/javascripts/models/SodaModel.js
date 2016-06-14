var Backbone = require('backbone');
var SodaModel = Backbone.Model.extend({
    urlRoot: '/sodas',
    idAttribute: '_id'

});

module.exports = SodaModel;
