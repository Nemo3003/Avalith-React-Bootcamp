import React from 'react';
import { UseForm } from '../hooks/UseForm';


export const FormWithHooks = ()=>{
    
    const {formState, onInputChange} =  UseForm({
        username: '',
        email: '',
        password: '',
    })

    const {username, email, password} = formState;

    return(
        <>
            <h3>Form with hooks</h3>
            <hr />
            <input
             type="text"
             className='form-control'
             placeholder='Username'
             name='username'
             value={username}
             onChange={onInputChange}
            />
           
            <input
             type="email"
             className='form-control'
             placeholder='youremail@gmail.com'
             name='email'
             value={email}
             onChange={onInputChange}
            />

            <input
             type="password"
             className='form-control'
             placeholder='password'
             name='password'
             value={password}
             onChange={onInputChange}
            />
        </>
)};