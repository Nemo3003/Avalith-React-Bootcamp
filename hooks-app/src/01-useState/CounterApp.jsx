import React, { useState } from 'react';

export const CounterApp = () => {

    const [counter, setCounter]=useState(
        {
            counter1: 0,
            counter2: 10,    
            counter3: 20,
        }
    )
    const {counter1, counter2, counter3} = counter
    return(
        <>
        <h2>Counter App</h2>
        <h3>Counter: { counter1 }</h3>
        <button className='btn btn-primary' onClick={()=>{setCounter({...counter,counter1:counter1 +1})}}>+1</button> 
        </>
    )
}