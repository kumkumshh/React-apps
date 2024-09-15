import { useState } from 'react'
import './App.css'

function App() {
  
  const [count, setCount] = useState(0)
  // let count = 0;

  const addCounter = () =>{
    if( count >=20){
      
    }else{

    setCount(count + 1) 
  }
   
  } 
  
  const removeCounter = () =>{
    if( count <=0){
      
    }else{

    setCount(count - 1) 
  }
   
  } 


  return (

    <>
    <h1>Counter</h1>
     <h2>Counter value: {count}</h2>

     <button onClick={addCounter}>Add Counter</button>
     <br /> <br />
     <button onClick={removeCounter}>Remove Counter</button>

    </>
  )
}

export default App
