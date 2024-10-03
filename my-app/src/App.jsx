import React from 'react';
import Header from './Header';
import Hero from './Hero';
import About from './About';
import Services from './Services';
import Portfolio from './Protfolio';
import Working from './Working';
import Testimonials from './Testimonials';
import Contact from './Contact';
import Footer from './Footer';
import { Element } from 'react-scroll';

const App = () => {
  return (
    <div>
      <Header/>
      <Element name="hero">
        <Hero />
      </Element>
      <Element name="about">
        <About />
      </Element>
      <Element name="services">
        <Services />
      </Element>
      <Element name="portfolio">
        <Portfolio />
      </Element>
      <Element name="working">
        <Working />
      </Element>
      <Element name="testimonials">
        <Testimonials />
      </Element>
      <Element name="contact">
        <Contact />
      </Element>
      <Footer />
    </div>
  );
};

export default App;
