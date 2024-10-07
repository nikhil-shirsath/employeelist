import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import Login from './Components/Login';
import CreateEmployee from './Components/CreateEmployee';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Logout from './Components/Logout';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
      <Navbar></Navbar>
        <Routes>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/create_employee"element={<CreateEmployee />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/logout" element={<Logout/>}></Route>

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
