import { useState } from "react";
import "./AddTask.css";

const AddTask = (props) => {
  const [Input, updateInput] = useState("");
  const [isValid, Validator] = useState(true);
  const InputHandler = (event) => {
    updateInput(event.target.value.trim());
    if (Input.length === 0) Validator(false);
    else {
      Validator(true);
    }
  };
  const submitHandler = (event) => {
    event.preventDefault();
    if (Input.length === 0) Validator(false);
    else {
      Validator(true);
      const newTask = {
        id: Math.random().toString(),
        title: Input,
      };
      props.task(newTask);
      updateInput("");
    }
  };
  return (
    <form onSubmit={submitHandler}>
      <input
        className={`add-task-input ${!isValid ? "invalid" : ""}`}
        type="text"
        placeholder="Enter your task...."
        value={Input}
        onChange={InputHandler}
      ></input>
      <button className="add-button" type="submit">
        Add Task
      </button>
    </form>
  );
};
export default AddTask;
