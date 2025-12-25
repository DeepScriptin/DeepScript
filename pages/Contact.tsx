import React, { useState } from 'react';
import { Mail, Phone, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTimeout(() => {
      setIsSubmitted(true);
      setFormData({ name: '', email: '', phone: '', service: '', message: '' });
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="pt-24 min-h-screen bg-brand-support relative overflow-hidden text-brand-light">
      {/* High-Impact Decorative Glows */}
      <div className="absolute top-0 right-0 w-[1400px] h-[1400px] bg-brand-purple/5 rounded-full blur-[300px] pointer-events-none" />
      <div className="absolute -bottom-1/4 -left-1/4 w-[1000px] h-[1000px] bg-brand-accent/10 rounded-full blur-[250px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-40"
        >
          <h1 className="text-8xl md:text-[12rem] font-black text-brand-light mb-12 tracking-tighter leading-none">
            Let's <span className="accent-gradient">Execute</span>.
          </h1>
          <p className="text-3xl text-gray-500 max-w-3xl mx-auto font-light leading-relaxed">
            Architecting the future of enterprise logic. Your transmission starts here.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-start">
          {/* Contact Details Side */}
          <div className="space-y-24">
            <div className="space-y-8">
              <h3 className="text-5xl font-black text-brand-light tracking-tight">Handshake Protocol</h3>
              <p className="text-gray-500 text-2xl max-w-md leading-relaxed font-light">
                Direct neural link to our engineering collective for high-stakes projects.
              </p>
            </div>

            <div className="space-y-12">
              <motion.div 
                whileHover={{ scale: 1.02, x: 10 }}
                className="glass p-10 rounded-[3.5rem] border border-brand-purple/20 flex items-center space-x-10 group"
              >
                <div className="w-20 h-20 rounded-2xl bg-brand-primary border border-brand-purple/40 flex items-center justify-center group-hover:bg-brand-purple group-hover:text-brand-light transition-all duration-500 shadow-xl group-hover:shadow-[0_0_40px_rgba(203,0,218,0.4)]">
                  <Mail className="w-10 h-10" />
                </div>
                <div>
                  <h4 className="text-gray-600 font-black uppercase tracking-[0.4em] text-[10px] mb-2">Secure Transmission</h4>
                  <p className="text-brand-purple text-2xl md:text-3xl font-black group-hover:text-brand-light transition-colors">deepscript.in@gmail.com</p>
                </div>
              </motion.div>

              {/* CLEAN ONE LINE PHONE DISPLAY */}
              <motion.div 
                whileHover={{ scale: 1.02, x: 10 }}
                className="glass p-10 rounded-[3.5rem] border border-brand-accent/20 flex items-center space-x-10 group"
              >
                <div className="w-20 h-20 rounded-2xl bg-brand-primary border border-brand-accent/40 flex items-center justify-center group-hover:bg-brand-accent group-hover:text-brand-light transition-all duration-500 shadow-xl group-hover:shadow-[0_0_40px_rgba(6,96,216,0.4)]">
                  <Phone className="w-10 h-10" />
                </div>
                <div>
                  <h4 className="text-gray-600 font-black uppercase tracking-[0.4em] text-[10px] mb-2">Priority Pulse</h4>
                  <p className="text-brand-accent text-2xl md:text-3xl font-black group-hover:text-brand-light transition-colors">+91 98418 67282</p>
                </div>
              </motion.div>

              <div className="flex items-center space-x-4 text-brand-accent font-black text-xs uppercase tracking-[0.4em] pt-4 px-6 animate-pulse">
                <div className="w-3 h-3 rounded-full bg-brand-accent shadow-[0_0_15px_#0660d8]" />
                <span>Orchestrator Online</span>
              </div>
            </div>
          </div>

          {/* Contact Form Side */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            className="glass-high p-12 md:p-16 rounded-[4rem] border border-brand-purple/20 shadow-2xl relative"
          >
            <AnimatePresence mode="wait">
              {isSubmitted ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="h-[600px] flex flex-col items-center justify-center text-center space-y-12"
                >
                  <motion.div 
                    animate={{ rotate: 360, scale: [1, 1.2, 1] }}
                    transition={{ duration: 1.5, ease: "backOut" }}
                    className="w-32 h-32 bg-brand-purple/20 rounded-full flex items-center justify-center border border-brand-purple/40"
                  >
                    <CheckCircle2 className="w-16 h-16 text-brand-purple" />
                  </motion.div>
                  <div className="space-y-6">
                    <h3 className="text-5xl font-black text-brand-light tracking-tighter">Transmission Confirmed.</h3>
                    <p className="text-gray-500 max-w-xs mx-auto text-xl font-light">
                      Our architects are analyzing your data. Link established.
                    </p>
                  </div>
                  <motion.button 
                    whileHover={{ scale: 1.1 }}
                    onClick={() => setIsSubmitted(false)} 
                    className="text-brand-purple border-b border-brand-purple font-black tracking-[0.5em] uppercase text-[10px] pb-1"
                  >
                    Transmit Again
                  </motion.button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-12">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <InputField label="Entity Name" name="name" value={formData.name} onChange={handleChange} required placeholder="e.g. Acme Corp" />
                    <InputField label="Communication Port" type="email" name="email" value={formData.email} onChange={handleChange} required placeholder="email@example.com" />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <InputField label="Signal Number" type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="+91 ..." />
                    <div className="space-y-4">
                      <label className="text-[10px] font-black text-gray-400 uppercase tracking-[0.5em] px-2">Sector Interest</label>
                      <div className="relative">
                        <select 
                          name="service"
                          value={formData.service} 
                          onChange={handleChange}
                          className="w-full bg-brand-primary/80 border border-brand-purple/30 rounded-[2rem] px-8 py-6 text-brand-light focus:outline-none focus:border-brand-purple transition-all appearance-none cursor-pointer backdrop-blur-xl hover:border-brand-purple/60"
                        >
                          <option value="" className="bg-brand-support text-gray-500">Select Interest...</option>
                          <option value="design" className="bg-brand-support">Neural UI/UX</option>
                          <option value="custom" className="bg-brand-support">Proprietary LLM</option>
                          <option value="chatbots" className="bg-brand-support">Agentic Bot</option>
                          <option value="automation" className="bg-brand-support">Autonomous Workflow</option>
                        </select>
                        <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-brand-purple">
                          <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"/></svg>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-[0.5em] px-2">Project Parameters</label>
                    <textarea 
                      rows={5} 
                      name="message"
                      value={formData.message} 
                      onChange={handleChange}
                      required
                      placeholder="Define the enterprise mission..."
                      className="w-full bg-brand-primary/80 border border-brand-purple/30 rounded-[2.5rem] px-8 py-6 text-brand-light focus:outline-none focus:border-brand-purple transition-all resize-none placeholder-gray-400 backdrop-blur-xl hover:border-brand-purple/60"
                    ></textarea>
                  </div>
                  <motion.button 
                    whileHover={{ scale: 1.02, boxShadow: "0 0 40px rgba(203,0,218,0.4)" }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="w-full bg-gradient-to-r from-brand-purple to-brand-accent text-brand-light font-black py-7 rounded-[2rem] shadow-2xl transition-all uppercase tracking-[0.6em] text-[10px]"
                  >
                    Initiate Transmission
                  </motion.button>
                </form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

const InputField: React.FC<{ label: string; name: string; type?: string; value: string; onChange: any; required?: boolean; placeholder?: string }> = ({ label, name, type = "text", value, onChange, required = false, placeholder = "" }) => (
  <div className="space-y-4">
    <label className="text-[10px] font-black text-gray-400 uppercase tracking-[0.5em] px-2">{label}</label>
    <input 
      type={type} 
      name={name} 
      value={value} 
      onChange={onChange}
      required={required}
      placeholder={placeholder}
      className="w-full bg-brand-primary/80 border border-brand-purple/30 rounded-[2rem] px-8 py-6 text-brand-light focus:outline-none focus:border-brand-purple transition-all backdrop-blur-xl placeholder-gray-400 hover:border-brand-purple/60"
    />
  </div>
);

export default Contact;