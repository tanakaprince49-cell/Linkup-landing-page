import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SocialProofMarquee } from './components/SocialProofMarquee';
import { AppShowcase } from './components/AppShowcase';
import { FeatureGrid } from './components/FeatureGrid';
import { Reviews } from './components/Reviews';
import { Footer } from './components/Footer';
import { CookieConsent } from './components/CookieConsent';
import { CursorGlow } from './components/CursorGlow';
import { FloatingContact } from './components/FloatingContact';
import { Analytics } from '@vercel/analytics/react';

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

      <CursorGlow />

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

          {/* Section 3: App Showcase */}
          <AppShowcase />

          {/* Section 4: App Features (10 Features) */}
          <FeatureGrid />

          {/* Section 5: Google Play Reviews */}
          <Reviews />
        </main>

        {/* Footer */}
        <Footer />
      </div>

      <FloatingContact />
      <CookieConsent />
      <Analytics />
    </div>
  );
}


