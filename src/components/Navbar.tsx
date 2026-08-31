import React, { useState, useEffect } from 'react';
import { Menu, X, MessageCircle, ExternalLink, ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

interface NavbarProps {
  isDarkMode: boolean;
  onToggleTheme: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ isDarkMode, onToggleTheme }) => {
  const [scrolled, setScrolled] = useState(false);
  const [isFounderMenuOpen, setIsFounderMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'liquid-glass-nav py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo Link */}
        <Link to="/"
          className="flex items-center gap-2.5 group cursor-pointer focus:outline-none"
          title="LINKUP - Co-Founder Network"
        >
          <img 
            src="https://i.ibb.co/HTfs8tdT/logo-idea-r2-A.webp" 
            alt="LinkUp Logo" 
            className="w-10 h-10 rounded-xl object-cover shadow-lg shadow-[#FBE618]/20 group-hover:shadow-[#FBE618]/40 group-hover:scale-105 transition-all duration-300" 
          />
          <div className="flex flex-col">
            <div className="font-display font-black text-2xl tracking-tight leading-none text-white flex items-center">
              <span>LINK</span>
              <span className="text-[#FBE618] italic drop-shadow-[0_0_12px_rgba(251,230,24,0.6)] group-hover:text-[#fff056] transition-colors">UP</span>
            </div>
            <span className="text-[9px] font-semibold tracking-widest text-slate-400 uppercase font-mono group-hover:text-slate-300 transition-colors">
              Co-Founder Network
            </span>
          </div>
        </Link>

        <div className="flex items-center gap-1 md:gap-6">
        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-6">
          {[
            { name: 'Home', path: '/' },
            { name: 'Features', path: '/features' },
            { name: 'Campaigns', path: '/campaigns' },
            { name: 'FAQ', path: '/faq' },
          ].map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="text-sm font-semibold text-slate-300 hover:text-white transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Talk to Founder Dropdown */}
        <div className="relative translate-x-1 md:translate-x-0">
          <button
            onClick={() => setIsFounderMenuOpen(!isFounderMenuOpen)}
            className="flex items-center gap-2 bg-[#FBE618]/10 hover:bg-[#FBE618]/20 border border-[#FBE618]/30 text-[#FBE618] px-4 py-2 rounded-xl text-sm font-semibold transition-all"
          >
            <MessageCircle className="w-4 h-4" />
            Talk to Founder
            <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isFounderMenuOpen ? 'rotate-180' : ''}`} />
          </button>

          <AnimatePresence>
            {isFounderMenuOpen && (
              <>
                <div 
                  className="fixed inset-0 z-40"
                  onClick={() => setIsFounderMenuOpen(false)}
                />
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="absolute right-0 mt-3 w-56 rounded-2xl bg-[#0a0a0a]/90 backdrop-blur-xl border border-white/10 shadow-2xl overflow-hidden z-50"
                >
                  <div className="p-2 flex flex-col gap-1">
                    <a
                      href="https://wa.me/263780011810"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-white/10 text-white transition-colors text-sm font-medium relative group"
                    >
                      <svg className="w-4 h-4 text-[#25D366]" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
                      </svg>
                      <div className="flex flex-col">
                        <span>WhatsApp</span>
                        <span className="text-[10px] text-[#25D366] font-semibold tracking-wide">FASTEST RESPONSE</span>
                      </div>
                    </a>
                    <a
                      href="https://www.linkedin.com/in/tanaka-gaadzikwa-a7bb1335b?utm_source=share_via&utm_content=profile&utm_medium=member_android"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-white/10 text-white transition-colors text-sm font-medium"
                    >
                      <svg className="w-4 h-4 text-[#0077B5]" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                      LinkedIn
                    </a>
                    <a
                      href="https://linktr.ee/tanakagaadzikwa"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-white/10 text-white transition-colors text-sm font-medium"
                    >
                      <ExternalLink className="w-4 h-4 text-emerald-400" />
                      Linktree
                    </a>
                  </div>
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden p-2 text-slate-300 hover:text-white hover:bg-white/10 rounded-lg transition-colors ml-1"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#0F131F]/95 backdrop-blur-xl border-b border-white/10 overflow-hidden shadow-2xl"
          >
            <div className="px-6 py-6 flex flex-col gap-6">
              {[
                { name: 'Home', path: '/' },
                { name: 'Features', path: '/features' },
                { name: 'Campaigns', path: '/campaigns' },
                { name: 'FAQ', path: '/faq' },
              ].map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-semibold text-slate-300 hover:text-white transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
