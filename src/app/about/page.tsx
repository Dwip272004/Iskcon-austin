import type { Metadata } from "next";
import { ArtPanel, Button, Card, PageHero, SectionHeading } from "@/components/ui";
import {
  JapaMalaIcon,
  MandalaIcon,
  PeacockFeatherIcon,
  ScriptureIcon,
  TempleSilhouetteIcon,
} from "@/components/devotional-art";
import { coreBeliefs, iskconStats } from "@/lib/data";

const BELIEF_ICONS = [PeacockFeatherIcon, ScriptureIcon, JapaMalaIcon, MandalaIcon];

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about ISKCON Austin's history, core beliefs, founder Srila Prabhupada, the global Krishna consciousness movement, and our new temple project in Central Texas.",
};

export default function AboutPage() {
  return (
    <div>
      <PageHero
        eyebrow="Our Story"
        title="About ISKCON Austin"
        description="Part of a global tradition of bhakti-yoga, rooted in Austin since our community's earliest devotees gathered to chant, study, and share prasadam."
        image="/page-heroes/about.jpg"
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
            Today ISKCON has grown into a worldwide movement of temples,
            farm communities, schools, and cultural centers. ISKCON Austin
            exists to make Krishna — God — the center of daily life for our
            local community, through congregational chanting, study of
            scripture, prasadam, and service to others.
          </p>
        </div>
        <ArtPanel icon={TempleSilhouetteIcon} caption="ISKCON Austin" tone="cream" />
      </section>

      {/* What we believe */}
      <section className="bg-cream">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16 sm:py-20">
          <SectionHeading
            eyebrow="Our Philosophy"
            title="What We Believe"
            description="A few core teachings at the heart of Krishna consciousness."
          />
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreBeliefs.map((b, i) => {
              const Icon = BELIEF_ICONS[i % BELIEF_ICONS.length];
              return (
                <Card key={b.title} className="p-6">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-gold border border-cream-deep">
                    <Icon className="w-6 h-6" />
                  </span>
                  <h3 className="font-display text-lg font-semibold text-navy mt-4">
                    {b.title}
                  </h3>
                  <p className="mt-2 text-sm text-ink-soft leading-relaxed">
                    {b.description}
                  </p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Founder-Acharya */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 py-16 sm:py-20 grid lg:grid-cols-2 gap-12 items-start">
        <ArtPanel icon={ScriptureIcon} caption="Founder-Ācārya Śrīla Prabhupāda" tone="cream" />
        <div>
          <SectionHeading eyebrow="Our Founder-Acharya" title="Srila Prabhupada" />
          <p className="mt-4 text-ink-soft leading-relaxed">
            Born Abhay Charan De in Kolkata in 1896, Srila Prabhupada
            dedicated his life to sharing the teachings of Krishna
            consciousness. At the request of his own spiritual master, he
            set sail for the United States in 1965 at 69 years old, arriving
            in New York City with little more than a suitcase of his books
            and the mission to spread bhakti-yoga to the Western world.
          </p>
          <p className="mt-4 text-ink-soft leading-relaxed">
            Within a year he founded ISKCON, and over the following decade
            established temples on nearly every continent, translating and
            writing dozens of books — including Bhagavad-gita As It Is,
            still the standard translation used by ISKCON temples today. He
            passed away in Vrindavana, India, in 1977, leaving behind a
            worldwide movement that continues to grow.
          </p>
        </div>
      </section>

      {/* ISKCON around the world */}
      <section className="relative overflow-hidden bg-navy text-white">
        <div className="absolute inset-0 pattern-dots text-white/[0.05]" aria-hidden />
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16 sm:py-20 relative">
          <SectionHeading
            eyebrow="A Global Movement"
            title="ISKCON Around the World"
            description="ISKCON Austin is one local community within a movement spanning the globe."
            center
            light
          />
          <div className="mt-10 grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            {iskconStats.map((s) => (
              <div key={s.label} className="rounded-2xl bg-white/5 border border-white/10 px-4 py-8">
                <p className="font-display text-3xl sm:text-4xl font-bold text-gold-light">
                  {s.stat}
                </p>
                <p className="mt-2 text-sm text-white/75">{s.label}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-sm text-white/60 max-w-2xl mx-auto text-center leading-relaxed">
            ISKCON's spiritual headquarters is in Mayapur, West Bengal,
            India — birthplace of Sri Chaitanya Mahaprabhu. Around the
            world, ISKCON temples share common practices: chanting the Hare
            Krishna maha-mantra, a vegetarian diet of food offered to
            Krishna, and the free distribution of prasadam through programs
            like Food for Life.
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
          <div className="mt-6 flex flex-wrap gap-3">
            <Button href="/donate" variant="secondary">
              Support the Campaign
            </Button>
            <Button href="/virtual-tour" variant="ghost" className="!text-navy !border-navy/30 !bg-transparent hover:!bg-navy/5">
              Take the Virtual Tour
            </Button>
          </div>
        </div>
        <ArtPanel icon={TempleSilhouetteIcon} caption="New Temple — Rendering Coming Soon" tone="cream" />
      </section>
    </div>
  );
}
