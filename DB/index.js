// const mysql = require('mysql');
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
  'quotes',
  'root',
  '',
  {
    host: 'localhost',
    dialect: 'mysql',
  }
);

const Quote = sequelize.define('Quote', {
  username: Sequelize.STRING,
  quote: Sequelize.STRING,
});

Quote.sync().then(() => {
  console.log('Quote table was created');
});

// const db = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: '',
//   database: 'quotes'
// });

// db.connect((err) => {
//   if (err) {
//     console.log('error connecting to DB');
//   }
//   console.log('DB connected');
// });

module.exports = {
  sequelize,
  Quote
};