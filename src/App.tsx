import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SocialProofMarquee } from './components/SocialProofMarquee';
import { HowItWorks } from './components/HowItWorks';
import { AppShowcase } from './components/AppShowcase';
import { FeatureGrid } from './components/FeatureGrid';
import { CampaignsFeature } from './components/CampaignsFeature';
import { Reviews } from './components/Reviews';
import { FAQ } from './components/FAQ';
import { BottomCTA } from './components/BottomCTA';
import { Footer } from './components/Footer';
import { CookieConsent } from './components/CookieConsent';
import { CursorGlow } from './components/CursorGlow';
import { FloatingContact } from './components/FloatingContact';
import { FadeInSection } from './components/FadeInSection';
import { LinkupAgentFeature } from './components/LinkupAgentFeature';
import { AboutFounder } from './components/AboutFounder';
import { BuilderDirectory } from './components/BuilderDirectory';
import { ConsentAnalytics } from './components/ConsentAnalytics';

const HomePage = () => (
  <>
    <FadeInSection delay={0.1}>
      <Hero />
    </FadeInSection>
    <FadeInSection delay={0.2}>
      <SocialProofMarquee />
    </FadeInSection>
    <FadeInSection delay={0.1}>
      <LinkupAgentFeature />
    </FadeInSection>
    <FadeInSection delay={0.1}>
      <BuilderDirectory />
    </FadeInSection>
    <FadeInSection delay={0.1}>
      <AppShowcase />
    </FadeInSection>
    <FadeInSection delay={0.1}>
      <FeatureGrid />
    </FadeInSection>
    <FadeInSection delay={0.1}>
      <AboutFounder />
    </FadeInSection>
    <FadeInSection delay={0.1}>
      <Reviews />
    </FadeInSection>
    <FadeInSection delay={0.1}>
      <BottomCTA />
    </FadeInSection>
  </>
);

const DirectoryPage = () => (
  <>
    <FadeInSection delay={0.1}>
      <BuilderDirectory />
    </FadeInSection>
    <FadeInSection delay={0.1}>
      <Reviews />
    </FadeInSection>
    <FadeInSection delay={0.1}>
      <BottomCTA />
    </FadeInSection>
  </>
);

const FounderPage = () => (
  <>
    <FadeInSection delay={0.1}>
      <AboutFounder />
    </FadeInSection>
    <FadeInSection delay={0.1}>
      <FAQ />
    </FadeInSection>
    <FadeInSection delay={0.1}>
      <BottomCTA />
    </FadeInSection>
  </>
);

const FeaturesPage = () => (
  <>
    <FadeInSection delay={0.1}>
      <HowItWorks />
    </FadeInSection>
    <FadeInSection delay={0.1}>
      <LinkupAgentFeature />
    </FadeInSection>
    <FadeInSection delay={0.1}>
      <FeatureGrid />
    </FadeInSection>
  </>
);

const CampaignsPage = () => (
  <>
    <FadeInSection delay={0.1}>
      <CampaignsFeature />
    </FadeInSection>
  </>
);

const FAQPage = () => (
  <>
    <FadeInSection delay={0.1}>
      <FAQ />
    </FadeInSection>
  </>
);

const ScrollToHashOrTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
        return;
      }
    }
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname, hash]);

  return null;
};

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const handleToggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 relative ${isDarkMode ? 'bg-[#05070D] text-slate-100' : 'bg-[#05070D] text-white'}`}>      
      
      {/* Clean Dark Site Background */}
      <div className="liquid-bg-container">
        <div className="liquid-blob"></div>
        <div className="liquid-blob"></div>
        <div className="liquid-blob"></div>
      </div>
      <CursorGlow />

      {/* Main 3D Animated Wrapper */}
      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Sticky Header / Navbar */}
        <Navbar
          isDarkMode={isDarkMode}
          onToggleTheme={handleToggleTheme}
        />

        {/* Main Content Sections */}
        <ScrollToHashOrTop />
        <main className="pt-24 flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/features" element={<FeaturesPage />} />
            <Route path="/builders" element={<DirectoryPage />} />
            <Route path="/directory" element={<DirectoryPage />} />
            <Route path="/founder" element={<FounderPage />} />
            <Route path="/about" element={<FounderPage />} />
            <Route path="/campaigns" element={<CampaignsPage />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="*" element={<HomePage />} />
          </Routes>
        </main>

        {/* Footer */}
        <FadeInSection delay={0.1}>
          <Footer />
        </FadeInSection>
      </div>

      <FloatingContact />
      <CookieConsent />
      <ConsentAnalytics />
    </div>
  );
}
