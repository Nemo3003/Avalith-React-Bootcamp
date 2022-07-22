import React from 'react';
import { useLayoutEffect } from 'react';
import { useState } from 'react';
import { useRef } from 'react';

export const Blockquote=({author, quote})=>{

    const refP = useRef();
    const [boxSize, setBoxSize] = useState( {width: 0, height: 0});


   

    useLayoutEffect(()=>{
        console.log('use Layout')
        const {width, height} = refP.current.getBoundingClientRect();
        setBoxSize({width, height});
    },[quote])
    


    return(
    <>
        <blockquote className='blockquote text-end'>
            <p ref={refP} className='mb-1'>
                {quote}
            </p>
            <footer className='blockquote-footer mt-1'>{author}</footer>
        </blockquote>
        <code className='d-block mb-2'>{JSON.stringify(boxSize)}</code>
    </>
    )
    
}