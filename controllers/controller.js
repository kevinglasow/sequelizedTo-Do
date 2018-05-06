// Pull in required dependencies
var express = require('express');
var router = express.Router();

// Import the model (burger.js) to use its database functions.
var checklist = require('../models/checklist.js');

// Create the routes and associated logic
router.get('/', function(req, res) {
  checklist.selectAll(function(data) {
    var hbsObject = {
      checklist: data
    };
    // console.log(hbsObject);
    res.render('index', hbsObject);
  });
});

router.post('/checklist', function(req, res) {
  console.log(req.body);

  checklist.insertOne([
    'task_name'
  ], [
    req.body.task_name
  ], function(data) {
    res.redirect('/');
  });
});

router.put('/checklist/:id', function(req, res) {
  var condition = 'id = ' + req.params.id;

  checklist.updateOne({
    completed: true
  }, condition, function(data) {
    res.redirect('/');
  });
});

// Export routes for server.js to use.
module.exports = router;
