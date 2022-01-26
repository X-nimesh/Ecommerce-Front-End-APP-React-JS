import { useState } from 'react'
import { BrowserRouter as Router, Link, Route, Routes} from 'react-router-dom'
import MenuBar from '../Component/MenuBar'
import About from '../Component/Pages/about'
import Account from '../Component/Pages/Account'
import Home from '../Component/Pages/Home'
import Login from '../Component/Pages/Login'
import NotFound from '../Component/Pages/NotFound'
import TryPage from '../Component/Pages/TryPage'
import ProtectedRoutes from '../Component/protectedRoutes'


import './App.css'

function App() {
  
  return (
    
    <div className="App">
      <MenuBar/>
  

      <Routes>
          <Route path="*" component={<NotFound/>} />        
        <Route path='/' element={<Login/>} />
        {/* <Route component={<ProtectedRoutes/>}>                  */}
          <Route path='/home' element={<Home/>} />                 
          <Route path='/try/:id' element={<TryPage/>} />                 
          <Route path='/about' element={<About />} />                 
          <Route path='/account' element={<Account />} />          
        {/* </Route> */}
      </Routes>

    </div>
    
  )
}

export default App
