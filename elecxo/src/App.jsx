import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import electronicProducts from './assets/data/product'
import Navbar from './layout/Navbar'
import catogary from './assets/data/catogary'
import Categories from './components/Categories'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Routes>
      <Route path='/' element={<HomePage/>}></Route>
    </Routes>  
    </>
  )
}

export default App
