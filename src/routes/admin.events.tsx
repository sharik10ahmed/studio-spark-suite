import { createFileRoute } from "@tanstack/react-router";
import { AdminShell } from "@/components/admin/AdminShell";
import { ResourceManager } from "@/components/admin/ResourceManager";
import { useStudio } from "@/store/studio";

export const Route = createFileRoute("/admin/events")({
  head: () => ({
    meta: [
      { title: "Events Management | D Maker Admin" },
      { name: "description", content: "Add, edit and publish studio performances and events." },
      { name: "robots", content: "noindex" },
      { property: "og:title", content: "Events Management | D Maker Admin" },
      { property: "og:description", content: "Manage studio performances and events." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AdminEvents,
});

function AdminEvents() {
  const { events } = useStudio();
  return (
    <AdminShell title="Events" subtitle="Manage performances and events, publish or unpublish">
      <ResourceManager
        collection={events}
        entity="Event"
        primary={(e) => e.title}
        secondary={(e) => `${e.category} · ${e.date} · ${e.location}`}
        fields={[
          { name: "title", label: "Event name" },
          {
            name: "category",
            label: "Category",
            type: "select",
            options: [
              "Wedding",
              "Cultural Event",
              "College Event",
              "Corporate Event",
              "Community Performance",
            ],
          },
          { name: "date", label: "Date" },
          { name: "location", label: "Location" },
          { name: "description", label: "Description", type: "textarea" },
          { name: "status", label: "Status", type: "select", options: ["published", "draft"] },
        ]}
      />
    </AdminShell>
  );
}
