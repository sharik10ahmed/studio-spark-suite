import { createFileRoute } from "@tanstack/react-router";
import { SiteShell, PageHero } from "@/components/site/SiteShell";
import { CTASection, WhyUs } from "@/components/site/Sections";
import { FitnessCard } from "@/components/site/Cards";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { IMG } from "@/data/images";
import { useStudio } from "@/store/studio";

const title = "Fitness Classes in Gadhinglaj — Functional & Dance Fitness";
const description =
  "Functional fitness, strength and conditioning, mobility and dance fitness classes in Gadhinglaj at D Maker Dance & Fitness Studio.";

export const Route = createFileRoute("/fitness")({
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
  component: FitnessPage,
});

function FitnessPage() {
  const { fitness } = useStudio();
  const services = fitness.items
    .filter((f) => f.status === "active")
    .slice()
    .sort((a, b) => a.order - b.order);

  return (
    <SiteShell>
      <PageHero
        eyebrow="Fitness"
        title="Train Strong. Move Better."
        text="Functional fitness training in Gadhinglaj built to support dance performance, everyday strength and long-term mobility."
        image={IMG.g6}
      />

      <section className="bg-background py-20 sm:py-28">
        <div className="container-x">
          <SectionHeading
            eyebrow="Fitness services"
            title="Conditioning built around movement"
            text="Every session mixes strength, mobility and rhythm work so you move better on the floor and off it."
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((f, i) => (
              <Reveal key={f.id} delay={i * 50}>
                <FitnessCard item={f} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <WhyUs />
      <CTASection />
    </SiteShell>
  );
}
