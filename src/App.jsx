import React, { useCallback, useEffect, useState } from "react";
import axios from "axios";
import Todos from "./components/Todos";
import "./App.css";

const App = () => {
  const [todos, setTodos] = useState();

  const getTodos = useCallback(async () => {
    try {
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/todos"
      );
      data.length = 20;
      setTodos(data);
    } catch (error) {
      console.log(error);
    }
  });

  useEffect(() => {
    getTodos();
  }, []);

  const onToggleCompleted = (id) => {
    const index = todos.findIndex((todo) => todo.id === id);
    const _todos = [...todos];
    _todos[index].completed = !_todos[index].completed; //inverts the boolean
    setTodos(_todos);
  };

  if (!todos) {
    return <h3>Loading Todos!</h3>;
  }

  //to be able to check or uncheck the list
  let done = 0;

  todos.forEach((todo) => {
    if (todo.completed) {
      done += 1;
    }
  });

  return (
    <>
      <h1>Marisis Todo list 🤠</h1>
      <p>Done: {done}</p>
      <p>Undone: {todos.length - done}</p>
      <Todos todos={todos} onToggleCompleted={onToggleCompleted} />
      <footer>&copy; 2023</footer>
    </>
  );
};

export default App;
