import React from "react";

const TodoEdit = (props) => {
  const { onSave, onInput, setEdit, edit } = props;
  return (
    <>
      {edit ? (
        <>
          <input onInput={onInput} type="text" className="listoftodos" />
          <button onClick={onSave} className="button2">
            Save
          </button>
        </>
      ) : (
        <button className="button2" onClick={() => setEdit(true)}>
          Edit
        </button>
      )}
    </>
  );
};

export default TodoEdit;
