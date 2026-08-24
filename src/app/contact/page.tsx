import type { Metadata } from "next";
import { ArtPanel, Card, PageHero, SectionHeading } from "@/components/ui";
import { MapPinIcon } from "@/components/devotional-art";
import { locations, site } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with ISKCON Austin — phone, email, and addresses for Sunday programs, weekday programs, and the new temple.",
};

const details = [
  { label: "Phone", value: site.phone, href: `tel:${site.phone}` },
  { label: "Email", value: site.email, href: `mailto:${site.email}` },
  { label: "Sunday Hours", value: site.hours },
  {
    label: "Temple Contact",
    value: `${site.contactPerson.name} — ${site.contactPerson.phone}`,
    href: `tel:${site.contactPerson.phone}`,
  },
];

export default function ContactPage() {
  return (
    <div>
      <PageHero
        eyebrow="We'd Love to Hear From You"
        title="Contact Us"
        image="/page-heroes/contact.jpg"
      />

      {/* Our locations */}
      <section className="bg-cream">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16 sm:py-20">
          <SectionHeading
            eyebrow="Where To Find Us"
            title="Our Locations"
            description="ISKCON Austin currently operates across three locations — please make sure you're headed to the right one."
          />
          <div className="mt-10 grid sm:grid-cols-3 gap-6">
            {locations.map((l) => (
              <Card key={l.key} className="p-6">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-gold border border-cream-deep">
                  <MapPinIcon className="w-5 h-5" />
                </span>
                <h3 className="font-display text-lg font-semibold text-navy mt-4">
                  {l.label}
                </h3>
                <p className="mt-2 text-sm font-medium text-navy">{l.address}</p>
                <p className="mt-2 text-sm text-ink-soft leading-relaxed">
                  {l.description}
                </p>
                <a
                  href={l.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-gold hover:text-gold-light"
                >
                  Get Directions →
                </a>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 sm:px-6 py-16 sm:py-20 grid lg:grid-cols-2 gap-12">
        <div>
          <SectionHeading eyebrow="Reach the Temple" title="Contact Details" />
          <dl className="mt-8 space-y-6">
            {details.map((d) => (
              <div key={d.label}>
                <dt className="text-xs font-semibold uppercase tracking-wide text-gold">
                  {d.label}
                </dt>
                <dd className="mt-1 text-lg text-navy font-medium">
                  {d.href ? (
                    <a href={d.href} className="hover:text-gold transition-colors">
                      {d.value}
                    </a>
                  ) : (
                    d.value
                  )}
                </dd>
              </div>
            ))}
          </dl>
          <div className="mt-10">
            <ArtPanel icon={MapPinIcon} caption="Map & Directions" tone="cream" ratio="aspect-[4/3]" />
          </div>
        </div>

        <div>
          <SectionHeading eyebrow="Send a Message" title="Get in Touch" />
          <form className="mt-8 space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <input
                placeholder="Your name"
                className="rounded-xl border border-cream-deep px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gold"
              />
              <input
                placeholder="Email address"
                type="email"
                className="rounded-xl border border-cream-deep px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gold"
              />
            </div>
            <input
              placeholder="Subject"
              className="w-full rounded-xl border border-cream-deep px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gold"
            />
            <textarea
              placeholder="Your message"
              rows={5}
              className="w-full rounded-xl border border-cream-deep px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gold"
            />
            <button
              type="submit"
              className="rounded-full bg-gold px-6 py-3 text-sm font-semibold text-white hover:bg-gold-light transition-colors"
            >
              Send Message
            </button>
            <p className="text-[11px] text-ink-soft/60">
              TODO: wire this form to an email service or backend endpoint.
            </p>
          </form>
        </div>
      </section>
    </div>
  );
}
