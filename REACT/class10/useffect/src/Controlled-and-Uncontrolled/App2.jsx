//! Uncontrolled Component
import React, { useRef, useState } from 'react'

const App2 = () => {

    const [name,setName]=useState("");

    const ref = useRef(null);

    const formsubmit = (event)=>{
        event.preventDefault();
        setName(ref.current.value);
        ref.current.value="";
    }
  return (
    <div>
        <h1>Hi {name}</h1>
        <form onSubmit={formsubmit}>
            <input type="text" ref={ref}/>

            <input type="submit" />
        </form>
    </div>
  )
}

export default App2;