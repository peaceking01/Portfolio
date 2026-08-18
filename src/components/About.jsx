import { motion } from 'framer-motion';
import { ShieldCheck, Code2, Sparkles } from 'lucide-react';
import { aboutContent } from '../data/portfolioData';

const highlights = [
  { icon: ShieldCheck, label: 'Cyber Security', text: 'Studying secure systems, threat awareness, and safe web practices.' },
  { icon: Code2, label: 'Full Stack Development', text: 'Building end-to-end web applications from front end to back end.' },
  { icon: Sparkles, label: 'Always Learning', text: 'Exploring modern tools and technologies to solve real-world problems.' },
];

const About = () => {
  return (
    <section id="about" className="relative w-full py-24 md:py-32 px-6 md:px-12 overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="inline-block border border-white/10 rounded-full px-5 py-1.5 text-sm text-white/60 font-bold mb-6 glass-panel">
            Get To Know Me
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight">
            {aboutContent.heading}
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="glass-panel rounded-3xl p-8 md:p-12 shadow-[0_20px_60px_rgba(0,0,0,0.4)]"
        >
          <p className="text-white/80 text-lg md:text-xl leading-relaxed font-medium max-w-3xl mx-auto text-center mb-12">
            {aboutContent.bio}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {highlights.map(({ icon: Icon, label, text }, index) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.15 * index }}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 hover:border-red-500/30 hover:bg-white/[0.06] hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-11 h-11 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-red-400" aria-hidden="true" />
                </div>
                <h3 className="text-white font-bold text-lg mb-2">{label}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{text}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
