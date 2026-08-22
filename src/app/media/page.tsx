import type { Metadata } from "next";
import { ArtPanel, Button, PageHero, SectionHeading } from "@/components/ui";
import {
  DiyaIcon,
  JapaMalaIcon,
  KirtanIcon,
  LotusBloomIcon,
  MandalaIcon,
  PeacockFeatherIcon,
  PrasadamIcon,
  ScriptureIcon,
  TempleSilhouetteIcon,
  TulsiIcon,
} from "@/components/devotional-art";

export const metadata: Metadata = {
  title: "Media",
  description:
    "Watch ISKCON Austin's livestream, browse our YouTube archive of classes and kirtans, and view photos from temple life and festivals.",
};

const archive = [
  { title: "Sunday Class — Bhagavad-gita 2.13", icon: ScriptureIcon },
  { title: "Janmashtami Kirtan Highlights", icon: KirtanIcon },
  { title: "New Devotee Orientation", icon: JapaMalaIcon },
  { title: "Ratha Yatra Recap", icon: PeacockFeatherIcon },
  { title: "Wednesday Study Circle", icon: MandalaIcon },
  { title: "Temple Groundbreaking Ceremony", icon: TempleSilhouetteIcon },
] as const;

const gallery = [
  { icon: LotusBloomIcon, caption: "Deity Darshan", tone: "cream" as const },
  { icon: DiyaIcon, caption: "Evening Aarti", tone: "navy" as const },
  { icon: KirtanIcon, caption: "Sunday Kirtan", tone: "maroon" as const },
  { icon: PrasadamIcon, caption: "Sunday Feast", tone: "cream" as const },
  { icon: PeacockFeatherIcon, caption: "Janmashtami", tone: "navy" as const },
  { icon: TulsiIcon, caption: "Tulsi Devi", tone: "cream" as const },
  { icon: TempleSilhouetteIcon, caption: "Temple Grounds", tone: "maroon" as const },
  { icon: JapaMalaIcon, caption: "Japa & Meditation", tone: "navy" as const },
];

export default function MediaPage() {
  return (
    <div>
      <PageHero
        eyebrow="Watch & Listen"
        title="Media"
        description="Can't make it in person? Join us online for live programs, or catch up with our video archive and photo gallery."
      />

      {/* Livestream */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 py-16 sm:py-20">
        <SectionHeading eyebrow="Join Live" title="Livestream" />
        <div className="mt-8 relative aspect-video w-full rounded-2xl bg-gradient-to-br from-navy to-navy-dark overflow-hidden flex flex-col items-center justify-center text-white gap-4">
          <LotusBloomIcon className="absolute -right-10 -bottom-10 w-56 h-56 text-white/5" />
          <span className="flex h-16 w-16 items-center justify-center rounded-full bg-gold text-2xl relative">
            ▶
          </span>
          <p className="text-sm text-white/70 relative">
            Live during Sunday programs — TODO: embed YouTube / Facebook Live
            player here.
          </p>
        </div>
        <div className="mt-6 flex flex-wrap gap-3">
          <Button href="https://youtube.com" variant="secondary">
            Subscribe on YouTube
          </Button>
          <Button href="https://facebook.com" variant="primary">
            Follow on Facebook
          </Button>
        </div>
      </section>

      {/* Archive */}
      <section className="bg-cream">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16 sm:py-20">
          <SectionHeading eyebrow="Watch Again" title="Video Archive" />
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {archive.map((item) => (
              <div key={item.title}>
                <div className="relative aspect-video rounded-xl bg-gradient-to-br from-navy to-navy-dark overflow-hidden flex items-center justify-center">
                  <item.icon className="w-14 h-14 text-gold-light" />
                  <span className="absolute bottom-2 right-2 flex h-8 w-8 items-center justify-center rounded-full bg-gold text-white text-xs">
                    ▶
                  </span>
                </div>
                <p className="mt-3 text-sm font-semibold text-navy">
                  {item.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 py-16 sm:py-20">
        <SectionHeading
          eyebrow="Temple Life"
          title="Photo Gallery"
          description="Placeholder devotional art shown below — swap each tile for real temple photography as it's collected."
        />
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4">
          {gallery.map((g, i) => (
            <ArtPanel
              key={i}
              icon={g.icon}
              caption={g.caption}
              tone={g.tone}
              ratio="aspect-square"
              iconClassName="w-14 h-14"
            />
          ))}
        </div>
      </section>
    </div>
  );
}
