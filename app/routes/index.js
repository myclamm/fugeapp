var Routes = {}

var Users = require('./user.js')
var Routines = require('./routines.js')

module.exports = function(app,router){ 
  //Adds routes to the express router
  Users(app,router);
  Routines(app,router);
}