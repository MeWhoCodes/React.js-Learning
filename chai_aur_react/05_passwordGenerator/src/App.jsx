import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [len, setLength] = useState(8)
  const [isNum, setNum] = useState(false)
  const [isChar, setChar] = useState(false)
  const [pass, setPass] = useState('')

  //useRef hook
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(()=>{
    let pass = ''
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
    if(isNum) str += '1234567890'
    if(isChar) str += '+-=/?!@#$%^&*~`'
    for(let i=0;i<len;i++){
      let ind = Math.floor(Math.random()*str.length + 1)
      pass += str.charAt(ind)
    }
    setPass(pass)
  },[len , isNum, isChar])

  const copier =()=>{
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(pass)
  }

  useEffect(()=>{passwordGenerator()}, [len, isChar,isNum])
  return (
    <>
    <h1 className='text-4xl text-center'>Password Generator</h1>
    <div>
      <input
      type="text"
      value={pass}
      placeholder='password'
      ref={passwordRef}
      readOnly
      />
    </div>
    <button className='bg-blue-400 rounded-4xl p-2' onClick={copier}>Copy</button>
    <input type="range"
    min={8}
    max={20}
    value={len}
    className='cursor-pointer'
    onChange={(e)=>{setLength(e.target.value)}}
    
    />
    <label>Length: {len}</label>

    <div>
      <input type="checkbox"
      onChange={(e)=>{setNum((prev)=>!prev)}}
      />
      <label>isNum: {isNum}</label>
    </div>

     <div>
      <input type="checkbox"
      onChange={(e)=>{setChar((prev)=>!prev)}}
      />
      <label>isChar: {isChar}</label>
    </div>
    </>
  )
}

export default App
