import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Technologies from './components/Technologies';
import Project from './components/Project';
import Contacts from './components/Contacts';

const App = () => {
  return (
    <div className="relative min-h-screen overflow-x-hidden text-neutral-300  ">
      {/* Background */}
      <div className="absolute inset-0 z-[-1] h-full w-full bg-slate-950">
        <div className="absolute inset-0 bg-[radial-gradient(circle_500px_at_50%_200px,#3e3e3e,transparent)]"></div>
      </div>
      

      {/* Content */}
      <div className="relative z-10 container mx-auto px-8">
        <Navbar />
        <Hero />
        <About />
        <Technologies />
        <Project />
        <Contacts />
      </div>
    </div>
  );
};

export default App;
