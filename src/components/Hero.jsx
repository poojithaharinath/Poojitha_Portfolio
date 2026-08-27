import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Mail, Sparkles, ChevronRight } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

const GithubIcon = (props) => (
  <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = (props) => (
  <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  const roles = portfolioData.personal.roleTitles;

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const typingSpeed = isDeleting ? 40 : 80;

    const timer = setTimeout(() => {
      if (!isDeleting && displayText === currentRole) {
        setTimeout(() => setIsDeleting(true), 1800);
      } else if (isDeleting && displayText === '') {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      } else {
        setDisplayText(
          isDeleting
            ? currentRole.substring(0, displayText.length - 1)
            : currentRole.substring(0, displayText.length + 1)
        );
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, roleIndex, roles]);

  return (
    <section id="hero" className="relative min-h-[90vh] sm:min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        
        {/* Status Pill Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 rounded-full bg-slate-900/90 border border-sky-400/40 shadow-lg mb-6 sm:mb-8"
        >
          <span className="relative flex h-2.5 w-2.5 sm:h-3 sm:w-3 shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 sm:h-3 sm:w-3 bg-sky-400"></span>
          </span>
          <span className="text-[11px] sm:text-xs font-mono font-bold tracking-wide text-sky-300">
            AVAILABLE FOR HIGH-IMPACT AI ROLES
          </span>
          <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-sky-400 shrink-0" />
        </motion.div>

        {/* Main Name Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-100 mb-4"
        >
          Hi, I'm <span className="text-gradient">{portfolioData.personal.name}</span>
        </motion.h1>

        {/* Animated Dynamic Role Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="h-12 sm:h-16 flex items-center justify-center mb-6"
        >
          <p className="text-xl sm:text-3xl lg:text-4xl font-bold text-slate-200">
            I am a <span className="text-gradient-cyan font-mono">{displayText}</span>
            <span className="animate-pulse text-sky-400">|</span>
          </p>
        </motion.div>

        {/* Short Value Proposition */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-2xl text-sm sm:text-base lg:text-lg text-slate-300 mb-10 leading-relaxed font-normal px-2"
        >
          {portfolioData.personal.valueProposition}
        </motion.p>

        {/* Call to Action Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex items-center justify-center mb-12"
        >
          <a
            href="#projects"
            className="flex items-center gap-2.5 px-8 py-3.5 rounded-xl font-bold text-white bg-gradient-to-r from-sky-500 via-indigo-600 to-purple-600 shadow-xl shadow-indigo-500/30 hover:shadow-sky-500/50 hover:scale-[1.03] transition-all duration-200"
          >
            <span>View Featured Work</span>
            <ChevronRight className="w-4 h-4 stroke-[2.5]" />
          </a>
        </motion.div>

        {/* Social Links Row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex items-center gap-5 mb-14"
        >
          <a
            href={portfolioData.personal.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="p-3.5 rounded-full bg-slate-900 border border-slate-800 text-slate-300 hover:text-sky-400 hover:border-sky-400/50 shadow-sm transition-all duration-200 hover:scale-110"
          >
            <GithubIcon />
          </a>
          <a
            href={portfolioData.personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="p-3.5 rounded-full bg-slate-900 border border-slate-800 text-slate-300 hover:text-sky-400 hover:border-sky-400/50 shadow-sm transition-all duration-200 hover:scale-110"
          >
            <LinkedinIcon />
          </a>
          <a
            href={`mailto:${portfolioData.personal.email}`}
            aria-label="Email Contact"
            className="p-3.5 rounded-full bg-slate-900 border border-slate-800 text-slate-300 hover:text-sky-400 hover:border-sky-400/50 shadow-sm transition-all duration-200 hover:scale-110"
          >
            <Mail className="w-5 h-5" />
          </a>
        </motion.div>

        {/* Scroll Down Indicator */}
        <motion.a
          href="#about"
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-2 text-slate-400 hover:text-sky-400 font-bold transition-colors"
        >
          <span className="text-[11px] font-mono tracking-widest uppercase">Scroll Down</span>
          <ArrowDown className="w-4 h-4 stroke-[2.5]" />
        </motion.a>
      </div>
    </section>
  );
}
