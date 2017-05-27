// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burger = {
  all: function(cb) {
    orm.all("burger", function(res) {
      cb(res);
    });
  },
  create: function(burger, devoured, cb) {
    orm.create(burger, devoured, function(res) {
      cb(res);
    });
  },
  update: function(devoured, condition, cb) {
    orm.update("burger", devoured, condition, function(res) {
      cb(res);
    });
  },
  delete: function(condition, cb) {
    orm.delete("burger", condition, function(res) {
      cb(res);
    });
  }
}
// Export the database functions for the controller (catsController.js).
module.exports = burger;