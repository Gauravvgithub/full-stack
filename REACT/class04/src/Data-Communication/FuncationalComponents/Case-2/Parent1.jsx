import React from 'react'
import Child1 from './Child1'

export default function Parent1() {
    const receiveDate=(value)=>{
        console.log("Value coming from Child to Parent", value);
    }
  return (
    <div>
        <Child1 sendData={receiveDate}/>
    </div>
  )
}
