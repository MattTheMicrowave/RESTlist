var SodaModel = require('../models/SodaModel.js');

/**
* TaskController.js
*
* @description :: Server-side logic for managing tasks.
*/

module.exports = {

/**
* SodaController.list()
*/
list: function (req, res) {
  SodaModel.find(function (err, sodas) {
    return res.json(sodas);
  });
},

/**
 * TaskController.show()
 */

 show: function (req, res) {
   var id = req.params.id;
   SodaModel.findOne({_id: id}, function (err, soda) {
    return res.json(soda);
   });
   },
   /**
     * TaskController.create()
     */
create: function (req, res) {
  var soda = new SodaModel({
        soda : req.body.soda,
        quant : req.body.quant
  });
  soda.save(function (err, soda) {
      return res.json(soda);
  });
},

/**
  * TaskController.update()
  */

  update: function (req, res) {
    var id = req.params.id;
    SodaModel.findOne({_id: id}, function (err, soda) {
          soda.soda = req.body.soda ? req.body.soda : soda.soda;
          soda.quant = req.body.quant ? req.body.quant : soda.quant;
          soda.save(function (err, soda) {
            return res.json(soda);
          });


    });


  },

  /**
    * TaskController.remove()
    */

    remove: function (req, res) {
        var id = req.params.id;
        SodaModel.findByIdAndRemove(id, function (err, soda) {
          return res.json(soda);
        });
    }
};
