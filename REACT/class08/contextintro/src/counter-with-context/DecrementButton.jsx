import React from 'react';
import { useCounter } from './CounterContext';

function DecrementButton() {
  const { decrement } = useCounter();
  return <button onClick={decrement}>Decrement</button>;
}

export default DecrementButton;