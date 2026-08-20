import { createFileRoute } from "@tanstack/react-router";
import { SiteShell, PageHero } from "@/components/site/SiteShell";
import { CTASection } from "@/components/site/Sections";
import { GalleryGrid } from "@/components/site/GalleryGrid";
import { IMG } from "@/data/images";
import { useStudio } from "@/store/studio";

const title = "Gallery — Dance, Fitness & Performance Moments | D Maker Studio";
const description =
  "Photos from dance classes, fitness sessions, rehearsals, performances and events at D Maker Dance & Fitness Studio in Gadhinglaj.";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: GalleryPage,
});

function GalleryPage() {
  const { gallery } = useStudio();
  const items = gallery.items
    .filter((g) => g.status === "active")
    .slice()
    .sort((a, b) => a.order - b.order);

  return (
    <SiteShell>
      <PageHero
        eyebrow="Gallery"
        title="Inside The Studio"
        text="Training floors, rehearsals, fitness circuits and stage nights — captured across our dance and fitness batches."
        image={IMG.g9}
      />

      <section className="bg-background py-20 sm:py-28">
        <div className="container-x">
          <GalleryGrid items={items} />
        </div>
      </section>

      <CTASection />
    </SiteShell>
  );
}
