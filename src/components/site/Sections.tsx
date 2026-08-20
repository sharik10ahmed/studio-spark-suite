import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { LinkButton } from "@/components/ui/ActionButton";
import { PROCESS, WHY_US } from "@/data/mock";
import { useStudio } from "@/store/studio";

export function WhyUs() {
  return (
    <section className="bg-secondary py-20 sm:py-28">
      <div className="container-x">
        <SectionHeading
          eyebrow="Why D Maker?"
          title="Built For Dancers, Athletes And Beginners"
          text="Structured dance training and functional fitness under one roof in Gadhinglaj."
        />
        <div className="mt-14 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-3">
          {WHY_US.map((f, i) => (
            <Reveal
              key={f.title}
              delay={i * 60}
              className="group bg-background p-8 transition-colors hover:bg-ink"
            >
              <Icon
                name={f.icon}
                className="h-8 w-8 text-primary transition-transform duration-300 group-hover:scale-110"
              />
              <h3 className="mt-6 font-display text-xl text-ink transition-colors group-hover:text-white">
                {f.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground transition-colors group-hover:text-white/65">
                {f.text}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function TrainingProcess() {
  return (
    <section className="bg-background py-20 sm:py-28">
      <div className="container-x">
        <SectionHeading
          eyebrow="Training Process"
          title="How You Start With Us"
          align="center"
        />
        <div className="relative mt-16 grid gap-10 lg:grid-cols-4">
          <div className="absolute left-6 top-0 hidden h-full w-px bg-border sm:block lg:left-0 lg:top-7 lg:h-px lg:w-full" />
          {PROCESS.map((p, i) => (
            <Reveal key={p.step} delay={i * 90} className="relative pl-20 sm:pl-24 lg:pl-0">
              <div className="absolute left-0 top-0 grid h-14 w-14 place-items-center bg-primary font-display text-xl text-primary-foreground lg:relative lg:mb-7">
                {p.step}
              </div>
              <h3 className="font-display text-xl text-ink">{p.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CTASection() {
  const { settings } = useStudio();
  return (
    <section className="relative overflow-hidden bg-ink-deep py-20 sm:py-24">
      <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-primary/25 blur-3xl" />
      <div className="container-x relative flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
        <div className="max-w-2xl">
          <h2 className="text-4xl text-white sm:text-5xl">Ready To Move With Us?</h2>
          <p className="mt-4 text-white/65">
            Join {settings.businessName} and turn your energy into movement, strength, confidence,
            and performance.
          </p>
        </div>
        <div className="flex flex-wrap gap-4">
          <LinkButton to="/contact" size="lg">
            {settings.ctaText}
          </LinkButton>
          <LinkButton to="/contact" variant="light" size="lg">
            Contact Studio
          </LinkButton>
        </div>
      </div>
    </section>
  );
}
