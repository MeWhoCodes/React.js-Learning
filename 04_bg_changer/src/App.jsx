import { useState } from 'react'
import './App.css'


function App() {
  const [state, stateClr] = useState('bg-red-500')
  //const clr = 'bg-red-500'
  
  
  return (  
    <>
    <body className={state}>
    
      <div>
        <button onClick={()=> stateClr('bg-red-500')}>red</button>
        <button onClick={()=> stateClr('bg-blue-500')}>blue</button>
        <button onClick={()=> stateClr('bg-green-500')}>green</button>
        <button onClick={()=> stateClr('bg-purple-500')}>purple</button>
        <button onClick={()=> stateClr('bg-amber-500')}>amber</button>
        <button onClick={()=> stateClr('bg-yellow-500')}>yellow</button>
        <button onClick={()=> stateClr('bg-cyan-500')}>cyan</button>
      </div>
      

    </body>
    </>
  )
}

export default App
