import React, { Component } from 'react'

export default class CounterApp extends Component {
    constructor(){
        super()

        this.state={
            counter:0
        }
    }
    increment=()=>{

        // this.setState({
        //     counter:this.state.counter+1
            // console.log();
            
        // })
        this.setState((prevState)=>{
            return {
                ...prevState,
                counter:prevState.counter+1
            }
        })

    }
    
    
    
  render() {
    return (
      <div>
        <h1>Counter : {this.state.counter}</h1>
        <button onClick={this.increment}>Increment</button>
      </div>
    )
  }
}
