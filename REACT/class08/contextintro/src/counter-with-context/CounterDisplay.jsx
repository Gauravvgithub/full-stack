import React from 'react';
import { useCounter } from './CounterContext';

function CounterDisplay() {
  const { count } = useCounter();
  return <h2>Current Count: {count}</h2>;
}

export default CounterDisplay;