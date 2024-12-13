import React, { Component } from 'react'
import Passwordc from './Passwordc'
import Submitc from './Submitc'

export default class Usernamec extends Component {
  render() {
    return (
      <div>
        <label>Username</label>
        <input type="text" />
        <Passwordc/>
        <Submitc/>
      </div>
    )
  }
}
