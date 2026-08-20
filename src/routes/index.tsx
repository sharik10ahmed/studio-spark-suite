import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteShell } from "@/components/site/SiteShell";
import { Hero } from "@/components/site/Hero";
import { CTASection, TrainingProcess, WhyUs } from "@/components/site/Sections";
import { ChoreographyCard, EventCard, ProgramCard, TestimonialCard } from "@/components/site/Cards";
import { FitnessCard } from "@/components/site/Cards";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { LinkButton } from "@/components/ui/ActionButton";
import { IMG } from "@/data/images";
import { useStudio } from "@/store/studio";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "D Maker Dance & Fitness Studio — Dance Classes in Gadhinglaj" },
      {
        name: "description",
        content:
          "Premium dance classes, functional fitness and event choreography in Gadhinglaj. Bollywood, hip-hop, contemporary, kids dance and group batches.",
      },
      { property: "og:title", content: "D Maker Dance & Fitness Studio — Gadhinglaj" },
      {
        property: "og:description",
        content: "Move. Train. Perform. Dance training, fitness and choreography in Gadhinglaj.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "D Maker Dance & Fitness Studio",
          telephone: "7507504230",
          email: "support@dmakerdancestudio.com",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Sai Darshan Apartment, Basement, Bhadgaav Road, near Sai Gardan",
            addressLocality: "Gadhinglaj",
            addressRegion: "Maharashtra",
            postalCode: "416502",
            addressCountry: "IN",
          },
        }),
      },
    ],
  }),
  component: Home,
});

function Home() {
  const { programs, fitness, choreography, events, testimonials } = useStudio();

  return (
    <SiteShell>
      <Hero />

      <section className="bg-background py-20 sm:py-28">
        <div className="container-x grid items-center gap-14 lg:grid-cols-2">
          <Reveal className="relative">
            <img
              src={IMG.about}
              alt="Coach guiding a dance training session in the studio"
              className="w-full object-cover"
            />
            <div className="absolute -bottom-6 -right-4 hidden bg-primary px-7 py-6 text-primary-foreground sm:block">
              <div className="font-display text-4xl">Since 2019</div>
              <div className="text-[11px] uppercase tracking-[0.22em]">Gadhinglaj</div>
            </div>
          </Reveal>
          <div>
            <SectionHeading
              eyebrow="About the studio"
              title="Where Movement Becomes Confidence"
              text="D Maker Dance & Fitness Studio brings dance education, functional fitness, choreography and performance training together for individual students and community groups."
            />
            <ul className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                "Dance education across styles",
                "Functional fitness coaching",
                "Event & wedding choreography",
                "Performance and stage training",
              ].map((t) => (
                <li key={t} className="border-l-2 border-primary pl-4 text-sm text-ink">
                  {t}
                </li>
              ))}
            </ul>
            <LinkButton to="/about" variant="dark" className="mt-8">
              More About Us
            </LinkButton>
          </div>
        </div>
      </section>

      <section className="bg-secondary py-20 sm:py-28">
        <div className="container-x">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              eyebrow="Dance Programs"
              title="Train In The Style You Love"
              text="Structured group dance classes in Gadhinglaj for every age and experience level."
            />
            <LinkButton to="/programs" variant="outline">
              All Programs
            </LinkButton>
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {programs.items
              .filter((p) => p.status === "active")
              .slice(0, 6)
              .map((p, i) => (
                <Reveal key={p.id} delay={i * 60}>
                  <ProgramCard item={p} />
                </Reveal>
              ))}
          </div>
        </div>
      </section>

      <section className="bg-background py-20 sm:py-28">
        <div className="container-x">
          <SectionHeading
            eyebrow="Fitness"
            title="Train Strong. Move Better."
            text="Functional fitness classes in Gadhinglaj that support your dance training and everyday strength."
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {fitness.items
              .filter((f) => f.status === "active")
              .slice(0, 4)
              .map((f, i) => (
                <Reveal key={f.id} delay={i * 60}>
                  <FitnessCard item={f} />
                </Reveal>
              ))}
          </div>
          <div className="mt-10">
            <LinkButton to="/fitness" variant="outline">
              Explore Fitness
            </LinkButton>
          </div>
        </div>
      </section>

      <section className="bg-ink py-20 sm:py-28">
        <div className="container-x">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <SectionHeading
              eyebrow="Choreography"
              title="Choreography That Creates Moments"
              tone="dark"
              text="Weddings, cultural festivals, college stages and corporate nights — rehearsed, staged and performance-ready."
            />
            <Reveal>
              <img
                src={IMG.choreography}
                alt="Group choreography performance on a large stage"
                className="w-full object-cover"
              />
            </Reveal>
          </div>
          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            {choreography.items
              .filter((c) => c.status === "active")
              .slice(0, 4)
              .map((c, i) => (
                <Reveal key={c.id} delay={i * 60}>
                  <ChoreographyCard item={c} />
                </Reveal>
              ))}
          </div>
          <div className="mt-10">
            <LinkButton to="/contact" size="lg">
              Book a Choreography Session
            </LinkButton>
          </div>
        </div>
      </section>

      <WhyUs />
      <TrainingProcess />

      <section className="bg-secondary py-20 sm:py-28">
        <div className="container-x">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading eyebrow="Performances & Events" title="Where Our Crews Perform" />
            <LinkButton to="/events" variant="outline">
              View All Events
            </LinkButton>
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {events.items
              .filter((e) => e.status === "published")
              .slice(0, 3)
              .map((e, i) => (
                <Reveal key={e.id} delay={i * 60}>
                  <EventCard item={e} />
                </Reveal>
              ))}
          </div>
        </div>
      </section>

      <section className="bg-background py-20 sm:py-28">
        <div className="container-x">
          <SectionHeading eyebrow="Testimonials" title="What Our Students Say" align="center" />
          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {testimonials.items
              .filter((t) => t.status === "published")
              .slice(0, 3)
              .map((t, i) => (
                <Reveal key={t.id} delay={i * 60}>
                  <TestimonialCard item={t} />
                </Reveal>
              ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              to="/testimonials"
              className="text-xs font-bold uppercase tracking-[0.2em] text-primary hover:underline"
            >
              Read all reviews
            </Link>
          </div>
        </div>
      </section>

      <CTASection />
    </SiteShell>
  );
}
