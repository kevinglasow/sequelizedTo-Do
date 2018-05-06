// Import the ORM to implement functions that will interact with the database
var orm = require('../config/orm.js');

// Create the burger object
var checklist = {
  // Select all burger table entries
  selectAll: function(ct) {
    orm.selectAll('checklist', function(res) {
      ct(res);
    });
  },

  // The variables cols and vals are arrays
  insertOne: function(cols, vals, ct) {
    orm.insertOne('checklist', cols, vals, function(res) {
      ct(res);
    });
  },

  // The objColVals is an object specifying columns as object keys with associated values
  updateOne: function(objColVals, condition, ct) {
    orm.updateOne('checklist', objColVals, condition, function(res) {
      ct(res);
    });
  }
};

// Export the database functions for the controller
module.exports = checklist
