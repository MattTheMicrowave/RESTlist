window.$ = window.jQuery = require('jquery');
var SodasCollection = require('./collections/SodasCollection.js');
var SodasView = require('./views/SodasView.js');
var FormView = require('./views/FormView.js');
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
