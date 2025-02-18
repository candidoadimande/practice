import { useState } from 'react'
import Navbar from "./Navbar"
import Home from "./Home"
import Create from "./Create"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Blogdetail from "./Blogdetail"
function App() {
  
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <div className="content">
          <Routes>
            <Route path="/" element={<Home/>}  />
            <Route path="/create" element={<Create/>}  />
            <Route path="/blogs/:id" element={<Blogdetail/>}/>
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App;
