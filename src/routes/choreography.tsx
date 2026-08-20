import { createFileRoute } from "@tanstack/react-router";
import { SiteShell, PageHero } from "@/components/site/SiteShell";
import { CTASection } from "@/components/site/Sections";
import { ChoreographyCard } from "@/components/site/Cards";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { LinkButton } from "@/components/ui/ActionButton";
import { IMG } from "@/data/images";
import { useStudio } from "@/store/studio";

const title = "Event & Wedding Choreography in Gadhinglaj — D Maker Studio";
const description =
  "Wedding choreography, stage performances, group routines and community event choreography by D Maker Dance & Fitness Studio, Gadhinglaj.";

export const Route = createFileRoute("/choreography")({
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
  component: ChoreographyPage,
});

function ChoreographyPage() {
  const { choreography } = useStudio();
  const services = choreography.items.filter((c) => c.status === "active");

  return (
    <SiteShell>
      <PageHero
        eyebrow="Choreography"
        title="Choreography That Creates Moments"
        text="Original routines designed, rehearsed and staged for weddings, cultural nights, college festivals and community events."
        image={IMG.g5}
      />

      <section className="bg-background py-20 sm:py-28">
        <div className="container-x">
          <SectionHeading
            eyebrow="What we stage"
            title="From first rehearsal to final bow"
            text="We plan the concept, build the formation, rehearse the group and run the show — so the performance lands exactly as imagined."
          />
          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            {services.map((c, i) => (
              <Reveal key={c.id} delay={i * 60}>
                <ChoreographyCard item={c} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-ink-deep py-24">
        <img
          src={IMG.choreography}
          alt="Dancers performing a group choreography on a large stage"
          className="absolute inset-0 h-full w-full object-cover opacity-30"
        />
        <div className="container-x relative text-center">
          <h2 className="mx-auto max-w-3xl text-4xl text-white sm:text-5xl">
            Planning a performance? Let&apos;s build the routine.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-white/65">
            Tell us the occasion, the group size and the song — we handle concept, formation and
            rehearsal schedule.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <LinkButton to="/contact" size="lg">
              Book a Choreography Session
            </LinkButton>
            <LinkButton to="/events" variant="light" size="lg">
              See Past Performances
            </LinkButton>
          </div>
        </div>
      </section>

      <CTASection />
    </SiteShell>
  );
}
