import React, { useState } from 'react';
import { Globe, Sparkles, Zap, ArrowRight } from 'lucide-react';

interface GooeyButtonGroupProps {
  className?: string;
  variant?: 'cta' | 'interactive';
}

export const GooeyButtonGroup: React.FC<GooeyButtonGroupProps> = ({
  className = '',
  variant = 'cta',
}) => {
  const [activeTab, setActiveTab] = useState<'app' | 'web'>('web');

  if (variant === 'cta') {
    return (
      <div className={`gooey-button-wrapper py-2 px-4 ${className}`}>
        <div className="gooey-container gap-6 sm:gap-10">
          {/* Primary Action Button */}
          <a
            href="/app/landing"
            target="_blank"
            rel="noopener noreferrer"
            className="gooey-btn gooey-btn-primary shadow-xl"
            title="Launch Web Application"
          >
            <span className="water-drop-right" />
            <span className="gooey-btn-label font-bold text-white text-base">
              <Globe className="w-5 h-5 text-white" />
              <span>View Web Version</span>
            </span>
          </a>

          {/* Secondary Action Button */}
          <a
            href="https://play.google.com/store/apps/details?id=com.tana.linkup"
            target="_blank"
            rel="noopener noreferrer"
            className="gooey-btn gooey-btn-secondary shadow-lg"
            title="Download on Google Play Store"
          >
            <span className="water-drop-left" />
            <span className="gooey-btn-label font-bold text-white text-base">
              <Sparkles className="w-5 h-5 text-white" />
              <span>Get Android App</span>
            </span>
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className={`flex flex-col items-center gap-3 ${className}`}>
      <div className="gooey-button-wrapper">
        <div className="gooey-container">
          <button
            type="button"
            onClick={() => setActiveTab('web')}
            className={`gooey-btn ${
              activeTab === 'web'
                ? 'gooey-btn-primary scale-105'
                : 'gooey-btn-dark opacity-90'
            }`}
          >
            <span className="gooey-btn-label">
              <Zap className="w-4 h-4 text-white" />
              <span>Instant AI Match</span>
            </span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('app')}
            className={`gooey-btn ${
              activeTab === 'app'
                ? 'gooey-btn-secondary scale-105'
                : 'gooey-btn-dark opacity-90'
            }`}
          >
            <span className="gooey-btn-label">
              <Sparkles className="w-4 h-4 text-white" />
              <span>Browse 14.2k Builders</span>
            </span>
          </button>
        </div>
      </div>
      <p className="text-xs text-slate-400 flex items-center gap-1.5 animate-pulse">
        <span>Hover or tap either button to see the CSS liquid gooey merge effect</span>
        <ArrowRight className="w-3.5 h-3.5 text-[#FBE618]" />
      </p>
    </div>
  );
};
