import React from 'react';
import ShowUserQuoteListItem from './ShowUserQuoteListItem';

const ShowUserQuotesList = ({ userQuotes, handleDelete, handleUpdate }) => (
  <div>
    {userQuotes.map(userQuote => {
      return (
      <ShowUserQuoteListItem 
        key={userQuote.id} 
        userQuote={userQuote} 
        handleDelete={handleDelete}
        handleUpdate={handleUpdate}
      />
      )  
    })}
  </div>
);

export default ShowUserQuotesList;