import React, { memo } from   'react';

export const Button = ({numero, incrementar})=>{

    console.log('He vuelto a renderizarme')
    return(
        <button
        className='btn btn-primary'
        onClick={()=>incrementar(numero)}
        >
            {numero}
        </button>
    )

}
memo(Button);