import React from 'react'
import About from './componets/About'
import Home  from './componets/Home'
import Login from './componets/Login'
import { Route, Routes } from 'react-router-dom'
import { NavLink, Link } from 'react-router-dom'


const App = () => {
  return (
    <>
        <nav style={{ marginBottom: "20px" }}>
        <Link to="/">Home</Link> |{" "}
        <Link to="/about">About</Link> |{" "}
        <Link to="/login">Login</Link>
      </nav>
    <Routes>
      <Route path='/' element ={<Home/>}/>
      <Route path='/About' element ={<About/>}/>
      <Route path='/Login' element ={<Login/>}/>
    </Routes>
    </>
  );
}

export default App
