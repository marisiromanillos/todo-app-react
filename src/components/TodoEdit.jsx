import React from "react";

const TodoEdit = (props) => {
  const { onSave, onInput, setEdit, edit } = props;
  return (
    <>
      {edit ? (
        <>
          <input onInput={onInput} type="text" />
          <button onClick={onSave}>Save</button>
        </>
      ) : (
        <button onClick={() => setEdit(true)}>Edit</button>
      )}
    </>
  );
};

export default TodoEdit;
