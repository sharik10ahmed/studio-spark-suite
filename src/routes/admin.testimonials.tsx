import { createFileRoute } from "@tanstack/react-router";
import { AdminShell } from "@/components/admin/AdminShell";
import { ResourceManager } from "@/components/admin/ResourceManager";
import { useStudio } from "@/store/studio";

export const Route = createFileRoute("/admin/testimonials")({
  head: () => ({
    meta: [
      { title: "Testimonials Management | D Maker Admin" },
      { name: "description", content: "Add, edit and publish student and client testimonials." },
      { name: "robots", content: "noindex" },
      { property: "og:title", content: "Testimonials Management | D Maker Admin" },
      { property: "og:description", content: "Manage studio testimonials." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AdminTestimonials,
});

function AdminTestimonials() {
  const { testimonials } = useStudio();
  return (
    <AdminShell title="Testimonials" subtitle="Manage reviews shown across the website">
      <ResourceManager
        collection={testimonials}
        entity="Testimonial"
        imageField={null}
        primary={(t) => `${t.name} — ${t.clientType}`}
        secondary={(t) => `${t.rating}★ · ${t.review}`}
        fields={[
          { name: "name", label: "Name" },
          {
            name: "clientType",
            label: "Client type",
            type: "select",
            options: [
              "Dance Student",
              "Fitness Member",
              "Parent",
              "Event Client",
              "Group Participant",
            ],
          },
          { name: "rating", label: "Rating (1-5)", type: "number" },
          { name: "review", label: "Review", type: "textarea" },
          { name: "status", label: "Status", type: "select", options: ["published", "draft"] },
        ]}
      />
    </AdminShell>
  );
}
