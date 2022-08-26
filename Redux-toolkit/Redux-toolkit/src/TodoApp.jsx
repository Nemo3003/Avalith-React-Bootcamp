import React, { useState } from 'react'
import { useGetTodoQuery, useGetTodosQuery } from './api/todosApi'

export const TodoApp = () => {
    const [counter, setCounter] = useState(1)

    // const resp = useGetTodosQuery();
    const resp = useGetTodoQuery(counter)
    console.log(resp);

    const { data: todo, isLoading } = resp;

  return (
    <>  
         <h1>TodoApp - RTK Query</h1>
        <hr />
        <h4>isLoading: { isLoading ? 'True' : 'False' } </h4>
        <pre>{JSON.stringify( todo )}</pre>
       
        <button onClick={()=>setCounter(counter+1)} >
            Next Todo
        </button>
        <button onClick={()=>setCounter(counter-1)} >
            Prev Todo
        </button>

    </>
  )
}
