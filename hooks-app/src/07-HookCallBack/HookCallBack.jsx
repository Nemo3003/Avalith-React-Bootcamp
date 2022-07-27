import React from 'react';
import { useCallback } from 'react';
import { useState } from 'react';
import { useCounter } from '../hooks/useCounter';
import { IncrementButton } from './incrementButton';

export const HookCallBack = () => {

    const [counter, setCounter] = useState(0)

    const increment = useCallback(
        (value) => {
            setCounter((counter) =>counter + value)
        },
        [],
    )
    
    return(
        
    <>
     <h2>Hook call back</h2>
     <h3>Counter: {counter}</h3>
     <hr />
     <IncrementButton increment={increment}></IncrementButton>
    </>
    )
}