import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SocialProofMarquee } from './components/SocialProofMarquee';
import { FeatureGrid } from './components/FeatureGrid';
import { Footer } from './components/Footer';

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const handleToggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 relative ${isDarkMode ? 'bg-[#05070D] text-slate-100' : 'bg-[#05070D] text-white'}`}>
      
      {/* 3D Liquid Background */}
      <div className="liquid-bg-container">
        <div className="liquid-blob"></div>
        <div className="liquid-blob"></div>
        <div className="liquid-blob"></div>
      </div>

      {/* Main 3D Animated Wrapper */}
      <div className="relative z-10">
        {/* Sticky Header / Navbar */}
        <Navbar
          isDarkMode={isDarkMode}
          onToggleTheme={handleToggleTheme}
        />

        {/* Main Content Sections */}
        <main className="pt-16">
          {/* Section 1: Hero */}
          <Hero />

          {/* Section 2: Ecosystem & Accelerators */}
          <SocialProofMarquee />

          {/* Section 3: App Features (10 Features) */}
          <FeatureGrid />
        </main>

        {/* Footer */}
        <Footer />
      </div>

    </div>
  );
}


