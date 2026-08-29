import type { Metadata } from "next";
import Image from "next/image";
import { Button, SectionHeading } from "@/components/ui";
import { MapPinIcon } from "@/components/devotional-art";
import { CornerFrame } from "@/components/ornaments";
import { givingFunds, locations } from "@/lib/data";

export const metadata: Metadata = {
  title: "New Temple",
  description:
    "ISKCON's New Temple in Austin, Texas — a beautiful spiritual oasis that will enlighten your heart. See renderings, the address, and how to support the campaign.",
};

const location = locations.find((l) => l.key === "newTemple")!;
const campaign = givingFunds.find((f) => f.key === "capital")!;

const renderings = [
  { src: "/temple-renderings/exterior-04-front-entrance-pool.jpg", caption: "Front Entrance & Reflecting Pool" },
  { src: "/temple-renderings/exterior-01-entrance-courtyard.jpg", caption: "Entrance Courtyard" },
  { src: "/temple-renderings/exterior-02-facade.jpg", caption: "Facade" },
  { src: "/temple-renderings/exterior-03-covered-porch.jpg", caption: "Covered Porch" },
  { src: "/temple-renderings/exterior-05-corner-view.jpg", caption: "Corner View" },
  { src: "/temple-renderings/interior-01-altar-hall.jpg", caption: "Altar Hall" },
  { src: "/temple-renderings/interior-02-great-hall.jpg", caption: "Great Hall" },
  { src: "/temple-renderings/interior-03-shrine-alcove.jpg", caption: "Shrine Alcove" },
];

export default function NewTempleLocationPage() {
  return (
    <div>
      {/* Hero — exact copy provided by the founder */}
      <section className="relative overflow-hidden bg-navy text-white">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url(/temple-renderings/exterior-04-front-entrance-pool.jpg)" }}
          aria-hidden
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/95 via-navy-dark/75 to-navy-dark/55" aria-hidden />
        <div className="absolute inset-0 pattern-dots text-white/[0.05]" aria-hidden />
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-20 sm:py-28 relative text-center">
          <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.25em] text-gold-light">
            A Gift For Generations
          </p>
          <h1 className="mt-4 font-display text-4xl sm:text-5xl lg:text-6xl font-semibold text-balance max-w-3xl mx-auto">
            ISKCON&rsquo;s New Temple in Austin, Texas
          </h1>
          <p className="mt-5 text-white/85 text-lg sm:text-xl max-w-xl mx-auto leading-relaxed">
            A beautiful spiritual oasis that will enlighten your heart
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button href="/donate" variant="primary">
              Support the Campaign
            </Button>
          </div>
        </div>
      </section>

      {/* Location details */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 py-16 sm:py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <SectionHeading eyebrow="Find Us" title="Site Address" />
            <div className="mt-6 flex items-start gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-cream text-gold border border-cream-deep">
                <MapPinIcon className="w-5 h-5" />
              </span>
              <div>
                <p className="font-semibold text-navy">{location.address}</p>
                <p className="text-sm text-ink-soft mt-1">{location.description}</p>
              </div>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={location.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-semibold text-white hover:bg-gold-light transition-colors shadow-sm"
              >
                Get Directions
              </a>
              <Button href="/virtual-tour" variant="secondary">
                Take the Virtual Tour
              </Button>
            </div>
          </div>

          <div>
            <SectionHeading eyebrow="New Temple Campaign" title="A Home Built to Last Generations" />
            <p className="mt-4 text-ink-soft leading-relaxed">{campaign.description}</p>
            <div className="mt-6">
              <div className="flex items-center justify-between text-sm font-semibold text-navy mb-2">
                <span>{campaign.stat}</span>
                <span>60%</span>
              </div>
              <div className="h-3 rounded-full bg-cream overflow-hidden">
                <div className="h-full w-[60%] rounded-full bg-gradient-to-r from-gold to-gold-light" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Renderings */}
      <section className="bg-cream">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16 sm:py-20">
          <SectionHeading
            eyebrow="See It For Yourself"
            title="Architectural Renderings"
            description="A preview of the new temple, currently under development."
          />
          <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4">
            {renderings.map((r) => (
              <div
                key={r.src}
                className="relative aspect-square w-full overflow-hidden rounded-2xl border border-cream-deep bg-white shadow-sm"
              >
                <Image
                  src={r.src}
                  alt={r.caption}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/70 via-transparent to-transparent" />
                <span className="absolute bottom-2 left-2 right-2 text-[10px] font-semibold uppercase tracking-wide text-white">
                  {r.caption}
                </span>
                <CornerFrame tone="white" size={14} inset={7} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
