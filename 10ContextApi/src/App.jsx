import React from "react";
import { useState } from "react";
import { Routes, Route, Link, NavLink } from "react-router-dom";
import UserContext from "./context/UserContext";

import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
import Profile from "./pages/Profile";

function App() {
  const [user, setUser] = useState(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {/* Navbar */}
      <nav style={{ marginBottom: "20px" }}>
        <Link to="/">Home</Link> |{" "}
        <Link to="/About">About</Link> |{" "}
        <Link to="/Login">Login</Link> |{" "}
        <Link to="/Profile">Profile</Link>
      </nav>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Profile" element={<Profile />} />
      </Routes>
    </UserContext.Provider>
  );
}

export default App;
