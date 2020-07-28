import React from 'react';
import KanyeButton from './KanyeButton';
import CreateQuote from './CreateQuote';

const KanyeAndCreateQuote = ({ getKanyeQuotes, kanyeQuotes, createQuote }) => (
  <div>
    <KanyeButton getKanyeQuotes={getKanyeQuotes} kanyeQuotes={kanyeQuotes} />
    <CreateQuote createQuote={createQuote} />
  </div>
);

export default KanyeAndCreateQuote;