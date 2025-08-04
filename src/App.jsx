import { useState } from 'react'
import reactLogo from '/react.svg'
import viteLogo from '/vite.svg'
import tailwindLogo from '/tailwindLogo.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  console.log(count); 
  return (
    <div className=''>
    
      <h1 className="text-3xl font-bold text-green-500">360°-Lernwebsite</h1>
      
    </div>
  )
}