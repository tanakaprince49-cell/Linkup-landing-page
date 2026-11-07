import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Play, Pause, Volume2, VolumeX, Maximize2, Captions, RotateCcw } from 'lucide-react';

const VIDEO_SRC = '/videos/linkup-launch-60s.mp4';
const POSTER_SRC = '/images/video/linkup-launch-poster.jpg';
const CAPTIONS_SRC = '/videos/linkup-launch-60s.en.srt';

export const LaunchFilm: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(false);
  const [captionsOn, setCaptionsOn] = useState(true);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(60);

  const togglePlay = () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) {
      v.play().catch(() => undefined);
    } else {
      v.pause();
    }
  };

  const toggleMute = () => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = !v.muted;
    setMuted(v.muted);
  };

  const toggleCaptions = () => {
    const v = videoRef.current;
    if (!v) return;
    const next = !captionsOn;
    setCaptionsOn(next);
    for (let i = 0; i < v.textTracks.length; i++) {
      v.textTracks[i].mode = next ? 'showing' : 'hidden';
    }
  };

  const restart = () => {
    const v = videoRef.current;
    if (!v) return;
    v.currentTime = 0;
    v.play().catch(() => undefined);
  };

  const seek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const v = videoRef.current;
    if (!v) return;
    const t = Number(e.target.value);
    v.currentTime = t;
    setProgress(t);
  };

  const fullscreen = () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.requestFullscreen) v.requestFullscreen().catch(() => undefined);
    else if ((v as any).webkitEnterFullscreen) (v as any).webkitEnterFullscreen();
  };

  const fmt = (s: number) => {
    if (!Number.isFinite(s)) return '0:00';
    const m = Math.floor(s / 60);
    const sec = Math.floor(s % 60);
    return `${m}:${sec.toString().padStart(2, '0')}`;
  };

  return (
    <section id="launch-film" aria-label="LINKUP launch film" className="py-20 lg:py-24 relative z-20 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[420px] bg-[#FBE618]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-10">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel border border-[#FBE618]/40 bg-[#FBE618]/10 text-[#FBE618] text-xs sm:text-sm font-bold tracking-wide uppercase"
          >
            <span className="w-2 h-2 rounded-full bg-[#FBE618] animate-pulse" />
            Your Future Duo, In Motion
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="mt-5 text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight"
          >
            Watch Chemistry Happen in <span className="text-[#FBE618]">60 seconds</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-4 text-slate-300 text-base sm:text-lg max-w-2xl mx-auto"
          >
            Tell Linky who keeps crossing your mind when you think, “I cannot do this alone.” Meet compatible builders, make it mutual, and become the duo everyone else has to keep up with.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="relative rounded-[2rem] border border-white/10 glass-panel bg-white/5 p-2 sm:p-3 shadow-2xl"
        >
          <div className="relative rounded-[1.5rem] overflow-hidden bg-black aspect-video group">
            <video
              ref={videoRef}
              className="w-full h-full object-contain bg-black"
              poster={POSTER_SRC}
              preload="metadata"
              playsInline
              controls={false}
              onPlay={() => setPlaying(true)}
              onPause={() => setPlaying(false)}
              onEnded={() => setPlaying(false)}
              onTimeUpdate={(e) => setProgress(e.currentTarget.currentTime)}
              onLoadedMetadata={(e) => {
                setDuration(e.currentTarget.duration || 60);
                for (let i = 0; i < e.currentTarget.textTracks.length; i++) {
                  e.currentTarget.textTracks[i].mode = captionsOn ? 'showing' : 'hidden';
                }
              }}
              aria-label="LINKUP 60 second launch film with natural voice narration"
            >
              <source src={VIDEO_SRC} type="video/mp4" />
              <track
                kind="captions"
                src={CAPTIONS_SRC}
                srcLang="en"
                label="English"
                default={captionsOn}
              />
              Your browser does not support embedded video. Watch the LINKUP launch film at
              <a href="https://www.linkupbuild.com/videos/linkup-launch-60s.mp4">this direct link</a>.
            </video>

            {!playing && (
              <button
                type="button"
                onClick={togglePlay}
                className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/20 transition-colors"
                aria-label="Play LINKUP launch film"
              >
                <span className="flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-[#FBE618] text-black shadow-[0_0_60px_rgba(251,230,24,0.45)] hover:scale-105 transition-transform">
                  <Play className="w-9 h-9 sm:w-11 sm:h-11 ml-1" fill="currentColor" />
                </span>
              </button>
            )}
          </div>

          <div className="mt-3 px-2 sm:px-3 pb-2 flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono text-slate-400 w-10 text-right">{fmt(progress)}</span>
              <input
                type="range"
                min={0}
                max={duration || 60}
                step={0.1}
                value={progress}
                onChange={seek}
                aria-label="Seek launch film"
                className="flex-1 h-1.5 accent-[#FBE618] cursor-pointer"
              />
              <span className="text-xs font-mono text-slate-400 w-10">{fmt(duration)}</span>
            </div>
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <button type="button" onClick={togglePlay} className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#FBE618] text-black text-sm font-bold hover:bg-[#fff056] transition-colors" aria-label={playing ? 'Pause launch film' : 'Play launch film'}>
                  {playing ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                  {playing ? 'Pause' : 'Play'}
                </button>
                <button type="button" onClick={restart} className="p-2.5 rounded-xl border border-white/10 bg-white/5 text-slate-200 hover:bg-white/10 transition-colors" aria-label="Restart launch film">
                  <RotateCcw className="w-4 h-4" />
                </button>
                <button type="button" onClick={toggleMute} className="p-2.5 rounded-xl border border-white/10 bg-white/5 text-slate-200 hover:bg-white/10 transition-colors" aria-label={muted ? 'Unmute launch film' : 'Mute launch film'}>
                  {muted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                </button>
                <button type="button" onClick={toggleCaptions} className={`p-2.5 rounded-xl border transition-colors ${captionsOn ? 'border-[#FBE618]/50 bg-[#FBE618]/15 text-[#FBE618]' : 'border-white/10 bg-white/5 text-slate-200 hover:bg-white/10'}`} aria-label={captionsOn ? 'Hide captions' : 'Show captions'} aria-pressed={captionsOn}>
                  <Captions className="w-4 h-4" />
                </button>
              </div>
              <div className="flex items-center gap-3">
                <a href={VIDEO_SRC} target="_blank" rel="noopener noreferrer" className="text-xs sm:text-sm font-semibold text-slate-300 hover:text-white transition-colors">
                  Open video ↗
                </a>
                <button type="button" onClick={fullscreen} className="p-2.5 rounded-xl border border-white/10 bg-white/5 text-slate-200 hover:bg-white/10 transition-colors" aria-label="Fullscreen launch film">
                  <Maximize2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="/app/landing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-7 py-3.5 rounded-2xl bg-[#FBE618] text-black font-bold text-base hover:bg-[#fff056] transition-colors shadow-[0_0_40px_rgba(251,230,24,0.25)]"
          >
            Go find my person
          </a>
          <a
            href="#linkup-agent"
            className="inline-flex items-center justify-center px-7 py-3.5 rounded-2xl border border-white/15 bg-white/5 text-white font-semibold text-base hover:bg-white/10 transition-colors"
          >
            Let Linky play matchmaker
          </a>
        </motion.div>
      </div>
    </section>
  );
};
