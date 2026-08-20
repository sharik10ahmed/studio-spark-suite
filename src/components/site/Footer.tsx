import { Link } from "@tanstack/react-router";
import { Icon } from "@/components/ui/Icon";
import { useStudio } from "@/store/studio";

const QUICK = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/programs", label: "Programs" },
  { to: "/fitness", label: "Fitness" },
  { to: "/choreography", label: "Choreography" },
  { to: "/gallery", label: "Gallery" },
  { to: "/events", label: "Events" },
  { to: "/contact", label: "Contact" },
] as const;

const OFFERS = [
  "Dance Training",
  "Fitness",
  "Group Batches",
  "Choreography",
  "Event Performances",
];

const SOCIAL = ["Instagram", "Facebook", "YouTube", "WhatsApp"];

export function Footer() {
  const { settings } = useStudio();

  return (
    <footer className="bg-ink-deep text-white/70">
      <div className="container-x grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center bg-primary font-display text-xl text-primary-foreground">
              D
            </span>
            <span className="font-display text-lg tracking-wide text-white">
              {settings.businessName}
            </span>
          </div>
          <p className="mt-5 text-sm leading-relaxed">{settings.footerDescription}</p>
          <div className="mt-6 flex gap-3">
            {SOCIAL.map((s) => (
              <a
                key={s}
                href="#"
                aria-label={s}
                className="grid h-9 w-9 place-items-center border border-white/15 transition-colors hover:border-primary hover:text-primary"
              >
                <Icon name="external" className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-display text-base tracking-[0.18em] text-white">QUICK LINKS</h4>
          <ul className="mt-5 space-y-3 text-sm">
            {QUICK.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="transition-colors hover:text-primary">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display text-base tracking-[0.18em] text-white">PROGRAMS</h4>
          <ul className="mt-5 space-y-3 text-sm">
            {OFFERS.map((o) => (
              <li key={o}>{o}</li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display text-base tracking-[0.18em] text-white">CONTACT</h4>
          <ul className="mt-5 space-y-4 text-sm">
            <li className="flex gap-3">
              <Icon name="phone" className="h-4 w-4 shrink-0 text-primary" />
              <a href={`tel:${settings.phone}`} className="hover:text-primary">
                {settings.phone}
              </a>
            </li>
            <li className="flex gap-3">
              <Icon name="mail" className="h-4 w-4 shrink-0 text-primary" />
              <a href={`mailto:${settings.email}`} className="hover:text-primary">
                {settings.email}
              </a>
            </li>
            <li className="flex gap-3">
              <Icon name="pin" className="h-4 w-4 shrink-0 text-primary" />
              <span>{settings.address}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x flex flex-col items-center justify-between gap-3 py-6 text-xs sm:flex-row">
          <p>© 2026 {settings.businessName}. All Rights Reserved.</p>
          <Link
            to="/admin/login"
            className="inline-flex items-center gap-2 text-white/45 transition-colors hover:text-primary"
          >
            <Icon name="settings" className="h-3.5 w-3.5" />
            Admin Login
          </Link>
        </div>
      </div>
    </footer>
  );
}
