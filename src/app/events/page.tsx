import type { Metadata } from "next";
import { Button, PageHero, SectionHeading } from "@/components/ui";
import { OrnamentDivider } from "@/components/ornaments";
import EventsList from "@/components/EventsList";

export const metadata: Metadata = {
  title: "Events Calendar",
  description:
    "Festivals, Ekadasi fasting days, classes, and community events at ISKCON Austin — filter by category and never miss a celebration.",
};

export default function EventsPage() {
  return (
    <div>
      <PageHero
        eyebrow="Mark Your Calendar"
        title="Festivals & Events"
        description="From grand festivals to weekly classes and Ekadasi fasting days — here's what's happening at ISKCON Austin."
      />

      <section className="mx-auto max-w-6xl px-4 sm:px-6 py-16 sm:py-20">
        <SectionHeading
          eyebrow="Filter by Category"
          title="Upcoming at ISKCON Austin"
        />
        <div className="mt-8">
          <EventsList />
        </div>
      </section>

      <section className="bg-cream">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 py-16 text-center">
          <OrnamentDivider center className="mx-auto" />
          <h2 className="font-display text-3xl font-semibold text-navy">
            Hosting or Planning Around a Festival?
          </h2>
          <p className="mt-4 text-ink-soft max-w-xl mx-auto">
            Contact us for group visits, prasadam sponsorship, or to get
            involved in organizing an upcoming celebration.
          </p>
          <Button href="/contact" variant="secondary" className="mt-6">
            Contact the Temple
          </Button>
        </div>
      </section>
    </div>
  );
}
