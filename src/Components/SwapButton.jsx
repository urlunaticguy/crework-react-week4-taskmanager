import React from 'react'

let counter = "a"

function SwapButton(props) {
  const makeSwap = () => {
    props.swapCaller()
    props.setNotiffType("All Tasks SWAPPED ⬅️➡️")
    props.updateCount(counter)
    counter += "a"
  }
  return (
    <button onClick={() => {makeSwap()}} className=' bg-yellow-400 hover:bg-yellow-500 text-[1.1rem] w-[10rem] h-[2.5rem] text-blue-800 border-2 border-white rounded-lg font-bold'>⬅️ SWAP ➡️</button>
  )
}

export default SwapButton