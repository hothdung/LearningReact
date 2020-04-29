var express = require("express");
var router = express.Router();
require('dotenv').config();
var mysql = require("mysql");

// set up connection to db
var connection = mysql.createConnection({
    host: process.env.host,
    user: process.env.user,
    password: process.env.password,
    database: process.env.database,
    port: process.env.port
});


router.post("/", function (req, res, next) {
    var user = {
        name: req.body.name,
        job: req.body.name
    };

    connection.query('INSERT INTO users SET ?', user, function (err, result) {
        if (err) throw err;
        res.send("User added successfully to db.");
    });
});

module.exports = router;