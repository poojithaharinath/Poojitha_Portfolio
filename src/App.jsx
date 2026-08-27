import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ThreeBackground from './components/ThreeBackground';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');

  // Lock strictly to dark theme on document root
  useEffect(() => {
    document.documentElement.classList.add('dark');
    document.documentElement.classList.remove('light');
  }, []);

  // Scroll spy to observe active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'skills', 'experience', 'projects', 'education', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen relative bg-[#070913] text-slate-100 overflow-x-hidden">
      {/* Global Animated 3D Anti-Gravity Background Canvas */}
      <ThreeBackground />

      {/* Global Ambient Glow Orbs & Blueprint Grid */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-1/4 -left-48 w-96 h-96 rounded-full bg-sky-500/20 blur-[140px] animate-pulse duration-10000" />
        <div className="absolute top-2/4 -right-48 w-96 h-96 rounded-full bg-purple-500/20 blur-[140px] animate-pulse duration-7000" />
        <div className="absolute top-3/4 -left-48 w-96 h-96 rounded-full bg-indigo-500/20 blur-[140px] animate-pulse duration-8000" />

        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:36px_36px] opacity-30" />
      </div>

      <Navbar activeSection={activeSection} />
      
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
