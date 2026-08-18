import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Download, ArrowRight, ShieldCheck } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa6';
import { heroContent, personalInfo, socialLinks } from '../data/portfolioData';

const roleVariants = {
  enter: { opacity: 0, y: 10 },
  center: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -10 },
};

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % heroContent.titles.length);
    }, 2600);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative w-full min-h-screen overflow-hidden bg-transparent flex items-center pt-28 pb-16 md:pt-32"
    >
      <div className="relative z-10 max-w-7xl w-full mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
        {/* Left: Text content */}
        <div className="flex flex-col items-start text-left order-2 lg:order-1">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full glass-panel text-red-400 text-xs font-bold tracking-widest uppercase"
          >
            <ShieldCheck className="w-3.5 h-3.5" aria-hidden="true" />
            Securing the web, one build at a time
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-white text-4xl sm:text-5xl md:text-6xl font-black mb-4 tracking-tight leading-[1.05]"
          >
            {heroContent.greeting}
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-10 md:h-12 flex items-center mb-6"
          >
            <motion.span
              key={roleIndex}
              variants={roleVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.4 }}
              className="text-xl md:text-3xl font-bold bg-gradient-to-r from-red-500 to-red-300 bg-clip-text text-transparent"
            >
              {heroContent.titles[roleIndex]}
            </motion.span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-white/60 text-sm md:text-lg font-medium mb-8 max-w-md leading-relaxed"
          >
            {heroContent.subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-row flex-wrap items-center gap-4 mb-10"
          >
            <a
              href={heroContent.ctaPrimary.href}
              className="group px-6 py-3 rounded-full bg-red-600 text-white text-sm md:text-base font-semibold flex items-center gap-2 transition-all duration-300 hover:bg-red-500 hover:scale-105 hover:shadow-[0_0_30px_rgba(255,42,42,0.5)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-400"
            >
              {heroContent.ctaPrimary.text}
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
            </a>

            <a
              href={heroContent.ctaResume.href}
              download
              className="px-6 py-3 rounded-full glass-panel text-white text-sm md:text-base font-semibold flex items-center gap-2 transition-all duration-300 hover:scale-105 hover:border-red-500/50 hover:shadow-[0_0_25px_rgba(255,42,42,0.25)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-400"
            >
              <Download className="w-4 h-4" aria-hidden="true" />
              {heroContent.ctaResume.text}
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex items-center gap-4"
          >
            {[
              { href: socialLinks.github, icon: FaGithub, label: 'GitHub' },
              { href: socialLinks.linkedin, icon: FaLinkedin, label: 'LinkedIn' },
              { href: socialLinks.email, icon: Mail, label: 'Email' },
              { href: socialLinks.phone, icon: Phone, label: 'Phone' },
            ].map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                aria-label={label}
                className="w-10 h-10 rounded-full glass-panel flex items-center justify-center text-white/70 transition-all duration-300 hover:text-white hover:border-red-500/50 hover:scale-110 hover:shadow-[0_0_20px_rgba(255,42,42,0.3)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-400"
              >
                <Icon className="w-4 h-4" aria-hidden="true" />
              </a>
            ))}
          </motion.div>
        </div>

        {/* Right: Cartoon image + dashboard video showcase */}
        <div className="order-1 lg:order-2 relative flex flex-col items-center gap-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1, y: [0, -14, 0] }}
            transition={{
              opacity: { duration: 0.7 },
              scale: { duration: 0.7 },
              y: { duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 0.7 },
            }}
            className="relative w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 rounded-full glass-panel p-2 shadow-[0_0_60px_rgba(255,42,42,0.25)]"
          >
            <div className="absolute inset-0 rounded-full bg-red-600/20 blur-2xl -z-10" aria-hidden="true" />
            <img
              src={personalInfo.cartoonImage}
              alt="Cartoon illustration of Parveenkumar, Cyber Security student and Full Stack Developer"
              className="w-full h-full object-cover rounded-full border border-white/10"
              loading="eager"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="relative w-full max-w-md rounded-2xl glass-panel p-3 md:p-4 shadow-[0_0_50px_rgba(255,42,42,0.18)]"
          >
            <div className="absolute -inset-1 rounded-2xl bg-red-600/10 blur-xl -z-10" aria-hidden="true" />
            <div className="relative rounded-xl overflow-hidden border border-red-500/20 aspect-video bg-black">
              <video
                className="w-full h-full object-cover"
                autoPlay
                loop
                muted
                playsInline
                preload="metadata"
                aria-label="Dashboard project walkthrough video"
              >
                <source src={personalInfo.dashboardVideo} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <p className="mt-3 text-center text-[10px] md:text-xs font-bold tracking-widest uppercase text-white/40">
              Dashboard Showcase
            </p>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        aria-hidden="true"
        className="hidden md:flex absolute bottom-8 left-1/2 -translate-x-1/2 z-10 pointer-events-none flex-col items-center gap-2"
      >
        <span className="text-white/30 text-[10px] font-bold tracking-widest uppercase">Scroll</span>
        <div className="animate-bounce">
          <svg className="w-5 h-5 text-red-500/70" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;
