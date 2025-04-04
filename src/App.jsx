import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WorkExperience from './components/WorkExperience';
import Projects from './components/Projects';
import About from './components/About';
import Footer from './components/footer';

function App() {
  return (
    <div className="bg-black">
      <Navbar />
      <Hero />
      <WorkExperience />
      <Projects />
      <About />
      <Footer />
    </div>
  );
}

export default App;