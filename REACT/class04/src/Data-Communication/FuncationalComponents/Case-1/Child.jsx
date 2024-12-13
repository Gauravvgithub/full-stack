import React from 'react'

export default function Child(props) {
    console.log(props);
    
  return (
    <div>
        <h2>Name    :   {props.name}</h2>
        <h2>Age :   {props.age}</h2>
    </div>
  )
}
