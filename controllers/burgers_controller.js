// Dependencies
var express = require('express');
var router = express.Router();
// Import the model to use its db functions for burger.js
var burger = require('../models/burger.js');
// Create the router for the app, and export the router at the end of your file.

// Create routes.
router.get('/', function (req, res) {
    burger.selectAll(function (data) {
        var hbsObject = {
            burgers: data
        };
        // console.log(hbsObject);
        res.render('index', hbsObject);
    });
});

router.post('/burgers', function (req, res) {
    burger.insertOne([
        'burger_name'
    ], [
        req.body.burger_name
    ], function (data) {
        res.redirect('/');
    });
});

router.put('/burgers/:id', function (req, res) {
    var condition = 'id = ' + req.params.id;

    burger.updateOne({
        devoured: true
    }, condition, function (data) {
        res.redirect('/');
    });
});

// Export routes for server.js to use.
module.exports = router;