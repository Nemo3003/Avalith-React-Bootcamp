import React from 'react';
import {useFetch} from '../hooks/useFetch';

export const MultipleCustomHooks = () => {
    
    const {data, isLoading} = useFetch("https://www.breakingbadapi.com/api/quotes/1");
    console.log(data, isLoading);
    const {author, quote} = !!data&&data[0];

    console.log({author, quote});
    return(
        <>
            <h3>The breaking bad API</h3>
            <hr />
            {
                isLoading ? 
                <div className="alert alert-info">Loading...</div>
                : 
                <blockquote className='blockquote text-end'>
                    <p className='mb-1'>
                        {quote}
                    </p>
                    <footer className='blockquote-footer mt-1'>{author}</footer>
                </blockquote>
            }

        </>
    )
}