import { motion } from 'framer-motion';
import { Code, Terminal, Shield, GitBranch, Globe } from 'lucide-react';
import { technicalSkills } from '../data/portfolioData';

const iconFor = (name) => {
  if (name.toLowerCase().includes('security')) return Shield;
  if (name.toLowerCase() === 'git' || name.toLowerCase() === 'github') return GitBranch;
  if (['html', 'css', 'web development'].includes(name.toLowerCase())) return Globe;
  if (['c', 'c++', 'python'].includes(name.toLowerCase())) return Terminal;
  return Code;
};

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.06 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const TechnicalSkills = () => {
  return (
    <section id="skills" className="relative w-full py-24 md:py-28 px-6 md:px-12 overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <div className="inline-block border border-white/10 rounded-full px-5 py-1.5 text-sm text-white/60 font-bold mb-6 glass-panel">
            {technicalSkills.badge}
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-4">
            {technicalSkills.heading}
          </h2>
          <p className="text-white/50 text-base md:text-lg max-w-xl mx-auto leading-relaxed">
            {technicalSkills.description}
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-5"
        >
          {technicalSkills.skills.map((skill) => {
            const Icon = iconFor(skill.name);
            return (
              <motion.div
                key={skill.name}
                variants={item}
                transition={{ duration: 0.4 }}
                whileHover={{ y: -6, scale: 1.03 }}
                className="glass-panel rounded-2xl p-5 flex flex-col items-center gap-3 text-center hover:border-red-500/40 hover:shadow-[0_15px_40px_rgba(255,42,42,0.15)] transition-colors duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center">
                  <Icon className="w-5 h-5 text-red-400" aria-hidden="true" />
                </div>
                <span className="text-white font-semibold text-sm">{skill.name}</span>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default TechnicalSkills;
