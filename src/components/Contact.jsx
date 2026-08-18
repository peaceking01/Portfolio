import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Send } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa6';
import { personalInfo, socialLinks } from '../data/portfolioData';

const contactMethods = [
  { label: 'Email', value: personalInfo.emails.primary, href: socialLinks.email, icon: Mail },
  { label: 'Phone', value: personalInfo.phoneDisplay, href: socialLinks.phone, icon: Phone },
  { label: 'GitHub', value: 'peaceking01', href: socialLinks.github, icon: FaGithub },
  { label: 'LinkedIn', value: 'parveenkumar-s', href: socialLinks.linkedin, icon: FaLinkedin },
];

const Contact = () => {
  const formRef = useRef(null);
  const [status, setStatus] = useState('idle');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (status === 'sending') return;

    const form = formRef.current;
    const name = form.querySelector('#name')?.value || '';
    const email = form.querySelector('#email')?.value || '';
    const message = form.querySelector('#message')?.value || '';

    if (!name.trim() || !email.trim() || !message.trim()) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
      return;
    }

    setStatus('sending');

    const mailtoLink = `mailto:${personalInfo.emails.primary}?subject=${encodeURIComponent(
      `Portfolio Contact from ${name}`
    )}&body=${encodeURIComponent(`From: ${name}\nEmail: ${email}\n\n${message}`)}`;

    window.open(mailtoLink, '_blank');
    setStatus('opened');
    form.reset();
    setTimeout(() => setStatus('idle'), 4000);
  };

  return (
    <section id="contact" className="relative w-full py-24 md:py-28 px-6 md:px-12 overflow-hidden">
      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <div className="inline-block border border-white/10 rounded-full px-5 py-1.5 text-sm text-white/60 font-bold mb-6 glass-panel">
            Get In Touch
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-4">
            Let's build something secure
          </h2>
          <p className="text-white/50 text-base md:text-lg max-w-xl mx-auto leading-relaxed">
            Have a project, an opportunity, or just want to say hi? Reach out below.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Contact methods */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-2 flex flex-col gap-4"
          >
            {contactMethods.map(({ label, value, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="glass-panel rounded-2xl p-5 flex items-center gap-4 hover:border-red-500/40 hover:-translate-y-0.5 transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-400"
              >
                <div className="w-11 h-11 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center shrink-0">
                  <Icon className="w-5 h-5 text-red-400" aria-hidden="true" />
                </div>
                <div className="min-w-0">
                  <p className="text-white/40 text-xs font-bold uppercase tracking-widest">{label}</p>
                  <p className="text-white font-semibold truncate">{value}</p>
                </div>
              </a>
            ))}
          </motion.div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="md:col-span-3 glass-panel rounded-2xl p-6 md:p-8"
          >
            <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div>
                <label htmlFor="name" className="sr-only">Your name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your Name"
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-red-500/60 focus:ring-1 focus:ring-red-500/40 transition-colors"
                />
              </div>
              <div>
                <label htmlFor="email" className="sr-only">Your email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Your Email"
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-red-500/60 focus:ring-1 focus:ring-red-500/40 transition-colors"
                />
              </div>
              <div>
                <label htmlFor="message" className="sr-only">Message</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Your Message"
                  required
                  rows={5}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-red-500/60 focus:ring-1 focus:ring-red-500/40 transition-colors resize-none"
                />
              </div>

              <p className="text-white/40 text-xs leading-relaxed">
                This form opens your email app with the message pre-filled — it doesn't send automatically.
              </p>

              <button
                type="submit"
                disabled={status === 'sending'}
                className={`self-start px-6 py-3 rounded-full font-semibold flex items-center gap-2 transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-400 ${
                  status === 'error'
                    ? 'bg-red-800 text-white'
                    : status === 'opened'
                    ? 'bg-green-600 text-white'
                    : 'bg-red-600 text-white hover:bg-red-500 hover:scale-105 hover:shadow-[0_0_25px_rgba(255,42,42,0.4)]'
                }`}
              >
                {status === 'sending' && 'Opening...'}
                {status === 'opened' && 'Email App Opened ✓'}
                {status === 'error' && 'Please fill in all fields'}
                {status === 'idle' && (
                  <>
                    Send Message
                    <Send className="w-4 h-4" aria-hidden="true" />
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
