import { useTodos } from "../Hooks/useTodos";
import { TodoList } from "./TodoList";
import { TodoAdd } from "./TodoAdd";

export const TodoApp = () => {
  const { todos, handleDeleteTodo, handleToggleTodo, handleNewTodo, handleEditTodo} =
    useTodos();
//cuarto traemos el hook del usetodos con la funcionalidad de cada boton e input para irlos definiendo, a su vez agregamos en cada etiqueta los que van a usarse dentro de las mismas
  return (
    <>
      <h2>TodoApp</h2>
      <hr />

      <section className="row">
        <div className="col-7">
          <TodoList
            todos={todos}
            onDeleteTodo={handleDeleteTodo}
            onToggleTodo={handleToggleTodo}
            onEditTodo={handleEditTodo}
          />
        </div>

        <div className="col-5">
          <h4>Agregar TODO</h4>
          <hr />
          <TodoAdd onNewTodo={handleNewTodo} />
        </div>
      </section>
    </>
  );
};