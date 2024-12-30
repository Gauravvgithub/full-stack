import React from 'react';
import { CounterProvider } from './CounterContext';
import CounterDisplay from './CounterDisplay';
import IncrementButton from './IncrementButton';
import DecrementButton from './DecrementButton';

function App() {
  return (
    <CounterProvider>
      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <h1>Counter App</h1>
        <CounterDisplay />
        <IncrementButton />
        <DecrementButton />
      </div>
    </CounterProvider>
  );
}

export default App;