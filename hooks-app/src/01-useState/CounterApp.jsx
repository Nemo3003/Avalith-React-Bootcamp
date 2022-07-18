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
    //<button className='btn btn-primary' onClick={()=>{setCounter({...counter,counter1:counter1 +1})}}>+1</button> 
    const handleCounter = () =>{
        if(counter3>=30)return
        let counterName = 'counter1';
        if(counter1 >= 10) counterName = 'counter2';
        if(counter2 >= 20) counterName = 'counter3';
        setCounter({
            ...counter,
            [counterName]: counter[counterName] + 1}

        )
    }
    return(
        <>
        <h2>Counter App</h2>
        <h3>Counter: { counter1 }</h3>
        <h3>Counter: {counter2}</h3>
        <h3>Counter: {counter3}</h3>
        {//Tiene que sumar counter1 hasta el 10 y luego seguir con counter2 hasta 20 y luego continuar en el counter3}
        }
        <button className='btn btn-primary' onClick={handleCounter}>+1</button>

        </>
    )
}