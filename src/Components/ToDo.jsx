import React, { useState, useRef } from 'react'
import tasksRemaining from '../utils/tasksRemaining'
import AddTaskButton from './AddTask.jsx'

let no = 1, notifyCounter = 0

function ToDo(props) {

  const [first, setfirst] = useState(0);

  const sendTaskToDone = (taskText, indexForDeletion) => {
    props.stateChanger(taskText)
    props.hola(no++)
    props.updateCount(notifyCounter++)
    props.setNotiffType(`"` + taskText + `" has been completed ✅`)
    tasksRemaining.splice(indexForDeletion, 1)
    setfirst(first+2)
  }

  const deleteTask = (taskText, indexDel) => {
    props.updateCount(notifyCounter++)
    props.setNotiffType(`"` + taskText + `" has been deleted 🗑️`)
    tasksRemaining.splice(indexDel, 1)
    setfirst(first+2)
  }

  const addnewTask = (task) => {
    props.updateCount(notifyCounter++)
    props.setNotiffType(`"` + task + `" has been added ✅`)
    setfirst(first+2)
  }
  
  return (
    <div className=' backdrop-blur-md w-[30vw] h-[40rem] bg-[#0C1E2D]/10 text-yellow-400 border-4 border-white rounded-lg py-4 px-8'>
      {tasksRemaining.length === 0 && 
        <h1 className=" text-[1.8rem]">You have no tasks remaining.</h1>
      }
      {tasksRemaining.length > 0 && 
        <h1 className=' text-[1.8rem]'>You have {tasksRemaining.length} tasks remaining.</h1>
      }
      <ol className=' mt-2'>
        {tasksRemaining.map((taskObject, index) => 
          <div className=' flex py-2 gap-2 mb-2 items-center w-[100%]' key={index}>
            <div onClick={() => {sendTaskToDone(taskObject, index)}} 
                  className=' cursor-pointer'>
              <svg className=' z-10 absolute w-[1.3rem] mt-[-2%] fill-yellow-500 border-[2.5px] border-white rounded-full hover:hidden' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512z"/>
              </svg>
              <svg className=' z-0 absolute w-[1.3rem] mt-[-2%] fill-white' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"/>
              </svg>
              
            </div>
            <svg onClick={() => {deleteTask(taskObject, index)}} className=' cursor-pointer absolute w-[1.2rem] fill-red-600 hover:fill-red-300 ml-[1.8rem]' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"/>
            </svg>
            <li className=' text-center ml-[3rem] cursor-pointer hover:underline text-[1.2rem] text-white'>{taskObject}</li>            
          </div>
        )}
      </ol>
      <AddTaskButton hey={addnewTask} />
    </div>
  )
}

export default ToDo