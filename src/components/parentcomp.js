import React, { useState } from 'react';
import CurrencySelector from './Currency';
import Budget from './Budget';

const ParentComponent = () => {
  const [selectedCurrency, setSelectedCurrency] = useState('USD');

  const handleCurrencyChange = (currency) => {
    setSelectedCurrency(currency);
  };

  return (
    <div>
      <CurrencySelector onChange={handleCurrencyChange} />
      <Budget selectedCurrency={selectedCurrency} />
    </div>
  );
};

export default ParentComponent;
