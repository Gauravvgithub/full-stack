import React, { Component } from 'react'
import Child1 from './Child1'

export default class Parent1 extends Component {
    getdatafromchild=(value)=>{
        console.log(value);
        
    }
  render() {
    return (
      <div>Parent1
        <Child1 getdatafromchild={this.getdatafromchild}/>
      </div>
    )
  }
}
