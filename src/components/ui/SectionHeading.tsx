import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

export function SectionHeading({
  eyebrow,
  title,
  text,
  align = "left",
  tone = "light",
  className,
}: {
  eyebrow?: string;
  title: string;
  text?: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
  className?: string;
}) {
  return (
    <Reveal
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow ? (
        <div
          className={cn(
            "mb-4 flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.32em] text-primary",
            align === "center" && "justify-center",
          )}
        >
          <span className="h-px w-8 bg-primary" />
          {eyebrow}
        </div>
      ) : null}
      <h2
        className={cn(
          "text-4xl sm:text-5xl lg:text-[3.4rem]",
          tone === "dark" ? "text-white" : "text-ink",
        )}
      >
        {title}
      </h2>
      {text ? (
        <p
          className={cn(
            "mt-5 text-base leading-relaxed",
            tone === "dark" ? "text-white/65" : "text-muted-foreground",
          )}
        >
          {text}
        </p>
      ) : null}
    </Reveal>
  );
}
