import React from 'react'

export default function Child1(sendData) {
   const dataTranfer=()=>{
    sendData=()=>{
        let name ="Gaurav";
        let age ="21"
    }
   }
  return (
    <div>
        <button onClick={dataTranfer}>Click Me to Send Data to Parent</button>
    </div>
  )
}
