import React from 'react';
import {useState} from 'react';
import '../css/style.css'

export const CounterApp =()=>{
    const [value, setCount] = useState(0);
    const handleClick = () => {
        setCount(value + 1);
    }
    const handleClickMinus = () => {
        setCount(value - 1);}
    const handleReset = () => {
        setCount(0);
    }
    return(
        <div className='counter-app'>
            <h1>Counter App</h1>
            <h2>{value}</h2>
            <button onClick={handleClick}>Click Plus</button>
            <button onClick={handleClickMinus}>Click Minus</button>
            <button onClick={handleReset}>Reset</button>
        </div>
    )
}