import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [counter,setCounter]= useState(0)

  //let counter =23

const add= ()=>{
  if(counter>=25){}
  else{
setCounter(counter+2)
  }
}

const remove =() =>{
  if(counter<=0){}
  else{
  setCounter(counter-1)
  
  }}
  return (
    <>
  <h1>Sushil Kushwaha:-{counter}</h1>
  <h2>Counter: {counter}</h2>

<button onClick={add}>Add Value</button>
<br/>

<button onClick={remove}>Remove Value </button>

<p>counter:{counter}</p>

  </>
  )
}

export default App
