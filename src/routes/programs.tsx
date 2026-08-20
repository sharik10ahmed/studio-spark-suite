import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { SiteShell, PageHero } from "@/components/site/SiteShell";
import { CTASection, TrainingProcess } from "@/components/site/Sections";
import { ProgramCard } from "@/components/site/Cards";
import { Reveal } from "@/components/ui/Reveal";
import { IMG } from "@/data/images";
import { useStudio } from "@/store/studio";
import { cn } from "@/lib/utils";

const title = "Dance Programs — Bollywood, Hip-Hop & Kids Classes in Gadhinglaj";
const description =
  "Explore dance programs at D Maker Dance & Fitness Studio: Bollywood, hip-hop, contemporary, freestyle, kids dance and group dance training in Gadhinglaj.";

export const Route = createFileRoute("/programs")({
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
  component: ProgramsPage,
});

function ProgramsPage() {
  const { programs } = useStudio();
  const [level, setLevel] = useState("All");

  const active = programs.items.filter((p) => p.status === "active");
  const levels = useMemo(
    () => ["All", ...Array.from(new Set(active.map((p) => p.level)))],
    [active],
  );
  const visible = level === "All" ? active : active.filter((p) => p.level === level);

  return (
    <SiteShell>
      <PageHero
        eyebrow="Dance Programs"
        title="Train In The Style You Love"
        text="Structured dance classes in Gadhinglaj across Bollywood, hip-hop, contemporary, freestyle, kids and group batches."
        image={IMG.g2}
      />

      <section className="bg-background py-20 sm:py-28">
        <div className="container-x">
          <div className="flex flex-wrap gap-3">
            {levels.map((item) => (
              <button
                key={item}
                onClick={() => setLevel(item)}
                className={cn(
                  "border px-5 py-2 text-[11px] font-bold uppercase tracking-[0.18em] transition-colors",
                  level === item
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border text-muted-foreground hover:border-primary hover:text-primary",
                )}
              >
                {item}
              </button>
            ))}
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {visible.map((p, i) => (
              <Reveal key={p.id} delay={i * 60}>
                <ProgramCard item={p} />
              </Reveal>
            ))}
          </div>

          {visible.length === 0 ? (
            <p className="mt-12 text-sm text-muted-foreground">
              No programs match this level right now.
            </p>
          ) : null}
        </div>
      </section>

      <TrainingProcess />
      <CTASection />
    </SiteShell>
  );
}
