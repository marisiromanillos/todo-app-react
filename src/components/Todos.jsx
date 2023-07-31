import React from "react";
import Todo from "./Todo";

const Todos = (props) => {
  const { todos, onToggleCompleted, onDelete, onSaveEdit } = props;
  return (
    <>
      <ul>
        {todos.map((todo) => {
          return (
            <Todo
              key={todo.id}
              todo={todo}
              onToggleCompleted={onToggleCompleted}
              onDelete={onDelete}
              onSaveEdit={onSaveEdit}
            />
          );
        })}
      </ul>
    </>
  );
};
export default Todos;
