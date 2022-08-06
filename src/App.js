import React, { useState } from 'react';
import './App.css';
import Nav from './components/Nav';
import About from './components/About';
import Contact from './components/Contact';
import Project from './components/Project';
import Experience from './components/Experience';
import Footer from './components/Footer';
import Portfolio from './components/Portfolio';

function App() {
  const categories = ['About me', 'Project', 'Contact', 'Resume'];
  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  return (
    <div>
      <Nav 
        categories={categories}
        currentCategory={currentCategory}
        setCurrentCategory={setCurrentCategory}
      />
      {currentCategory === 'About me' && <About />}
      {currentCategory === 'Project' && <Project />}
      {currentCategory === 'Contact' && <Contact />}
      {currentCategory === 'Experience' && <Experience />}
      {currentCategory === 'Portfolio' && <Portfolio />}
      <Footer />
    </div>
  );
}

export default App;