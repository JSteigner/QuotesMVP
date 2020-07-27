require('dotenv').config();
const { db } = require('./DB/index');
const express = require('express');
const app = express();

const PORT = 8080;

app.get('/', (req, res) => res.sendFile(`${__dirname}/index.html`));

app.listen(PORT, () => {
  console.log(`server is listening on ${PORT}`)
});