import { useReducer } from "react";
import { todoReducer } from "./todoReduce";
import { TodoList } from "./TodoList";
import { AddTodo } from "./AddTodo";

const initState = [
  {
    id: new Date().getTime(),
    description: " Recolectar la piedra del alma",
    done: false,
  },

  {
    id: new Date().getTime() * 3,
    description: " Recolectar la piedra del tiempo",
    done: false,
  },
];

export const TodoApp = () => {
  const [todos, dispatch] = useReducer(todoReducer, initState);

  const handleNewTodo = (todos)=>{
    console.log({todos})
  }
  return (
    <>
      <h1>TODOAPP : 10 <small>Pendientes : 2</small></h1>
      <hr />
      <div className="row">
        <div className="col-7">
          <TodoList todos={ todos}/>
        </div>

        <div className="col-5">
          <h4>Agregar TODO</h4>
          <hr />
          <AddTodo onewTodo= { handleNewTodo }/>
        </div>
      </div>

    </>
  );
};
