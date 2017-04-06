var mysql = require('mysql');
var connection = mysql.createConnection({
    host     : 'us-cdbr-iron-east-03.cleardb.net',
    user     : 'beae2059bf3c81',
    password : '23b497bc',
    database : 'heroku_1eae2da06330d06'
});

/*if(process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else{
    connection = mysql.createConnection({
        root: 3000,
        host: 'localhost',
        user: 'root',
        password: '1choraliers2',
        database: 'burgers_db',
    });
};*/

connection.connect(function(err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }
    console.log('connected as id ' + connection.threadId);
});

module.exports = connection;

/*mysql://beae2059bf3c81:23b497bc@us-cdbr-iron-east-03.cleardb.net/
heroku_1eae2da06330d06?reconnect=true

var connection = mysql.createConnection({
  host     : 'us-cdbr-iron-east-03.cleardb.net',
  user     : 'beae2059bf3c81',
  password : '23b497bc',
  database : 'heroku_1eae2da06330d06'
});*/