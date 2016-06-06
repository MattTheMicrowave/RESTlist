// $(document).ready(function() {
  // the following extends the backbone model object
  var SodaModel = Backbone.Model.extend ({
      urlRoot: '/sodas',
      idAttribute: '_id',

  });


  // the following extends the backbone collection object
  var SodasCollection = Backbone.Collection.extend({
      url: '/sodas',
      model: SodaModel
  });

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

  var sodas = new SodasCollection();
  var sodasView = new SodasView({ collection: sodas });
  var formView = new FormView({ collection: sodas });


  sodas.fetch({
      success: function() {
          console.log('y');
          sodasView.render();
          formView.render();
          $("#sodas-list").html(sodasView.el);
          $("#soda-form").html(formView.el);
      }
  });

  // this callback is crucial


  // $('#soda-form').on('submit', function() {
  //   event.preventDefault();
  //   var newsoda = new SodaModel;
  //   newsoda.set({ soda : $('#soda-input').val() });
  //   newsoda.save();
  //   sodas.add(newsoda);
  //   $('#soda-input').val(""); // this clears the text box after submit
  // });
    // sodas.fetch();
//       success: function() {
//         var sodasView = new SodasView({ collection: sodas });
//
//         sodasView.render();
//
//         $("#sodas-list").html(sodasView.el);
//         $('#soda-input').val(""); // this clears the text box after submit
//
// // using '#sodas-list ul' works but '#sodas-list > ul' does not, why???
//       }
//       });
// });
  // this gives me the object/object result and clears the text box
  // after submission
// });
