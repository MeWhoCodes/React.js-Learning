import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar.jsx';
import TextForm from './components/TextForm.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar title='Text Utility'/>
    <div class="container">
      <TextForm heading="Enter the text to be analysed"/>
    </div>
    </>
  )
}

export default App
