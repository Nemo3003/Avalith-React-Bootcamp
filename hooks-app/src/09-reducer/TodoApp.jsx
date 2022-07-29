import React from 'react'
import { useReducer } from 'react'
import todoReducer from './todoReducer'
import TodoList from './TodoList'
import TodoAdd from './TodoAdd'

const initialState = [{
    id: new Date().getTime(),
    description: 'Aprender React',
    done: false
}]
const TodoApp = () => {

    const [todos, dispatch] = useReducer(todoReducer, initialState)

    const handleNewTodo = (todo) => {
        todo.preventDefault();
        dispatch({type: 'ADD_TODO', payload: todo})
    }
  return (
    <>
    <h1>TODO APP</h1>
    <section className='row'>
        <div className="col-7">
            {/* TODO: crear <TodoList todos={todos}/>  */}
            <TodoList todos={todos}/>
        </div>
        <div className="col-5">
            <h4>Agregar TODO</h4>
            <hr />
            {/*TODO: crear <TodoAdd onNewTodo={handleNewTodo} */}
            {/*TODO: {id: new Date..., description: description...} */}
            <TodoAdd onNewTodo={handleNewTodo}/>
            
        </div>
    </section>
    </>
  )
}

export default TodoApp