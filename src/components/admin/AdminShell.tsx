import { Link, useNavigate, useRouterState } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
import { Icon } from "@/components/ui/Icon";
import { LinkButton } from "@/components/ui/ActionButton";
import { useStudio } from "@/store/studio";
import { cn } from "@/lib/utils";

const NAV = [
  { to: "/admin", label: "Dashboard", icon: "grid" },
  { to: "/admin/programs", label: "Programs", icon: "music" },
  { to: "/admin/fitness", label: "Fitness", icon: "dumbbell" },
  { to: "/admin/choreography", label: "Choreography", icon: "sparkles" },
  { to: "/admin/gallery", label: "Gallery", icon: "image" },
  { to: "/admin/events", label: "Events", icon: "calendar" },
  { to: "/admin/testimonials", label: "Testimonials", icon: "quote" },
  { to: "/admin/enquiries", label: "Enquiries", icon: "inbox" },
  { to: "/admin/settings", label: "Website Settings", icon: "settings" },
] as const;

export function AdminShell({
  title,
  subtitle,
  actions,
  children,
}: {
  title: string;
  subtitle?: string;
  actions?: ReactNode;
  children: ReactNode;
}) {
  const { isAuthenticated, logout, settings } = useStudio();
  const navigate = useNavigate();
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [open, setOpen] = useState(false);

  if (!isAuthenticated) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-secondary px-4">
        <div className="max-w-md border border-border bg-card p-10 text-center">
          <h1 className="font-display text-3xl text-ink">Admin access required</h1>
          <p className="mt-3 text-sm text-muted-foreground">
            Sign in with the demo credentials to manage studio content.
          </p>
          <LinkButton to="/admin/login" className="mt-7">
            Go to Admin Login
          </LinkButton>
        </div>
      </div>
    );
  }

  const sidebar = (
    <div className="flex h-full flex-col bg-ink-deep">
      <div className="flex items-center gap-3 border-b border-white/10 px-6 py-5">
        <span className="grid h-9 w-9 place-items-center bg-primary font-display text-lg text-primary-foreground">
          D
        </span>
        <div>
          <div className="font-display text-lg leading-none text-white">D Maker</div>
          <div className="text-[10px] uppercase tracking-[0.22em] text-white/45">Admin panel</div>
        </div>
      </div>

      <nav className="flex-1 overflow-y-auto p-4">
        {NAV.map((item) => {
          const active =
            item.to === "/admin" ? pathname === "/admin" : pathname.startsWith(item.to);
          return (
            <Link
              key={item.to}
              to={item.to}
              onClick={() => setOpen(false)}
              className={cn(
                "mb-1 flex items-center gap-3 px-4 py-3 text-sm transition-colors",
                active
                  ? "bg-primary text-primary-foreground"
                  : "text-white/65 hover:bg-white/5 hover:text-white",
              )}
            >
              <Icon name={item.icon} className="h-4.5 w-4.5" />
              {item.label}
            </Link>
          );
        })}
      </nav>

      <div className="space-y-1 border-t border-white/10 p-4">
        <Link
          to="/"
          className="flex items-center gap-3 px-4 py-3 text-sm text-white/65 transition-colors hover:text-white"
        >
          <Icon name="external" className="h-4.5 w-4.5" />
          View Website
        </Link>
        <button
          onClick={() => {
            logout();
            navigate({ to: "/admin/login" });
          }}
          className="flex w-full items-center gap-3 px-4 py-3 text-sm text-white/65 transition-colors hover:text-primary"
        >
          <Icon name="logout" className="h-4.5 w-4.5" />
          Logout
        </button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-secondary">
      <aside className="fixed inset-y-0 left-0 hidden w-64 lg:block">{sidebar}</aside>

      {open ? (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="absolute inset-0 bg-ink-deep/70" onClick={() => setOpen(false)} />
          <div className="absolute inset-y-0 left-0 w-72 shadow-2xl">{sidebar}</div>
        </div>
      ) : null}

      <div className="lg:pl-64">
        <header className="sticky top-0 z-40 flex items-center gap-4 border-b border-border bg-background px-5 py-4 sm:px-8">
          <button
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            className="text-ink lg:hidden"
          >
            <Icon name="menu" className="h-6 w-6" />
          </button>
          <div className="min-w-0 flex-1">
            <h1 className="truncate font-display text-2xl text-ink">{title}</h1>
            {subtitle ? (
              <p className="truncate text-xs text-muted-foreground">{subtitle}</p>
            ) : null}
          </div>
          {actions}
          <span className="hidden text-right text-xs text-muted-foreground sm:block">
            <span className="block font-semibold text-ink">Mr. Duggu Thakur</span>
            {settings.email}
          </span>
        </header>

        <main className="px-5 py-8 sm:px-8">{children}</main>
      </div>
    </div>
  );
}
