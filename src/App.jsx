import React, { useCallback, useEffect, useState } from "react";
import axios from "axios";
import Todos from "./components/Todos";

const App = () => {
  const [todos, setTodos] = useState();

  const getTodos = useCallback(async () => {
    try {
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/todos"
      );
      setTodos(data);
    } catch (error) {
      console.log(error);
    }
  });

  useEffect(() => {
    getTodos();
  }, []);

  if (!todos) {
    return <h3>Loading Todos!</h3>;
  }

  return (
    <>
      <h1>Marisi's Todo list 🤠</h1>
      <Todos todos={todos} />
    </>
  );
};

export default App;
