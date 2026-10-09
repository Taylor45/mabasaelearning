import { useEffect, useRef, useState, type CSSProperties } from "react";
import type WaveSurfer from "wavesurfer.js";
import { Pause, Play, RotateCcw, Volume1, Volume2, VolumeX } from "lucide-react";
import { Button } from "@/components/ui/button";
import originalAudio from "@/assets/original-audio.mp3.asset.json";
import cloneAudio from "@/assets/clone-audio.mp3.asset.json";

const SPEEDS = [0.75, 1, 1.25] as const;

function timestamp(seconds: number) {
  const value = Number.isFinite(seconds) ? Math.floor(seconds) : 0;
  return `${Math.floor(value / 60)}:${String(value % 60).padStart(2, "0")}`;
}

function AudioPlayer({ badge, title, subtitle, src, active, onPlay }: {
  badge: string;
  title: string;
  subtitle: string;
  src: string;
  active: string | null;
  onPlay: (title: string) => void;
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
  const [rate, setRate] = useState<number>(1);

  useEffect(() => {
    let disposed = false;
    let instance: WaveSurfer | undefined;
    async function initialize() {
      try {
        const { default: Waveform } = await import("wavesurfer.js");
        if (disposed || !container.current || !media.current) return;
        const colors = getComputedStyle(container.current);
        instance = Waveform.create({
          container: container.current,
          media: media.current,
          waveColor: colors.getPropertyValue("--surface-light-muted").trim(),
          progressColor: colors.getPropertyValue("--brand-deep").trim(),
          cursorColor: colors.getPropertyValue("--brand-deep").trim(),
          cursorWidth: 2,
          height: 96,
          barWidth: 3,
          barGap: 3,
          barRadius: 3,
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

  const changeRate = (next: number) => {
    setRate(next);
    if (media.current) media.current.playbackRate = next;
  };

  const changeVolume = (next: number) => {
    setVolume(next);
    if (media.current) { media.current.volume = next; media.current.muted = next === 0; }
  };

  const progress = duration ? Math.min(100, (time / duration) * 100) : 0;
  const status = error ? "Unavailable" : playing ? "Playing" : ready ? "Ready" : "Loading";
  const VolumeIcon = volume === 0 ? VolumeX : volume < 0.5 ? Volume1 : Volume2;

  return (
    <article className={`min-w-0 rounded-2xl border bg-surface-light p-5 text-surface-light-foreground transition duration-300 sm:p-7 ${
      playing
        ? "border-brand-deep/45 shadow-card-lift"
        : "border-surface-light-border shadow-card hover:shadow-card-lift"
    }`}>
      <header className="flex items-start justify-between gap-4">
        <div className="flex min-w-0 items-center gap-3">
          <span aria-hidden="true" className="flex size-10 shrink-0 items-center justify-center rounded-full bg-brand-deep/10 font-display text-lg font-semibold text-brand-deep">
            {badge}
          </span>
          <div className="min-w-0">
            <h3 className="truncate font-body text-lg font-semibold">{title}</h3>
            <p className="mt-0.5 truncate text-sm text-surface-light-muted">{subtitle}</p>
          </div>
        </div>
        <span className={`inline-flex shrink-0 items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium ${
          playing
            ? "border-brand-deep/30 bg-brand-deep/10 text-brand-deep"
            : "border-surface-light-border bg-surface-light-subtle text-surface-light-muted"
        }`}>
          <span aria-hidden="true" className={`size-1.5 rounded-full ${playing ? "animate-pulse bg-brand-deep" : "bg-surface-light-muted"}`} />
          {status}
        </span>
      </header>

      <div className="relative mt-6 min-w-0 overflow-hidden rounded-xl border border-surface-light-border bg-surface-light-subtle px-3 py-3">
        <div ref={container} className="h-24 w-full" />
        {!ready && !error && (
          <div className="absolute inset-0 flex items-center justify-center gap-1.5" aria-hidden="true">
            {Array.from({ length: 28 }).map((_, i) => (
              <span key={i} className="w-1 animate-pulse rounded-full bg-surface-light-track" style={{ height: `${18 + (i % 6) * 12}px`, animationDelay: `${i * 60}ms` }} />
            ))}
          </div>
        )}
        <p className="pointer-events-none absolute bottom-1.5 right-3 text-[11px] text-surface-light-muted">
          Click the waveform to jump
        </p>
      </div>

      <audio ref={media} src={src} preload="metadata"
        onLoadedMetadata={() => setDuration(media.current?.duration ?? 0)}
        onTimeUpdate={() => setTime(media.current?.currentTime ?? 0)}
        onPlay={() => { setPlaying(true); onPlay(title); }}
        onPause={() => setPlaying(false)} onEnded={() => setPlaying(false)}
        onError={() => setError(true)} />

      <input type="range" min={0} max={duration || 1} step={0.1} value={Math.min(time, duration || 1)}
        aria-label={`Seek ${title}`} disabled={!duration}
        onChange={(event) => { if (media.current) media.current.currentTime = Number(event.target.value); }}
        className="audio-seek mt-5" style={{ "--seek": `${progress}%` } as React.CSSProperties} />

      <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-3">
        <Button size="icon" className="size-12 shrink-0 rounded-full bg-brand-deep text-surface-light shadow-card hover:bg-brand-deep/90"
          disabled={!duration} onClick={() => void toggle()}
          aria-label={`${playing ? "Pause" : "Play"} ${title}`} title={`${playing ? "Pause" : "Play"} ${title}`}>
          {playing ? <Pause className="size-5" /> : <Play className="size-5" />}
        </Button>
        <Button size="icon" variant="ghost" className="size-11 shrink-0 rounded-full border border-surface-light-border bg-surface-light text-surface-light-foreground hover:bg-brand-deep/10 hover:text-brand-deep"
          onClick={() => { if (media.current) { media.current.currentTime = 0; setTime(0); } }}
          aria-label={`Restart ${title}`} title="Restart"><RotateCcw /></Button>
        <span className="text-sm tabular-nums text-surface-light-muted">
          <span className="font-semibold text-surface-light-foreground">{timestamp(time)}</span> / {timestamp(duration)}
        </span>
        <div className="ml-auto flex items-center gap-3">
          <div role="group" aria-label={`${title} playback speed`} className="flex items-center rounded-full border border-surface-light-border bg-surface-light-subtle p-0.5">
            {SPEEDS.map((speed) => (
              <button key={speed} type="button" aria-pressed={rate === speed} onClick={() => changeRate(speed)}
                className={`rounded-full px-2.5 py-1 text-xs font-medium tabular-nums transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-deep/40 ${
                  rate === speed ? "bg-brand-deep text-surface-light" : "text-surface-light-muted hover:text-surface-light-foreground"
                }`}>
                {speed}×
              </button>
            ))}
          </div>
          <label className="flex items-center gap-2">
            <button type="button" onClick={() => changeVolume(volume === 0 ? 1 : 0)}
              aria-label={volume === 0 ? `Unmute ${title}` : `Mute ${title}`} title={volume === 0 ? "Unmute" : "Mute"}
              className="rounded-full p-1 text-surface-light-muted transition-colors hover:text-brand-deep focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-deep/40">
              <VolumeIcon className="size-4" aria-hidden="true" />
            </button>
            <input type="range" min={0} max={1} step={0.05} value={volume} aria-label={`${title} volume`}
              onChange={(event) => changeVolume(Number(event.target.value))}
              className="audio-volume w-16 sm:w-20" />
          </label>
        </div>
      </div>

      {error && (
        <p role="status" className="mt-4 rounded-lg border border-surface-light-border bg-surface-light-subtle px-4 py-3 text-sm text-surface-light-muted">
          Audio preview unavailable. <a href={src} target="_blank" rel="noopener noreferrer" className="font-medium text-brand-deep underline underline-offset-4">Open recording</a>
        </p>
      )}
    </article>
  );
}

export function AudioComparison() {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div className="mx-auto max-w-6xl px-5 py-10">
      <div className="grid items-stretch gap-5 md:grid-cols-2 md:gap-6">
        <AudioPlayer badge="A" title="Original Audio" subtitle="Original narration" src={originalAudio.url} active={active} onPlay={setActive} />
        <AudioPlayer badge="B" title="Cloned Audio" subtitle="AI-cloned narration" src={cloneAudio.url} active={active} onPlay={setActive} />
      </div>
      <p className="mt-5 text-center text-sm text-surface-light-muted">
        {active ? (
          <>Now playing <span className="font-medium text-brand-deep">{active}</span> — the other recording stays silent.</>
        ) : (
          <>Play A and B back to back to compare the original narration with the AI-cloned voice.</>
        )}
      </p>
    </div>
  );
}
