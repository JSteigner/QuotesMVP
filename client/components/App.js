import React, { Component } from 'react';
import axios from 'axios';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import KanyeAndCreateQuote from './KanyeAndCreateQuote';
import ShowUserQuotesList from './ShowUserQuotesList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      kanyeQuotes: '',
      userQuotes:[]
    };
    
    this.getKanyeQuotes = this.getKanyeQuotes.bind(this);
    this.getUserQuotes = this.getUserQuotes.bind(this);
    this.deleteQuote = this.deleteQuote.bind(this);
  };

  getKanyeQuotes() {
    // console.log('clicked');
      axios.get('http://localhost:3000/api/'
      // headers: {
      //   'Content-Type': 'application/json',
      //   'Access-Control-Allow-Origin': '*',
      // },
     )
      .then(quotes => {
        this.setState({kanyeQuotes: quotes.data.quote});
      })
      .catch(err => console.error(err));
  }

  getUserQuotes() {
    axios.get('http://localhost:3000/api/userquotes', {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
    })
    .then(quotes => {
      this.setState({userQuotes: quotes.data});
    })
    .catch(err => console.error(err));
  }

  createQuote(username, quote) {
    axios.post('http://localhost:3000/api/', {username, quote}, {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
    })
  }

  updateQuote(id) {
    axios.put(`http://localhost:3000/api/${id}`)
  }

  deleteQuote(id) {
    axios.delete(`http://localhost:3000/api/${id}`)
  }
  
  render() {
    const { kanyeQuotes, userQuotes } = this.state;
    return (
      <main>
        {/* <Switch> */}
          <KanyeAndCreateQuote 
            getKanyeQuotes={this.getKanyeQuotes} 
            kanyeQuotes={kanyeQuotes} 
            createQuote={this.createQuote} 
          />
          <br />
          <button onClick={this.getUserQuotes}>click to see all the user quotes</button>
          <ShowUserQuotesList 
            userQuotes={userQuotes}
            handleDelete={this.deleteQuote} 
          />
          {/* <Route path='/' */}
        {/* </Switch> */}
      </main>
    ); 
  } 
} 

export default App;