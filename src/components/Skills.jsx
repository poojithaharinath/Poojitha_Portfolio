import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Code2, Cloud, Brain, Globe, Workflow, Wrench, Sparkles } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

const categoryIconMap = {
  "Cloud & Architecture": Cloud,
  "AI & Generative AI": Brain,
  "Programming & Data": Code2,
  "Web & Full Stack": Globe,
  "Automation & Workflows": Workflow,
  "Dev Tools & Practices": Wrench,
};

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', ...portfolioData.skills.map((s) => s.category)];

  const filteredSkills =
    selectedCategory === 'All'
      ? portfolioData.skills
      : portfolioData.skills.filter((s) => s.category === selectedCategory);

  return (
    <section id="skills" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-panel border-sky-500/20 text-xs font-mono text-sky-400 mb-3"
          >
            <Brain className="w-3.5 h-3.5" />
            <span>TECHNICAL CAPABILITIES</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-slate-100"
          >
            Skills & <span className="text-gradient">Core Competencies</span>
          </motion.h2>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 ${
                selectedCategory === cat
                  ? 'bg-gradient-to-r from-sky-500 to-indigo-600 text-white shadow-lg shadow-sky-500/20 scale-105'
                  : 'glass-panel text-slate-400 hover:text-slate-200 hover:border-slate-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skillGroup, idx) => {
            const IconComponent = categoryIconMap[skillGroup.category] || Code2;

            return (
              <motion.div
                key={skillGroup.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="glass-panel p-6 rounded-2xl flex flex-col justify-between hover:border-sky-500/30 transition-all duration-300 group"
              >
                <div>
                  <div className="flex items-center gap-3 mb-5">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-sky-500/10 to-purple-500/10 text-sky-400 group-hover:scale-110 transition-transform">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-100 group-hover:text-sky-300 transition-colors">
                      {skillGroup.category}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((item) => (
                      <span
                        key={item}
                        className="px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-900/60 border border-slate-800 text-slate-300 hover:border-sky-400/50 hover:text-sky-300 hover:shadow-[0_0_12px_rgba(56,189,248,0.2)] transition-all duration-200"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
