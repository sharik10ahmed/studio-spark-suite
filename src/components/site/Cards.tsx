import { Icon } from "@/components/ui/Icon";
import { imageSrc } from "@/data/images";
import type {
  ChoreographyService,
  FitnessService,
  Program,
  StudioEvent,
  Testimonial,
} from "@/data/mock";
import { LinkButton } from "@/components/ui/ActionButton";

export function ProgramCard({ item }: { item: Program }) {
  return (
    <article className="group flex flex-col overflow-hidden border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_24px_60px_-40px_var(--ink)]">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={imageSrc(item.image)}
          alt={`${item.name} dance training`}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <span className="absolute left-4 top-4 bg-primary px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-primary-foreground">
          {item.category}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-2xl text-ink">{item.name}</h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
          {item.description}
        </p>
        <dl className="mt-5 grid grid-cols-2 gap-3 border-t border-border pt-4 text-xs">
          <div>
            <dt className="uppercase tracking-[0.16em] text-muted-foreground">Level</dt>
            <dd className="mt-1 font-semibold text-ink">{item.level}</dd>
          </div>
          <div>
            <dt className="uppercase tracking-[0.16em] text-muted-foreground">Batch</dt>
            <dd className="mt-1 font-semibold text-ink">{item.batch}</dd>
          </div>
        </dl>
        <LinkButton to="/contact" variant="outline" size="sm" className="mt-6 w-full">
          View Program <Icon name="arrow" className="h-4 w-4" />
        </LinkButton>
      </div>
    </article>
  );
}

export function FitnessCard({ item }: { item: FitnessService }) {
  return (
    <article className="group relative overflow-hidden border border-border">
      <img
        src={imageSrc(item.image)}
        alt={item.name}
        loading="lazy"
        className="h-72 w-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink-deep via-ink-deep/40 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 p-6">
        <h3 className="font-display text-2xl text-white">{item.name}</h3>
        <p className="mt-2 max-h-0 overflow-hidden text-sm leading-relaxed text-white/70 transition-all duration-500 group-hover:max-h-24">
          {item.description}
        </p>
      </div>
    </article>
  );
}

export function ChoreographyCard({ item }: { item: ChoreographyService }) {
  return (
    <article className="group grid gap-0 border border-border bg-card sm:grid-cols-[42%_1fr]">
      <div className="overflow-hidden">
        <img
          src={imageSrc(item.image)}
          alt={item.name}
          loading="lazy"
          className="h-full min-h-52 w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      <div className="p-6">
        <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-primary">
          {item.eventType}
        </span>
        <h3 className="mt-3 font-display text-2xl text-ink">{item.name}</h3>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
      </div>
    </article>
  );
}

export function EventCard({ item }: { item: StudioEvent }) {
  return (
    <article className="group flex flex-col overflow-hidden border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/40">
      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          src={imageSrc(item.image)}
          alt={item.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <span className="absolute left-4 top-4 bg-ink/85 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-white">
          {item.category}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <div className="flex flex-wrap gap-4 text-xs text-muted-foreground">
          <span className="inline-flex items-center gap-2">
            <Icon name="calendar" className="h-4 w-4 text-primary" />
            {item.date}
          </span>
          <span className="inline-flex items-center gap-2">
            <Icon name="pin" className="h-4 w-4 text-primary" />
            {item.location}
          </span>
        </div>
        <h3 className="mt-4 font-display text-2xl text-ink">{item.title}</h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
          {item.description}
        </p>
      </div>
    </article>
  );
}

export function TestimonialCard({ item }: { item: Testimonial }) {
  return (
    <article className="flex h-full flex-col border border-border bg-card p-7">
      <Icon name="quote" className="h-7 w-7 text-primary" />
      <p className="mt-5 flex-1 text-base leading-relaxed text-ink">{item.review}</p>
      <div className="mt-6 flex items-center gap-4 border-t border-border pt-5">
        <span className="grid h-11 w-11 shrink-0 place-items-center bg-ink font-display text-lg text-white">
          {item.name.charAt(0)}
        </span>
        <div>
          <div className="font-semibold text-ink">{item.name}</div>
          <div className="text-xs uppercase tracking-[0.16em] text-muted-foreground">
            {item.clientType}
          </div>
        </div>
        <div className="ml-auto flex gap-0.5">
          {Array.from({ length: item.rating }).map((_, i) => (
            <Icon key={i} name="star" className="h-4 w-4 text-primary" />
          ))}
        </div>
      </div>
    </article>
  );
}
