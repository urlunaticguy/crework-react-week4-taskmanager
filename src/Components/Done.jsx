import React, { useState, useEffect } from 'react'
import tasksDone from '../utils/tasksDone'

let notifyCounter = 1000000

function Done(props) {
  const [tD, settD] = useState(tasksDone);
  const [renderState, setrenderState] = useState()

  useEffect(() => {
    setrenderState(props.changerValue) //rendering in all cases
    if (props.counter !== undefined) { 
      tasksDone.push(props.counter)
      settD(tasksDone) //rendering in only tasks clicks
    }
  }, [props.changerValue]);

  const delTask = (taskName, delIndex) => {
    props.updateCount(notifyCounter++)
    props.setNotiffType(`"` + taskName + `" has been deleted 🗑️`)
    tasksDone.splice(delIndex, 1)
    setrenderState(renderState + "A")
  }
  
  return (
    <div className=' text-yellow-400 backdrop-blur-md bg-[#0C1E2D]/10 w-[32vw] h-[65vh] border-4 border-white rounded-lg py-4 px-8'>
      {tD.length === 0 && 
        <h1 className=' text-[1.8rem]'>You have no tasks completed.</h1>
      }
      {tD.length > 0 &&
        <h1 className=' text-[1.8rem]'>You have {tD.length} tasks completed.</h1>
      }
      <ol className=' mt-2'>
        {tD.map((taskObject, index) =>
          <div className=' flex py-2 gap-2' key={index}>
            <svg className=' w-[1.4rem] fill-gray-200' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path d="M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"/>
            </svg>
            <svg onClick={() => {delTask(taskObject, index)}} className=' cursor-pointer absolute w-[1.2rem] fill-red-600 hover:fill-red-300 ml-[1.9rem] mt-[0.5%]' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"/>
            </svg>
            <li className=' ml-[1.5rem] cursor-pointer hover:underline text-[1.2rem] text-gray-200'>{taskObject}</li>
          </div>
        )}
      </ol>
    </div>
  )
}

export default Done