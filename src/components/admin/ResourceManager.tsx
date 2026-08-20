import { useState } from "react";
import { Modal } from "@/components/ui/Modal";
import { Button } from "@/components/ui/ActionButton";
import { Icon } from "@/components/ui/Icon";
import { IMAGE_LIBRARY, imageSrc } from "@/data/images";
import type { Collection } from "@/store/studio";
import { cn } from "@/lib/utils";

export type Field = {
  name: string;
  label: string;
  type?: "text" | "textarea" | "number" | "select" | "image";
  options?: readonly string[];
};

const inputClass =
  "w-full border border-border bg-background px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-primary";

export function StatusPill({ value }: { value: string }) {
  const positive = value === "active" || value === "published";
  return (
    <span
      className={cn(
        "inline-block px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em]",
        positive ? "bg-success/12 text-success" : "bg-muted text-muted-foreground",
      )}
    >
      {value}
    </span>
  );
}

export function ResourceManager<T extends { id: string; status: string }>({
  collection,
  fields,
  primary,
  secondary,
  imageField = "image",
  entity,
}: {
  collection: Collection<T>;
  fields: Field[];
  primary: (item: T) => string;
  secondary: (item: T) => string;
  imageField?: string | null;
  entity: string;
}) {
  const [open, setOpen] = useState(false);
  const [editing, setEditing] = useState<T | null>(null);
  const [draft, setDraft] = useState<Record<string, unknown>>({});

  const usedImages = new Set(
    collection.items
      .filter((i) => i.id !== editing?.id)
      .map((i) => (i as Record<string, unknown>)[imageField ?? ""] as string),
  );

  const blank = () => {
    const base: Record<string, unknown> = {};
    fields.forEach((f) => {
      base[f.name] = f.type === "number" ? 0 : f.type === "select" ? (f.options?.[0] ?? "") : "";
    });
    if (imageField) {
      base[imageField] =
        IMAGE_LIBRARY.find((img) => !usedImages.has(img.key))?.key ?? IMAGE_LIBRARY[0]!.key;
    }
    return base;
  };

  const startAdd = () => {
    setEditing(null);
    setDraft(blank());
    setOpen(true);
  };

  const startEdit = (item: T) => {
    setEditing(item);
    setDraft({ ...(item as unknown as Record<string, unknown>) });
    setOpen(true);
  };

  const save = () => {
    if (editing) {
      collection.update(editing.id, draft as Partial<T>);
    } else {
      collection.add(draft as unknown as Omit<T, "id">);
    }
    setOpen(false);
  };

  const set = (name: string, value: unknown) => setDraft((prev) => ({ ...prev, [name]: value }));

  return (
    <div>
      <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          {collection.items.length} {entity.toLowerCase()} records
        </p>
        <Button onClick={startAdd} size="sm">
          <Icon name="plus" className="h-4 w-4" />
          Add {entity}
        </Button>
      </div>

      <div className="space-y-3">
        {collection.items.map((item) => {
          const image = imageField
            ? ((item as unknown as Record<string, unknown>)[imageField] as string)
            : null;
          return (
            <div
              key={item.id}
              className="flex flex-col gap-4 border border-border bg-card p-4 sm:flex-row sm:items-center"
            >
              {image ? (
                <img
                  src={imageSrc(image)}
                  alt=""
                  className="h-20 w-full shrink-0 object-cover sm:h-14 sm:w-20"
                />
              ) : null}
              <div className="min-w-0 flex-1">
                <div className="font-semibold text-ink">{primary(item)}</div>
                <p className="mt-1 line-clamp-2 text-xs text-muted-foreground">
                  {secondary(item)}
                </p>
              </div>
              <StatusPill value={item.status} />
              <div className="flex gap-2">
                <button
                  onClick={() => collection.toggle(item.id)}
                  title="Toggle status"
                  className="border border-border p-2 text-muted-foreground transition-colors hover:border-primary hover:text-primary"
                >
                  <Icon name="eye" className="h-4 w-4" />
                </button>
                <button
                  onClick={() => startEdit(item)}
                  title="Edit"
                  className="border border-border p-2 text-muted-foreground transition-colors hover:border-primary hover:text-primary"
                >
                  <Icon name="edit" className="h-4 w-4" />
                </button>
                <button
                  onClick={() => collection.remove(item.id)}
                  title="Delete"
                  className="border border-border p-2 text-muted-foreground transition-colors hover:border-destructive hover:text-destructive"
                >
                  <Icon name="trash" className="h-4 w-4" />
                </button>
              </div>
            </div>
          );
        })}
      </div>

      <Modal
        open={open}
        onClose={() => setOpen(false)}
        title={`${editing ? "Edit" : "Add"} ${entity}`}
        width="lg"
      >
        <div className="grid gap-5 sm:grid-cols-2">
          {fields.map((f) => (
            <label
              key={f.name}
              className={cn("block", f.type === "textarea" && "sm:col-span-2")}
            >
              <span className="mb-2 block text-[11px] font-bold uppercase tracking-[0.18em] text-muted-foreground">
                {f.label}
              </span>
              {f.type === "textarea" ? (
                <textarea
                  rows={4}
                  className={inputClass}
                  value={String(draft[f.name] ?? "")}
                  onChange={(e) => set(f.name, e.target.value)}
                />
              ) : f.type === "select" ? (
                <select
                  className={inputClass}
                  value={String(draft[f.name] ?? "")}
                  onChange={(e) => set(f.name, e.target.value)}
                >
                  {f.options?.map((o) => (
                    <option key={o} value={o}>
                      {o}
                    </option>
                  ))}
                </select>
              ) : (
                <input
                  type={f.type === "number" ? "number" : "text"}
                  className={inputClass}
                  value={String(draft[f.name] ?? "")}
                  onChange={(e) =>
                    set(f.name, f.type === "number" ? Number(e.target.value) : e.target.value)
                  }
                />
              )}
            </label>
          ))}

          {imageField ? (
            <label className="block sm:col-span-2">
              <span className="mb-2 block text-[11px] font-bold uppercase tracking-[0.18em] text-muted-foreground">
                Image (each image can only be used once)
              </span>
              <select
                className={inputClass}
                value={String(draft[imageField] ?? "")}
                onChange={(e) => set(imageField, e.target.value)}
              >
                {IMAGE_LIBRARY.filter(
                  (img) => !usedImages.has(img.key) || img.key === draft[imageField],
                ).map((img) => (
                  <option key={img.key} value={img.key}>
                    {img.label}
                  </option>
                ))}
              </select>
              <img
                src={imageSrc(String(draft[imageField] ?? ""))}
                alt=""
                className="mt-4 h-40 w-full object-cover"
              />
            </label>
          ) : null}
        </div>

        <div className="mt-8 flex justify-end gap-3">
          <Button variant="outline" onClick={() => setOpen(false)}>
            Cancel
          </Button>
          <Button onClick={save}>{editing ? "Save Changes" : `Add ${entity}`}</Button>
        </div>
      </Modal>
    </div>
  );
}
