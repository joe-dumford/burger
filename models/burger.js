var orm = require('../config/orm.js');


//Create Burger Object
var burger = {
    //Select all burger table entries
    selectAll: function (cb) {
        orm.selectAll('burgers', function (res) {
            cb(res);
        });
    },

    //The vars columns and values are arrays
    insertOne: function (cols, vals, cb) {
        orm.insertOne('burgers', cols, vals, function (res) {
            cb(res);
        });
    },

    //objColVals is an object specifying columns as object keys w/ associated values
    updateOne: function (objColVals, condition, cb) {
        orm.updateOne('burgers', objColVals, condition, function (res) {
            cb(res);
        });
    }
};

//Export db functions for the controller
module.exports = burger;