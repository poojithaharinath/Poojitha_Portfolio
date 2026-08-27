import React from 'react';
import { motion } from 'framer-motion';
import { User, Cpu, Award, Zap, CheckCircle2, MapPin, Mail, Phone } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

export default function About() {
  return (
    <section id="about" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-panel border-indigo-500/20 text-xs font-mono text-indigo-400 mb-3"
          >
            <User className="w-3.5 h-3.5" />
            <span>ABOUT ME</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-slate-100"
          >
            Bridging AI Research & <span className="text-gradient">Production Engineering</span>
          </motion.h2>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-16">
          {/* Main Summary Glass Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 glass-panel p-8 rounded-3xl relative overflow-hidden flex flex-col justify-between"
          >
            <div className="absolute top-0 right-0 p-8 opacity-5 text-indigo-400 pointer-events-none">
              <Cpu className="w-48 h-48" />
            </div>

            <div>
              <h3 className="text-2xl font-bold text-slate-100 mb-4 flex items-center gap-3">
                <span className="w-3 h-3 rounded-full bg-sky-400"></span>
                AI Engineer & Systems Architect
              </h3>
              <p className="text-slate-300 leading-relaxed mb-6 text-base sm:text-lg">
                {portfolioData.about.summary}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-slate-800">
              <div className="flex items-center gap-2 text-xs text-slate-400">
                <MapPin className="w-4 h-4 text-sky-400 shrink-0" />
                <span>{portfolioData.personal.location}</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-400">
                <Mail className="w-4 h-4 text-indigo-400 shrink-0" />
                <span className="truncate">{portfolioData.personal.email}</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-400">
                <Phone className="w-4 h-4 text-purple-400 shrink-0" />
                <span>{portfolioData.personal.phone}</span>
              </div>
            </div>
          </motion.div>

          {/* Value Highlights Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex flex-col justify-between gap-4"
          >
            <div className="glass-panel p-6 rounded-2xl border-l-4 border-l-sky-400">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-sky-500/10 text-sky-400 shrink-0">
                  <Zap className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-100 mb-1">Retrieval-Augmented Generation</h4>
                  <p className="text-sm text-slate-400">
                    Designing custom LangChain pipelines with Chroma & FAISS vector indices to index multi-format enterprise document stores.
                  </p>
                </div>
              </div>
            </div>

            <div className="glass-panel p-6 rounded-2xl border-l-4 border-l-indigo-500">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-indigo-500/10 text-indigo-400 shrink-0">
                  <Cpu className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-100 mb-1">Cloud Automation & APIs</h4>
                  <p className="text-sm text-slate-400">
                    Automating enterprise operations using Microsoft Graph API, Power Automate, and RESTful Python backends.
                  </p>
                </div>
              </div>
            </div>

            <div className="glass-panel p-6 rounded-2xl border-l-4 border-l-purple-500">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-purple-500/10 text-purple-400 shrink-0">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-100 mb-1">Quantum-Resistant Systems</h4>
                  <p className="text-sm text-slate-400">
                    Engineering post-quantum cryptographic security (Kyber & Falcon) into decentralized medical data architectures.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Highlight Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {portfolioData.stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass-panel-interactive p-6 rounded-2xl text-center flex flex-col justify-center items-center"
            >
              <span className="text-3xl sm:text-4xl font-extrabold text-gradient mb-1">
                {stat.value}
              </span>
              <span className="text-sm font-semibold text-slate-200 mb-1">
                {stat.label}
              </span>
              <span className="text-xs text-slate-400 leading-tight">
                {stat.description}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
