import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  MessageSquare, 
  Target, 
  Handshake, 
  Smartphone, 
  Bot, 
  ShieldCheck, 
  ArrowRight,
  Globe,
  CheckCircle2,
  Award,
  Sparkles
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

        {/* 'Trusted By' Section: Y Combinator, Techstars, 500 Global Alumni */}
        <div id="trusted-by-section" className="mb-20">
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono font-medium text-slate-300 mb-3">
              <ShieldCheck className="w-4 h-4 text-[#FBE618]" />
              <span>Verified Ecosystem Credibility</span>
            </div>
            <h3 className="text-2xl sm:text-4xl font-display font-bold text-white tracking-tight mb-3">
              Trusted by Builders & Alumni From
            </h3>
            <p className="text-sm sm:text-base text-slate-300 font-normal leading-relaxed">
              Founders, CTOs, and early operators from world-renowned accelerators use Linkup Agent to discover high-conviction co-founders without the noise.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* 1. Y Combinator */}
            <motion.div
              id="trusted-card-yc"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="glass-panel p-6 sm:p-7 rounded-3xl border border-white/10 hover:border-[#FF6600]/40 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
            >
              <div>
                <div className="flex items-center justify-between gap-3 mb-5">
                  {/* Y Combinator Logo */}
                  <div className="w-12 h-12 rounded-2xl bg-[#FF6600] flex items-center justify-center shadow-lg shadow-[#FF6600]/25 shrink-0 group-hover:scale-105 transition-transform">
                    <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none">
                      <path d="M5.5 5L10.7 13.6V19H13.3V13.6L18.5 5H15.6L12 11.2L8.4 5H5.5Z" fill="white" />
                    </svg>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-[#FF6600]/15 border border-[#FF6600]/30 text-[#FF6600] text-xs font-mono font-semibold whitespace-nowrap">
                    YC Alumni
                  </span>
                </div>

                <h4 className="text-xl font-bold text-white mb-2 font-display flex items-center gap-2">
                  Y Combinator
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                  Recent YC batch founders utilize Linkup Agent's natural language matching to connect with vetted AI engineers and growth co-founders across W23, S23, W24 & S24 cohorts.
                </p>
              </div>

              <div className="pt-4 border-t border-white/10 space-y-2">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-slate-400">Active Founders:</span>
                  <span className="text-white font-semibold">40+ Verified</span>
                </div>
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-slate-400">Verification:</span>
                  <span className="text-[#FF6600] font-semibold flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Mutual Opt-In
                  </span>
                </div>
              </div>
            </motion.div>

            {/* 2. Techstars */}
            <motion.div
              id="trusted-card-techstars"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="glass-panel p-6 sm:p-7 rounded-3xl border border-white/10 hover:border-[#00EC96]/40 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
            >
              <div>
                <div className="flex items-center justify-between gap-3 mb-5">
                  {/* Techstars Logo */}
                  <div className="w-12 h-12 rounded-2xl bg-black border border-[#00EC96]/40 flex items-center justify-center shadow-lg shadow-[#00EC96]/20 shrink-0 group-hover:scale-105 transition-transform">
                    <svg className="w-7 h-7" viewBox="0 0 32 32" fill="none">
                      <circle cx="16" cy="16" r="2.8" fill="#00EC96" />
                      <path d="M16 4V10M16 22V28M4 16H10M22 16H28M7.5 7.5L11.7 11.7M20.3 20.3L24.5 24.5M7.5 24.5L11.7 20.3M20.3 11.7L24.5 7.5" stroke="#00EC96" strokeWidth="2.8" strokeLinecap="round" />
                    </svg>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-[#00EC96]/15 border border-[#00EC96]/30 text-[#00EC96] text-xs font-mono font-semibold whitespace-nowrap">
                    Techstars Network
                  </span>
                </div>

                <h4 className="text-xl font-bold text-white mb-2 font-display flex items-center gap-1.5">
                  <span>techstars</span><span className="text-[#00EC96] text-2xl leading-none">_</span>
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                  Portfolio founders accelerate early-stage team formation across 12+ worldwide hubs, connecting with full-stack architects and verified operators without inbound cold pitch noise.
                </p>
              </div>

              <div className="pt-4 border-t border-white/10 space-y-2">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-slate-400">Portfolio Teams:</span>
                  <span className="text-white font-semibold">30+ Represented</span>
                </div>
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-slate-400">Verification:</span>
                  <span className="text-[#00EC96] font-semibold flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" /> REP Vetted
                  </span>
                </div>
              </div>
            </motion.div>

            {/* 3. 500 Global */}
            <motion.div
              id="trusted-card-500global"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="glass-panel p-6 sm:p-7 rounded-3xl border border-white/10 hover:border-[#00C2FF]/40 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
            >
              <div>
                <div className="flex items-center justify-between gap-3 mb-5">
                  {/* 500 Global Logo */}
                  <div className="w-12 h-12 rounded-2xl bg-[#091122] border border-[#00C2FF]/40 flex flex-col items-center justify-center shadow-lg shadow-[#00C2FF]/20 shrink-0 group-hover:scale-105 transition-transform">
                    <span className="text-white text-base font-black tracking-tighter leading-none font-display">500</span>
                    <span className="text-[#00C2FF] text-[8px] font-mono tracking-widest font-bold uppercase -mt-0.5">GLOBAL</span>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-[#00C2FF]/15 border border-[#00C2FF]/30 text-[#00C2FF] text-xs font-mono font-semibold whitespace-nowrap">
                    500 Global Alumni
                  </span>
                </div>

                <h4 className="text-xl font-bold text-white mb-2 font-display flex items-center gap-2">
                  500 Global
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                  Seed and pre-seed founders backed by 500 Global source cross-border technical leads and specialized domain partners through autonomous semantic matchmaking.
                </p>
              </div>

              <div className="pt-4 border-t border-white/10 space-y-2">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-slate-400">Seed Founders:</span>
                  <span className="text-white font-semibold">25+ Backed</span>
                </div>
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-slate-400">Verification:</span>
                  <span className="text-[#00C2FF] font-semibold flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Identity Checked
                  </span>
                </div>
              </div>
            </motion.div>

          </div>

          {/* Trust Guarantees Bar */}
          <div className="mt-8 p-4 sm:p-5 rounded-2xl bg-white/[0.03] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-300">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#FBE618] shrink-0" />
              <span><strong>100% Mutual Consent:</strong> Zero unsolicited cold DMs</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#00C2FF] shrink-0" />
              <span><strong>Vetted Credentials:</strong> GitHub, LinkedIn & proof-of-work checks</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-4 h-4 text-emerald-400 shrink-0" />
              <span><strong>REP Score Integrity:</strong> High-signal community reputation</span>
            </div>
          </div>
        </div>

        {/* Required Call to Action (CTA) Buttons */}
        <div className="max-w-5xl mx-auto text-center space-y-6">
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-5">
            
            {/* Button 1: Try Linkup Agent on App */}
            <a
              href="https://play.google.com/store/apps/details?id=com.tana.linkup"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-4 rounded-2xl water-btn text-white font-bold text-base transition-all hover:-translate-y-1"
            >
              <span>Try Linkup Agent on App</span>
            </a>

            {/* Button 2: Try Linkup Agent on Web */}
            <a
              href="/app/landing"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-2xl water-btn text-white font-bold text-base transition-all hover:-translate-y-1 group"
            >
              <Globe className="w-5 h-5 text-white group-hover:rotate-12 transition-transform" />
              <span>Try Linkup Agent on Web</span>
            </a>

            {/* Button 3: Connect on Telegram */}
            <a
              href="https://t.me/LINKUP_AIBOT"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-6 py-4 rounded-2xl water-btn text-white font-semibold text-sm transition-all hover:-translate-y-1 group"
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
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-2xl water-btn text-white text-sm font-medium transition-all cursor-pointer"
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
                className="w-full py-3 rounded-xl water-btn text-white font-bold text-sm transition-all flex items-center justify-center gap-2"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.121l-6.871 4.326-2.962-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.832.922z"/>
                </svg>
                <span>Open Telegram Bot (@LINKUP_AIBOT)</span>
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=com.tana.linkup"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 rounded-xl water-btn text-white font-bold text-sm transition-all block text-center"
              >
                Get LINKUP Mobile App
              </a>
              <a
                href="/app/landing"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 rounded-xl water-btn text-white font-bold text-sm transition-all flex items-center justify-center gap-2"
              >
                <Globe className="w-4 h-4 text-white" />
                <span>Try Linkup Agent on Web</span>
              </a>
              <button
                onClick={() => setIsBotModalOpen(false)}
                className="w-full py-2.5 rounded-xl text-slate-400 hover:text-white text-xs font-semibold cursor-pointer no-water-btn"
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
