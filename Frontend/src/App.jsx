import { useState } from 'react'
import Login from './components/Login'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Signup from './components/Signup'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='login' element={<Login/>}/>
        <Route path='signup' element={<Signup/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
