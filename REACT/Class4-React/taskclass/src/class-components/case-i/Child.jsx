import React, { Component } from 'react';

export default class Child extends Component {
  render() {
    // Accessing props using this.props
    return (
      <div>
        <h2>Child Component</h2>
        <p>{this.props.greeting}</p> {/* Rendering the prop passed from the parent */}
        <p>{this.props.age}</p>
      </div>
    );
  }
}
