// Import MySQL connection.
var connection = require("../config/connection.js");
var orm = {
  all: function(table, cb) {
    var queryString = "SELECT * FROM " + table + ";";
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  create: function(burger, cb) {
    var queryString = "INSERT INTO burger (burger_name, devoured) VALUES ('"  + burger + "', 0)";
    
    console.log(queryString);

    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  update: function(table, devoured, condition, cb) {
    var queryString = "UPDATE " + table + " SET " + devoured + " WHERE burger_name = " + condition;

    console.log(queryString);
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
},
  delete: function(table, condition, cb) {
    var queryString = "DELETE FROM " + table + " WHERE " + condition;
    console.log(queryString);
    connection.query(queryString, function(err, result){
      if (err) {
        throw err;
      }

      cb(result);
    });
  }
};

module.exports = orm;