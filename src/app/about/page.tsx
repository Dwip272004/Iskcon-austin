import type { Metadata } from "next";
import { ArtPanel, Button, Card, PageHero, SectionHeading } from "@/components/ui";
import { LotusBloomIcon, ScriptureIcon, TempleSilhouetteIcon } from "@/components/devotional-art";
import { leadership } from "@/lib/data";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about ISKCON Austin's history and philosophy, our local leadership, and the new temple project bringing a permanent home to Central Texas.",
};

export default function AboutPage() {
  return (
    <div>
      <PageHero
        eyebrow="Our Story"
        title="About ISKCON Austin"
        description="Part of a global tradition of bhakti-yoga, rooted in Austin since our community's earliest devotees gathered to chant, study, and share prasadam."
      />

      {/* History & philosophy */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 py-16 sm:py-20 grid lg:grid-cols-2 gap-12 items-start">
        <div>
          <SectionHeading eyebrow="Where We Come From" title="History & Philosophy" />
          <p className="mt-4 text-ink-soft leading-relaxed">
            The International Society for Krishna Consciousness (ISKCON) was
            founded in New York City in 1966 by His Divine Grace A.C.
            Bhaktivedanta Swami Prabhupada, carrying forward a devotional
            tradition that traces back over 5,000 years to the teachings of
            the Bhagavad-gita, and revived in the 15th century by Sri
            Chaitanya Mahaprabhu.
          </p>
          <p className="mt-4 text-ink-soft leading-relaxed">
            Today ISKCON has over 650 temples and communities worldwide.
            ISKCON Austin exists to make Krishna — God — the center of daily
            life for our local community, through congregational chanting,
            study of scripture, prasadam, and service to others.
          </p>
        </div>
        <ArtPanel icon={ScriptureIcon} caption="Founder-Ācārya Śrīla Prabhupāda" tone="cream" />
      </section>

      {/* Leadership */}
      <section className="bg-cream">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16 sm:py-20">
          <SectionHeading eyebrow="Meet the Community" title="Temple Leadership" />
          <div className="mt-10 grid sm:grid-cols-3 gap-6">
            {leadership.map((p) => (
              <Card key={p.name} className="p-6 text-center">
                <div className="relative mx-auto h-24 w-24 rounded-full bg-gradient-to-br from-cream to-cream-deep border-2 border-gold/40 flex items-center justify-center">
                  <LotusBloomIcon className="w-12 h-12 text-gold" />
                </div>
                <h3 className="font-display text-lg font-semibold text-navy mt-4">
                  {p.name}
                </h3>
                <p className="text-xs font-semibold uppercase tracking-wide text-gold mt-1">
                  {p.role}
                </p>
                <p className="mt-3 text-sm text-ink-soft leading-relaxed">
                  {p.bio}
                </p>
              </Card>
            ))}
          </div>
          <p className="mt-6 text-xs text-ink-soft/70">
            TODO: confirm names, titles, and bios with the temple board before
            publishing.
          </p>
        </div>
      </section>

      {/* New temple project */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 py-16 sm:py-20 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <SectionHeading eyebrow="Looking Ahead" title="The New Temple Project" />
          <p className="mt-4 text-ink-soft leading-relaxed">
            ISKCON Austin is building a permanent home: a 300-person worship
            hall, devotee residences, and gardens designed to serve our
            growing community for generations. Construction is anticipated
            to begin within the next 12 months, with a public opening
            planned soon after.
          </p>
          <Button href="/giving" variant="secondary" className="mt-6">
            Support the Campaign
          </Button>
        </div>
        <ArtPanel icon={TempleSilhouetteIcon} caption="New Temple — Rendering Coming Soon" tone="cream" />
      </section>
    </div>
  );
}
