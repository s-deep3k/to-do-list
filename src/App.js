import { useState } from "react";
import AddTask from "./components/AddTask";
import EachTask from "./components/EachTask";
import "./App.css";
const DUMMY_TASKS = [
  { id: 1, title: "Walking My Dog" },
  { id: 2, title: "Learning ReactJs" },
];
function App() {
  const [Task, updateTask] = useState(DUMMY_TASKS);
  const TaskHandler = (task) => {
    updateTask((prevArray) => {
      return [task, ...prevArray];
    });
    console.log(Task);
  };
  const DeleteHandler = (id) => {
    console.log("Deleted ID "+id);
    updateTask((prevArray) => {
      return prevArray.filter((task) => task.id !== id);
    });
  };
  const eachTask = Task.map((each) => (
    <EachTask
      key={each.id}
      id={each.id}
      task={each.title}
      onDelete={DeleteHandler}
    ></EachTask>
  ));
  return (
    <div>
      
    </div>
    <div className="main-div">
      <h1>My To-Do List</h1>
      <AddTask task={TaskHandler}></AddTask>
      {Task.length > 0 ? eachTask : <h1>Empty List!</h1>}
    </div>
  );
}

export default App;
