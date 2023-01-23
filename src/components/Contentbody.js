import React, { useState } from "react";
import Task from "./Task";

export default function Contentbody() {
  const [Input, setInput] = useState();
  const InputChange = (e) => {
    setInput(e.target.value);
  };
  return (
    <>
      <div className="container text-center my-5">
        <h1>To-Do App</h1>
        <div className="input-group input-group-lg my-4">
          <input
            type="text"
            className="form-control"
            aria-label="Sizing example input"
            placeholder="Enter your tasks here.."
            aria-describedby="inputGroup-sizing-lg"
            onChange={InputChange}
          />
          <button type="button" className="btn btn-success">
            Add
          </button>
        </div>
        <Task input={Input}/>
      </div>
    </>
  );
}
