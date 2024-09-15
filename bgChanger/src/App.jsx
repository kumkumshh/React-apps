import { useState } from 'react'

import './App.css'

function App() {

  const [color, setColor] = useState("olive")

  return (
    <>
    <div className="w-full h-screen" style={{backgroundColor:color}}>
      <h1>Background Color Changer</h1>

      <div className='flex p-2 m-2 ' >
        <button onClick={()=>setColor("red")} className='text-white rounded-full m-2' style={{backgroundColor:"red"}}>red</button>
        <button onClick={()=>setColor("blue")} className='text-white rounded-full m-2' style={{backgroundColor:"blue"}}>blue</button>
        <button onClick={()=>setColor("green")} className='text-white rounded-full m-2' style={{backgroundColor:"green"}}>green</button>
        <button onClick={()=>setColor("pink")} className='text-white rounded-full m-2' style={{backgroundColor:"pink"}}>pink</button>
        <button onClick={()=>setColor("grey")} className='text-white rounded-full m-2' style={{backgroundColor:"grey"}}>grey</button>
        <button onClick={()=>setColor("orange")} className='text-white rounded-full m-2' style={{backgroundColor:"orange"}}>orange</button>
        <button onClick={()=>setColor("skyblue")} className='text-white rounded-full m-2' style={{backgroundColor:"skyblue"}}>skyblue</button>

      </div>
      </div>
    </>
  )
}

export default App
