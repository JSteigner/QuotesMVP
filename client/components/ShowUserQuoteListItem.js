import React from 'react';

const ShowUserQuoteListItem = ({ userQuote, handleDelete }) => (
  <div>
     <div>username: {userQuote.username} <button>update</button></div>
     
     <div>
       quote: {userQuote.quote}  <button onClick={() => handleDelete(userQuote.id)}>X</button>
     </div>
     <br />
  </div>
);

export default ShowUserQuoteListItem;