// $(document).ready(function() {
  var SodaModel = Backbone.Model.extend ({
      urlRoot: '/sodas',
      idAttribute: '_id',

  });



  var SodasCollection = Backbone.Collection.extend({
      url: '/sodas',
      model: SodaModel
  });

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
              }

      // initialize: function() {
      //     console.log('SodasView initialized!')
      // }

      });

  var sodas = new SodasCollection();

  sodas.fetch({
      success: function() {

          console.log(sodas);

          var sodasView = new SodasView({ collection: sodas });

          sodasView.render();

          $("#sodas-list").html(sodasView.el);
      }
  });

  $('#soda-form').on('submit', function() {
      event.preventDefault();
      var newsoda = new SodaModel;
      newsoda.set({ soda : $('#soda-input').val() });
      newsoda.save();
      sodas.fetch({
      success: function() {
        var sodasView = new SodasView({ collection: sodas });

        sodasView.render();

        $("#sodas-list").html(sodasView.el);
        // $("#sodas-list ul").append("<li>" + newsoda + "</li>");
// using '#sodas-list ul' works but '#sodas-list > ul' does not, why???
      }
      });
});
  // this gives me the object/object result
// });
