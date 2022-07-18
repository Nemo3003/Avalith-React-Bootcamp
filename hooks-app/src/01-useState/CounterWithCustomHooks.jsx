import React from 'react';
import { useCounter } from '../hooks/useCounter';

export const CounterWithCustomHooks = ()=>{

    const {counter, increment,reset, decrement}= useCounter(0)
    return(
        <>
            <h1>CounterWithCustomHooks: {counter}</h1>
            <hr />

            <button className="btn btn-primary" onClick={()=>decrement(1)}> -1 </button>
            <button className="btn btn-primary" onClick={()=>reset(0)}> Reset  </button>
            <button className="btn btn-primary" onClick={()=>increment(1)}> +1 </button>
        </>
    )
}