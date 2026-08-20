import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { AdminShell } from "@/components/admin/AdminShell";
import { Icon } from "@/components/ui/Icon";
import { useStudio } from "@/store/studio";
import type { EnquiryStatus } from "@/data/mock";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/admin/enquiries")({
  head: () => ({
    meta: [
      { title: "Enquiry Management | D Maker Admin" },
      { name: "description", content: "Track and update the status of website enquiries." },
      { name: "robots", content: "noindex" },
      { property: "og:title", content: "Enquiry Management | D Maker Admin" },
      { property: "og:description", content: "Manage studio enquiries." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AdminEnquiries,
});

const STATUSES: EnquiryStatus[] = ["New", "Contacted", "Converted", "Closed"];
const FILTERS = ["All", ...STATUSES] as const;

const statusTone: Record<EnquiryStatus, string> = {
  New: "bg-primary/12 text-primary",
  Contacted: "bg-ink/8 text-ink",
  Converted: "bg-success/12 text-success",
  Closed: "bg-muted text-muted-foreground",
};

function AdminEnquiries() {
  const { enquiries } = useStudio();
  const [filter, setFilter] = useState<(typeof FILTERS)[number]>("All");

  const list =
    filter === "All" ? enquiries.items : enquiries.items.filter((e) => e.status === filter);

  return (
    <AdminShell title="Enquiries" subtitle="Contact form submissions from the website">
      <div className="mb-6 flex flex-wrap gap-2">
        {FILTERS.map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={cn(
              "border px-4 py-2 text-[11px] font-bold uppercase tracking-[0.16em] transition-colors",
              filter === f
                ? "border-primary bg-primary text-primary-foreground"
                : "border-border bg-card text-muted-foreground hover:border-primary hover:text-primary",
            )}
          >
            {f}
            <span className="ml-2 opacity-60">
              {f === "All"
                ? enquiries.items.length
                : enquiries.items.filter((e) => e.status === f).length}
            </span>
          </button>
        ))}
      </div>

      <div className="space-y-3">
        {list.map((item) => (
          <div key={item.id} className="border border-border bg-card p-5">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div className="min-w-0">
                <div className="font-semibold text-ink">{item.name}</div>
                <p className="mt-1 flex flex-wrap gap-x-4 gap-y-1 text-xs text-muted-foreground">
                  <span className="inline-flex items-center gap-1.5">
                    <Icon name="phone" className="h-3.5 w-3.5" />
                    {item.phone}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Icon name="mail" className="h-3.5 w-3.5" />
                    {item.email}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Icon name="calendar" className="h-3.5 w-3.5" />
                    {item.date}
                  </span>
                </p>
              </div>
              <span
                className={cn(
                  "px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em]",
                  statusTone[item.status],
                )}
              >
                {item.status}
              </span>
            </div>

            <p className="mt-4 text-[11px] font-bold uppercase tracking-[0.18em] text-primary">
              {item.program}
            </p>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.message}</p>

            <div className="mt-5 flex flex-wrap items-center gap-3 border-t border-border pt-4">
              <label className="text-[11px] font-bold uppercase tracking-[0.18em] text-muted-foreground">
                Status
              </label>
              <select
                value={item.status}
                onChange={(e) =>
                  enquiries.update(item.id, { status: e.target.value as EnquiryStatus })
                }
                className="border border-border bg-background px-3 py-2 text-sm text-ink outline-none focus:border-primary"
              >
                {STATUSES.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
              <button
                onClick={() => enquiries.remove(item.id)}
                className="ml-auto border border-border p-2 text-muted-foreground transition-colors hover:border-destructive hover:text-destructive"
                title="Delete enquiry"
              >
                <Icon name="trash" className="h-4 w-4" />
              </button>
            </div>
          </div>
        ))}
        {list.length === 0 ? (
          <p className="border border-dashed border-border p-10 text-center text-sm text-muted-foreground">
            No enquiries in this status.
          </p>
        ) : null}
      </div>
    </AdminShell>
  );
}
