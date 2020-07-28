import React from 'react';

const KanyeButton = ({ getKanyeQuotes, kanyeQuotes }) => (
  <div>
    <button onClick={getKanyeQuotes}>Click to see some Kanye Quotes!</button>
    <br />
    <br />
    <div>{kanyeQuotes}</div>
  </div>
);

export default KanyeButton;