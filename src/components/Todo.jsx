import React, { useState } from "react";
import TodoEdit from "./TodoEdit";

const Todo = (props) => {
  const [edit, setEdit] = useState(false);
  const [title, setTitle] = useState("");
  const { todo, onToggleCompleted, onDelete, onSaveEdit } = props;

  const onSave = () => {
    setEdit(false);
    onSaveEdit(todo.id, title);
  };

  const onInput = (e) => {
    setTitle(e.target.value);
  };

  return (
    <>
      <li className={todo.completed ? "completed" : ""}>
        <p onClick={() => onToggleCompleted(todo.id)}> {todo.title}</p>
        <button
          className="button2"
          onClick={() => {
            onDelete(todo.id);
          }}
        >
          Delete
        </button>
        <TodoEdit
          onSave={onSave}
          onInput={onInput}
          setEdit={setEdit}
          edit={edit}
        />
      </li>
    </>
  );
};

export default Todo;
