import React from 'react';

export const Small = ({value}) => {

    console.log('Small.jsx');
    return(
        <small>{value}</small>
    )
}
React.memo(Small);