import React, { useCallback, useEffect, useState } from "react";
import axios from "axios";
import Todos from "./components/Todos";
import "./App.css";
import Stats from "./components/Stats";
import Title from "./components/Title";
import Footer from "./components/Footer";
const App = () => {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");

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

  // delete

  const onDelete = (id) => {
    const index = todos.findIndex((todo) => todo.id === id);
    const _todos = [...todos];
    _todos.splice(index, 1);
    setTodos(_todos);
  };

  const onSaveEdit = (id, title) => {
    const index = todos.findIndex((todo) => todo.id === id);
    const _todos = [...todos];
    _todos[index].title = title;
    setTodos(_todos);
  };

  //allows me to write my todo
  const onInput = (e) => {
    setTodo(e.target.value);
  };

  //adds my todo

  const onClick = () => {
    const copy = [...todos];
    copy.push({ userId: 1, title: todo });
    setTodos(copy);
  };

  if (!todos) {
    return <h3>Loading Todos!</h3>;
  }

  return (
    <>
      <div className="background">
        <Title />
        <div className="inputadd">
          <input onInput={onInput} className="inputbox" />
          <button onClick={onClick} className="button">
            Add Todo
          </button>
        </div>

        <Stats todos={todos} />
        <Todos
          todos={todos}
          onToggleCompleted={onToggleCompleted}
          onDelete={onDelete}
          onSaveEdit={onSaveEdit}
        />
        <Footer />
      </div>
    </>
  );
};

export default App;
