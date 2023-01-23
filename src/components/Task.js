import React from 'react'

export default function Task(props) {

  return (
  <>
  <div className="preview my-5">

          <h2>Your Tasks</h2>
          {props.taskNo>0?(<div id='TaskCard' class="card my-5 w-50">
            <div class="card-body">
              <h5 class="card-title">Task #{props.taskNo}</h5>
              <p class="card-text">
               {props.tasks}
              </p>
              <a onClick={props.delete} class="btn btn-danger">
                Delete
              </a>
            </div>
          </div>):<p className="my-5">Nothing to show here!</p>}
         
        </div>
  </>
  )
}
