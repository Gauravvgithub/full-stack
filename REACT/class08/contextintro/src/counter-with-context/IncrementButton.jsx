import React from 'react';
import { useCounter } from './CounterContext';

function IncrementButton() {
  const { increment } = useCounter();
  return <button onClick={increment}>Increment</button>;
}

export default IncrementButton;