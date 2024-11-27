import React, { Component } from 'react'
import Child02 from './Child02'
export default class Parent02 extends Component {
  render() {
    const recieveData=(value)=>{
        console.log("Data is Coming---",value);
        
    }
    return (
      <div>Parent02

        <Child02 sendData = {recieveData} greeting = {"Data Transfer from Child to Parent by Class Components"}></Child02>
      </div>
    )
  }
}
