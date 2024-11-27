import React, { Component } from 'react'
import Child from './Child'
export default class Parent01 extends Component {
  render() {
        let greeting = "hello gaurav";
        let age = 27;
    return (
      <div>Parent
        
        <Child greeting = {greeting} age = {age}></Child>
      </div>
    )
  }
}
