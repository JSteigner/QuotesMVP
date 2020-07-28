import React, { Component } from 'react';
import axios from 'axios';
import KanyeButton from './KanyeButton.js';
import createQuote from './CreateQuote.js';
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
      <div>
        <h1>Check out some Kanye West Quotes!</h1>
        <KanyeButton getKanyeQuotes={this.getKanyeQuotes} kanyeQuotes={kanyeQuotes} />
        <br />
        <br />
        <h2>Create your own quote!</h2>
        <CreateQuote createQuote={this.createQuote} />
      </div>
    ); 
  } 
} 

export default App;