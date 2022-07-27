import React from 'react';
import { useState } from 'react';
import { useCounter } from '../hooks/useCounter';
import {Small} from './Small';

export const Memorize = () => {

    const {counter, increment} = useCounter()
    const [show, setShow] = useState(true)
    
    return(
        <>
            <h2>Memorize</h2>
            <hr />
            <h3>Counter: <Small value={counter}></Small></h3>

            <button
            className='btn btn-primary'
            onClick={()=>increment(1)}
            >
                +1
            </button>
            <button
            className='btn btn-outline-primary'
            onClick={()=>{setShow(!show)}}
            >
                Show/Hide{`${show}`}
            </button>
        </>
    )
}