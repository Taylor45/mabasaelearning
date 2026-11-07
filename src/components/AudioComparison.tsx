import { useEffect, useRef, useState } from "react";
import type WaveSurfer from "wavesurfer.js";
import { Headphones, Pause, Play, RotateCcw, Volume2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import originalAudio from "@/assets/original-audio.mp3.asset.json";
import cloneAudio from "@/assets/clone-audio.mp3.asset.json";

function timestamp(seconds: number) {
  const value = Number.isFinite(seconds) ? Math.floor(seconds) : 0;
  return `${Math.floor(value / 60)}:${String(value % 60).padStart(2, "0")}`;
}

const SPEEDS = [1, 1.25, 1.5, 2];

function AudioPlayer({ title, subtitle, src, active, onPlay }: {
  title: string; subtitle: string; src: string; active: string | null; onPlay: (title: string) => void;
}) {
  const container = useRef<HTMLDivElement>(null);
  const media = useRef<HTMLAudioElement>(null);
  const wave = useRef<WaveSurfer | null>(null);
  const [ready, setReady] = useState(false);
  const [error, setError] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [time, setTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const [speed, setSpeed] = useState(1);

  useEffect(() => {
    let disposed = false;
    let instance: WaveSurfer | undefined;
    async function initialize() {
      try {
        const { default: Waveform } = await import("wavesurfer.js");
        if (disposed || !container.current || !media.current) return;
        instance = Waveform.create({
          container: container.current, media: media.current,
          waveColor: "oklch(0.55 0.06 255)",
          progressColor: "oklch(0.79 0.12 197)",
          cursorColor: "oklch(0.79 0.12 197)",
          cursorWidth: 2,
          height: 96, barWidth: 3, barGap: 3, barRadius: 2,
          normalize: true,
        });
        wave.current = instance;
        instance.on("ready", () => {
          if (!disposed) { setReady(true); setDuration(media.current?.duration ?? 0); }
        });
        if (media.current.readyState >= 1) setDuration(media.current.duration);
        instance.on("error", () => { if (!disposed) setError(true); });
      } catch { if (!disposed) setError(true); }
    }
    void initialize();
    return () => { disposed = true; instance?.destroy(); wave.current = null; };
  }, [src]);

  useEffect(() => {
    if (active !== title) media.current?.pause();
  }, [active, title]);

  const toggle = async () => {
    const audio = media.current;
    if (!audio) return;
    if (!audio.paused) { audio.pause(); return; }
    onPlay(title);
    try { await audio.play(); } catch { setError(true); }
  };

  const cycleSpeed = () => {
    const next = SPEEDS[(SPEEDS.indexOf(speed) + 1) % SPEEDS.length];
    setSpeed(next);
    if (media.current) media.current.playbackRate = next;
  };

  return (
    <article className="card-grow min-w-0 overflow-hidden rounded-2xl border border-border bg-background p-5 text-foreground shadow-elevated sm:p-7">
      <header className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <h3 className="text-xl font-semibold sm:text-2xl">{title}</h3>
          <p className="mt-1 text-sm text-muted-foreground">{subtitle}</p>
        </div>
        <span className="flex size-11 shrink-0 items-center justify-center rounded-full border border-brand-cyan/60 text-brand-cyan" aria-hidden="true">
          <Headphones className="size-5" />
        </span>
      </header>
      <div className="relative my-6 h-24 min-w-0">
        <div ref={container} className="h-full w-full" />
        {!ready && !error && <div className="absolute inset-0 flex items-center justify-center text-sm text-muted-foreground">Loading audio…</div>}
      </div>
      <audio ref={media} src={src} preload="metadata"
        onLoadedMetadata={() => setDuration(media.current?.duration ?? 0)}
        onTimeUpdate={() => setTime(media.current?.currentTime ?? 0)}
        onPlay={() => { setPlaying(true); onPlay(title); }}
        onPause={() => setPlaying(false)} onEnded={() => setPlaying(false)}
        onError={() => setError(true)} />
      <div className="flex flex-wrap items-center gap-x-4 gap-y-3">
        <Button size="icon" disabled={!duration}
          className="size-14 shrink-0 rounded-full bg-brand-cyan text-primary-foreground hover:bg-brand-cyan/90 focus-visible:ring-brand-cyan"
          onClick={() => void toggle()} aria-label={`${playing ? "Pause" : "Play"} ${title}`} title={`${playing ? "Pause" : "Play"} ${title}`}>
          {playing ? <Pause className="size-6" /> : <Play className="size-6 translate-x-0.5" />}
        </Button>
        <Button size="icon" variant="ghost" className="size-10 shrink-0 text-muted-foreground hover:text-brand-cyan"
          onClick={() => { if (media.current) media.current.currentTime = 0; }} aria-label={`Restart ${title}`} title="Restart audio">
          <RotateCcw className="size-5" />
        </Button>
        <span className="text-sm tabular-nums text-muted-foreground">
          <span className="text-foreground">{timestamp(time)}</span> / {timestamp(duration)}
        </span>
        <button type="button" onClick={cycleSpeed}
          className="rounded-full border border-border px-3 py-1 text-xs font-medium text-muted-foreground transition-colors hover:border-brand-cyan hover:text-brand-cyan focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan"
          aria-label={`Playback speed ${speed} times, activate to change`} title="Change playback speed">
          {speed}×
        </button>
        <label className="ml-auto flex items-center gap-2">
          <Volume2 className="size-4 text-muted-foreground" aria-hidden="true" />
          <input type="range" min={0} max={1} step={0.05} value={volume} aria-label={`${title} volume`}
            onChange={(event) => { const next = Number(event.target.value); setVolume(next); if (media.current) media.current.volume = next; }}
            className="h-5 w-16 cursor-pointer accent-brand-cyan sm:w-24" />
        </label>
      </div>
      {error && <p role="status" className="mt-3 text-sm text-muted-foreground">Audio preview unavailable. <a href={src} target="_blank" rel="noopener noreferrer" className="underline">Open recording</a></p>}
    </article>
  );
}

export function AudioComparison() {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div className="mx-auto grid max-w-6xl items-start gap-6 px-5 py-10 md:grid-cols-2">
      <AudioPlayer title="Original Audio" subtitle="Original narration" src={originalAudio.url} active={active} onPlay={setActive} />
      <AudioPlayer title="Cloned Audio" subtitle="AI-cloned narration" src={cloneAudio.url} active={active} onPlay={setActive} />
    </div>
  );
}
