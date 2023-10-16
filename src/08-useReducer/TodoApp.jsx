import { useTodo } from "../Hooks";
import { TodoList } from "./TodoList";
import { AddTodo } from "./AddTodo";

export const TodoApp = () => {
  const { todos,todosCount,pendingTodoCount, handleDeleteTodo, handleNewTodo, handleToggleTodo } =
    useTodo();
  return (
    <>
      <h1>
        TODOAPP : {todosCount} <small>Pendientes : {pendingTodoCount }</small>
      </h1>
      <hr />
      <div className="row">
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
          <AddTodo onewTodo={handleNewTodo} />
        </div>
      </div>
    </>
  );
};
