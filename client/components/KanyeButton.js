import React from 'react';

const KanyeButton = ({ getKanyeQuotes, kanyeQuotes }) => (
  <div>
    <h1>Check out some Kanye West Quotes!</h1>
    <button onClick={getKanyeQuotes}>Click to see some Kanye Quotes!</button>
    <br />
    <div>{kanyeQuotes}</div>
  </div>
);

export default KanyeButton;