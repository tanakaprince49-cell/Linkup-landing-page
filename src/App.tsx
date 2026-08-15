import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SocialProofMarquee } from './components/SocialProofMarquee';
import { HowItWorks } from './components/HowItWorks';
import { AppShowcase } from './components/AppShowcase';
import { FeatureGrid } from './components/FeatureGrid';
import { Reviews } from './components/Reviews';
import { FAQ } from './components/FAQ';
import { BottomCTA } from './components/BottomCTA';
import { Footer } from './components/Footer';
import { CookieConsent } from './components/CookieConsent';
import { CursorGlow } from './components/CursorGlow';
import { FloatingContact } from './components/FloatingContact';
import { FadeInSection } from './components/FadeInSection';
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
          <FadeInSection delay={0.1}>
            <Hero />
          </FadeInSection>

          {/* Section 2: Ecosystem & Accelerators */}
          <FadeInSection delay={0.2}>
            <SocialProofMarquee />
          </FadeInSection>

          {/* Section 3: How It Works */}
          <FadeInSection delay={0.1}>
            <HowItWorks />
          </FadeInSection>

          {/* Section 4: App Showcase */}
          <FadeInSection delay={0.1}>
            <AppShowcase />
          </FadeInSection>

          {/* Section 5: App Features (10 Features) */}
          <FadeInSection delay={0.1}>
            <FeatureGrid />
          </FadeInSection>

          {/* Section 6: Google Play Reviews */}
          <FadeInSection delay={0.1}>
            <Reviews />
          </FadeInSection>

          {/* Section 7: FAQ */}
          <FadeInSection delay={0.1}>
            <FAQ />
          </FadeInSection>

          {/* Section 8: Final CTA */}
          <FadeInSection delay={0.1}>
            <BottomCTA />
          </FadeInSection>
        </main>

        {/* Footer */}
        <FadeInSection delay={0.1}>
          <Footer />
        </FadeInSection>
      </div>

      <FloatingContact />
      <CookieConsent />
      <Analytics />
    </div>
  );
}


