import React from 'react';
import { Mail } from 'lucide-react';
import { motion } from 'framer-motion';

export const FloatingContact: React.FC = () => {
  return (
    <motion.a
      href="mailto:linkupp49@gmail.com"
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 0.8, duration: 0.5, type: 'spring', stiffness: 200, damping: 20 }}
      className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-[90] flex items-center justify-center gap-2 bg-[#FBE618] hover:bg-[#fff056] text-black px-4 py-3 sm:px-5 sm:py-3.5 rounded-full font-semibold shadow-[0_0_20px_rgba(251,230,24,0.4)] hover:shadow-[0_0_35px_rgba(251,230,24,0.6)] transform hover:-translate-y-1 transition-all duration-300"
    >
      <Mail className="w-5 h-5" />
      <span className="hidden sm:inline-block text-sm">Contact Us</span>
    </motion.a>
  );
};
