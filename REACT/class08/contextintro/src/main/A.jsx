import React from 'react'
import B from './B'
import { useContext } from 'react'
import { Appcontext } from './Context'
const A = () => {
    const {marks}=useContext(Appcontext)
  return (
    <div>A my marks are {marks}  <B/></div>
   
  )
}

export default A