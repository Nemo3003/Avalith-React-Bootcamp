import React from 'react';
import { useEffect } from 'react';

export const Message = ()=>{

    useEffect(()=>{
        console.log('message mounted');

        const onMouseMove = ({x,y})=>{
            const coords = {x,y};
            console.log(coords);
        }
  

    window.addEventListener('mousemove', onMouseMove);
    return ()=>{
        console.log('message unmounted');
        window.removeEventListener('mousemove', onMouseMove);
    }
    },[])
    return (
        <h3>No existe!!</h3>
    )
}