const { connection } = require('./index');

const postQuote = (quote) => {
  return connection.query(`insert into quote (quote) values ('${quote}')`);
};



module.exports = {
  postQuote
};