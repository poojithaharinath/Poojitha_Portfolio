import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { Mail, Phone, MapPin, Send, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm();

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSubmitting(false);
    setSubmitted(true);
    reset();
  };

  return (
    <section id="contact" className="py-16 sm:py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col items-center text-center mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-panel border-sky-500/20 text-xs font-mono text-sky-400 mb-3"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>GET IN TOUCH</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-2xl sm:text-4xl font-extrabold text-slate-100 mb-3"
          >
            Let's Build <span className="text-gradient">Something Exceptional</span>
          </motion.h2>
          <p className="max-w-2xl text-slate-400 text-xs sm:text-base px-2">
            Open for full-time AI engineering positions, technical consultation, or innovative RAG architecture projects.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start max-w-6xl mx-auto">
          
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 glass-panel p-6 sm:p-8 rounded-2xl sm:rounded-3xl space-y-6 sm:space-y-8"
          >
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-100 mb-2">Contact Details</h3>
              <p className="text-xs sm:text-sm text-slate-400">Feel free to reach out directly via email, phone, or LinkedIn.</p>
            </div>

            <div className="space-y-4 sm:space-y-6">
              <a
                href={`mailto:${portfolioData.personal.email}`}
                className="flex items-start gap-3.5 p-3.5 sm:p-4 rounded-xl sm:rounded-2xl glass-panel-interactive group"
              >
                <div className="p-2.5 sm:p-3 rounded-xl bg-sky-500/10 text-sky-400 group-hover:scale-110 transition-transform shrink-0">
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div className="min-w-0 flex-1">
                  <span className="block text-[10px] sm:text-xs font-mono text-slate-400">EMAIL</span>
                  <span className="text-xs sm:text-sm font-semibold text-slate-200 group-hover:text-sky-400 transition-colors truncate block">
                    {portfolioData.personal.email}
                  </span>
                </div>
              </a>

              <a
                href={`tel:${portfolioData.personal.phone.replace(/\s+/g, '')}`}
                className="flex items-start gap-3.5 p-3.5 sm:p-4 rounded-xl sm:rounded-2xl glass-panel-interactive group"
              >
                <div className="p-2.5 sm:p-3 rounded-xl bg-indigo-500/10 text-indigo-400 group-hover:scale-110 transition-transform shrink-0">
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div className="min-w-0 flex-1">
                  <span className="block text-[10px] sm:text-xs font-mono text-slate-400">PHONE</span>
                  <span className="text-xs sm:text-sm font-semibold text-slate-200 group-hover:text-indigo-400 transition-colors">
                    {portfolioData.personal.phone}
                  </span>
                </div>
              </a>

              <div className="flex items-start gap-3.5 p-3.5 sm:p-4 rounded-xl sm:rounded-2xl glass-panel">
                <div className="p-2.5 sm:p-3 rounded-xl bg-purple-500/10 text-purple-400 shrink-0">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div className="min-w-0 flex-1">
                  <span className="block text-[10px] sm:text-xs font-mono text-slate-400">LOCATION</span>
                  <span className="text-xs sm:text-sm font-semibold text-slate-200">
                    {portfolioData.personal.location}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 glass-panel p-6 sm:p-8 rounded-2xl sm:rounded-3xl relative"
          >
            {submitted ? (
              <div className="py-8 sm:py-12 flex flex-col items-center text-center space-y-4">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center border border-emerald-500/40 animate-bounce">
                  <CheckCircle2 className="w-7 h-7 sm:w-8 sm:h-8" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-100">Message Sent Successfully!</h3>
                <p className="text-slate-400 text-xs sm:text-sm max-w-md">
                  Thank you for reaching out. I have received your message and will respond to you promptly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-5 py-2 rounded-xl text-xs font-mono bg-slate-900 border border-slate-800 text-sky-400 hover:border-sky-400 transition-colors"
                >
                  SEND ANOTHER MESSAGE
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 sm:space-y-6">
                <div>
                  <label className="block text-[11px] sm:text-xs font-mono text-slate-300 mb-1.5 uppercase">
                    Your Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    {...register('name', { required: 'Name is required' })}
                    className="w-full px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-xl bg-slate-950/80 border border-slate-800 text-xs sm:text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400 transition-colors"
                  />
                  {errors.name && (
                    <span className="text-xs text-rose-400 mt-1 block">{errors.name.message}</span>
                  )}
                </div>

                <div>
                  <label className="block text-[11px] sm:text-xs font-mono text-slate-300 mb-1.5 uppercase">
                    Your Email
                  </label>
                  <input
                    type="email"
                    placeholder="Enter your mail ID"
                    {...register('email', {
                      required: 'Email is required',
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'Invalid email address'
                      }
                    })}
                    className="w-full px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-xl bg-slate-950/80 border border-slate-800 text-xs sm:text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400 transition-colors"
                  />
                  {errors.email && (
                    <span className="text-xs text-rose-400 mt-1 block">{errors.email.message}</span>
                  )}
                </div>

                <div>
                  <label className="block text-[11px] sm:text-xs font-mono text-slate-300 mb-1.5 uppercase">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell me about your project, role, or collaboration idea..."
                    {...register('message', { required: 'Message cannot be empty' })}
                    className="w-full px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-xl bg-slate-950/80 border border-slate-800 text-xs sm:text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400 transition-colors resize-none"
                  />
                  {errors.message && (
                    <span className="text-xs text-rose-400 mt-1 block">{errors.message.message}</span>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-sky-500 via-indigo-600 to-purple-600 shadow-xl shadow-sky-500/20 hover:shadow-sky-500/40 hover:scale-[1.01] active:scale-[0.99] transition-all disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
