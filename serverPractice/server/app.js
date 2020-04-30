var express = require('express');
var cors = require('cors');
var mysql = require('mysql');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());


var connection = mysql.createConnection({
    host: "147.46.215.219",
    user: "luna",
    password: "HCIL4ever",
    database: "testUser_db",
    port: 3306
});

app.post('/users', function (req, res) {
    var user = req.body.user;
    var job = req.body.job;
    const q = "INSERT INTO users (name,job) VALUES ('" + user + "','" + job + "');";
    connection.query(q, (error, result, fields) => {
        if (error) throw error;
        console.log(result);
    });
    console.log("We have added user successfully to the database!")
})

app.listen(5000, function () {
    console.log("Server is listening on port 5000!");
})
