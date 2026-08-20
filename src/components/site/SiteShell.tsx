import type { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 pt-[72px]">{children}</main>
      <Footer />
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  text,
  image,
}: {
  eyebrow: string;
  title: string;
  text?: string;
  image: string;
}) {
  return (
    <section className="relative overflow-hidden bg-ink">
      <img
        src={image}
        alt={title}
        className="absolute inset-0 h-full w-full object-cover opacity-35"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-ink-deep via-ink-deep/80 to-transparent" />
      <div className="container-x relative py-20 sm:py-28">
        <div className="flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.32em] text-primary">
          <span className="h-px w-8 bg-primary" />
          {eyebrow}
        </div>
        <h1 className="mt-5 max-w-3xl text-5xl text-white sm:text-6xl lg:text-7xl">{title}</h1>
        {text ? <p className="mt-5 max-w-2xl text-white/65">{text}</p> : null}
      </div>
    </section>
  );
}
