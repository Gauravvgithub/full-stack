import React, { Component } from 'react'

export default class Son1 extends Component {
    senddata = () => {
        this.props.getdatafromchild("Gaurav learning react components");
    }
  render() {
    return (
        <div>
        <h2>Son1</h2>
        {/* Button triggers senddata method when clicked */}
        <button onClick={this.senddata}>Click me to send data</button>
    </div>
    )
  }
}
