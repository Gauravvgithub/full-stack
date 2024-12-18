import React, { useState } from 'react'
import { useEffect } from 'react'

export default function App() {

  // console.log("testing - functional component started");
  
  const [count1,setcount1]=useState(0)
  
  
  
  // component did mount, unmount, getsnapshot - all this functions are inbuilt in functional lifeCycle
    
    useEffect(()=>{
      console.log("running")
    })

    // componentWillupdate
    useEffect(()=>{
      console.log("testing - without dependency")
    },[])

    useEffect(()=>{
      console.log("testing - with dependency")
    },[count1])


    const increment1=()=>{
      setcount1(count1+1)
    }

    const decrement1=()=>{
      if (count1 > 0) {
        setcount1(count1 - 1);
      }
    }

    const reset1=()=>{
      setcount1(0)
      
    }
  return (
    <div>Learning LifeCycle in Functional Component

      <h2>Counter : {count1}</h2>
      <button onClick={increment1}>Increment</button>
      <button onClick={decrement1}>Decrement</button>
      <button onClick={reset1}>Reset</button>

    </div>
  )
}
