import type { Metadata } from "next";
import { ArtPanel, Button, Card, PageHero, SectionHeading } from "@/components/ui";
import {
  DiyaIcon,
  MapPinIcon,
  ScriptureIcon,
  TulsiIcon,
} from "@/components/devotional-art";
import { locations, weeklySchedule } from "@/lib/data";

export const metadata: Metadata = {
  title: "Weekday Daily Programs Location",
  description:
    "Everything you need to know about ISKCON Austin's weekday Daily Programs location — address, schedule, directions, and photos.",
};

const location = locations.find((l) => l.key === "daily")!;
const schedule = weeklySchedule.filter(
  (s) => s.day === "Every Day" || s.day === "Wednesday"
);

// No dedicated photography for this location yet — devotional placeholder
// panels stand in until real photos are collected.
const placeholders = [
  { icon: TulsiIcon, caption: "Mangala Aarti & Tulasi Worship" },
  { icon: ScriptureIcon, caption: "Srimad Bhagavatam Class" },
  { icon: DiyaIcon, caption: "Gaura Aarti" },
  { icon: MapPinIcon, caption: "Temple Exterior" },
] as const;

export default function DailyLocationPage() {
  return (
    <div>
      <PageHero
        eyebrow="Current Location"
        title="Weekday Daily Programs"
        description={location.description}
        image="/temple-renderings/interior-01-altar-hall.jpg"
      />

      {/* Location details */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 py-16 sm:py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <SectionHeading eyebrow="Find Us" title="Address & Hours" />
            <div className="mt-6 flex items-start gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-cream text-gold border border-cream-deep">
                <MapPinIcon className="w-5 h-5" />
              </span>
              <div>
                <p className="font-semibold text-navy">{location.address}</p>
                <p className="text-sm text-ink-soft mt-1">
                  Monday–Saturday, daily programs
                </p>
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
              <Button href="/visit" variant="secondary">
                Plan Your Visit
              </Button>
            </div>
          </div>

          <div>
            <SectionHeading eyebrow="Every Day, Monday–Saturday" title="Schedule" />
            <div className="mt-6 space-y-3">
              {schedule.map((s) => (
                <Card key={s.title} className="p-5 flex items-center justify-between gap-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-gold">
                      {s.time}
                    </p>
                    <p className="font-semibold text-navy mt-0.5">{s.title}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Photos */}
      <section className="bg-cream">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16 sm:py-20">
          <SectionHeading
            eyebrow="See It For Yourself"
            title="Photos From This Location"
            description="Real photography from this location is being collected — for now, here's what to expect."
          />
          <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4">
            {placeholders.map((p) => (
              <ArtPanel
                key={p.caption}
                icon={p.icon}
                caption={p.caption}
                tone="cream"
                ratio="aspect-square"
                iconClassName="w-12 h-12"
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
