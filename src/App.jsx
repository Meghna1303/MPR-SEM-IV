import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header/Header'
import Topsection from './components/Header/Topsection/Topsection'
import Sidebar from './components/Header/Sidebar/Sidebar'
import { Outlet } from 'react-router-dom'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Outlet/>
    </>
  )
}

export default App
