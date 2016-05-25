// $(document).ready(function() {
  var SodaModel = Backbone.Model.extend ({
      urlRoot: '/sodas',
      idAttribute: '_id'
  });

  var SodasCollection = Backbone.Collection.extend({
      url: '/sodas',
      model: SodaModel
  });


// });
