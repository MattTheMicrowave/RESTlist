var Backbone = require('backbone');
var _ = require('underscore');

var SodasView = Backbone.View.extend({
    el: '<div></div>',

    template:  _.template('\
        <ul>\
            <% sodas.each(function(soda) { %>\
                <li><%= soda.get("soda") %></li>\
            <% }) %>\
        </ul>\
    '),

    render: function() {
      $(this.el).html(this.template({ sodas: this.collection }));

      return this;
    },

    initialize: function() {
      this.listenTo(this.collection, 'update', this.render);
    }

});

module.exports = SodasView;
