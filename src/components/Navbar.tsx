import React, { useState, useEffect } from 'react';
import { Sparkles, Menu, X, ArrowRight, ShieldCheck, Zap } from 'lucide-react';

interface NavbarProps {
  isDarkMode: boolean;
  onToggleTheme: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ isDarkMode, onToggleTheme }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'App Features (10)', href: '#features' },
  ];

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
        <a 
          href="#" 
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="flex items-center gap-2.5 group cursor-pointer focus:outline-none"
          title="LINKUP - Co-Founder Network"
        >
          <img 
            src="https://i.ibb.co/Hf2yQXqL/Gemini-Generated-Image-9afxh89afxh89afx.webp" 
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
        </a>
      </div>
    </header>
  );
};
