import { useState } from 'react'
import './App.scss'
import './setUp.scss'
import './Components/Fontawesome'
import LogIn from './Components/Login';
import { BrowserRouter, BrowserRouter as Router, Routes, Route } from 'react-router-dom';




function App() {  

  return (
 
<>
<BrowserRouter>
<Routes>
 <Route path='/' element={<LogIn/>}/>

</Routes>

</BrowserRouter>
</>
 
 
  )
}

export default App
