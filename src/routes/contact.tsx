import { createFileRoute } from "@tanstack/react-router";
import { SiteShell, PageHero } from "@/components/site/SiteShell";
import { ContactForm } from "@/components/site/ContactForm";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { IMG } from "@/data/images";
import { useStudio } from "@/store/studio";

const title = "Contact D Maker Dance & Fitness Studio, Gadhinglaj";
const description =
  "Join a dance or fitness batch in Gadhinglaj. Call 7507504230 or send an enquiry to D Maker Dance & Fitness Studio, Bhadgaav Road, Gadhinglaj.";

export const Route = createFileRoute("/contact")({
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
  component: ContactPage,
});

function ContactPage() {
  const { settings } = useStudio();

  const details = [
    { icon: "pin", label: "Studio address", value: settings.address },
    { icon: "phone", label: "Phone", value: settings.phone, href: `tel:${settings.phone}` },
    { icon: "mail", label: "Email", value: settings.email, href: `mailto:${settings.email}` },
    { icon: "clock", label: "Batch timings", value: "Mon – Sat · Morning & evening batches" },
  ];

  return (
    <SiteShell>
      <PageHero
        eyebrow="Contact"
        title="Join A Batch"
        text="Tell us what you want to train for — dance, fitness or a performance — and we'll suggest the right batch."
        image={IMG.g8}
      />

      <section className="bg-background py-20 sm:py-28">
        <div className="container-x grid gap-14 lg:grid-cols-[1fr_1.1fr]">
          <Reveal>
            <h2 className="text-4xl text-ink sm:text-5xl">{settings.businessName}</h2>
            <p className="mt-5 leading-relaxed text-muted-foreground">
              Walk in during batch hours or send an enquiry — we usually respond the same day.
            </p>
            <ul className="mt-9 space-y-6">
              {details.map((d) => (
                <li key={d.label} className="flex gap-4">
                  <span className="grid h-11 w-11 shrink-0 place-items-center bg-ink text-primary">
                    <Icon name={d.icon} />
                  </span>
                  <div>
                    <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-muted-foreground">
                      {d.label}
                    </div>
                    {d.href ? (
                      <a
                        href={d.href}
                        className="mt-1 block text-ink transition-colors hover:text-primary"
                      >
                        {d.value}
                      </a>
                    ) : (
                      <div className="mt-1 text-ink">{d.value}</div>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={100}>
            <ContactForm />
          </Reveal>
        </div>
      </section>
    </SiteShell>
  );
}
