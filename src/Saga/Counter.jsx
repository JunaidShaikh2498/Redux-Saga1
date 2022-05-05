import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { incrementer, decrementer } from './action/actionCounter'


const Counter = () => {

    const myState=useSelector(state=>state.counteReducer)
    const dispatcher=useDispatch()
  return (
      <>
    <div>
            <button onClick={dispatcher(incrementer)}></button>
            <button onClick={dispatcher(decrementer)}></button>
    </div>
    <div>
        <h1>{myState}</h1>
    </div>
    </>
  )
}

export default Counter
