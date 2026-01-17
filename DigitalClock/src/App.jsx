import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [time, setTime] = useState(new Date())

  useEffect(()=>{
    const interval = setInterval(()=>{
      setTime(new Date())
    }, 1000)


  }

  ,[])

  const hours = time.getHours()
  const minutes = time.getMinutes()
  const seconds = time.getSeconds()


  const format = (unit)=>{
    return unit<10 ? "0"+unit:unit
  }
  const isAm = hours<12 ? "AM":"PM"
  const displayHours = hours%12 || 12

  
  

  return (
    <>
    <div>
      <h1>Digital Clock</h1>
        <div className="clock">
        {format(displayHours)} :
        {format(minutes)} :
        {format(seconds)}
        {isAm}
      </div>
    </div>
    </>
  )
}

export default App
