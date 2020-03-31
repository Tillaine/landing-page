const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'cars',
});

connection.connect(err => {
  if (err) {
    console.error('Error connecting: ', err.stack);
    return;
  }
  console.log('connected as ID: ', connection.threadId);
});

module.exports = connection;
