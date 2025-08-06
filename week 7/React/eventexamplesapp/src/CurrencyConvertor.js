import React, { useState } from 'react';

function CurrencyConvertor() {
  const [rupees, setRupees] = useState('');
  const [euro, setEuro] = useState('');

  const handleConvert = () => {
    const value = parseFloat(rupees);
    if (!isNaN(value)) {
      const converted = (value * 0.011).toFixed(2);
      setEuro(converted);
    } else {
      setEuro('');
    }
  };

  return (
    <div style={{ marginTop: '20px' }}>
      <h2>Currency Converter</h2>
      <input
        type="number"
        placeholder="Amount in ₹"
        value={rupees}
        onChange={(e) => setRupees(e.target.value)}
        style={{ marginRight: '10px' }}
      />
      <button onClick={handleConvert}>Convert</button>
      {euro && <p>Equivalent in Euro: €{euro}</p>}
    </div>
  );
}

export default CurrencyConvertor;
