const express = require('express');
const apiRouter = express.Router();
const axios = require('axios');
const { postQuote } = require('../DB/dbApiHelpers');

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

// create post route to create quotes/jokes
apiRouter.post('/', (req, res) => {
  console.log('post');
  postQuote(`ohhhh yeah`);
  res.send('post');
});

// create put route to update quote
apiRouter.put('/:id', (req, res) => {
  console.log('put');
  res.send('put');
});

// create delete route to remove quote
apiRouter.delete('/:id', (req, res) => {

});


module.exports = {
  apiRouter
};