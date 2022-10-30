import React, { useState, useRef } from "react";
import tasksRemaining from '../utils/tasksRemaining'

function AddTask(props) {
  const [first, setfirst] = useState(0);
  const [second, setsecond] = useState("");
  const ref = useRef(null)
  const inputField = ref.current

  const addNewTask = () => {
    setfirst(first + 1)
  }

  const updateInput = () => {
    setsecond(inputField.value)
  }

  const submitTask = () => {
    tasksRemaining.push(second)
    props.hey(second)
    setsecond("")
    inputField.value = ""
  }

  return (
    <>
      <button onClick={() => {addNewTask()}} className=" w-[auto] border-white border-2 px-2 py-2 rounded-lg hover:bg-yellow-500 hover:text-black hover:font-bold">
          {first === 0 &&
            <span>Add a new Task</span>
          }
          {first > 0 && 
            <div className=" flex bg-yellow-500 text-black">
              <input ref={ref} onChange={() => {updateInput()}} className=" p-1" placeholder="Add New Task" />
              <div onClick={() => {submitTask()}} className=" p-1">Submit</div>
            </div>
          }
      </button>
    </>
  );
}

export default AddTask;
