import React, { Component } from 'react';
import Child1 from './Child1';

export default class Parent1 extends Component {
    rcData=(value)=>{
        console.log("coming from child-",value);
    }
  render() {
    return (
      <div>
        <Child1 rcData={this.rcData}/>
      </div>
    )
  }
}
