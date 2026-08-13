import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Cookie } from 'lucide-react';

export const CookieConsent: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const hasConsented = localStorage.getItem('linkup_cookie_consent');
    if (!hasConsented) {
      // Small delay for better UX before showing
      const timer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('linkup_cookie_consent', 'true');
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('linkup_cookie_consent', 'declined');
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
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
                  <h3 className="text-white font-semibold text-sm">Cookie Privacy</h3>
                  <button 
                    onClick={handleDecline}
                    className="text-slate-400 hover:text-white transition-colors"
                    aria-label="Close"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
                <p className="text-slate-300 text-xs leading-relaxed mb-4">
                  We use cookies to improve your experience and analyze our network traffic.
                </p>
                
                <div className="flex items-center gap-2">
                  <button 
                    onClick={handleAccept}
                    className="flex-1 bg-[#FBE618] hover:bg-[#fff056] text-black font-semibold text-xs py-2 px-3 rounded-lg transition-colors"
                  >
                    Accept
                  </button>
                  <button 
                    onClick={handleDecline}
                    className="flex-1 bg-white/5 hover:bg-white/10 text-white border border-white/10 font-semibold text-xs py-2 px-3 rounded-lg transition-colors"
                  >
                    Decline
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
