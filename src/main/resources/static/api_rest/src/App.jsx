import { useState } from 'react'
import './App.css'
import Home from './assets/components/Home'
import { Routes, Route } from 'react-router-dom'
import Products from './assets/components/Products'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/product' element={<Products/>} />
    </Routes>
  )
}

export default App
