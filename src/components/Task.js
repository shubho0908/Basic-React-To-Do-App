import React from 'react'

export default function Task(props) {
    return (
<>
<div class="col-sm-6 mb-3 my-4 mb-sm-0" >
          <div class="card text-left" style={{boxShadow: "rgba(6, 24, 44, 0.2) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 2px -1px, rgba(255, 255, 255, 0.02) 0px 0px 0px inset"}}>
            <div class="card-body">
              <h5 class="card-title">Task #{props.index+1}</h5>
              <p class="card-text">{props.Data}</p>
              <a onClick={()=>{
                props.delete(props.id)
              }} class="btn btn-danger">
                Delete
              </a>
            </div>
          </div>
        </div>
        </>
      );
}
