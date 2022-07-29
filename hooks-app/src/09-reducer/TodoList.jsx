import React from 'react'

const TodoList = ({todos}) => {
  return (
    <>  
        <h1>TODO LIST</h1>
        <ul className="list-group ">
                {todos.map(todo => (
                    //TODO: Crear <TOdoItem todo={todo}/>
                    <li key={todo.id} className="list-group-item d-flex justify-content-between">
                        <span className="align-self-center">{todo.description}</span>
                        <button  className="btn btn-danger">X</button>
                    </li>
                ))}
            </ul>

    </>
  )
}

export default TodoList