import React, { Component } from 'react'

export default class Child02 extends Component {
  render() {
    let dataTransfer=()=>{
    this.props.sendData(21);

    }
    return (
      <div>Child02

        <h2>Child Data</h2>
        <button onClick={dataTransfer}>Click Me to Transfer Data to Parent</button>
      </div>
    )
  }
}
