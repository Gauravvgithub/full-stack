import React, { Component } from 'react'

export default class Child1 extends Component {
    senddata=()=>{
        this.props.getdatafromchild("Gaurav learning react components")
    }
  render() { 
    return (
      <div>Child1

        <button onClick={this.senddata}>Click me to send data</button>
      </div>
    )
  }
} 