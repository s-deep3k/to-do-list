import { useState } from "react";
import './AddTask.css'

const AddTask = (props) => {
  const [Input, updateInput] = useState("");
  const InputHandler = (event) => {
    updateInput(event.target.value);
  };
  const submitHandler=(event)=>{
      event.preventDefault();
      const newTask = {
        id: Math.random().toString(),
        title: Input
      }
      props.task(newTask)
      updateInput('')
  }
  return (
    <form onSubmit={submitHandler}>
      <input
        className="add-task-input"
        type="text"
        placeholder="Enter your task...."
        value={Input}
        onChange={InputHandler}
      ></input>
      <button className="add-button" type="submit">Add Task</button>
    </form>
  );
};
export default AddTask;
