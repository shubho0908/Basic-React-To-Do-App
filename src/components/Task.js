import React from "react";

export default function Task(props) {
  return (
    <>
      <div class="col-sm-6 mb-3 mb-sm-0">
        <div class="card text-left">
          <div class="card-body">
            <h5 class="card-title">Task 1</h5>
            <p class="card-text">
              {props.input}
            </p>
            <a href="/" class="btn btn-danger">
              Delete
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
