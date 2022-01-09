import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import about from '../Component/Pages/about'
import Home from '../Component/Pages/Home'
import Products from '../Component/Pages/Products'
import './App.css'

function App() {
  
  return (
    <div className="App">
      <h1>asd</h1>
    <Router>
      <Link href="/home">hey</Link>
        <Routes>
          <Route exact path='/'>
            <Home />
            <h1>hey2</h1>
          </Route>
          <Route path='/about'>
            <about />
          </Route>
       
        </Routes>
        
    </Router>
    </div>
  
  )
}

export default App
