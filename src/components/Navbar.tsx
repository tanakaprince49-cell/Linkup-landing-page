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
  const location = useLocation();

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
          ? 'bg-[#05070D]/85 backdrop-blur-xl border-b border-white/10 py-3 shadow-2xl'
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
            src="/images/logo.webp" 
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
            { name: 'Linkup Agent', path: '/#linkup-agent', isNew: true },
            { name: 'Features', path: '/features' },
            { name: 'Founder', path: '/#founder' },
            { name: 'Campaigns', path: '/campaigns' },
            { name: 'FAQ', path: '/faq' },
          ].map((link) => {
            const isAnchor = link.path.startsWith('/#');
            const isActive = location.pathname === link.path;

            if (isAnchor) {
              const anchorId = link.path.replace('/#', '');
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={(e) => {
                    if (location.pathname === '/') {
                      e.preventDefault();
                      const el = document.getElementById(anchorId);
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className={`text-sm font-semibold transition-colors flex items-center gap-1.5 ${
                    location.pathname === '/' && location.hash === `#${anchorId}`
                      ? 'text-[#FBE618]'
                      : 'text-slate-300 hover:text-white'
                  }`}
                >
                  {link.name}
                  {link.isNew && (
                    <span className="px-1.5 py-0.2 rounded-full bg-[#FBE618]/20 text-[#FBE618] text-[10px] font-mono font-bold tracking-wider border border-[#FBE618]/40">
                      NEW
                    </span>
                  )}
                </Link>
              );
            }

            return (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-semibold transition-colors flex items-center gap-1.5 ${
                  isActive ? 'text-[#FBE618]' : 'text-slate-300 hover:text-white'
                }`}
              >
                {link.name}
              </Link>
            );
          })}
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
                  className="absolute right-0 mt-3 w-64 rounded-2xl bg-[#0a0d14]/95 backdrop-blur-2xl border border-white/15 shadow-2xl overflow-hidden z-50 p-2 flex flex-col gap-1"
                >
                  <div className="px-3 py-2 border-b border-white/10 mb-1 flex items-center gap-2.5">
                    <img 
                      src="https://i.ibb.co/pvvN63sV/20260526-181511.webp" 
                      alt="Tanaka Gaadzikwa" 
                      className="w-9 h-9 rounded-xl object-cover border border-[#FBE618]/40 shadow-sm shrink-0" 
                    />
                    <div className="min-w-0">
                      <p className="text-xs font-bold text-white font-display truncate">Tanaka Gaadzikwa</p>
                      <p className="text-[10px] text-[#FBE618] font-mono truncate">Founder & CEO • Harare, Zimbabwe</p>
                    </div>
                  </div>

                  {/* WhatsApp */}
                  <a
                    href="https://wa.me/263780011810"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-white/10 text-white transition-colors text-sm font-medium"
                  >
                    <svg className="w-4 h-4 text-[#25D366] shrink-0 fill-current" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
                    </svg>
                    <div className="flex flex-col">
                      <span>WhatsApp (0780011810)</span>
                      <span className="text-[10px] text-[#25D366] font-semibold tracking-wide">FASTEST RESPONSE</span>
                    </div>
                  </a>

                  {/* LinkedIn */}
                  <a
                    href="https://www.linkedin.com/in/tanaka-gaadzikwa-linkup/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-white/10 text-white transition-colors text-sm font-medium"
                  >
                    <svg className="w-4 h-4 text-[#0A66C2] shrink-0 fill-current" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                    LinkedIn Profile
                  </a>

                  {/* Telegram */}
                  <a
                    href="https://t.me/tanaka_93"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-white/10 text-white transition-colors text-sm font-medium"
                  >
                    <svg className="w-4 h-4 text-[#229ED9] shrink-0 fill-current" viewBox="0 0 24 24">
                      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.121l-6.871 4.326-2.962-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.832.922z"/>
                    </svg>
                    Telegram (@tanaka_93)
                  </a>

                  {/* Email */}
                  <a
                    href="mailto:tanakaprince49@gmail.com"
                    className="flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-white/10 text-white transition-colors text-sm font-medium"
                  >
                    <svg className="w-4 h-4 text-red-400 shrink-0 fill-current" viewBox="0 0 24 24">
                      <path d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0l-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z"/>
                    </svg>
                    Email Tanaka
                  </a>

                  {/* Google Play */}
                  <a
                    href="https://play.google.com/store/apps/details?id=com.tana.linkup"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-white/10 text-white transition-colors text-sm font-medium"
                  >
                    <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none">
                      <path d="M3.609 1.814L13.793 12 3.61 22.186c-.37-.367-.61-.884-.61-1.464V3.278c0-.58.24-1.097.609-1.464z" fill="#00C3FF" />
                      <path d="M17.186 8.608L13.793 12l3.393 3.392 3.864-2.208c.75-.429.75-1.94 0-2.368l-3.864-2.208z" fill="#FFD400" />
                      <path d="M13.793 12L3.61 1.814c.23-.228.537-.373.882-.373.377 0 .734.17 1.09.373l11.604 6.794L13.793 12z" fill="#00E266" />
                      <path d="M13.793 12l3.393 3.392-11.604 6.794c-.356.203-.713.373-1.09.373-.345 0-.652-.145-.882-.373L13.793 12z" fill="#FF3333" />
                    </svg>
                    Download LINKUP App
                  </a>
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
                { name: 'Linkup Agent', path: '/#linkup-agent', isNew: true },
                { name: 'Features', path: '/features' },
                { name: 'Founder', path: '/#founder' },
                { name: 'Campaigns', path: '/campaigns' },
                { name: 'FAQ', path: '/faq' },
              ].map((link) => {
                const isAnchor = link.path.startsWith('/#');
                const isActive = location.pathname === link.path;

                if (isAnchor) {
                  const anchorId = link.path.replace('/#', '');
                  return (
                    <Link
                      key={link.name}
                      to={link.path}
                      onClick={() => {
                        setIsMobileMenuOpen(false);
                        if (location.pathname === '/') {
                          const el = document.getElementById(anchorId);
                          if (el) el.scrollIntoView({ behavior: 'smooth' });
                        }
                      }}
                      className={`text-lg font-semibold transition-colors flex items-center justify-between ${
                        location.pathname === '/' && location.hash === `#${anchorId}`
                          ? 'text-[#FBE618]'
                          : 'text-slate-300 hover:text-white'
                      }`}
                    >
                      <span>{link.name}</span>
                      {link.isNew && (
                        <span className="px-2 py-0.5 rounded-full bg-[#FBE618]/20 text-[#FBE618] text-xs font-mono font-bold tracking-wider border border-[#FBE618]/40">
                          NEW
                        </span>
                      )}
                    </Link>
                  );
                }

                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`text-lg font-semibold transition-colors flex items-center justify-between ${
                      isActive ? 'text-[#FBE618]' : 'text-slate-300 hover:text-white'
                    }`}
                  >
                    <span>{link.name}</span>
                  </Link>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
