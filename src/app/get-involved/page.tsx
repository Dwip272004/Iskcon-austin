import type { Metadata } from "next";
import { ArtPanel, Button, Card, PageHero, SectionHeading } from "@/components/ui";
import { YouthIcon } from "@/components/devotional-art";
import { getInvolvedOptions } from "@/lib/data";

export const metadata: Metadata = {
  title: "Get Involved",
  description:
    "Volunteer at ISKCON Austin: Sunday Feast seva, book distribution, Food for Life, youth programs, temple upkeep, and capital campaign support.",
};

export default function GetInvolvedPage() {
  return (
    <div>
      <PageHero
        eyebrow="Serve With Us"
        title="Get Involved"
        description="Devotional service (seva) is at the heart of temple life. Whatever your time and talents, there's a place for you here."
      />

      <section className="mx-auto max-w-6xl px-4 sm:px-6 py-16 sm:py-20">
        <SectionHeading
          eyebrow="Ways to Serve"
          title="Volunteer Opportunities"
          description="Reach out and we'll help match you to the right team — no experience necessary for most roles."
        />
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {getInvolvedOptions.map((o) => (
            <Card key={o.title} className="p-6">
              <h3 className="font-display text-lg font-semibold text-navy">
                {o.title}
              </h3>
              <p className="mt-2 text-sm text-ink-soft leading-relaxed">
                {o.description}
              </p>
            </Card>
          ))}
        </div>
        <Button href="/contact" variant="secondary" className="mt-10">
          Sign Up to Volunteer
        </Button>
      </section>

      <section className="bg-cream">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16 sm:py-20 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <SectionHeading
              eyebrow="Youth & Families"
              title="Raising the Next Generation"
            />
            <p className="mt-4 text-ink-soft leading-relaxed">
              Our youth programs offer kirtan, drama, and educational
              activities so children grow up with a joyful connection to
              Krishna consciousness. TODO: add current class times and youth
              coordinator contact.
            </p>
          </div>
          <ArtPanel icon={YouthIcon} caption="Youth Program" tone="cream" />
        </div>
      </section>
    </div>
  );
}
