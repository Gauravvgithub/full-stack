import React, { Component } from 'react';


export default class Child1 extends Component {
    snData=()=>{
        this.props.rcData("Gaurav")
    }
  render() {
    return (
      <div>
        <button onClick={this.snData}>send data to parent</button>
      </div>
    )
  }
}
