import React from 'react';

class CreateQuote extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      newQuote: ''
    };
    
    this.createNewQuote = this.createNewQuote.bind(this);
    this.createUserName = this.createUserName.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  
  createUserName(event) {
    this.setState({
      username: event.target.value
    });
  }

  createNewQuote(event) {
    this.setState({
      newQuote: event.target.value
    });

  }

  handleClick() {
    const { username, newQuote } = this.state;
    this.props.createQuote(username, newQuote);
  }

  render() {
    return (
      <div>
        <h3>enter username</h3>
        <input 
          type='text'
          onChange={this.createUserName}
        />
        <br />
        <br />
        <h3>enter quote</h3>
        <input 
          type='text'
          onChange={this.createNewQuote}
        />
        <br />
        <br />
        <button onClick={this.handleClick}>click to create your quote!</button>
      </div>
    )
  }
};

export default CreateQuote;