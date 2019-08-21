// require mysql
var mysql = require('mysql');
//config
var config = {
    port: 3306,
    host: "localhost",
    user: "root",
    password: "pass33",
    database: "burgers_db"
}
//create connection
var connection = mysql.createConnection(config);

connection.connect(function (err) {
    console.log("connect to db ")
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }
    console.log('connected as id ' + connection.threadId);
});
//exports connection
module.exports = connection