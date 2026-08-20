import { useMemo, useState } from "react";
import { Modal } from "@/components/ui/Modal";
import { imageSrc } from "@/data/images";
import type { GalleryItem } from "@/data/mock";
import { cn } from "@/lib/utils";

const CATEGORIES = ["All", "Dance", "Fitness", "Training", "Performances", "Events"] as const;

export function GalleryGrid({ items }: { items: GalleryItem[] }) {
  const [filter, setFilter] = useState<(typeof CATEGORIES)[number]>("All");
  const [active, setActive] = useState<GalleryItem | null>(null);

  const visible = useMemo(
    () =>
      [...items]
        .sort((a, b) => a.order - b.order)
        .filter((i) => filter === "All" || i.category === filter),
    [items, filter],
  );

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {CATEGORIES.map((c) => (
          <button
            key={c}
            onClick={() => setFilter(c)}
            className={cn(
              "border px-4 py-2 text-[11px] font-bold uppercase tracking-[0.16em] transition-colors",
              filter === c
                ? "border-primary bg-primary text-primary-foreground"
                : "border-border text-ink hover:border-primary hover:text-primary",
            )}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="mt-10 columns-1 gap-5 sm:columns-2 lg:columns-3 [&>*]:mb-5">
        {visible.map((item, index) => (
          <button
            key={item.id}
            onClick={() => setActive(item)}
            className="group relative block w-full overflow-hidden border border-border break-inside-avoid"
          >
            <img
              src={imageSrc(item.image)}
              alt={item.title}
              loading="lazy"
              className={cn(
                "w-full object-cover transition-transform duration-700 group-hover:scale-105",
                index % 3 === 0 ? "h-96" : index % 3 === 1 ? "h-64" : "h-80",
              )}
            />
            <div className="absolute inset-0 flex items-end bg-gradient-to-t from-ink-deep/90 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <div className="p-5 text-left">
                <div className="text-[10px] font-bold uppercase tracking-[0.22em] text-primary">
                  {item.category}
                </div>
                <div className="mt-1 font-display text-xl text-white">{item.title}</div>
              </div>
            </div>
          </button>
        ))}
      </div>

      {visible.length === 0 ? (
        <p className="mt-12 text-center text-sm text-muted-foreground">
          No images in this category yet.
        </p>
      ) : null}

      <Modal open={!!active} onClose={() => setActive(null)} width="full">
        {active ? (
          <figure>
            <img
              src={imageSrc(active.image)}
              alt={active.title}
              className="max-h-[78vh] w-full object-contain"
            />
            <figcaption className="mt-4 text-center text-white">
              <span className="font-display text-2xl">{active.title}</span>
              <span className="ml-3 text-xs uppercase tracking-[0.22em] text-primary">
                {active.category}
              </span>
            </figcaption>
          </figure>
        ) : null}
      </Modal>
    </div>
  );
}
