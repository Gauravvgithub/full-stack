import React, { useEffect, useState } from 'react'

export default function App() {
    const [count,setCount]=useState(0)
    useEffect(()=>{
        console.log("my component is mounted")
        return function(){
            console.log("my component is unmounted")
        }
    },[])

    useEffect(()=>{
        console.log("counter value changed, so updated")
    },[count])
  return (
    <div>App

        <button onClick={()=>setCount(count+1)}>Click me to Increment</button>
    </div>
  )
}
