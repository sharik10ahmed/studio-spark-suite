import { createFileRoute } from "@tanstack/react-router";
import { AdminShell } from "@/components/admin/AdminShell";
import { ResourceManager } from "@/components/admin/ResourceManager";
import { useStudio } from "@/store/studio";

export const Route = createFileRoute("/admin/programs")({
  head: () => ({
    meta: [
      { title: "Program Management | D Maker Admin" },
      { name: "description", content: "Add, edit, delete and enable dance programs." },
      { name: "robots", content: "noindex" },
      { property: "og:title", content: "Program Management | D Maker Admin" },
      { property: "og:description", content: "Manage dance programs of the studio." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AdminPrograms,
});

function AdminPrograms() {
  const { programs } = useStudio();
  return (
    <AdminShell title="Programs" subtitle="Manage dance programs shown on the website">
      <ResourceManager
        collection={programs}
        entity="Program"
        primary={(p) => p.name}
        secondary={(p) => `${p.level} · ${p.batch} — ${p.description}`}
        fields={[
          { name: "name", label: "Program name" },
          { name: "category", label: "Category" },
          {
            name: "level",
            label: "Level",
            type: "select",
            options: ["Beginner", "Beginner to Advanced", "Intermediate", "Advanced", "All Levels"],
          },
          {
            name: "batch",
            label: "Batch type",
            type: "select",
            options: ["Group Batch", "Kids Batch", "Weekend Batch", "Private Batch", "Evening Batch"],
          },
          { name: "description", label: "Description", type: "textarea" },
          { name: "status", label: "Status", type: "select", options: ["active", "inactive"] },
        ]}
      />
    </AdminShell>
  );
}
