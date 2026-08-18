import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { personalInfo } from '../data/portfolioData';

const Preloader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1600);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="preloader"
          initial={{ y: 0 }}
          exit={{ y: '-100%' }}
          transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 w-full h-screen bg-[#050505] z-[100000] flex items-center justify-center"
        >
          {/* subtle grid backdrop */}
          <div className="cyber-grid absolute inset-0 opacity-30 pointer-events-none" />
          <div className="absolute top-1/2 left-1/2 h-[40vh] w-[40vh] -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-600/20 blur-[100px] pointer-events-none" />

          <motion.div
            exit={{ opacity: 0, scale: 0.96, y: -10 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="relative flex flex-col items-center gap-4"
          >
            <div className="relative text-4xl md:text-6xl font-black tracking-tight">
              <div className="text-white/10 uppercase">{personalInfo.brandName}</div>
              <motion.div
                className="absolute top-0 left-0 w-full text-white uppercase overflow-hidden whitespace-nowrap"
                initial={{ clipPath: 'inset(100% 0 0 0)' }}
                animate={{ clipPath: 'inset(0% 0 0 0)' }}
                transition={{ duration: 1.1, ease: 'easeInOut', delay: 0.15 }}
              >
                {personalInfo.brandName}
                <span className="text-red-500">.</span>
              </motion.div>
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="text-[10px] md:text-xs font-bold tracking-[0.4em] text-red-400 uppercase"
            >
              Cyber Security // Full Stack
            </motion.p>

            <div className="w-40 h-[2px] bg-white/10 rounded-full overflow-hidden mt-2">
              <motion.div
                className="h-full bg-red-500"
                initial={{ width: '0%' }}
                animate={{ width: '100%' }}
                transition={{ duration: 1.4, ease: 'easeInOut' }}
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
