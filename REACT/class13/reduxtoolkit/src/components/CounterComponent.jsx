import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment } from '../features/CounterSlicec'
import { decrement } from '../features/CounterSlicec'
import { incrementByValue } from '../features/CounterSlicec'
import { reset } from '../features/CounterSlicec'

const CounterComponent = () => {
    const count=useSelector((state)=> state.counter.value)
    const dispatch=useDispatch()
  return (
    <div>
        {count}
        <button onClick={()=>{dispatch(increment())}}>increment state by 1</button>
        <button onClick={()=>{dispatch(decrement())}}>decrement state by 1</button>
        <button onClick={()=>{dispatch(incrementByValue())}}>incrementByValue state</button>
        <button onClick={()=>{dispatch(reset())}}>reset a state</button>

    </div>
  )
}

export default CounterComponent;