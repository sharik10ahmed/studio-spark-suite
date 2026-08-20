import { createFileRoute } from "@tanstack/react-router";
import { SiteShell, PageHero } from "@/components/site/SiteShell";
import { CTASection, TrainingProcess, WhyUs } from "@/components/site/Sections";
import { Reveal } from "@/components/ui/Reveal";
import { IMG } from "@/data/images";
import { HERO_STATS } from "@/data/mock";

const title = "About the Studio — D Maker Dance & Fitness Studio, Gadhinglaj";
const description =
  "Meet D Maker Dance & Fitness Studio in Gadhinglaj: dance education, choreography and functional fitness training for students, families and community groups.";

export const Route = createFileRoute("/about")({
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
  component: AboutPage,
});

const PILLARS = [
  {
    title: "Dance education",
    text: "Style-by-style curriculum across Bollywood, hip-hop, contemporary and freestyle, taught in progressive levels.",
  },
  {
    title: "Fitness training",
    text: "Functional strength, mobility and conditioning built to support the demands of long rehearsals and stage work.",
  },
  {
    title: "Choreography",
    text: "Original routines for weddings, cultural nights, college festivals and corporate showcases.",
  },
  {
    title: "Performance coaching",
    text: "Stage presence, formation discipline, expression and confidence, rehearsed until it feels effortless.",
  },
  {
    title: "Group learning",
    text: "Specialised batches where community groups, friends and families train together toward one performance.",
  },
  {
    title: "Individual development",
    text: "One-to-one attention on technique, rhythm and body control so every dancer progresses at their own pace.",
  },
];

function AboutPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="About D Maker"
        title="Where Movement Becomes Confidence"
        text="A dance and fitness studio in Gadhinglaj built around technique, energy and the confidence that comes from performing well."
        image={IMG.g7}
      />

      <section className="bg-background py-20 sm:py-28">
        <div className="container-x grid items-center gap-14 lg:grid-cols-2">
          <Reveal>
            <img
              src={IMG.about}
              alt="Instructor coaching a dance training session at D Maker studio"
              className="w-full object-cover"
            />
          </Reveal>
          <Reveal delay={100}>
            <div className="mb-4 flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.32em] text-primary">
              <span className="h-px w-8 bg-primary" />
              Our approach
            </div>
            <h2 className="text-4xl text-ink sm:text-5xl">Trained to move. Coached to perform.</h2>
            <p className="mt-5 leading-relaxed text-muted-foreground">
              D Maker Dance &amp; Fitness Studio, led by Mr. Duggu Thakur, works in dance education,
              choreography and physical fitness. Every batch blends technique drills with functional
              conditioning, so students build rhythm and stamina at the same time.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              We train individual students and community clients alike — school kids finding their
              first rhythm, adults returning to fitness, wedding families preparing a sangeet, and
              performance groups staging full events. The studio is a training floor first: mirrors,
              music, structure and honest feedback.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {HERO_STATS.map((stat) => (
                <div key={stat.label} className="border border-border bg-card p-5">
                  <div className="font-display text-3xl text-primary">
                    {stat.value}
                    {stat.suffix}
                  </div>
                  <div className="mt-1 text-xs uppercase tracking-[0.18em] text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-secondary py-20 sm:py-28">
        <div className="container-x">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {PILLARS.map((pillar, i) => (
              <Reveal key={pillar.title} delay={i * 60}>
                <div className="h-full border border-border bg-card p-7">
                  <h3 className="font-display text-2xl text-ink">{pillar.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {pillar.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <WhyUs />
      <TrainingProcess />
      <CTASection />
    </SiteShell>
  );
}
