import React from 'react'
import Passwrd from './Passwrd'
import Btn from './Btn'

export default function Usernm() {
  return (
    <div>
        <label htmlFor=''>Username</label>
        <input type='text'placeholder='Enter Your Username'></input>
        <Passwrd></Passwrd>
        <Btn></Btn>
    </div>
  )
}
