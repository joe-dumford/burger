// Connect Node to MySQL.
var mysql = require('mysql');

var connection;

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        port: 8889,
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'burgers_db'
    })
};

connection.connect(function(err) {
    if (err) {
        console.error('error connecting: ' + err.stack + '\n\n');
        return;
    }
    console.log('Connected to MySql database as id ' + connection.threadId + '\n\n');
});

// Export the connection.
module.exports = connection;
