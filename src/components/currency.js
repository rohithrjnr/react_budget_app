// Currency.js
import React, { useState } from 'react';

const CurrencySelector = ({ onChange }) => {
  const [selectedCurrency, setSelectedCurrency] = useState('USD');

  const handleCurrencyChange = (e) => {
    const currency = e.target.value;
    setSelectedCurrency(currency);
    onChange(currency); 
  };

  return (
    <div>
      <label>Select Currency:</label>
      <select value={selectedCurrency} onChange={handleCurrencyChange}>
        <option value="USD">Dollar ($)</option>
        <option value="GBP">Pound (£)</option>
        <option value="EUR">Euro (€)</option>
        <option value="INR">Ruppee (₹)</option>
      </select>
    </div>
  );
};

export default CurrencySelector;
