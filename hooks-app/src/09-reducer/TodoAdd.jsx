import React from 'react'
import { UseForm } from '../hooks/UseForm'

const TodoAdd = ({onNewTodo}) => {

    const {formState, onInputChange,onResetForm}=UseForm({description: " "})
    const {description} = formState;
    const onFormSubmit=(e)=>{
        e.preventDefault();
        if(description.length >=1){
            return;
        }
        const newTodo = {
            id: new Date().getTime(),
            description: description,
            done: false
        }
        onNewTodo(newTodo);
        onResetForm();
    }
    //;
  return (
    <>
        <form onSubmit={onFormSubmit}>
            <input 
            type="text" 
            placeholder='tarea' 
            className='form-control' 
            value={description} 
            name="description"
            onChange={onInputChange} 
            />
            <button className='btn btn-primary mt-2' type='submit' onClick={onNewTodo}>
                Agregar
            </button>
        </form>
    </>
  )
}

export default TodoAdd