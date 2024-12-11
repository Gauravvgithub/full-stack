import React, { Component } from 'react'

export default class Child extends Component {
    componentDidMount(){
        console.log(this.props);
        
        console.log(this.props.name);
        
    }
  render() {
    return (
      <div>Child
        <h1>Name :{this.props.name}</h1>
        <h1>Age :{this.props.age}</h1>
      </div>
    )
  }
}
