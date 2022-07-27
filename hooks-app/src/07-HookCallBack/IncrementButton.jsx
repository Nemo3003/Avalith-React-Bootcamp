import React, { memo } from 'react';

export const IncrementButton = ({increment}) => {
    return(
        <button
        className = 'btn btn-primary'
        onClick={()=>{increment(5)}}
        >
                Increment Button
        </button>
    )
}
memo(IncrementButton);