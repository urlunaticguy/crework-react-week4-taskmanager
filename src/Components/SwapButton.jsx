import React, { useEffect } from 'react'

function SwapButton(props) {
  const makeSwap = () => {
    props.swapCaller()
  }
  return (
    <button onClick={() => {makeSwap()}} className=' bg-yellow-400 hover:bg-yellow-500 text-[1.1rem] w-[10rem] h-[2.5rem] text-blue-800 border-2 border-white rounded-lg font-bold'>⬅️ SWAP ➡️</button>
  )
}

export default SwapButton