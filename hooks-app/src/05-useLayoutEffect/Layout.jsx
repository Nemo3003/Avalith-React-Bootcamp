import React from 'react';
import { useCounter } from '../hooks/useCounter';
import {useFetch} from '../hooks/useFetch';
import { Blockquote } from './Blockquote';

export const Layout = () => {
    const {counter, increment}= useCounter(1)
    const {data, isLoading} = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);
    console.log(data, isLoading);
    const {author, quote} = !! data && data[0];
    
    console.log({author, quote});
    return(
        <>
            <h3>The breaking bad API</h3>
            <hr />
            {
                isLoading ? 
                <div className="alert alert-info">Loading...</div>
                : (
                    <Blockquote author={author} quote={quote}/>
                )
                
            }
            <button 
            onClick={()=>increment(1)}
            disabled={isLoading}
            > Next quote </button>

        </>
    )
}