const express = require('express');
const apiRouter = express.Router();
const axios = require('axios');

// create a get route to get quotes
apiRouter.get('/', (req, res) => {
  axios.get('https://api.kanye.rest')
    .then(quote => {
      console.log('successful request');
      res.send(quote.data);
    })
    .catch(err => {
      console.error(err, 'request failed');
      res.sendStatus(500);
    });
});


module.exports = {
  apiRouter
}