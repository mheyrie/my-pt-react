import React from 'react';
import {Routes , Route, BrowserRouter} from 'react-router-dom'
import '../App.css';
import Navbar from './Navbar';
import About from './About';
import Projects from './Projects';
import Home from './Home';

function App() {
  return (
    <div className="App"> 
      <BrowserRouter>
        <Navbar />
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/about" element={<About />}/>
            <Route path="/projects" element={<Projects />}/>
            
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
