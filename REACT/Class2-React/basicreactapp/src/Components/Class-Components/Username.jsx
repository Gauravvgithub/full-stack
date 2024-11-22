import React, { Component } from 'react'
import Password from './Password'
import Button from './Button'

export default class Username extends Component {
  render() {
    return (
      <div>
        <label htmlFor=''>Username</label>
        <input type='' placeholder='Enter Your Username'></input>
        <Password></Password>
        <Button></Button>
      </div>
    )
  }
}
