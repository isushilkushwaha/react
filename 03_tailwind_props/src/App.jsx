import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)

  let Myobj={
    Naa:"Sushil",
    age:24
  }

  return (
    <>
<h1 className='bg-amber-500 text-amber-100  p-4 rounded-2xl' >Talwind CSS</h1>
<Card />
<Card name="Sushil" age="5"/>
<Card/>

    </>
  )
}

export default App
