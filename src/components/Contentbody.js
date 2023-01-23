import React, { useState } from "react";
import Task from "./Task";

export default function Contentbody() {
  // Hooks
  const [Items, setItems] = useState([]);
  const [Input, setInput] = useState();
  const [taskNo, settaskNo] = useState(0);
  const [disabled, setdisabled] = useState(true)

  //   Functions
  const InputChange = (e) => {
    setInput(e.target.value);
    if(e.target.value === ""){
        setdisabled(true);
    }else{
        setdisabled(false);
    }
  };

  const AddTask = () => {
  if (Input) {
    setItems((oldItems) => {
        return [...oldItems, Input];
      });
      settaskNo(taskNo+1)
      setInput("");    
  }
  };

  // This is a JavaScript function called "DeleteTask" which takes in a parameter "id". Inside the function, it uses the "setItems" method to update the "items" state. The "setItems" method takes in a callback function which filters the "oldItems" and returns a new array without the item that has the index equal to the passed "id" parameter. This essentially removes the item from the "items" state that has the same index as the passed "id" parameter.

  const DeleteTask=(id)=>{
    setItems((oldItems)=>{
        return oldItems.filter((e,index)=>{
            return index !== id
            
        })
        
    })
    settaskNo(taskNo-1)
  }

  return (
    <>
      <div
        className="container text-center my-5"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <h1>To-Do App 📋</h1>
        <div className="input-group input-group-lg my-4">
          <input
          id="input"
            type="text"
            className="form-control"
            aria-label="Sizing example input"
            placeholder="Enter your tasks here.."
            aria-describedby="inputGroup-sizing-lg"
            onChange={InputChange}
            value={Input}
          />
          <button onClick={AddTask} type="button" className="btn btn-success" disabled={disabled}>
            Add
          </button>
        </div>

        <h1 className="my-5">Your Tasks</h1>

        {/* Iterating the elements of Array */}
        {taskNo>0?Items.map((data, index) => {
          return <Task id={index} key={index} Data={data} delete= {DeleteTask} index = {index}/>;
        }):<p>Nothing to show here!</p>}
      </div>
    </>
  );
}
