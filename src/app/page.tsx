import Link from "next/link";
import {
  ArtPanel,
  Button,
  Card,
  Eyebrow,
  SectionHeading,
} from "@/components/ui";
import { TempleSilhouetteIcon } from "@/components/devotional-art";
import { GarlandRow, OrnamentDivider } from "@/components/ornaments";
import { events, givingFunds, site, weeklySchedule } from "@/lib/data";

const quickLinks = [
  { href: "/media", label: "Watch Online", icon: "▶" },
  { href: "/events", label: "See Events", icon: "🗓" },
  { href: "/giving", label: "Donate", icon: "🙏" },
];

export default function HomePage() {
  const sundayItems = weeklySchedule.filter((s) => s.day === "Sunday");
  const upcoming = events.slice(0, 3);

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-navy text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(184,134,11,0.25),transparent_55%)]" />
        <div className="absolute inset-0 pattern-dots text-white/[0.05]" aria-hidden />
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16 sm:py-24 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Eyebrow>A Gift for Generations</Eyebrow>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold mt-3 leading-tight text-balance">
                Building a Permanent Home for Krishna Consciousness in Austin
              </h1>
              <p className="mt-5 text-white/80 text-lg leading-relaxed max-w-xl">
                Join us this Sunday for kirtan, class, and a free feast — and
                be part of the community building ISKCON Austin's new temple,
                a home for generations of devotees to come.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button href="/visit" variant="primary">
                  Plan Your Visit
                </Button>
                <Button href="/giving" variant="ghost">
                  Support the New Temple
                </Button>
              </div>
              <div className="mt-8 flex flex-wrap gap-6 text-sm text-white/70">
                {quickLinks.map((q) => (
                  <Link
                    key={q.href}
                    href={q.href}
                    className="flex items-center gap-2 hover:text-white transition-colors"
                  >
                    <span aria-hidden>{q.icon}</span>
                    {q.label}
                  </Link>
                ))}
              </div>
            </div>
            <ArtPanel
              icon={TempleSilhouetteIcon}
              caption="New Temple — Rendering Coming Soon"
              tone="navy"
              ratio="aspect-[4/3]"
              className="!bg-gradient-to-br !from-white/10 !to-white/5 !border-white/20"
            />
          </div>
        </div>
        <GarlandRow className="relative pb-4 text-marigold/70" />
      </section>

      {/* This Sunday strip */}
      <section className="garland-edge bg-gradient-to-r from-marigold to-gold">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-white text-sm font-medium">
          <p>
            ॐ Join us this Sunday, {site.hours} — everyone is welcome, no
            registration needed.
          </p>
          <Link href="/visit" className="underline underline-offset-2 shrink-0">
            What to expect →
          </Link>
        </div>
      </section>

      {/* Weekly schedule cards */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 py-16 sm:py-24">
        <SectionHeading
          eyebrow="Every Sunday"
          title="This Week at the Temple"
          description="A simple, welcoming flow — come for one part or stay for the whole afternoon."
        />
        <div className="mt-10 grid sm:grid-cols-3 gap-6">
          {sundayItems.map((item) => (
            <Card key={item.title} className="p-6">
              <p className="text-xs font-semibold uppercase tracking-wide text-gold">
                {item.time}
              </p>
              <h3 className="font-display text-xl font-semibold text-navy mt-2">
                {item.title}
              </h3>
              <p className="mt-2 text-sm text-ink-soft leading-relaxed">
                {item.description}
              </p>
            </Card>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap gap-4">
          <Button href="/visit" variant="secondary">
            View Full Weekly Schedule
          </Button>
          <Button href="/media" variant="primary">
            Watch the Livestream
          </Button>
        </div>
      </section>

      {/* Capital campaign */}
      <section className="bg-cream">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16 sm:py-24 grid lg:grid-cols-2 gap-12 items-center">
          <ArtPanel
            icon={TempleSilhouetteIcon}
            caption="New Temple — Architectural Rendering"
            tone="cream"
            ratio="aspect-[4/3]"
          />
          <div>
            <Eyebrow>New Temple Campaign</Eyebrow>
            <OrnamentDivider className="mt-3" />
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-navy">
              A Home Built to Last Generations
            </h2>
            <p className="mt-4 text-ink-soft leading-relaxed">
              {givingFunds[0].description}
            </p>
            <div className="mt-6">
              <div className="flex items-center justify-between text-sm font-semibold text-navy mb-2">
                <span>{givingFunds[0].stat}</span>
                <span>60%</span>
              </div>
              <div className="h-3 rounded-full bg-white overflow-hidden">
                <div className="h-full w-[60%] rounded-full bg-gradient-to-r from-gold to-gold-light" />
              </div>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button href="/giving" variant="secondary">
                Give to the Campaign
              </Button>
              <Button href="/about" variant="ghost" className="!text-navy !border-navy/30 !bg-transparent hover:!bg-navy/5">
                Project Details
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming events */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 py-16 sm:py-24">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionHeading eyebrow="Mark Your Calendar" title="Upcoming Events" />
          <Link href="/events" className="text-sm font-semibold text-gold hover:text-gold-light">
            View full calendar →
          </Link>
        </div>
        <div className="mt-10 grid sm:grid-cols-3 gap-6">
          {upcoming.map((e) => (
            <Card key={e.title} className="p-6 flex flex-col">
              <span className="inline-block w-fit rounded-full bg-cream px-3 py-1 text-xs font-semibold uppercase tracking-wide text-navy">
                {e.category}
              </span>
              <p className="mt-3 text-xs font-semibold text-gold">
                {new Date(e.date).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </p>
              <h3 className="font-display text-xl font-semibold text-navy mt-1">
                {e.title}
              </h3>
              <p className="mt-2 text-sm text-ink-soft leading-relaxed flex-1">
                {e.description}
              </p>
            </Card>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-navy text-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 py-16 text-center">
          <Eyebrow>॥ हरे कृष्ण ॥</Eyebrow>
          <OrnamentDivider center tone="white" className="mt-3" />
          <h2 className="font-display text-3xl font-semibold">
            Stay Connected
          </h2>
          <p className="mt-4 text-white/75 max-w-xl mx-auto">
            Get weekly program updates, festival announcements, and campaign
            news in your inbox.
          </p>
          <form className="mt-6 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              required
              placeholder="you@example.com"
              className="flex-1 rounded-full px-5 py-3 text-sm text-ink placeholder:text-ink-soft/60 focus:outline-none focus:ring-2 focus:ring-gold"
            />
            <button
              type="submit"
              className="rounded-full bg-gold px-6 py-3 text-sm font-semibold hover:bg-gold-light transition-colors"
            >
              Subscribe
            </button>
          </form>
          <p className="mt-3 text-xs text-white/50">
            TODO: connect to email provider (Mailchimp / ConvertKit / etc.)
          </p>
        </div>
      </section>
    </div>
  );
}
