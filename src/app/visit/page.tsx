import type { Metadata } from "next";
import Link from "next/link";
import { ArtPanel, Button, Card, PageHero, SectionHeading } from "@/components/ui";
import { MapPinIcon, NamasteIcon } from "@/components/devotional-art";
import { faqs, site, weeklySchedule } from "@/lib/data";

export const metadata: Metadata = {
  title: "Visit Us",
  description:
    "Plan your visit to ISKCON Austin: what to expect, directions and parking, the weekly schedule, and answers to common first-time visitor questions.",
};

export default function VisitPage() {
  return (
    <div>
      <PageHero
        eyebrow="New Here?"
        title="Plan Your Visit"
        description="Everyone is welcome at ISKCON Austin — no invitation, dress code, or prior knowledge needed. Here's everything to know before you come."
        image="/page-heroes/visit.jpg"
      />

      {/* What to expect */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 py-16 sm:py-20 grid lg:grid-cols-2 gap-12 items-start">
        <div>
          <SectionHeading eyebrow="What to Expect" title="Your First Visit" />
          <p className="mt-4 text-ink-soft leading-relaxed">
            Arrive any time during the Sunday program — most guests come
            around 11:00 AM for kirtan (congregational chanting), stay for a
            short class on the Bhagavad-gita, and finish with a free
            vegetarian feast. You're welcome to just observe, or join in.
          </p>
          <ul className="mt-6 space-y-4 text-sm text-ink-soft">
            <li className="flex gap-3">
              <span className="text-gold font-bold">•</span>
              Shoes are removed before entering the temple room — a shelf is
              provided near the entrance.
            </li>
            <li className="flex gap-3">
              <span className="text-gold font-bold">•</span>
              Seating is on the floor, cushions and chairs are available for
              anyone who needs them.
            </li>
            <li className="flex gap-3">
              <span className="text-gold font-bold">•</span>
              Modest, comfortable clothing is welcome — traditional dress is
              common but never required.
            </li>
            <li className="flex gap-3">
              <span className="text-gold font-bold">•</span>
              Greeters are on hand to answer questions and help you feel at
              home.
            </li>
          </ul>
          <p className="mt-6 text-sm text-ink-soft leading-relaxed">
            Can't make it in person yet? You can start practicing today —
            see our guide to{" "}
            <Link href="/kc-at-home" className="font-semibold text-gold hover:text-gold-light underline underline-offset-2">
              Krishna Consciousness at Home
            </Link>
            .
          </p>
        </div>
        <ArtPanel icon={NamasteIcon} caption="Devotees Greeting Visitors" tone="cream" />
      </section>

      {/* Full weekly schedule */}
      <section className="bg-cream">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16 sm:py-20">
          <SectionHeading eyebrow="Weekly Rhythm" title="Full Temple Schedule" />
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {weeklySchedule.map((item) => (
              <Card key={item.title + item.time} className="p-6">
                <span className="inline-block rounded-full bg-cream px-3 py-1 text-xs font-semibold uppercase tracking-wide text-navy">
                  {item.day}
                </span>
                <p className="mt-3 text-xs font-semibold text-gold">
                  {item.time}
                </p>
                <h3 className="font-display text-lg font-semibold text-navy mt-1">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-ink-soft leading-relaxed">
                  {item.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Directions & parking */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 py-16 sm:py-20 grid lg:grid-cols-2 gap-12 items-start">
        <ArtPanel icon={MapPinIcon} caption="Map & Directions" tone="cream" ratio="aspect-[4/3]" />
        <div>
          <SectionHeading eyebrow="Getting Here" title="Directions & Parking" />
          <div className="mt-6 space-y-4 text-sm text-ink-soft leading-relaxed">
            <p>
              <span className="font-semibold text-navy">Address: </span>
              {site.address}
            </p>
            <p>
              <span className="font-semibold text-navy">Parking: </span>
              Free on-site parking is available. TODO: confirm parking
              details once the new temple location is finalized.
            </p>
            <p>
              <span className="font-semibold text-navy">Accessibility: </span>
              TODO: confirm wheelchair access, ramps, and accessible seating
              details.
            </p>
          </div>
          <Button href="/contact" variant="secondary" className="mt-6">
            Get Directions
          </Button>
        </div>
      </section>

      {/* FAQ */}
      <section className="relative overflow-hidden bg-navy text-white">
        <div className="absolute inset-0 pattern-dots text-white/[0.05]" aria-hidden />
        <div className="mx-auto max-w-4xl px-4 sm:px-6 py-16 sm:py-20 relative">
          <SectionHeading
            eyebrow="Common Questions"
            title="Frequently Asked Questions"
            center
            light
          />
          <div className="mt-10 space-y-4">
            {faqs.map((f) => (
              <details
                key={f.q}
                className="group rounded-xl bg-white/5 border border-white/10 p-5 open:bg-white/10"
              >
                <summary className="cursor-pointer list-none flex items-center justify-between font-semibold text-white">
                  {f.q}
                  <span className="text-gold-light group-open:rotate-45 transition-transform">
                    +
                  </span>
                </summary>
                <p className="mt-3 text-sm text-white/75 leading-relaxed">
                  {f.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
