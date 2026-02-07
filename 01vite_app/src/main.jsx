import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from 'react'

import App from './App.jsx'

function Myapp(){
  return(
    <h1>This is coustom app!</h1>
  )
}

const anotherElement=(
  <a href="http://Googal.com" target="_blank"> Visit Google</a>
)

const name="Sushil"
const reactElement=React.createElement(
'a',
{href:'http://google.com'},
  'click me to ',
  name
)


createRoot(document.getElementById('root')).render(
  
<StrictMode>
    <Myapp />
    <App />
  </StrictMode>

  //anotherElement
  //reactElement
)
