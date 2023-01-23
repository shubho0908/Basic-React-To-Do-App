import React, { useState } from "react";
import Task from "./Task";

export default function Contentbody() {
  const [tasks, settasks] = useState();
  const [Totaltasks, setTotaltasks] = useState([]);
  const [taskNo, settaskNo] = useState(0);

  const AddTask = () => {
    settasks(document.getElementById("main-text").value);
    settaskNo(taskNo+1)
    document.getElementById("main-text").value = "";
  };

  const DeleteTask = () => {
    document.getElementById("main-text").value = "";
    settasks(document.getElementById("main-text").value);
    settaskNo(taskNo-1)
    console.log("deleted");
  };

  return (
    <>
      <div className="container text-center my-5">
        <h1>To-Do App</h1>
        <div className="input-group input-group-lg my-4">
          <input
            id="main-text"
            type="text"
            className="form-control"
            aria-label="Sizing example input"
            placeholder="Enter your tasks here.."
            aria-describedby="inputGroup-sizing-lg"
          />
          <button onClick={AddTask} type="button" className="btn btn-success">
            Add
          </button>
        </div>
        <Task taskNo={taskNo} tasks={tasks} delete={DeleteTask}/>

      </div>
    </>
  );
}
