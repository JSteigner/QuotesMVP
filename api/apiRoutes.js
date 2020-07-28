const { Router } = require('express');
const apiRouter = Router();
const axios = require('axios');
const { Quote } = require('../DB');
const cors = require('cors');

// create a get route to get quotes
apiRouter.get('/', cors(), (req, res) => {
  console.log('hiii');
  return axios.get('https://api.kanye.rest', {
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
  })
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
  const { username, quote } = req.body;

  Quote.create({ username: 'homeboy', quote: `its all good`})
    .then(newQuote => {
      console.log('quote was created');
      res.status(201).send(newQuote);
    })
    .catch(err => {
      console.error(err, 'quote was not created');
    });
});

// create put route to update quote
apiRouter.put('/:id', (req, res) => {
 
  const { id } = req.params;
  const { quote } = req.body;

  Quote.findById(id)
    .then(foundQuote => {
      if (foundQuote) {
        return Quote.update({quote}, {where: { id: id }})
          .then(() => {
            console.log('quote was updated');
            res.send('quote was updated');
            return;
          })
          .catch(err => {
            console.error(err, 'failed to update');
            res.sendStatus(500);
          });
      }
      console.log('quote does not exist');
      res.sendStatus(404);
    })
    .catch(err => {
      console.error(err, 'failed to process request');
      res.sendStatus(500);
    });
});

// create delete route to remove quote
apiRouter.delete('/:id', (req, res) => {
  const { id } = req.params;

  Quote.findById(id)
    .then(foundQuote => {
      if (foundQuote) {
        return Quote.destroy({where: {id}})
          .then(() => {
            console.log('quote was deleted');
            res.send('quote was deleted');
            return;
          })
          .catch(err => {
            console.error(err, 'there was an error while deleting quote');
            res.sendStatus(500);
          });  
      }
      console.log('quote does not exist');
      res.sendStatus(404);
    })
    .catch(err => {
      console.error(err, 'there was an error processing the request');
      res.sendStatus(500);
    });
});

module.exports = {
  apiRouter
};