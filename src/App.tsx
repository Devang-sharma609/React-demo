import React from 'react';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Background } from './components/Background';
import { ExtraCurricular } from './components/ExtraCurricular';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Popup } from './components/Popup';

function App() {
  return (
    <div className="select-none">
      <Popup/>
      <Hero />
      <About />
      <Background />
      <ExtraCurricular />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;