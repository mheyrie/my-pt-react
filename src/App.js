import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from 'react';
import './App.css';
import Navbar from './componenets/Navbar';
import About from './componenets/About';
import Projects from './componenets/Projects';
import Home from './componenets/Home'
import './style.scss';


function App() {
  return (
    <div className="App"> 
      <div className="container">
        
        <Home/>
        
      </div>  
    </div>
  );
}

export default App;
