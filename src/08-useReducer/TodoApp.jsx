import { useReducer } from "react";
import { todoReducer } from "./todoReduce";
import { TodoList } from "./TodoList";

const initState = [
  {
    id: new Date().getTime(),
    description: " Recolectar la piedra del alma",
    done: false,
  },

  {
    id: new Date().getTime() * 3,
    description: " Recolectar la piedra del alma",
    done: false,
  },
];

export const TodoApp = () => {
  const [todos, dispatch] = useReducer(todoReducer, initState);
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
          <form>
            <input
              type="text"
              placeholder="Write Note "
              className="form-control"
            />
            <button type="submit" className="btn btn-outline-primary mt-2">
              Agregar
            </button>
          </form> 
        </div>
      </div>

    </>
  );
};
