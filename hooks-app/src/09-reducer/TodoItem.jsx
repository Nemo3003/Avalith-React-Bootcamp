import React from "react";

export const TodoItem = ({todo, onDeleteTodo, onToggleTodo}) => {

  return (
    <li      
      className="list-group-item d-flex justify-content-between"
    >
      <span 
        className={`align-self-center user-select-none ${todo.done ? 'text-decoration-line-through' : ''}`}
        onDoubleClick={()=> onToggleTodo(todo.id)}
      > 
        {todo.description} 
      </span>
      <button 
        className="btn btn-danger"
        onClick={()=> onDeleteTodo(todo.id)}
      >
        X
      </button>
    </li>
  );
};
