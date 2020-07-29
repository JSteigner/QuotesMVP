import React from 'react';
// = ({ userQuote, handleDelete }) =>
class ShowUserQuoteListItem extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      updatedUsername:'',
      updatedQuote:''
    };

    this.updateUsername = this.updateUsername.bind(this);
    this.updateQuote = this.updateQuote.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  updateUsername(event) {
    this.setState({
      updatedUsername: event.target.value
    });
  }

  updateQuote(event) {
    this.setState({
      updatedQuote: event.target.value
    });
  }

  handleSubmit() {
    const { updatedUsername, updatedQuote } = this.state;
    const { userQuote } = this.props;

    this.props.handleUpdate(userQuote.id, updatedUsername, updatedQuote);
    this.setState({updatedUsername:'', updatedQuote: ''});
  }

  render() {
    const { userQuote, handleDelete } = this.props;
    const { updatedUsername, updatedQuote } = this.state;
    return (
      <div>
        <div>
            username: {userQuote.username}
            <input
              type='text'
              value={updatedUsername}
              placeholder="update username"
              onChange={this.updateUsername}
            /> 
            <button onClick={this.handleSubmit}>update</button>
        </div>
        
        <div>
            quote: {userQuote.quote}
            <input
              type='text'
              value={updatedQuote}
              placeholder="update quote"
              onChange={this.updateQuote}
            /> 
            <button onClick={() => handleDelete(userQuote.id)}>x</button>
        </div>
        <br />
      </div>
    );
  }
};

export default ShowUserQuoteListItem;