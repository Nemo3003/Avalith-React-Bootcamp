import React from 'react';
import { useRef } from 'react';

export const FocusScreen = () => {

    const inputRef = useRef();

    const onFocusClick = () => {
       // document.querySelector('input').focus()
        inputRef.current.select()
    }

    return(
        <>
        <h3>Focus Screen</h3>
        <hr />
        <input
        ref={inputRef}
         type="text"
         placeholder='Ingrese su nombre'
         className='form-control'
        />
        <button className='btn btn-primary mt-2' onClick={onFocusClick}>
            Set Focus
        </button>
        </>
    )

    
}