import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes, Switch } from 'react-router-dom'

import About from '../Component/Pages/about'
import Home from '../Component/Pages/Home'
import Products from '../Component/Pages/Products'
import './App.css'

function App() {
  
  return (
    
    <div className="App">
    <h1>Welcome to React Router!</h1>


    {/* <Switch>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
      </Switch> */}

      <Routes>
        <Route path='/' element={<Home />} />                 
        <Route path='/about' element={<About />} />                 
        <Route path='/products' element={<Products />} />          
      </Routes>

    </div>
    
  )
}

export default App
