import React from 'react';
import {useState} from 'react';
const FirstName = () => {
    return (
        <div>
            <h1>First Name</h1>
        </div>
    )
}
const SecondName = () => {
    return (
        <div>
            <h1>Second Name</h1>
        </div>
    )
}

export{
    FirstName,
    SecondName
}

const [texto,setTexto] =useState('Primero');

let numero = 0;
const handleClick = () => {
    numero = Math.floor(Math.random() * 10);
}

export const FullName =(props)=>{
    return(
        <>
        <div>
            <h2>{texto}</h2>
            <h1>{props.firstName} {props.secondName}</h1>

        </div>
        <h2>{numero}</h2>
        <button onClick={handleClick()}>Click</button>
        </>
    )
}