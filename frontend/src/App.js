import React from 'react';
import Navbar from './components/navigation/Navbar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages';
import About from './pages/about';
import Projects from './pages/projects';
import Contact from './pages/contact';

function App() {
  return (
    <Router>
      <Navbar /> {/* Render Navbar component */}
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/about' element={<About />} />
        <Route exact path='/projects' element={<Projects />} />
        <Route exact path='/contact' element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
