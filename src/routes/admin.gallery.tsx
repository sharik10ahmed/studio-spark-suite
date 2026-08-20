import { createFileRoute } from "@tanstack/react-router";
import { AdminShell } from "@/components/admin/AdminShell";
import { ResourceManager } from "@/components/admin/ResourceManager";
import { useStudio } from "@/store/studio";

export const Route = createFileRoute("/admin/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery Management | D Maker Admin" },
      { name: "description", content: "Add, categorise and order gallery images." },
      { name: "robots", content: "noindex" },
      { property: "og:title", content: "Gallery Management | D Maker Admin" },
      { property: "og:description", content: "Manage studio gallery images." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AdminGallery,
});

function AdminGallery() {
  const { gallery } = useStudio();
  return (
    <AdminShell
      title="Gallery"
      subtitle="Each image can only be used once across the whole website"
    >
      <ResourceManager
        collection={gallery}
        entity="Gallery Image"
        primary={(g) => `${g.order}. ${g.title}`}
        secondary={(g) => g.category}
        fields={[
          { name: "title", label: "Title" },
          {
            name: "category",
            label: "Category",
            type: "select",
            options: ["Dance", "Fitness", "Training", "Performances", "Events"],
          },
          { name: "order", label: "Display order", type: "number" },
          { name: "status", label: "Status", type: "select", options: ["active", "inactive"] },
        ]}
      />
    </AdminShell>
  );
}
