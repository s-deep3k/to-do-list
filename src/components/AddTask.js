import { useState } from "react";
import "./AddTask.css";
import Card from "./UI/Card";
import ErrorModal from "./ErrorModal";

const AddTask = (props) => {
  const [Input, updateInput] = useState("");
  const [isValid, Validator] = useState(true);
  const ModalSwitch=()=>{
    Validator(true)
  }
  const InputHandler = (event) => {
    updateInput(event.target.value.trim());
  };
  const submitHandler = (event) => {
    event.preventDefault();
    if (Input.length === 0) 
      Validator(false);
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
    <Card>
      {!isValid && (
        <ErrorModal
          title="Error!"
          message="You have to enter a task first!"
          onOkay={ModalSwitch}
        ></ErrorModal>
      )}
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
    </Card>
  );
};
export default AddTask;
