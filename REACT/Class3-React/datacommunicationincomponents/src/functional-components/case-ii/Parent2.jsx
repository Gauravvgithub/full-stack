import React from 'react'
import Child2 from './Child2'

export default function Parent2() {
    const receiveData = (value)=>{
        console.log("Data is Coming ----->",value);
        
    }
  return (
    <div>Parent2

        <Child2 sendData={receiveData} greeting={"Hello Gaurav"}></Child2>

    </div>
  )
}
