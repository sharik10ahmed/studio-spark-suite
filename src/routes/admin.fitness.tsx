import { createFileRoute } from "@tanstack/react-router";
import { AdminShell } from "@/components/admin/AdminShell";
import { ResourceManager } from "@/components/admin/ResourceManager";
import { useStudio } from "@/store/studio";

export const Route = createFileRoute("/admin/fitness")({
  head: () => ({
    meta: [
      { title: "Fitness Management | D Maker Admin" },
      { name: "description", content: "Manage fitness services, images, order and status." },
      { name: "robots", content: "noindex" },
      { property: "og:title", content: "Fitness Management | D Maker Admin" },
      { property: "og:description", content: "Manage studio fitness services." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AdminFitness,
});

function AdminFitness() {
  const { fitness } = useStudio();
  return (
    <AdminShell title="Fitness" subtitle="Manage fitness services and display order">
      <ResourceManager
        collection={fitness}
        entity="Fitness Service"
        primary={(f) => `${f.order}. ${f.name}`}
        secondary={(f) => f.description}
        fields={[
          { name: "name", label: "Service name" },
          { name: "order", label: "Display order", type: "number" },
          { name: "description", label: "Description", type: "textarea" },
          { name: "status", label: "Status", type: "select", options: ["active", "inactive"] },
        ]}
      />
    </AdminShell>
  );
}
