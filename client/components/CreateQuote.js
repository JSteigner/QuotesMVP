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
    this.setState({username: '', newQuote: ''});
  }

  render() {
    const { username, newQuote } = this.state;
    return (
      <div>
        <h2>Create your own quote!</h2>
        <h3>enter username:</h3>
        <input 
          type='text'
          value={username}
          onChange={this.createUserName}
        />
        <h3>enter quote:</h3>
        <input 
          type='text'
          value={newQuote}
          onChange={this.createNewQuote}
        />
        <button onClick={this.handleClick}>click to create your quote!</button>
      </div>
    )
  }
};

export default CreateQuote;