import React from 'react';
import ShowUserQuoteListItem from './ShowUserQuoteListItem';

const ShowUserQuotesList = ({ userQuotes, handleDelete }) => (
  <div>
    {userQuotes.map(userQuote => {
      return (
      <ShowUserQuoteListItem 
        key={userQuote.id} 
        userQuote={userQuote} 
        handleDelete={handleDelete}
      />
      )  
    })}
  </div>
);

export default ShowUserQuotesList;