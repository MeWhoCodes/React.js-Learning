import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Comp from './components/Comp'


function App() {
  let arr = [1,2,3,4]

  return (
    <>

      <h1 className='bg-green-400 round-xl text-black'>Tailwindcss and Props</h1>
      <Comp Title="Rockstar" myObj = {arr}/>
      <Comp Title="Band" myObj = {arr}/>

    </>
  )
}

export default App
