import React from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import {HomePage, Dashboard,Login,Register} from './pages'


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App