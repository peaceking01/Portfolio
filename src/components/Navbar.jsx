import { useState, useEffect, useCallback } from 'react';
import { Menu, X } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const navLinks = ['Home', 'About', 'Skills', 'Projects', 'Contact'];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const sections = navLinks.map((link) => document.getElementById(link.toLowerCase()));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-40% 0px -50% 0px', threshold: 0 }
    );

    sections.forEach((section) => section && observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const handleNavClick = useCallback((e, link) => {
    e.preventDefault();
    setIsOpen(false);
    const target = document.getElementById(link.toLowerCase());
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled || isOpen
          ? 'bg-black/60 backdrop-blur-xl border-b border-white/10 py-3 shadow-[0_10px_30px_rgba(0,0,0,0.4)]'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, 'Home')}
          className="text-white text-2xl font-black tracking-tight whitespace-nowrap focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-400 rounded"
        >
          {personalInfo.brandName}<span className="text-red-500">.</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = activeSection === link.toLowerCase();
            return (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                onClick={(e) => handleNavClick(e, link)}
                className={`relative font-medium text-sm tracking-wide transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-red-400 rounded ${
                  isActive ? 'text-white' : 'text-white/60 hover:text-white'
                }`}
              >
                {link}
                <span
                  className={`absolute -bottom-2 left-0 h-0.5 bg-red-500 rounded-full transition-all duration-300 ${
                    isActive ? 'w-full' : 'w-0'
                  }`}
                />
              </a>
            );
          })}
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
          className="md:hidden text-white p-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-400 rounded"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 w-full transition-all duration-300 overflow-hidden bg-black/90 backdrop-blur-xl border-b border-white/10 ${
          isOpen ? 'max-h-96 py-4 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="flex flex-col px-6 gap-1">
          {navLinks.map((link) => {
            const isActive = activeSection === link.toLowerCase();
            return (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                onClick={(e) => handleNavClick(e, link)}
                className={`py-3 border-b border-white/5 font-semibold text-base transition-colors ${
                  isActive ? 'text-red-400' : 'text-white/80 hover:text-white'
                }`}
              >
                {link}
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
