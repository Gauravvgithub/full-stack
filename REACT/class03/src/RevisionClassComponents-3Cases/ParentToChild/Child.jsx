import React, { Component } from 'react'

export default class Child extends Component {
    componentDidMount(){
        // console.log(this.props);
        
        console.log(this.props.name);
        console.log(this.props.course);

        
    }
  render() {
    return (
      <div>Child
        <h1>Name :{this.props.name}</h1>
        <h1>Course :{this.props.course}</h1>
      </div>
    )
  }
}

