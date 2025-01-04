//! Controlled Component
import React, { useState } from 'react'

const App1 = () => {
    const [value,setValue]=useState("");

    const [name,setName]=useState("")

    const formsubmit = (event)=>{
        event.preventDefault();
        setName(value);
    }
  return (
    <div>
        <h1>Hi {name}</h1>
        <form onSubmit={formsubmit}>
            <input type="text" value={value} onChange={(event)=>{setValue(event.target.value)}}/>

            <input type="submit" />
        </form>
    </div>
  )
}

export default App1