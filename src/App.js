import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import NotFound from './components/NotFound';
import Footer from './components/Footer';
import Header from './components/Header';
import CaseStudy from './components/Case-study';

const App = () => {
  return (
    <Router>
      <div>
        <Header/>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/case-study" element={<CaseStudy />} />
          <Route component={NotFound} />
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
};

export default App;
