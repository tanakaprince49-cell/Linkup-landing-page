import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  MessageSquare, 
  Target, 
  Handshake, 
  Smartphone, 
  Bot, 
  ShieldCheck, 
  ArrowRight
} from 'lucide-react';

export const LinkupAgentFeature: React.FC = () => {
  const [isBotModalOpen, setIsBotModalOpen] = useState(false);

  return (
    <section id="linkup-agent" className="py-24 relative overflow-hidden bg-transparent z-20">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[#FBE618]/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[450px] h-[450px] bg-[#00C2FF]/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-6xl font-display font-extrabold text-white tracking-tight leading-[1.1] mb-6"
          >
            Don't Swipe. <br />
            <span className="bg-gradient-to-r from-white via-[#FBE618] to-[#00C2FF] bg-clip-text text-transparent">
              Just Ask.
            </span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg sm:text-xl text-slate-300 font-normal leading-relaxed"
          >
            Tell Linkup Agent exactly who you're looking for, and let AI do the legwork across verified builder profiles.
          </motion.p>
        </div>

        {/* 4 Key Capabilities */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          
          {/* Capability 1 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="glass-panel p-6 sm:p-7 rounded-3xl border border-white/10 hover:border-[#FBE618]/40 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#FBE618]/10 border border-[#FBE618]/30 flex items-center justify-center mb-5 text-[#FBE618] group-hover:scale-110 transition-transform">
                <MessageSquare className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2 font-display flex items-center gap-2">
                Natural Language Search
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Ask in plain English: "Find me a senior React Native developer with AI background in London" or "I need a B2B SaaS pre-seed investor." No filters needed.
              </p>
            </div>
            <div className="pt-4 mt-4 border-t border-white/5 flex items-center text-xs font-mono text-[#FBE618] font-semibold">
              <span>Plain English Prompts</span>
              <ArrowRight className="w-3.5 h-3.5 ml-1.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </motion.div>

          {/* Capability 2 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="glass-panel p-6 sm:p-7 rounded-3xl border border-white/10 hover:border-[#00C2FF]/40 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#00C2FF]/10 border border-[#00C2FF]/30 flex items-center justify-center mb-5 text-[#00C2FF] group-hover:scale-110 transition-transform">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2 font-display flex items-center gap-2">
                Verified Profile Matching
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Linky scans real member skills, project goals, and compatibility scores, providing clear citations and reasoning for every match suggestion.
              </p>
            </div>
            <div className="pt-4 mt-4 border-t border-white/5 flex items-center text-xs font-mono text-[#00C2FF] font-semibold">
              <ShieldCheck className="w-3.5 h-3.5 mr-1.5" /> REP Score & Citations
            </div>
          </motion.div>

          {/* Capability 3 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="glass-panel p-6 sm:p-7 rounded-3xl border border-white/10 hover:border-emerald-400/40 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center mb-5 text-emerald-400 group-hover:scale-110 transition-transform">
                <Handshake className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2 font-display flex items-center gap-2">
                Double Opt-In Intros
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Seamless transition from AI recommendation to mutual agreement. Both founders must approve before private direct messaging begins—zero spam guaranteed.
              </p>
            </div>
            <div className="pt-4 mt-4 border-t border-white/5 flex items-center text-xs font-mono text-emerald-400 font-semibold">
              <span>Mutual High-Conviction</span>
              <ArrowRight className="w-3.5 h-3.5 ml-1.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </motion.div>

          {/* Capability 4 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.4 }}
            className="glass-panel p-6 sm:p-7 rounded-3xl border border-white/10 hover:border-purple-400/40 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center mb-5 text-purple-400 group-hover:scale-110 transition-transform">
                <Smartphone className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2 font-display flex items-center gap-2">
                Omnichannel Convenience
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Reach Linkup Agent inside the mobile app, or directly via Telegram and WhatsApp bots without friction. Matches delivered straight to your pocket.
              </p>
            </div>
            <div className="pt-4 mt-4 border-t border-white/5 flex items-center text-xs font-mono text-purple-400 font-semibold">
              <Bot className="w-3.5 h-3.5 mr-1.5" /> App • Telegram • WhatsApp
            </div>
          </motion.div>
        </div>

        {/* Required Call to Action (CTA) Buttons */}
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            
            {/* Button 1: Try Linkup Agent on App */}
            <a
              href="https://play.google.com/store/apps/details?id=com.tana.linkup"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-2xl bg-[#FBE618] hover:bg-[#fff056] text-black font-bold text-base shadow-[0_0_30px_rgba(251,230,24,0.35)] transition-all hover:-translate-y-1"
            >
              <span>Try Linkup Agent on App</span>
            </a>

            {/* Button 2: Connect on Telegram */}
            <a
              href="https://t.me/LINKUP_AIBOT"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-6 py-4 rounded-2xl bg-[#229ED9]/15 hover:bg-[#229ED9]/25 border border-[#229ED9]/40 text-white font-semibold text-sm transition-all hover:-translate-y-1 group shadow-lg shadow-[#229ED9]/10"
            >
              <div className="w-6 h-6 rounded-full bg-[#229ED9] flex items-center justify-center text-white shrink-0 shadow-sm">
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.121l-6.871 4.326-2.962-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.832.922z"/>
                </svg>
              </div>
              <div className="flex items-center gap-1.5 text-left">
                <span>Connect on Telegram</span>
                <span className="text-[#229ED9] font-mono font-bold">@LINKUP_AIBOT</span>
              </div>
            </a>

            {/* WhatsApp is coming soon */}
            <button
              onClick={() => setIsBotModalOpen(true)}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 text-sm font-medium transition-all cursor-pointer"
            >
              <div className="w-6 h-6 rounded-full bg-[#25D366]/20 border border-[#25D366]/40 flex items-center justify-center text-[#25D366] shrink-0 shadow-sm">
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
              </svg>
            </div>
            <span>WhatsApp is coming soon</span>
          </button>

        </div>

        <p className="text-xs text-slate-400 max-w-md mx-auto">
          Available right now directly in the LINKUP mobile app & web version. Telegram and WhatsApp integrations rolling out next!
        </p>
      </div>
    </div>

    {/* Modal for Telegram / WhatsApp Coming Soon */}
    <AnimatePresence>
      {isBotModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsBotModalOpen(false)}
            className="absolute inset-0 bg-black/80 backdrop-blur-md"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-md p-6 sm:p-8 rounded-3xl bg-[#0B0F19] border border-white/20 shadow-2xl text-center space-y-5 z-10"
          >
            <div className="flex justify-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-[#229ED9]/20 border border-[#229ED9]/40 flex items-center justify-center text-[#229ED9] shadow-lg">
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.121l-6.871 4.326-2.962-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.832.922z"/>
                </svg>
              </div>
              <div className="w-12 h-12 rounded-2xl bg-[#25D366]/20 border border-[#25D366]/40 flex items-center justify-center text-[#25D366] shadow-lg">
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
              </svg>
            </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-white mb-2 font-display">
                Connect with Linkup Agent
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                You can chat with Linkup Agent directly on Telegram right now via <span className="text-[#229ED9] font-bold">@LINKUP_AIBOT</span>. WhatsApp integration is coming soon!
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#229ED9]/10 border border-[#229ED9]/30 text-xs text-slate-200">
              <span className="text-[#229ED9] font-bold">Telegram Bot Live:</span> Start matching with verified founders directly on Telegram.
            </div>

            <div className="flex flex-col gap-2.5 pt-2">
              <a
                href="https://t.me/LINKUP_AIBOT"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 rounded-xl bg-[#229ED9] hover:bg-[#1f8fc4] text-white font-bold text-sm transition-all shadow-lg flex items-center justify-center gap-2"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.121l-6.871 4.326-2.962-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.832.922z"/>
                </svg>
                <span>Open Telegram Bot (@LINKUP_AIBOT)</span>
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=com.tana.linkup"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 rounded-xl bg-[#FBE618] hover:bg-[#fff056] text-black font-bold text-sm transition-all shadow-lg block text-center"
              >
                Get LINKUP Mobile App
              </a>
              <button
                onClick={() => setIsBotModalOpen(false)}
                className="w-full py-2.5 rounded-xl text-slate-400 hover:text-white text-xs font-semibold cursor-pointer"
              >
                Close
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  </section>
  );
};
