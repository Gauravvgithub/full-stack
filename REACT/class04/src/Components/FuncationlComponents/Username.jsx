import React from 'react'
import Password from './Password'
import Submit from './Submit'

export default function Username() {
  return (
    <div>
        <label>Username</label>
        <input type="text" />
        <Password/>
        <Submit/>
    </div>
  )
}
