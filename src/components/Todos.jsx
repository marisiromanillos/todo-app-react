import React from "react";

// const Todos = (props) => {
//   const { todos } = props;
//   return (
//     <>
//       <ul>
//         {todos.map((todo) => {
//           return (
//             <li className={todo.completed && "completed"}>{todo.title}</li>
//           );
//         })}
//       </ul>
//     </>
//   );
// };

// export default Todos;

const Todos = (props) => {
  const { todos } = props;
  return (
    <>
      <ul>
        {todos.map((todos) => {
          return (
            <li className={todos.completed && "completed"}>{todos.title}</li>
          );
        })}
      </ul>
    </>
  );
};
export default Todos;
