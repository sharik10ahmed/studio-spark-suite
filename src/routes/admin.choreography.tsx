import { createFileRoute } from "@tanstack/react-router";
import { AdminShell } from "@/components/admin/AdminShell";
import { ResourceManager } from "@/components/admin/ResourceManager";
import { useStudio } from "@/store/studio";

export const Route = createFileRoute("/admin/choreography")({
  head: () => ({
    meta: [
      { title: "Choreography Management | D Maker Admin" },
      { name: "description", content: "Manage choreography services and event types." },
      { name: "robots", content: "noindex" },
      { property: "og:title", content: "Choreography Management | D Maker Admin" },
      { property: "og:description", content: "Manage studio choreography services." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AdminChoreography,
});

function AdminChoreography() {
  const { choreography } = useStudio();
  return (
    <AdminShell title="Choreography" subtitle="Manage choreography services and event types">
      <ResourceManager
        collection={choreography}
        entity="Choreography Service"
        primary={(c) => c.name}
        secondary={(c) => `${c.eventType} — ${c.description}`}
        fields={[
          { name: "name", label: "Service name" },
          {
            name: "eventType",
            label: "Event type",
            type: "select",
            options: [
              "Wedding",
              "Cultural Event",
              "College Event",
              "Corporate Event",
              "Community Performance",
              "Stage Performance",
              "Special Occasion",
            ],
          },
          { name: "description", label: "Description", type: "textarea" },
          { name: "status", label: "Status", type: "select", options: ["active", "inactive"] },
        ]}
      />
    </AdminShell>
  );
}
