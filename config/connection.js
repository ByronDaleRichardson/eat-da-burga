var mysql = require('mysql');
var connection;

if(process.env) {
    connection = mysql.createConnection(process.env);
} else{
    connection = mysql.createConnection({
        root: 3000,
        host: 'localhost',
        user: 'root',
        password: '1choraliers2',
        database: 'burgers_db',
    });
};

connection.connect(function(err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }
    console.log('connected as id ' + connection.threadId);
});

module.exports = connection;