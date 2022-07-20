import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Message } from './Message';

export const SimpleForm = ()=>{
    
    const [formState, setFormState] = useState({
        username: '',
        email: '',
    })

    const {username, email} = formState;

    const onInputChange = ({target})=>{
        const {name, value}= target;

        setFormState({
            ...formState,
            [name]: value
        })
    }

    useEffect(()=>{
        console.log('useEffect called!')
    },[])
   /* useEffect(()=>{
        console.log('useEffect called username!')
    },[username])
    useEffect(()=>{
        console.log('useEffect called mail!')
    },[email])*/

   /* useEffect(()=>{
        first
        return()=>{
            second
        },
        [third]
    })*/
    return(
        <>
            <h3>Simple Form</h3>
            <hr />
            <input
             type="text"
             className='form-control'
             placeholder='Username'
             name='username'
             value={username}
             onChange={onInputChange}
            />
            {
                username === 'pepe' && <Message/>
            }
            <input
             type="email"
             className='form-control'
             placeholder='youremail@gmail.com'
             name='email'
             value={email}
             onChange={onInputChange}
            />
        </>
)};