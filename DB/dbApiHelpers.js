const { db } = require('./index');

const postQuote = (quote) => {
  return db.query(`insert into quote (quote) values ('${quote}')`);
};



module.exports = {
  postQuote
};