import React, { useState, useEffect, useRef } from 'react'
import ToDo from "./Components/ToDo";
import Done from "./Components/Done";
import SwapButton from "./Components/SwapButton";
import tasksDone from './utils/tasksDone';
import tasksRemaining from './utils/tasksRemaining';

let counterForNotification = 0

function App() {
  const [first, setfirst] = useState();
  const [fakeRender, setFakeRender] = useState("H");
  const [renderDone, setrenderDone] = useState(0);
  const [notificationState, setnotificationState] = useState("");
  const [notifType, setnotifType] = useState();
  const [count, setcount] = useState();
  const ref = useRef(null)

  const swapFunction = () => {
    const a = tasksDone.slice(0)
    const b = tasksRemaining.slice(0)
    tasksDone.splice(0, tasksDone.length)
    tasksDone.push(...b)
    tasksRemaining.splice(0, tasksRemaining.length)
    tasksRemaining.push(...a)
    setFakeRender(fakeRender + "SET")
  }

  useEffect(() => {
    setnotificationState(notifType)
    if (counterForNotification > 1) {
      const notification = ref.current
      notification.className = "font-semibold bg-gray-300 absolute bottom-[5%] right-[15%] w-[27rem] h-[3rem] text-center items-center flex justify-center text-[1.2rem] rounded-lg"
      setTimeout(() => {
        notification.className = "hidden"
      }, 1500);
    }
    counterForNotification++
  }, [count]);
  

  return (
    <div className=" bgCustom w-[100vw] h-[100vh] flex flex-col justify-center items-center">
      <h1 className=" text-gray-200 text-[3rem] -mt-4 font-semibold">Task Management App</h1>
      <div className=" flex gap-20 mt-6">
        <ToDo stateChanger={setfirst} hola={setrenderDone} updateCount={setcount} setNotiffType={setnotifType} />
        <SwapButton swapCaller={swapFunction} updateCount={setcount} setNotiffType={setnotifType} />
        <Done stateChanger={setfirst} counter={first} changerValue={renderDone} updateCount={setcount} setNotiffType={setnotifType} />
      </div>
      <div ref={ref}>{notificationState}</div>
    </div>
  );
}

export default App;
