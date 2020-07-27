const mysql = require('mysql');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'quotes'
});

connection.connect((err) => {
  if (err) {
    console.log('error connecting to DB');
  }
  console.log('DB connected');
});

module.exports = connection;