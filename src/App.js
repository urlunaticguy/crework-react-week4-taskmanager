import React, { useState, useEffect } from 'react'
import ToDo from "./Components/ToDo";
import Done from "./Components/Done";
import SwapButton from "./Components/SwapButton";
import tasksDone from './utils/tasksDone';
import tasksRemaining from './utils/tasksRemaining';

function App() {
  const [first, setfirst] = useState();
  const [fakeRender, setFakeRender] = useState("H");
  const [renderDone, setrenderDone] = useState(0);

  const swapFunction = () => {
    const a = tasksDone.slice(0)
    const b = tasksRemaining.slice(0)
    tasksDone.splice(0, tasksDone.length)
    tasksDone.push(...b)
    tasksRemaining.splice(0, tasksRemaining.length)
    tasksRemaining.push(...a)
    setFakeRender(fakeRender + "SET")
  }

  return (
    <div className=" bgCustom w-[100vw] h-[100vh] flex flex-col justify-center items-center">
      <h1 className=" text-gray-200 text-[3rem] -mt-4 font-semibold">Task Management App</h1>
      <div className=" flex gap-20 mt-6">
        <ToDo stateChanger={setfirst} hola={setrenderDone} />
        <SwapButton swapCaller={swapFunction} />
        <Done stateChanger={setfirst} counter={first} changerValue={renderDone} />
      </div>
    </div>
  );
}

export default App;
