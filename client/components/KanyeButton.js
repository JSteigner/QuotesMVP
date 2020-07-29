import React from 'react';

const KanyeButton = ({ getKanyeQuotes, kanyeQuotes }) => (
  <div>
    <h1>Welcome to the Quote App!</h1>
    <div>{kanyeQuotes}</div>
    <br />
    <button onClick={getKanyeQuotes}>Click to see some Kanye Quotes!</button>
  </div>
);

export default KanyeButton;