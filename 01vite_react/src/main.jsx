import { createElement } from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'

const domElement = createElement(
  'a',
  {href:'https://google.com', target:'_blank'},
  'Click for google redirection'
)


const AnotherElement = (
  <a href="https://facebook.com" taget='_blank'>Facebook</a>
)



createRoot(document.getElementById('root')).render(

  //domElement
  //AnotherElement
  <App/>
  

  

)
