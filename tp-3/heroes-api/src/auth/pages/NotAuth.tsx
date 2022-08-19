import React from 'react'
import Swal from 'sweetalert2'

export const NotAuth = () => {

    
  return (
    <>
        <h1>You do not currently have access to this page</h1>
        <button onClick={() => {Swal.fire(
            'You have logged in!',
            'Take a look!',
            'success'
            )}}>Click Me</button>
    </>
  )
}

