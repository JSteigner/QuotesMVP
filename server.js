require('dotenv').config();
const { sequelize } = require('./DB/index');
const express = require('express');
const { apiRouter } = require('./api/apiRoutes');
const cors = require('cors');

const app = express();

// app.use(cors());
app.use(express.json());
app.all('/', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
});

app.use('/api', apiRouter);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`server is listening on ${PORT}`);
});

module.exports = app;