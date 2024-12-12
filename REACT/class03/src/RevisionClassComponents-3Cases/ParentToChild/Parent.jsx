import React, { Component } from 'react'
import Child from './Child'

export default class Parent extends Component {
  render() {
    let name="Gaurav"
    let course="Full Stack"
    return (
      <div>Parent

        <Child name={name} course={course}></Child>
      </div>
    )
  }
}
