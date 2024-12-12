import React, { useState } from 'react'

export default function CounterApp() {
    let [count,setcount]=useState(0)

    const increment=()=>{
        setcount(++count)
        console.log("increment",count);
    }
    const decrement=()=>{
        setcount(--count)
        console.log("decrement",count);
    }
    const reset=()=>{
        setcount(0)
        console.log("reset",count);
        
    }
  return (
    <div>CounterApp
            <h1>I'm a Counter</h1>
            <h1>Counter :{count}</h1>
            <button onClick={increment}>Increment</button> 
            
            <button onClick={decrement}>Decrement</button> 
            <button onClick={reset}>Reset</button>

    </div>
  )
}
