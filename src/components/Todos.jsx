import React from "react";

const Todos = (props) => {
  const { todos, onToggleCompleted } = props;
  return (
    <>
      <ul>
        {todos.map((todo) => {
          return (
            <li
              onClick={() => onToggleCompleted(todo.id)}
              className={todo.completed && "completed"}
            >
              {todo.title}
            </li>
          );
        })}
      </ul>
    </>
  );
};
export default Todos;
