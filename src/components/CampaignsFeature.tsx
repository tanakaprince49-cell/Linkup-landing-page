import React from 'react';
import { Megaphone, BarChart3, Edit3, ShieldCheck, Eye, MousePointerClick, Activity } from 'lucide-react';

export const CampaignsFeature = () => {
  return (
    <section className="py-24 relative overflow-hidden" id="campaigns">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center justify-center p-2 bg-[#FBE618]/10 rounded-xl mb-4">
            <Megaphone className="w-6 h-6 text-[#FBE618]" />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 font-display tracking-tight text-white">
            Amplify Your Reach with <span className="text-[#FBE618]">Campaigns</span>
          </h2>
          <p className="text-lg text-slate-400">
            Run targeted sponsored placements across the LINKUP ecosystem. Blend natively into the feed and track your success with live analytics.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side: Points */}
          <div className="space-y-8">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center border border-blue-500/20">
                <Megaphone className="w-6 h-6 text-blue-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Native Placements</h3>
                <p className="text-slate-400">Sponsored cards blend seamlessly into the Idea Deck, Discover, Search, Hub, and Linky Picks, clearly labeled with a "Sponsored" badge.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-purple-500/10 flex items-center justify-center border border-purple-500/20">
                <BarChart3 className="w-6 h-6 text-purple-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Live Analytics</h3>
                <p className="text-slate-400">Track total impressions, clicks, click-through rates (CTR), and your Share of Voice across different app sections in real-time.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20">
                <Edit3 className="w-6 h-6 text-emerald-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Full Control</h3>
                <p className="text-slate-400">Run up to 3 active campaigns simultaneously. Pause, resume, swap creatives, or edit them even while in priority review.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-amber-500/10 flex items-center justify-center border border-amber-500/20">
                <ShieldCheck className="w-6 h-6 text-amber-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Priority Human Review</h3>
                <p className="text-slate-400">Ensuring high quality and safety, all campaigns undergo priority human review and go live within 24 hours.</p>
              </div>
            </div>
          </div>

          {/* Right side: Mock UI */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-[#FBE618]/20 to-transparent blur-3xl opacity-30 rounded-full"></div>
            
            <div className="bg-[#0F131F] border border-white/10 rounded-2xl p-4 sm:p-6 relative z-10 shadow-2xl flex flex-col gap-4">
              {/* Mock Analytics Mini-Dash */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="bg-[#1A1F2E] p-4 rounded-xl border border-white/5 text-center flex flex-col items-center justify-center">
                  <Eye className="w-5 h-5 text-blue-400 mb-2" />
                  <div className="text-xl font-bold text-white">45.2k</div>
                  <div className="text-[10px] sm:text-xs text-slate-400 uppercase tracking-wider mt-1">Impressions</div>
                </div>
                <div className="bg-[#1A1F2E] p-4 rounded-xl border border-white/5 text-center flex flex-col items-center justify-center">
                  <MousePointerClick className="w-5 h-5 text-emerald-400 mb-2" />
                  <div className="text-xl font-bold text-white">1,204</div>
                  <div className="text-[10px] sm:text-xs text-slate-400 uppercase tracking-wider mt-1">Clicks</div>
                </div>
                <div className="bg-[#1A1F2E] p-4 rounded-xl border border-white/5 text-center flex flex-col items-center justify-center">
                  <Activity className="w-5 h-5 text-purple-400 mb-2" />
                  <div className="text-xl font-bold text-white">2.6%</div>
                  <div className="text-[10px] sm:text-xs text-slate-400 uppercase tracking-wider mt-1">Avg. CTR</div>
                </div>
              </div>
              
              {/* Campaign Capacity */}
              <div className="bg-[#1A1F2E] p-5 rounded-xl border border-white/5 flex flex-col gap-3">
                 <div className="flex justify-between items-center">
                   <div className="text-sm font-semibold text-white">Campaign Capacity</div>
                   <div className="text-sm font-bold text-[#FBE618]">2 / 3 Active</div>
                 </div>
                 <div className="w-full bg-black/50 rounded-full h-2">
                   <div className="bg-[#FBE618] h-2 rounded-full shadow-[0_0_8px_rgba(251,230,24,0.6)]" style={{ width: '66%' }}></div>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
