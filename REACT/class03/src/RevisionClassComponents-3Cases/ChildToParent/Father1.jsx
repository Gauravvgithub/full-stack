import React, { Component } from 'react'
import Son1 from './Son1'

export default class Father1 extends Component {
    getdatafromchild = (value) => {
        console.log(value);
    }
  render() {
    return (
      <div>
        <h2>Father1</h2>

        <Son1 getdatafromchild={this.getdatafromchild}/>
      </div>
    )
  }
}
