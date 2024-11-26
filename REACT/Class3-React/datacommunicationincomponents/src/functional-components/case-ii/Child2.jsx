import React from 'react'

export default function Child2({sendData}) {
    const datatransfer=()=>{
        sendData(21)
    }
  return (
    <div>Child2

        <button onClick={datatransfer}>Click Me to Send Data to Parent2</button>
    </div>
  )
}
