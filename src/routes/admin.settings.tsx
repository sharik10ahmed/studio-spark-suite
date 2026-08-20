import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { AdminShell } from "@/components/admin/AdminShell";
import { Button } from "@/components/ui/ActionButton";
import { Icon } from "@/components/ui/Icon";
import { useStudio } from "@/store/studio";
import type { Settings } from "@/data/mock";

export const Route = createFileRoute("/admin/settings")({
  head: () => ({
    meta: [
      { title: "Website Settings | D Maker Admin" },
      { name: "description", content: "Update business details, hero copy, CTA and footer text." },
      { name: "robots", content: "noindex" },
      { property: "og:title", content: "Website Settings | D Maker Admin" },
      { property: "og:description", content: "Manage studio website settings." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AdminSettings,
});

const inputClass =
  "w-full border border-border bg-background px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-primary";

const FIELDS: { name: keyof Settings; label: string; area?: boolean; wide?: boolean }[] = [
  { name: "businessName", label: "Business name", wide: true },
  { name: "phone", label: "Phone" },
  { name: "email", label: "Email" },
  { name: "address", label: "Address", area: true },
  { name: "heroHeading", label: "Hero heading", wide: true },
  { name: "heroDescription", label: "Hero description", area: true },
  { name: "ctaText", label: "CTA text" },
  { name: "footerDescription", label: "Footer description", area: true },
];

function AdminSettings() {
  const { settings, updateSettings } = useStudio();
  const [draft, setDraft] = useState<Settings>(settings);
  const [saved, setSaved] = useState(false);

  const set = (name: keyof Settings, value: string) => {
    setDraft((prev) => ({ ...prev, [name]: value }));
    setSaved(false);
  };

  return (
    <AdminShell
      title="Website Settings"
      subtitle="Changes update the live website for this session"
    >
      <form
        onSubmit={(e) => {
          e.preventDefault();
          updateSettings(draft);
          setSaved(true);
        }}
        className="max-w-4xl border border-border bg-card p-6 sm:p-8"
      >
        <div className="grid gap-5 sm:grid-cols-2">
          {FIELDS.map((f) => (
            <label
              key={f.name}
              className={f.area || f.wide ? "block sm:col-span-2" : "block"}
            >
              <span className="mb-2 block text-[11px] font-bold uppercase tracking-[0.18em] text-muted-foreground">
                {f.label}
              </span>
              {f.area ? (
                <textarea
                  rows={3}
                  className={inputClass}
                  value={draft[f.name]}
                  onChange={(e) => set(f.name, e.target.value)}
                />
              ) : (
                <input
                  className={inputClass}
                  value={draft[f.name]}
                  onChange={(e) => set(f.name, e.target.value)}
                />
              )}
            </label>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-4">
          <Button type="submit">Save Settings</Button>
          <Button
            type="button"
            variant="outline"
            onClick={() => {
              setDraft(settings);
              setSaved(false);
            }}
          >
            Reset
          </Button>
          {saved ? (
            <span className="inline-flex items-center gap-2 text-sm text-success">
              <Icon name="check" className="h-4 w-4" />
              Settings updated across the website
            </span>
          ) : null}
        </div>
      </form>
    </AdminShell>
  );
}
