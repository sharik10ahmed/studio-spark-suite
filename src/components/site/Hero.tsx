import { useEffect, useRef, useState } from "react";
import { IMG } from "@/data/images";
import { HERO_STATS } from "@/data/mock";
import { LinkButton } from "@/components/ui/ActionButton";
import { useStudio } from "@/store/studio";

function useCountUp(target: number, run: boolean) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!run) return;
    const duration = 1200;
    const start = performance.now();
    let frame = 0;
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      setValue(Math.round(target * (1 - Math.pow(1 - p, 3))));
      if (p < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [target, run]);
  return value;
}

function Stat({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [run, setRun] = useState(false);
  const shown = useCountUp(value, run);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const io = new IntersectionObserver(
      (e) => {
        if (e[0]?.isIntersecting) {
          setRun(true);
          io.disconnect();
        }
      },
      { threshold: 0.4 },
    );
    io.observe(node);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} className="border-l border-white/15 px-5 py-4 first:border-l-0 sm:px-7">
      <div className="font-display text-4xl text-primary sm:text-5xl">
        {shown}
        {suffix}
      </div>
      <div className="mt-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/60">
        {label}
      </div>
    </div>
  );
}

export function Hero() {
  const { settings } = useStudio();

  return (
    <section className="relative min-h-[92vh] overflow-hidden bg-ink">
      <img
        src={IMG.hero}
        alt="Dancers performing at D Maker Dance & Fitness Studio in Gadhinglaj"
        className="hero-pan absolute inset-0 h-full w-full object-cover opacity-55"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-ink-deep via-ink-deep/85 to-ink/40" />

      <div className="container-x relative flex min-h-[92vh] flex-col justify-center py-24">
        <div className="flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.32em] text-primary">
          <span className="h-px w-10 bg-primary" />
          Dance &amp; Fitness Studio — Gadhinglaj
        </div>

        <h1 className="mt-6 max-w-4xl text-6xl leading-[0.92] text-white sm:text-7xl lg:text-[6.5rem]">
          {settings.heroHeading}
        </h1>

        <p className="mt-6 font-display text-xl tracking-wide text-primary sm:text-2xl">
          Premium Dance &amp; Fitness Training in Gadhinglaj
        </p>

        <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/70">
          {settings.heroDescription}
        </p>

        <div className="mt-9 flex flex-wrap gap-4">
          <LinkButton to="/contact" size="lg">
            {settings.ctaText}
          </LinkButton>
          <LinkButton to="/programs" variant="light" size="lg">
            Explore Programs
          </LinkButton>
        </div>

        <div className="mt-16 grid grid-cols-2 border-t border-white/15 pt-2 lg:grid-cols-4">
          {HERO_STATS.map((s) => (
            <Stat key={s.label} value={s.value} suffix={s.suffix} label={s.label} />
          ))}
        </div>
      </div>
    </section>
  );
}
