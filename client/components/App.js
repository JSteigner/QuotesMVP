import React, { Component } from 'react';
import axios from 'axios';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import KanyeAndCreateQuote from './KanyeAndCreateQuote';
import KanyeButton from './KanyeButton.js';
import CreateQuote from './CreateQuote.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      kanyeQuotes: ''
    };
    
    this.getKanyeQuotes = this.getKanyeQuotes.bind(this);
  };

  getKanyeQuotes() {
    // console.log('clicked');
      axios.get('http://localhost:3000/api/', {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
     }
    )
      .then(quotes => {
        console.log(quotes);
        this.setState({kanyeQuotes: quotes.data.quote});
      })
      .catch(err => console.error(err));
  }

  createQuote(username, quote) {
    return axios.post('http://localhost:3000/api/', {username, quote}, {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
    })
  }
  
  render() {
    const { kanyeQuotes } = this.state;
    return (
      <main>
        {/* <Switch> */}
          <KanyeAndCreateQuote getKanyeQuotes={this.getKanyeQuotes} kanyeQuotes={kanyeQuotes} createQuote={this.createQuote} />
          {/* <KanyeButton getKanyeQuotes={this.getKanyeQuotes} kanyeQuotes={kanyeQuotes} />
          <br />
          <br />
          <CreateQuote createQuote={this.createQuote} /> */}
        {/* </Switch> */}
      </main>
    ); 
  } 
} 

export default App;