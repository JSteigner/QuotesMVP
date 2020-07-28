require('dotenv').config();
const { db } = require('./DB/index');
const express = require('express');
const { apiRouter } = require('./api/apiRoutes');

const app = express();

app.use(express.json());
app.use('/api', apiRouter);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`server is listening on ${PORT}`);
});