import React from 'react';
import Marquee from './components/marquee/Marquee';
import Navbar from './components/navigation/Navbar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {Helmet} from 'react-helmet';
import Home from './pages';
import Projects from './pages/projects';
import Contact from './pages/contact';
import Footer from './components/footer/Footer';

function App() {
  return (
    <Router>
      <Helmet>
        <title>Vilma Mäkinen</title>
        <link rel='icon' href='#' type='image/icon' />
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossorigin />
        <link
          rel='stylesheet'
          href='https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap'
        />
      </Helmet>
      <Marquee /> {/* Add Marquee component*/}
      <Navbar /> {/* Add Navbar component */}
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/projects' element={<Projects />} />
        <Route exact path='/contact' element={<Contact />} />
      </Routes>
      <Footer /> {/* Add Footer component */}
    </Router>
  );
}

export default App;
