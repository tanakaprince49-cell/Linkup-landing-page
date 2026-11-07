import React, { useState } from 'react';
import { Globe, Smartphone, Users, Zap, ArrowRight } from 'lucide-react';
import { useBuilderCount } from '../lib/useBuilderCount';
import { formatBuilderCount } from '../lib/publicBuilders';

interface GooeyButtonGroupProps {
  className?: string;
  variant?: 'cta' | 'interactive';
}

export const GooeyButtonGroup: React.FC<GooeyButtonGroupProps> = ({
  className = '',
  variant = 'cta',
}) => {
  const [activeTab, setActiveTab] = useState<'app' | 'web'>('web');
  const { count, complete } = useBuilderCount();

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
            title="Find your co-founder on the web"
          >
            <span className="water-drop-right" />
            <span className="gooey-btn-label font-bold text-white text-base">
              <Globe className="w-5 h-5 text-white" />
              <span>Find My Person</span>
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
              <Smartphone className="w-5 h-5 text-white" />
              <span>Meet Builders on Android</span>
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
              <span>Find My Person</span>
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
              <Users className="w-4 h-4 text-white" />
              <span>Browse{count === null ? '' : ' ' + formatBuilderCount(count) + (complete ? '' : '+')} Possible Partners</span>
            </span>
          </button>
        </div>
      </div>
      <p className="text-xs text-slate-400 flex items-center gap-1.5 animate-pulse">
        <span>Pick a door. Your future favorite builder might be behind it</span>
        <ArrowRight className="w-3.5 h-3.5 text-[#FBE618]" />
      </p>
    </div>
  );
};
