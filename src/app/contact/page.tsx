import type { Metadata } from "next";
import { ArtPanel, PageHero, SectionHeading } from "@/components/ui";
import { MapPinIcon } from "@/components/devotional-art";
import { site } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with ISKCON Austin — phone, email, address, and directions to the temple.",
};

const details = [
  { label: "Address", value: site.address },
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
