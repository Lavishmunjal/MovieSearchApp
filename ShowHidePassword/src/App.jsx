import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <>
    <div>
      <h1>Enter Your password</h1>
      <input 
      type={showPassword? "text":"password"} 
      placeholder='Enter Your Password'/>
      <br />
      <input 
      type="checkbox" 
      onClick={()=>setShowPassword(!showPassword)} />
      <label>Show Password</label>
    </div>
    </>
  )
}

export default App
