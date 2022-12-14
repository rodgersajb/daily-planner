import { useState } from 'react'

import './setUp.scss'
import './Components/Fontawesome'
import LogIn from './Components/Login';
import Home from './Components/Home';
import { BrowserRouter, BrowserRouter as Router, Routes, Route } from 'react-router-dom';





function App() {  

  return (
 
<>
<BrowserRouter>
<Routes>
 <Route path='/' element={<LogIn/>}/>
 <Route path='/Home' element={<Home/>}/>
 
</Routes>


</BrowserRouter>
</>
 
 
  )
}

export default App
