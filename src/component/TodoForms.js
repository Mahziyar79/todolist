import { useState } from "react";

const TodoForms = (props) => {
  const [todo, setTodo] = useState(props.edit ? props.edit.text : "");

  const changeHandler = (e) => {
    setTodo(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    if (!todo) {
      alert("enter the value");
      return;
    }

    props.submitHandler(todo);
    setTodo("");
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          placeholder={props.edit ? "update todo" : "Add todo"}
          onChange={changeHandler}
          value={todo}
          className="input"
        ></input>
        <button type="submit" className="button">
          {props.edit ? "update" : "Add"}
        </button>
      </form>
    </div>
  );
};

export default TodoForms;
