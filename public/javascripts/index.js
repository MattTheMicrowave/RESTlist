// $(document).ready(function() {
  var SodaModel = Backbone.Model.extend ({
      urlRoot: '/sodas',
      idAttribute: '_id',

  });

  var SodasCollection = Backbone.Collection.extend({
      url: '/sodas',
      model: SodaModel
  });

var sodasCollection = new SodasCollection();

sodasCollection.fetch({
    /* inputs is a variable that fetch knows what to do with,
    it does this by default, 'this' being grab out of the database,
    so the function grabs out of the database and what it grabs
    gets consolelogged in this instance */
    success: function(inputs) {
        sodasCollection.each(function(inputs) {
            console.log(inputs.get('soda'));
        });

    }
});
// });
