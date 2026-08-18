import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa6';
import { projects, socialLinks } from '../data/portfolioData';

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const item = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0 },
};

const ProjectCard = ({ project }) => (
  <motion.div
    variants={item}
    transition={{ duration: 0.5 }}
    whileHover={{ y: -6 }}
    className="group relative rounded-2xl p-[1px] bg-gradient-to-br from-red-500/30 via-white/10 to-transparent hover:from-red-500/60 transition-all duration-500"
  >
    <div className="rounded-2xl p-6 md:p-8 h-full glass-panel group-hover:border-red-500/30 transition-all duration-500">
      <div className="flex items-baseline gap-4 mb-4">
        <span className="text-4xl font-black text-white/10">{project.number}</span>
        <h3 className="text-xl md:text-2xl font-black text-white tracking-tight">{project.title}</h3>
      </div>

      <p className="text-white/60 text-sm md:text-base leading-relaxed mb-6">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2 mb-6">
        {project.techTags.map((tag) => (
          <span
            key={tag}
            className="px-3 py-1 text-xs font-bold text-white/70 bg-white/5 rounded-full border border-white/10 hover:bg-red-500/20 hover:border-red-500/30 hover:text-red-300 transition-all duration-300"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="flex flex-wrap gap-3">
        {project.links.url && (
          <a
            href={project.links.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-red-600 text-white text-sm font-semibold hover:bg-red-500 hover:shadow-[0_0_20px_rgba(255,42,42,0.4)] transition-all duration-300"
          >
            <ExternalLink className="w-4 h-4" aria-hidden="true" />
            View Project
          </a>
        )}
        {project.links.github && (
          <a
            href={project.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-full glass-panel text-white text-sm font-semibold hover:border-red-500/40 transition-all duration-300"
          >
            <FaGithub className="w-4 h-4" aria-hidden="true" />
            GitHub
          </a>
        )}
      </div>
    </div>
  </motion.div>
);

const Projects = () => {
  return (
    <section id="projects" className="relative w-full py-24 md:py-28 px-6 md:px-12 overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <div className="inline-block border border-white/10 rounded-full px-5 py-1.5 text-sm text-white/60 font-bold mb-6 glass-panel">
            Featured Projects
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-4">
            Work that speaks for itself
          </h2>
          <p className="text-white/50 text-base md:text-lg max-w-lg mx-auto leading-relaxed">
            A selection of projects that showcase my interest in security, full-stack development, and solving real problems.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
        >
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-14 flex justify-center"
        >
          <a
            href={socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-8 py-4 rounded-full glass-panel text-white font-bold hover:border-red-500/40 hover:shadow-[0_0_30px_rgba(255,42,42,0.2)] transition-all duration-500 group"
          >
            <FaGithub className="w-5 h-5" aria-hidden="true" />
            Explore All My Repositories
            <ExternalLink className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" aria-hidden="true" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
