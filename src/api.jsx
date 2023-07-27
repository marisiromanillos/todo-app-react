import { useCallback, useEffect } from "react";

const getData = useCallback(async () => {
  try {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/todos/1"
    );
    console.log(data);
  } catch (error) {
    console.log(error);
  }
});

useEffect(() => {
  getData();
}, []);
