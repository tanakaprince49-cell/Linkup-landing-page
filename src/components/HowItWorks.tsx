import React from 'react';
import { UserCircle, BrainCircuit, Rocket } from 'lucide-react';

const steps = [
  {
    icon: UserCircle,
    title: "1. Show Off Your Brilliant Self",
    description: "Build your profile, connect your history, and confess exactly who you need. Technical genius? Growth brain? Someone who actually likes investor updates? Be honest."
  },
  {
    icon: BrainCircuit,
    title: "2. Let Linky Get Nosy",
    description: "Our matching engine compares skills, goals, and working styles to find builders who complement you. Not just impressive people—impressive people who fit you."
  },
  {
    icon: Rocket,
    title: "3. Become That Duo",
    description: "Skip the painful small talk, meet verified founders, and see if your visions click. Then start building the partnership everyone else wishes they had found first."
  }
];

export const HowItWorks: React.FC = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-transparent z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-20">
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight">
            Three Steps To <span className="text-[#FBE618]">Your Person</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Three steps between “I could use a co-founder” and “Wait. I actually really like building with this person.”
          </p>
        </div>

        <div className="relative">
          {/* Connecting line for desktop */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-y-1/2 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 relative z-10">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div key={idx} className="relative flex flex-col items-center text-center group">
                  {/* Icon Container */}
                  <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-3xl glass-panel border border-white/10 flex items-center justify-center mb-6 relative group-hover:border-[#FBE618]/50 transition-colors duration-500 bg-[#05070D]">
                    <div className="absolute inset-0 bg-[#FBE618]/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <Icon className="w-10 h-10 text-white group-hover:text-[#FBE618] transition-colors duration-500 relative z-10" />
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-xl font-bold text-white mb-3 font-display">{step.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
