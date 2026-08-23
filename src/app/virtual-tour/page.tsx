import type { Metadata } from "next";
import { PageHero, SectionHeading, Button, Eyebrow } from "@/components/ui";
import { OrnamentDivider } from "@/components/ornaments";
import VirtualTourGallery from "@/components/VirtualTourGallery";
import { givingFunds } from "@/lib/data";

export const metadata: Metadata = {
  title: "Virtual Tour — The New Temple",
  description:
    "Take a virtual tour of ISKCON Austin's new temple through architectural renderings of the exterior grounds and interior worship halls.",
};

export default function VirtualTourPage() {
  return (
    <div>
      <PageHero
        eyebrow="A Gift for Generations"
        title="Virtual Tour of the New Temple"
        description="Step inside the architectural vision for ISKCON Austin's permanent home — from the entrance courtyard to the grand altar hall."
        image="/temple-renderings/exterior-02-facade.jpg"
      />

      <section className="mx-auto max-w-6xl px-4 sm:px-6 py-16 sm:py-20">
        <SectionHeading
          eyebrow="Renderings"
          title="Explore the Design"
          description="These architectural renderings show the temple as designed — the final building may evolve slightly as construction progresses. Use the filters to browse by exterior or interior views, and click any image for a closer look."
          center
        />
        <div className="mt-12">
          <VirtualTourGallery />
        </div>
      </section>

      {/* Campaign callout */}
      <section className="bg-navy text-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 py-16 sm:py-20 text-center">
          <Eyebrow>New Temple Campaign</Eyebrow>
          <OrnamentDivider center tone="white" className="mt-3" />
          <h2 className="font-display text-3xl sm:text-4xl font-semibold text-balance">
            Help Bring This Vision to Life
          </h2>
          <p className="mt-4 text-white/80 max-w-2xl mx-auto leading-relaxed">
            {givingFunds[0].description}
          </p>
          <div className="mt-6 max-w-sm mx-auto">
            <div className="flex items-center justify-between text-sm font-semibold mb-2">
              <span>{givingFunds[0].stat}</span>
              <span>60%</span>
            </div>
            <div className="h-2.5 rounded-full bg-white/15 overflow-hidden">
              <div className="h-full w-[60%] rounded-full bg-gradient-to-r from-gold to-gold-light" />
            </div>
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button href="/donate" variant="primary">
              Donate to the New Temple
            </Button>
            <Button href="/about" variant="ghost">
              Read the Full Story
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
