import React from 'react'
import Child from './Child';
export default function Parent() {
    let name="Gaurav";
    let age= "21";
  return (
    <div>
        <Child name={name} age={age}/>
    </div>
  )
}
