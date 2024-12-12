import React, { Component } from 'react'
import Child2 from './Child2'
import Children2 from './Children2'

export default class Parent2 extends Component {
  render() {
    return (
      <div>Parent2
        <Child2>
          <Children2/>
        </Child2>
      </div>
    )
  }
}
