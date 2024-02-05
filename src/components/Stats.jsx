const Stats = (props) => {
  const { todos } = props;

  //to be able to check or uncheck the list
  let done = 0;

  todos.forEach((todo) => {
    if (todo.completed) {
      done += 1;
    }
  });
  return (
    <>
      <p className="stats">Done: {done}</p>
      <p className="stats">Undone: {todos.length - done}</p>
    </>
  );
};

export default Stats;
