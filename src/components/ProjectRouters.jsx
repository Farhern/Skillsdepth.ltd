import React from 'react';
import Home from './Container/Home';
import About from './Container/About';
import Services from './Container/Services';
import Contact from './Container/Contact';
import Footer from './Container/Footer';

const ProjectRouters = () => {
  return (
    <div>
      <Home />
      <About />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
}

export default ProjectRouters;
