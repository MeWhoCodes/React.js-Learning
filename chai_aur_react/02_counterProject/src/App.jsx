import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import {useState} from 'react'

function App() {
  //let counter = 5 // instead of this, we use useState(_default_value_)
  const [counter,setCounter] = useState(15) // counter has the value of the current variable, setCounter() is a function which updates counter val.

  const adder = ()=>{
    //counter=+1 // variable is updated but on the UI
    setCounter(counter+1)
  }
  const subber = ()=>{
    //counter =-1 // variable is updated but on the UI
    setCounter(counter-1)
  }
  

  return (
    <>
    <h1>Counter project</h1>
    <h2>counter value: {counter}</h2>
    <button onClick={adder}>Add value (current counter value: {counter})</button>
    <br/>
    <button onClick={subber}>Substract value (current counter value: {counter})</button>
    <p>As we saw, we can't update UI jst like that, we have React hooks for counter ({counter})</p>
    </>
  )
} 

export default App
