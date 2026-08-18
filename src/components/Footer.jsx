import { Mail, Phone } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa6';
import { personalInfo, socialLinks, footerContent } from '../data/portfolioData';

const Footer = () => {
  return (
    <footer className="relative border-t border-white/10 bg-black/40 backdrop-blur-sm text-white/60 py-14 px-6 md:px-12 w-full">
      <div className="max-w-6xl mx-auto flex flex-col gap-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <p className="text-white text-xl font-black tracking-tight">
              {personalInfo.brandName}<span className="text-red-500">.</span>
            </p>
            {footerContent.taglines.map((line) => (
              <p key={line} className="text-xs text-white/40 mt-1 tracking-wide">{line}</p>
            ))}
          </div>

          <div className="flex items-center gap-4">
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
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:text-white hover:border-red-500/40 hover:-translate-y-0.5 transition-all duration-300"
              >
                <Icon className="w-4 h-4" aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-3 pt-6 border-t border-white/5 text-xs">
          <p>{footerContent.copyright}</p>
          <a href="#home" className="hover:text-white transition-colors">Back to top ↑</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
