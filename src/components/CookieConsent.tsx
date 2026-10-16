import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Cookie } from 'lucide-react';

export const CookieConsent: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const open = () => setIsVisible(true);
    window.addEventListener('linkup:open-privacy-choices', open);
    if (window.location.hash === '#privacy-choices') {
      open();
      window.history.replaceState(null, '', window.location.pathname + window.location.search);
    }
    const timer = window.setTimeout(() => {
      try { if (!localStorage.getItem('linkup_cookie_consent')) open(); }
      catch { open(); }
    }, 1500);
    return () => {
      window.clearTimeout(timer);
      window.removeEventListener('linkup:open-privacy-choices', open);
    };
  }, []);

  const saveChoice = (value: 'true' | 'declined') => {
    let wasAccepted = false;
    try {
      wasAccepted = localStorage.getItem('linkup_cookie_consent') === 'true';
      localStorage.setItem('linkup_cookie_consent', value);
    } catch { /* Storage unavailable: analytics remains disabled. */ }
    setIsVisible(false);
    // Unmounting Analytics alone does not unload the vendor's injected script.
    if (value === 'declined' && wasAccepted) { window.location.reload(); return; }
    window.dispatchEvent(new Event('linkup:analytics-consent'));
  };

  const handleAccept = () => saveChoice('true');
  const handleDecline = () => saveChoice('declined');

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          role="dialog"
          aria-labelledby="privacy-choice-title"
          aria-describedby="privacy-choice-description"
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-4 sm:bottom-6 left-4 right-4 sm:right-auto sm:left-6 z-[100] max-w-[360px]"
        >
          <div className="p-5 rounded-2xl shadow-2xl shadow-black/50 border border-white/10 bg-[#05070D]/70 backdrop-blur-xl relative overflow-hidden">
            {/* Subtle glow effect */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#FBE618]/10 rounded-full blur-3xl pointer-events-none -mr-16 -mt-16" />
            
            <div className="flex items-start gap-4 relative z-10">
              <div className="flex-shrink-0 mt-0.5">
                <Cookie className="w-5 h-5 text-[#FBE618]" />
              </div>
              
              <div className="flex-1">
                <div className="flex justify-between items-start mb-1">
                  <h3 id="privacy-choice-title" className="text-white font-semibold text-sm">Privacy choices</h3>
                  <button 
                    onClick={handleDecline}
                    className="text-slate-400 hover:text-white transition-colors"
                    aria-label="Decline optional analytics and close"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
                <p id="privacy-choice-description" className="text-slate-300 text-xs leading-relaxed mb-4">
                  Allow optional web traffic analytics? Essential app storage still works if you decline. Read our <a href="/privacy" className="underline">Privacy Policy</a>.
                </p>
                
                <div className="flex items-center gap-2">
                  <button 
                    onClick={handleAccept}
                    className="flex-1 bg-[#FBE618] hover:bg-[#fff056] text-black font-semibold text-xs py-2 px-3 rounded-lg transition-colors"
                  >
                    Accept analytics
                  </button>
                  <button 
                    onClick={handleDecline}
                    className="flex-1 bg-white/5 hover:bg-white/10 text-white border border-white/10 font-semibold text-xs py-2 px-3 rounded-lg transition-colors"
                  >
                    Decline analytics
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
