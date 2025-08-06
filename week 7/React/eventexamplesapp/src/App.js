import React from 'react';
import Counter from './Counter';
import CurrencyConvertor from './CurrencyConvertor';

function App() {
  function sayMessage(msg) {
    alert(msg);
  }

  function handlePress(event) {
    alert("I was clicked!");
    console.log(event); 
  }

  return (
    <div style={{ padding: '20px' }}>
      <h1>React Event Examples</h1>

      <Counter />

      <button onClick={() => sayMessage("Welcome!")}>Say Welcome</button><br /><br />

      <button onClick={handlePress}>Synthetic OnPress</button>

      <CurrencyConvertor />
    </div>
  );
}

export default App;


