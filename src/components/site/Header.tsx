import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Icon } from "@/components/ui/Icon";
import { LinkButton } from "@/components/ui/ActionButton";
import { useStudio } from "@/store/studio";
import { cn } from "@/lib/utils";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/programs", label: "Programs" },
  { to: "/fitness", label: "Fitness" },
  { to: "/choreography", label: "Choreography" },
  { to: "/gallery", label: "Gallery" },
  { to: "/events", label: "Events" },
  { to: "/testimonials", label: "Reviews" },
] as const;

export function Header() {
  const { settings } = useStudio();
  const [compact, setCompact] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setCompact(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b transition-all duration-300",
        compact
          ? "border-border bg-background/95 py-2 shadow-[0_10px_30px_-24px_var(--ink)] backdrop-blur"
          : "border-transparent bg-background/70 py-4 backdrop-blur-sm",
      )}
    >
      <div className="container-x flex items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <span className="grid h-10 w-10 place-items-center bg-primary text-primary-foreground font-display text-xl">
            D
          </span>
          <span className="leading-tight">
            <span className="block font-display text-lg tracking-wide text-ink">D MAKER</span>
            <span className="block text-[10px] font-semibold uppercase tracking-[0.28em] text-muted-foreground">
              Dance &amp; Fitness
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-6 xl:flex">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              activeProps={{ className: "text-primary" }}
              className="text-[12px] font-semibold uppercase tracking-[0.16em] text-ink transition-colors hover:text-primary"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={`tel:${settings.phone}`}
            className="hidden items-center gap-2 text-sm font-semibold text-ink hover:text-primary lg:flex"
          >
            <Icon name="phone" className="h-4 w-4 text-primary" />
            {settings.phone}
          </a>
          <LinkButton to="/contact" size="sm" className="hidden sm:inline-flex">
            {settings.ctaText}
          </LinkButton>
          <button
            aria-label="Open menu"
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 place-items-center border border-border text-ink xl:hidden"
          >
            <Icon name={open ? "close" : "menu"} />
          </button>
        </div>
      </div>

      {open ? (
        <div className="fixed inset-0 top-[64px] z-40 bg-background xl:hidden">
          <nav className="container-x flex flex-col gap-1 py-6">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                activeOptions={{ exact: item.to === "/" }}
                activeProps={{ className: "text-primary" }}
                className="border-b border-border py-4 font-display text-2xl text-ink"
              >
                {item.label}
              </Link>
            ))}
            <LinkButton to="/contact" onClick={() => setOpen(false)} size="lg" className="mt-6">
              {settings.ctaText}
            </LinkButton>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
