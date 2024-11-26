import React from 'react'
import Child from './Child'

export default function Parent() {
    let greeting = "Hello Gaurav";
    let age = 21;
    let marks = [10,20,30,40,50]
  return (
    <div>Parent

        <Child greeting={greeting} age={age} marks={marks}/>

    </div>
  )
}
