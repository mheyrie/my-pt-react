import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from 'react';
import Navbar from './pages/Homes/Navbar';
import Home from './pages/Homes/Homescreen'
import './style.scss';


function App() {
  return (
    <div className="App"> 
      <Router>
        <div>
          <Navbar/>
          <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="*" element={<div>404 Not Found</div>}></Route>
          </Routes>
        </div>
      </Router> 
    </div>
  );
}

export default App;
