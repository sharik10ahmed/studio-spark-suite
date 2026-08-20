import { createFileRoute, Link } from "@tanstack/react-router";
import { AdminShell } from "@/components/admin/AdminShell";
import { StatusPill } from "@/components/admin/ResourceManager";
import { Icon } from "@/components/ui/Icon";
import { useStudio } from "@/store/studio";

export const Route = createFileRoute("/admin/")({
  head: () => ({
    meta: [
      { title: "Admin Dashboard | D Maker Dance & Fitness Studio" },
      {
        name: "description",
        content:
          "Overview of programs, fitness services, gallery images, events, testimonials and enquiries for D Maker Dance & Fitness Studio.",
      },
      { name: "robots", content: "noindex" },
      { property: "og:title", content: "Admin Dashboard | D Maker Dance & Fitness Studio" },
      { property: "og:description", content: "Studio content dashboard overview." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AdminDashboard,
});

function AdminDashboard() {
  const { programs, fitness, gallery, events, testimonials, enquiries, choreography } = useStudio();

  const cards = [
    { label: "Dance Programs", value: programs.items.length, icon: "music", to: "/admin/programs" },
    { label: "Fitness Services", value: fitness.items.length, icon: "dumbbell", to: "/admin/fitness" },
    {
      label: "Choreography",
      value: choreography.items.length,
      icon: "sparkles",
      to: "/admin/choreography",
    },
    { label: "Gallery Images", value: gallery.items.length, icon: "image", to: "/admin/gallery" },
    { label: "Events", value: events.items.length, icon: "calendar", to: "/admin/events" },
    {
      label: "Testimonials",
      value: testimonials.items.length,
      icon: "quote",
      to: "/admin/testimonials",
    },
    { label: "Enquiries", value: enquiries.items.length, icon: "inbox", to: "/admin/enquiries" },
  ] as const;

  const newEnquiries = enquiries.items.filter((e) => e.status === "New").length;

  return (
    <AdminShell title="Dashboard" subtitle="Studio content at a glance">
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {cards.map((card) => (
          <Link
            key={card.label}
            to={card.to}
            className="group border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-primary"
          >
            <div className="flex items-start justify-between">
              <span className="grid h-11 w-11 place-items-center bg-primary/10 text-primary">
                <Icon name={card.icon} className="h-5 w-5" />
              </span>
              <Icon
                name="arrow"
                className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-primary"
              />
            </div>
            <div className="mt-6 font-display text-4xl text-ink">{card.value}</div>
            <div className="mt-1 text-[11px] font-bold uppercase tracking-[0.18em] text-muted-foreground">
              {card.label}
            </div>
          </Link>
        ))}
        <div className="border border-border bg-ink-deep p-6 text-white">
          <span className="grid h-11 w-11 place-items-center bg-primary text-primary-foreground">
            <Icon name="bolt" className="h-5 w-5" />
          </span>
          <div className="mt-6 font-display text-4xl">{newEnquiries}</div>
          <div className="mt-1 text-[11px] font-bold uppercase tracking-[0.18em] text-white/50">
            New Enquiries
          </div>
        </div>
      </div>

      <div className="mt-10 border border-border bg-card">
        <div className="flex items-center justify-between border-b border-border px-6 py-4">
          <h2 className="font-display text-xl text-ink">Recent Enquiries</h2>
          <Link
            to="/admin/enquiries"
            className="text-[11px] font-bold uppercase tracking-[0.18em] text-primary"
          >
            View all
          </Link>
        </div>
        <div className="divide-y divide-border">
          {enquiries.items.slice(0, 5).map((item) => (
            <div key={item.id} className="flex flex-wrap items-center gap-3 px-6 py-4">
              <div className="min-w-0 flex-1">
                <div className="font-semibold text-ink">{item.name}</div>
                <p className="truncate text-xs text-muted-foreground">
                  {item.program} · {item.phone}
                </p>
              </div>
              <span className="text-xs text-muted-foreground">{item.date}</span>
              <StatusPill value={item.status} />
            </div>
          ))}
        </div>
      </div>
    </AdminShell>
  );
}
