import React from 'react'
import {UserName, Password, Register, Reset, Profile, PageNotFound} from './components'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

const App = () => {
  return (
    < BrowserRouter>
      <Routes>
        <Route path="/" element={<UserName />} />
        <Route path="/password" element={<Password />} />
        <Route path="/register" element={<Register />} />
        <Route path="/reset" element={<Reset />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App