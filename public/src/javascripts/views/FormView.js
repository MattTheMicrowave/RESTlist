var Backbone = require('backbone');
var SodaModel = require('../models/SodaModel');

var FormView = Backbone.View.extend({
  el: '<form method="POST" action="/sodas">\
        <input id="soda-input" type="text" name="soda">\
        <input type="submit" value="Submit">\
      </form>\
      ',

  render: function() {
    // $(this.el).html('#soda-form');
    this.listenTo(this.el, 'submit', function(event) {
        event.preventDefault();
    });
    return this;

  },

  events: {
      'submit' : 'stopForm'
  },

  stopForm: function (event) {
      event.preventDefault();
      var newsoda = new SodaModel;
      newsoda.set({ soda : $('#soda-input').val() });
      newsoda.save();
      this.collection.add(newsoda);
      $('#soda-input').val("");
  }



});

module.exports = FormView;
