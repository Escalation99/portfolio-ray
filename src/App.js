import React from 'react';
import Navbar from "./components/Navbar.jsx"
import Hero from "./components/Hero.jsx"
import PortfolioList from './components/PortfolioList.jsx';
import About from './components/About.jsx';
import Contact from './components/Contact.jsx';


function App() {
  return (
    <div id="page-top">
      <Navbar />
      <Hero />
      <PortfolioList />
      <About />
      <Contact />
    </div>
  );
}

export default App;
