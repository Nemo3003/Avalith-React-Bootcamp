import React from 'react'
import { useTodo } from '../hooks/useTodo'
import { TodoAdd } from './TodoAdd'
import { TodoList } from './TodoList'


export const TodoApp = () => {

   const { todos, todoCount, pendingTodoCount, handleDeleteTodo, handleToggleTodo, handleNewTodo} = useTodo();     

  return (
    <>
        <h2>TodoApp: {todoCount}, pendientes: {pendingTodoCount}</h2>
        <hr />
        
        <section className="row">
            <div className="col-7">                
                <TodoList 
                    todos={todos}  
                    onDeleteTodo={handleDeleteTodo}
                    onToggleTodo={handleToggleTodo}
                />
            </div>
            <div className="col-5">
                <h4>Agregar TODO</h4> 
                <hr />                
                <TodoAdd onNewTodo={handleNewTodo} />
            </div>
        </section>
    </>
  )
}
