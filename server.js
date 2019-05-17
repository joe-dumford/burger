var express = require("express");
var mysql = require("mysql");

var app = express();


var connection = mysql.createConnection({
    host: "localhost",
    port: "8889",
    user: 3306,
    user: "root",
    password: "root",
    database: "burgers_db"
});