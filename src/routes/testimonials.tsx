import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { SiteShell, PageHero } from "@/components/site/SiteShell";
import { CTASection } from "@/components/site/Sections";
import { TestimonialCard } from "@/components/site/Cards";
import { Reveal } from "@/components/ui/Reveal";
import { IMG } from "@/data/images";
import { useStudio } from "@/store/studio";
import { cn } from "@/lib/utils";

const title = "Testimonials — What Our Dance & Fitness Students Say";
const description =
  "Reviews from dance students, fitness members, parents and event clients of D Maker Dance & Fitness Studio in Gadhinglaj.";

export const Route = createFileRoute("/testimonials")({
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
  component: TestimonialsPage,
});

function TestimonialsPage() {
  const { testimonials } = useStudio();
  const [type, setType] = useState("All");

  const published = testimonials.items.filter((t) => t.status === "published");
  const types = useMemo(
    () => ["All", ...Array.from(new Set(published.map((t) => t.clientType)))],
    [published],
  );
  const visible = type === "All" ? published : published.filter((t) => t.clientType === type);

  return (
    <SiteShell>
      <PageHero
        eyebrow="Testimonials"
        title="Voices From The Floor"
        text="Students, parents, fitness members and event clients on training at D Maker Dance & Fitness Studio."
        image={IMG.g4}
      />

      <section className="bg-background py-20 sm:py-28">
        <div className="container-x">
          <div className="flex flex-wrap gap-3">
            {types.map((item) => (
              <button
                key={item}
                onClick={() => setType(item)}
                className={cn(
                  "border px-5 py-2 text-[11px] font-bold uppercase tracking-[0.18em] transition-colors",
                  type === item
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border text-muted-foreground hover:border-primary hover:text-primary",
                )}
              >
                {item}
              </button>
            ))}
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {visible.map((t, i) => (
              <Reveal key={t.id} delay={i * 60}>
                <TestimonialCard item={t} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </SiteShell>
  );
}
