import React from 'react'
// import Parent from './Parent'

export default function Child(props) {
    console.log("-------------------",props);
    
  return (
    <div>Child
        <h2>{props.greeting}</h2>
        <h2>{props.age}</h2>
        <div>
          {props.marks.map((value,index)=>(
            <h3>{value}</h3>
          ))}
        </div>
    </div>
  )
}
