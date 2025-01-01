import React from 'react'
import { Link } from 'react-router-dom'
export default function A() {
  return (
    <div>
      <p>my name is para from A</p>
      <Link to="/b">link me to go on b</Link>

    </div>
  )
}
