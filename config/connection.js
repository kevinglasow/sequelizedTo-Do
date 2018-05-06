// Pull in required dependencies
var mysql = require('mysql');

// Create the MySQL connection object
var connection;
// var jawsdb = "mysql://ksgfvlma83zfcid4:luc7ky66k1s5m867@ocvwlym0zv3tcn68.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/jusuvjvwrmxxsqbx";

if (process.env.JAWSDB_URL) {
	// DB is JawsDB on Heroku
	connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
	// DB is local on localhost
	connection = mysql.createConnection({
		port: 3306,
		host: 'localhost',
		user: 'root',
		password: 'letmein1',
		database: 'todo_db'
	})
};

// Make the connection to MySQL
connection.connect(function(err) {
  if (err) {
    console.error('ERROR: MySQL connection error: ' + err.stack);
    return;
  }
  console.log('Connected to MySQL database as id: ' + connection.threadId);
});

// Export connection for ORM use
module.exports = connection;
