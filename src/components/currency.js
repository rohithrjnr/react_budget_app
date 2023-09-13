import React, { useState } from 'react';

const CurrencySelector = () => {
  // Define a state variable to store the selected currency
  const [selectedCurrency, setSelectedCurrency] = useState('USD'); // Default to Dollar

  // Define a mapping of currency symbols
  const currencySymbols = {
    USD: '$',   // Dollar
    GBP: '£',   // Pound
    EUR: '€',   // Euro
    INR: '₹',   // Ruppee
  };

  const handleCurrencyChange = (e) => {
    setSelectedCurrency(e.target.value);
  };
const sas={
    'background-color': 'linen',
};
  return (
    <div class="alert alert-success">
      <label>Select Currency:</label>
      <select value={selectedCurrency} onChange={handleCurrencyChange} style={sas}>
        <option value="USD">Dollar ($)</option>
        <option value="GBP">Pound (£)</option>
        <option value="EUR">Euro (€)</option>
        <option value="INR">Rupee (₹)</option>
      </select>
      <br />
    </div>
  );
};

export default CurrencySelector;
