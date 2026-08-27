import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FolderGit2, Layers } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

export default function Projects() {
  const featuredProjects = portfolioData.projects.filter((p) => p.featured);
  const otherProjects = portfolioData.projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-16 sm:py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-panel border-cyan-500/20 text-xs font-mono text-cyan-400 mb-3"
          >
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>PORTFOLIO SHOWCASE</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-2xl sm:text-4xl font-extrabold text-slate-100 mb-3"
          >
            Featured <span className="text-gradient">AI & Engineering Projects</span>
          </motion.h2>
          <p className="max-w-2xl text-slate-400 text-xs sm:text-base px-2">
            Production-ready RAG architectures, LLM automation tools, and cloud data integration pipelines.
          </p>
        </div>

        {/* Hero Featured Projects Section */}
        <div className="space-y-8 sm:space-y-12 mb-12 sm:mb-16">
          {featuredProjects.map((project, idx) => {
            const isReversed = idx % 2 === 1;

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="glass-panel rounded-2xl sm:rounded-3xl p-5 sm:p-10 relative overflow-hidden border-indigo-500/20 hover:border-sky-400/40 transition-all duration-300 group shadow-2xl"
              >
                <div className={`grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center ${isReversed ? 'lg:flex-row-reverse' : ''}`}>
                  
                  <div className={`lg:col-span-5 ${isReversed ? 'lg:order-2' : ''}`}>
                    <div className="relative rounded-xl sm:rounded-2xl p-5 sm:p-8 bg-gradient-to-br from-slate-900 via-indigo-950/80 to-slate-900 border border-slate-800 flex flex-col justify-between h-full overflow-hidden">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-sky-500/10 rounded-full blur-2xl pointer-events-none" />
                      <div className="absolute bottom-0 left-0 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl pointer-events-none" />

                      <div>
                        <span className="inline-block px-3 py-1 rounded-full text-[11px] font-mono bg-sky-500/20 text-sky-300 border border-sky-400/30 mb-3">
                          ★ HERO PROJECT
                        </span>
                        <h4 className="text-lg sm:text-xl font-bold text-slate-100 mb-1 sm:mb-2">{project.category}</h4>
                        <p className="text-xs text-slate-400 font-mono mb-4 sm:mb-6">{project.subtitle}</p>
                      </div>

                      <div className="grid grid-cols-3 gap-2 pt-4 border-t border-slate-800">
                        {project.impactStats?.map((stat, sIdx) => (
                          <div key={sIdx} className="bg-slate-950/80 p-2 rounded-lg border border-slate-800 text-center">
                            <span className="block text-[11px] sm:text-xs font-bold text-sky-400">{stat.value}</span>
                            <span className="block text-[9px] sm:text-[10px] text-slate-400 truncate">{stat.label}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className={`lg:col-span-7 ${isReversed ? 'lg:order-1' : ''}`}>
                    <h3 className="text-xl sm:text-3xl font-bold text-slate-100 group-hover:text-sky-300 transition-colors mb-3">
                      {project.title}
                    </h3>
                    <p className="text-slate-300 text-xs sm:text-base leading-relaxed mb-5 sm:mb-6">
                      {project.summary}
                    </p>

                    <ul className="space-y-2 mb-6 sm:mb-8">
                      {project.highlights.map((bullet, bIdx) => (
                        <li key={bIdx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300">
                          <span className="w-1.5 h-1.5 rounded-full bg-sky-400 mt-1.5 shrink-0" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="px-2.5 py-1 rounded-lg text-[11px] sm:text-xs font-mono bg-slate-900/90 text-sky-300 border border-sky-500/20"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Compact Grid */}
        <h3 className="text-lg sm:text-xl font-bold text-slate-200 mb-6 sm:mb-8 flex items-center gap-2">
          <Layers className="w-5 h-5 text-sky-400" />
          <span>More Specialized Solutions & Innovations</span>
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {otherProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="glass-panel-interactive p-5 sm:p-6 rounded-2xl flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="px-2.5 py-1 rounded-md text-[10px] sm:text-[11px] font-mono bg-purple-500/10 text-purple-300 border border-purple-500/20">
                    {project.category}
                  </span>
                </div>

                <h4 className="text-base sm:text-lg font-bold text-slate-100 group-hover:text-sky-300 transition-colors mb-2">
                  {project.title}
                </h4>
                <p className="text-xs text-slate-400 mb-4 leading-relaxed">
                  {project.summary}
                </p>

                <ul className="space-y-1.5 mb-5">
                  {project.highlights.map((bullet, bIdx) => (
                    <li key={bIdx} className="text-xs text-slate-300 flex items-start gap-1.5">
                      <span className="text-sky-400 font-bold">•</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-800">
                {project.tech.map((t) => (
                  <span key={t} className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-900 text-slate-400 border border-slate-800">
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
