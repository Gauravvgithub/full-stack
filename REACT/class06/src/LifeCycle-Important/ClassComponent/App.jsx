import React, { Component } from 'react'

export default class App extends Component {

    constructor(){
        super()
        console.log(1,"constructor always first to play and only one time to play");  

        this.state={
            counter:0
        }
    }
    increment=()=>{
        this.setState({
            counter:this.state.counter+1
        })

    }

    componentDidMount(){
        console.log(2,"componentDidMount - only one time to play");
        
    }

    componentWillUnmount(){
        console.log(3,"componentWillUnmount - only one time to play");
        
    }

    shouldComponentUpdate(nextState){  // nextProps and nextState
        console.log(4,"shouldComponentUpdate - something change inside me, now i will run and continuously run");

        if(this.state.counter!=nextState.counter){
            return true;
        }else{
            return false;
        }
        
    }

    getSnapshotBeforeUpdate(){
        console.log(5, "getSnapshotbeforeUpdate - something change inside me, now i will run and continuously run");

        return this.state;
        
    }

    componentDidUpdate(){
        console.log(6, "componentDidUpdate - something change inside me, now i will run and continuously run");
        
    }


  render() {
    return (
      <div>

        <h2>Counter : {this.state.counter}</h2>
        <h2><button onClick={this.increment}>Increment</button></h2>
      </div>
    )
  }
}
