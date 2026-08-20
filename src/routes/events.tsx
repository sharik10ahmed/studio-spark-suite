import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { SiteShell, PageHero } from "@/components/site/SiteShell";
import { CTASection } from "@/components/site/Sections";
import { EventCard } from "@/components/site/Cards";
import { Reveal } from "@/components/ui/Reveal";
import { IMG } from "@/data/images";
import { useStudio } from "@/store/studio";
import { cn } from "@/lib/utils";

const title = "Performances & Events — D Maker Dance & Fitness Studio";
const description =
  "Weddings, cultural nights, college festivals, corporate shows and community performances staged by D Maker Dance & Fitness Studio, Gadhinglaj.";

export const Route = createFileRoute("/events")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: EventsPage,
});

function EventsPage() {
  const { events } = useStudio();
  const [category, setCategory] = useState("All");

  const published = events.items.filter((e) => e.status === "published");
  const categories = useMemo(
    () => ["All", ...Array.from(new Set(published.map((e) => e.category)))],
    [published],
  );
  const visible = category === "All" ? published : published.filter((e) => e.category === category);

  return (
    <SiteShell>
      <PageHero
        eyebrow="Performances & Events"
        title="Stages We've Owned"
        text="Event choreography and live performances across weddings, cultural programmes, colleges and community celebrations."
        image={IMG.g10}
      />

      <section className="bg-background py-20 sm:py-28">
        <div className="container-x">
          <div className="flex flex-wrap gap-3">
            {categories.map((item) => (
              <button
                key={item}
                onClick={() => setCategory(item)}
                className={cn(
                  "border px-5 py-2 text-[11px] font-bold uppercase tracking-[0.18em] transition-colors",
                  category === item
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border text-muted-foreground hover:border-primary hover:text-primary",
                )}
              >
                {item}
              </button>
            ))}
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {visible.map((e, i) => (
              <Reveal key={e.id} delay={i * 60}>
                <EventCard item={e} />
              </Reveal>
            ))}
          </div>

          {visible.length === 0 ? (
            <p className="mt-12 text-sm text-muted-foreground">
              No events published in this category yet.
            </p>
          ) : null}
        </div>
      </section>

      <CTASection />
    </SiteShell>
  );
}
