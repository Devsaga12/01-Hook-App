import { useReducer } from "react";
import { todoReducer } from "./todoReduce";

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
      <h1>TODO APP</h1>
      <hr />

      <ul>
        <li>item 1</li>
        <li>item 2</li>
        <li>item 3</li>
      </ul>
    </>
  );
};
