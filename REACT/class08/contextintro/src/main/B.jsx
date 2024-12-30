import React from 'react'
import { useContext } from 'react'
import { Appcontext } from './Context'
const B = () => {
    const {message, marks}=useContext(Appcontext)
  return (
    <div>B {message} my marks are {marks}</div>
  )
}

export default B
