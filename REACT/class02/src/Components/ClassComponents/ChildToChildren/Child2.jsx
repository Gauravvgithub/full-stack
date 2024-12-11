import React, { Component } from 'react'
import Children2 from './Children2'

export default class Child2 extends Component {
  render() {
    return (
      <div>Child2

        {this.props.Children2}
      </div>
    )
  }
}
