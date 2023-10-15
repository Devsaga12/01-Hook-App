import React from "react";
import { Items } from "./Items";

export const TodoList = ({ todos = [] }) => {
  return (
    <ul className=" list-group">
      {todos.map((todo) => (
        <Items key={todo.id} todo={todo} />
      ))}
    </ul>
  );
};
