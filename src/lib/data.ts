// ---------------------------------------------------------------------------
// Central content file for the ISKCON Austin website.
// Everything marked TODO is placeholder copy — swap in real temple content
// before launch. Keeping it all here means no page code needs to change
// when real content arrives.
// ---------------------------------------------------------------------------

export const site = {
  name: "ISKCON Austin",
  legalName: "International Society for Krishna Consciousness of Austin",
  tagline: "A Home for Krishna Consciousness in Central Texas",
  phone: "+1-512-835-2121", // TODO: confirm current number
  email: "info@iskconaustin.com", // TODO: confirm current inbox
  address: "12012 North IH 35, Austin, TX 78753", // TODO: confirm current/new address
  hours: "Sundays, 11:00 AM – 12:30 PM", // TODO: confirm single source of truth for hours
  socials: {
    facebook: "https://facebook.com/iskconaustin",
    instagram: "https://instagram.com/iskconaustin",
    youtube: "https://youtube.com/@iskconaustin",
  },
  // Direct temple contact.
  contactPerson: {
    name: "Abhay Charan Das",
    phone: "+1-512-762-6644",
  },
  map: {
    // Google Business Profile listing (cid link) provided by the client.
    placeUrl:
      "https://www.google.com/maps?cid=9067017259345413292&g_mp=CiVnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLkdldFBsYWNlEAMYASAF&hl=en&gl=IN&source=embed",
    // Embeddable iframe version of the same listing — no API key required.
    embedUrl: "https://www.google.com/maps?cid=9067017259345413292&output=embed",
    // Deep link that opens turn-by-turn directions straight away.
    directionsUrl:
      "https://www.google.com/maps/dir/?api=1&destination=12012+North+IH+35%2C+Austin%2C+TX+78753",
  },
};

export const nav = [
  { href: "/", label: "Home" },
  { href: "/visit", label: "Visit" },
  { href: "/get-involved", label: "Get Involved" },
  { href: "/about", label: "About" },
  { href: "/virtual-tour", label: "Virtual Tour" },
  { href: "/media", label: "Media" },
  { href: "/contact", label: "Contact" },
];

export const weeklySchedule = [
  {
    day: "Every Day",
    title: "Mangala Aarti & Tulasi Worship",
    time: "4:30 AM",
    description: "Morning worship and devotional offering to Srimati Tulasi Devi.",
  },
  {
    day: "Every Day",
    title: "Greeting of the Deities & Guru Puja",
    time: "6:45 AM",
    description: "The Deities' curtains open for the day, followed by worship of the spiritual master.",
  },
  {
    day: "Every Day",
    title: "Srimad Bhagavatam Class",
    time: "7:15 AM",
    description: "Daily scriptural class exploring the teachings of the Srimad Bhagavatam.",
  },
  {
    day: "Every Day",
    title: "Dhoop Aarti",
    time: "12:30 PM",
    description: "Midday offering of incense to the Deities.",
  },
  {
    day: "Every Day",
    title: "Gaura Aarti",
    time: "6:30 PM",
    description: "Evening offering of lamps, incense, and kirtan.",
  },
  {
    day: "Sunday",
    title: "Ecstatic Kirtan",
    time: "11:00 AM – 11:30 AM",
    description: "Congregational chanting and dancing open to all — no experience needed.",
  },
  {
    day: "Sunday",
    title: "Bhagavad-gita Study & Q&A",
    time: "11:40 AM – 12:15 PM",
    description: "A talk on the Bhagavad-gita followed by open questions and discussion.",
  },
  {
    day: "Sunday",
    title: "Aarti & Prasadam",
    time: "12:15 PM – 12:30 PM",
    description: "Closing aarti followed by a free vegetarian feast, offered to Krishna and shared with everyone.",
  },
  {
    day: "Wednesday",
    title: "Bhagavad-gita Study Circle",
    time: "7:30 PM – 8:30 PM",
    description: "In-depth weekly study group for all levels, online and in person.",
  },
] as const;

// Home hero carousel — one slide per key message. `image` points at a file
// the client should drop into /public/hero/ (see the image-prompt list
// handed back alongside this file); until that file exists, the slide
// falls back to a devotional gradient + icon automatically.
export const heroSlides = [
  {
    key: "temple",
    image: "/hero/slide-1-temple.jpg",
    eyebrow: "A Gift for Generations",
    title: "A Grand New Temple Is Coming to Austin",
    body: "Help us build a permanent home for Krishna consciousness in Central Texas — a worship hall, residences, and gardens for generations of devotees to come.",
    primaryCta: { label: "Donate to the New Temple", href: "/donate" },
    secondaryCta: { label: "Take the Virtual Tour", href: "/virtual-tour" },
    stat: givingProgressLabel(),
  },
  {
    key: "sunday",
    image: "/hero/slide-2-sunday.jpg",
    eyebrow: "Every Sunday",
    title: "Join Us for the Sunday Program",
    body: "Kirtan, scripture study, and a free feast — every Sunday, open to everyone.",
    primaryCta: { label: "Plan Your Visit", href: "/visit" },
    secondaryCta: { label: "Watch Online", href: "/media" },
    schedule: [
      { time: "11:00 – 11:30 AM", title: "Ecstatic Kirtan" },
      { time: "11:40 AM – 12:15 PM", title: "Bhagavad-gita Study & Q&A" },
      { time: "12:15 – 12:30 PM", title: "Aarti Followed by Prasadam" },
    ],
  },
  {
    key: "weekly",
    image: "/hero/slide-3-weekly.jpg",
    eyebrow: "Every Day",
    title: "Temple Life, All Week Long",
    body: "Morning and evening aarti, daily scripture class, and Sunday celebrations — there's always a way to connect.",
    primaryCta: { label: "View Full Schedule", href: "/visit" },
    secondaryCta: { label: "See Events", href: "/get-involved#events" },
    schedule: [
      { time: "4:30 AM", title: "Mangala Aarti & Tulasi Worship — Daily" },
      { time: "7:15 AM", title: "Srimad Bhagavatam Class — Daily" },
      { time: "6:30 PM", title: "Gaura Aarti — Daily" },
    ],
  },
] as const;

function givingProgressLabel() {
  return "$3M raised of $5M goal";
}

// Virtual tour — architectural renderings of the new temple, grouped by
// Exterior / Interior. Images live in /public/temple-renderings/.
export const virtualTourImages = [
  {
    key: "exterior-01",
    group: "Exterior" as const,
    src: "/temple-renderings/exterior-01-entrance-courtyard.jpg",
    title: "Entrance Courtyard",
    caption: "Approaching the new temple across the entrance courtyard.",
  },
  {
    key: "exterior-02",
    group: "Exterior" as const,
    src: "/temple-renderings/exterior-02-facade.jpg",
    title: "Temple Facade",
    caption: "The main facade, viewed from the parking and arrival area.",
  },
  {
    key: "exterior-03",
    group: "Exterior" as const,
    src: "/temple-renderings/exterior-03-covered-porch.jpg",
    title: "Covered Porch",
    caption: "A shaded, covered porch along the side of the temple.",
  },
  {
    key: "exterior-04",
    group: "Exterior" as const,
    src: "/temple-renderings/exterior-04-front-entrance-pool.jpg",
    title: "Front Entrance & Reflecting Pool",
    caption: "The front entrance framed by a reflecting pool.",
  },
  {
    key: "exterior-05",
    group: "Exterior" as const,
    src: "/temple-renderings/exterior-05-corner-view.jpg",
    title: "Corner View",
    caption: "An angled exterior view showing the building's full scale.",
  },
  {
    key: "interior-01",
    group: "Interior" as const,
    src: "/temple-renderings/interior-01-altar-hall.jpg",
    title: "Grand Hall & Altar",
    caption: "The grand worship hall, leading toward the Radha-Krishna altar.",
  },
  {
    key: "interior-02",
    group: "Interior" as const,
    src: "/temple-renderings/interior-02-great-hall.jpg",
    title: "Great Hall",
    caption: "A wide view of the great hall, with acharya portraits and lila paintings along the walls.",
  },
  {
    key: "interior-03",
    group: "Interior" as const,
    src: "/temple-renderings/interior-03-shrine-alcove.jpg",
    title: "Shrine Alcove",
    caption: "A secondary shrine alcove for personal darshan and reflection.",
  },
] as const;

export type EventCategory = "Festival" | "Ekadasi" | "Class" | "Community";

export const events: {
  title: string;
  date: string; // ISO date, TODO: replace with real dates
  category: EventCategory;
  description: string;
}[] = [
  {
    title: "Janmashtami — Appearance of Lord Krishna",
    date: "2026-09-04",
    category: "Festival",
    description: "The biggest celebration of the year: abhishek, kirtan, drama, and a midnight feast.",
  },
  {
    title: "Radhastami",
    date: "2026-09-19",
    category: "Festival",
    description: "Celebrating the appearance of Srimati Radharani with special offerings and kirtan.",
  },
  {
    title: "Ekadasi Fasting Day",
    date: "2026-09-09",
    category: "Ekadasi",
    description: "Monthly fasting observance — schedule and preparation guidance provided.",
  },
  {
    title: "Govardhan Puja",
    date: "2026-10-23",
    category: "Festival",
    description: "Annapurna offering of 108 preparations and re-enactment of Krishna lifting Govardhan Hill.",
  },
  {
    title: "New Devotee Class",
    date: "2026-09-12",
    category: "Class",
    description: "A friendly introduction to the philosophy and practice of bhakti-yoga.",
  },
  {
    title: "Prabhupada Marathon Book Distribution",
    date: "2026-10-01",
    category: "Community",
    description: "Community outreach distributing Srila Prabhupada's books across Austin.",
  },
  {
    title: "Diwali / Dipavali Celebration",
    date: "2026-11-08",
    category: "Festival",
    description: "Festival of lights with lamp offerings, kirtan, and feast.",
  },
  {
    title: "Ekadasi Fasting Day",
    date: "2026-09-24",
    category: "Ekadasi",
    description: "Monthly fasting observance — schedule and preparation guidance provided.",
  },
] as const;

// Ongoing outreach programs — recurring activities without a single fixed
// date, shown separately from the dated events calendar.
export const ongoingPrograms = [
  {
    title: "Book Distribution",
    description: "Sharing Srila Prabhupada's books with the Austin community at outreach events and public locations.",
  },
  {
    title: "Harinam Sankirtan",
    description: "Public chanting of the holy names — kirtan processions through the streets and community spaces.",
  },
  {
    title: "Home Programs",
    description: "Kirtan, class, and prasadam hosted in devotees' homes across Austin — contact us to host one.",
  },
] as const;

export const donationTiers = [
  { amount: 21, label: "Offer a garland of flowers for the Deities" },
  { amount: 51, label: "Sponsor prasadam for a Sunday Feast guest" },
  { amount: 108, label: "Support a week of temple worship and upkeep" },
  { amount: 251, label: "Sponsor a full Sunday Feast program" },
] as const;

export const givingFunds = [
  {
    key: "capital",
    title: "New Temple Capital Campaign",
    description:
      "Help build ISKCON Austin's permanent home — a 300-person worship hall, residences, and gardens for generations to come.",
    stat: "$3M raised of $5M goal", // TODO: confirm live figure or wire to a live source
  },
  {
    key: "operations",
    title: "Temple Operations & Seva",
    description:
      "Support day-to-day temple life: Deity worship, the free Sunday Feast, utilities, and outreach programs.",
    stat: "Ongoing — every gift helps",
  },
] as const;

// Core teachings, shown as a card grid on the About page.
export const coreBeliefs = [
  {
    title: "Krishna, the Supreme",
    description: "Krishna is understood as the Supreme Personality of Godhead — the source of all that exists, worshipped as a personal, loving God rather than an abstract force.",
  },
  {
    title: "Bhagavad-gita As It Is",
    description: "The Bhagavad-gita is our central scripture, studied through Srila Prabhupada's translation and commentary, Bhagavad-gita As It Is.",
  },
  {
    title: "Bhakti Yoga",
    description: "Devotional service — chanting, worship, study, and service to others — is the direct path to reconnecting with Krishna, open to absolutely everyone.",
  },
  {
    title: "Karma & Reincarnation",
    description: "The soul is eternal and passes through many bodies across lifetimes; our actions shape what comes next, and bhakti offers a way beyond the cycle entirely.",
  },
] as const;

// Global movement stats, shown on the About page.
export const iskconStats = [
  { stat: "1966", label: "Founded in New York City" },
  { stat: "800+", label: "Temples & centers worldwide" },
  { stat: "~1M", label: "Congregational members globally" },
  { stat: "60", label: "Years spreading Krishna consciousness" },
] as const;

export const leadership = [
  {
    name: "Sankarshan Das", // TODO: confirm title/spelling
    role: "Temple President",
    bio: "Sankarshan Das has served the Austin devotee community for over a decade, overseeing temple programs and the new temple capital campaign.", // TODO
  },
  {
    name: "Resident Priest", // TODO: name
    role: "Pujari / Worship Coordinator",
    bio: "Leads daily Deity worship, aartis, and festival observances at the temple.", // TODO
  },
  {
    name: "Congregational Coordinator", // TODO: name
    role: "Community & Outreach",
    bio: "Coordinates Sunday programs, new-devotee classes, and volunteer service (seva) opportunities.", // TODO
  },
] as const;

export const getInvolvedOptions = [
  {
    title: "Sunday Feast Seva",
    description: "Help cook, serve, or clean up for the free weekly community feast.",
  },
  {
    title: "Book Distribution",
    description: "Share Srila Prabhupada's books with the Austin community at outreach events.",
  },
  {
    title: "Food for Life",
    description: "Prepare and distribute free vegetarian meals to those in need around Austin.",
  },
  {
    title: "Youth Programs",
    description: "Support kirtan, drama, and educational programs for children and teens.",
  },
  {
    title: "Temple Upkeep",
    description: "Lend a hand with grounds, Deity garments, altar decoration, and facilities.",
  },
  {
    title: "Capital Campaign Volunteers",
    description: "Help with fundraising events, outreach, and communications for the new temple.",
  },
] as const;

// "Krishna Consciousness at Home" — a rebuild of the legacy site's
// /kc-at-home/ page with clearer structure and proper headings.
export const kcAtHome = {
  mantra: [
    "Hare Krishna, Hare Krishna",
    "Krishna Krishna, Hare Hare",
    "Hare Rama, Hare Rama",
    "Rama Rama, Hare Hare",
  ],
  altarItems: [
    "A picture of Srila Prabhupada",
    "A picture of Lord Chaitanya and associates",
    "A picture of Sri Sri Radha-Krishna",
    "An altar cloth",
    "Water cups and an offering plate",
    "A bell, incense, candles, and fresh flowers",
  ],
  offerableFoods: ["Milk & dairy products", "Vegetables", "Fruits & nuts", "Grains"],
  nonOfferableFoods: ["Meat, fish & eggs", "Garlic & onions", "Caffeinated beverages"],
  regulativePrinciples: [
    {
      title: "No Meat, Fish, or Eggs",
      description: "A diet free of violence toward other living beings, centered on foods offered to Krishna.",
    },
    {
      title: "No Gambling",
      description: "Gambling breeds anxiety, greed, and envy — the opposite of a peaceful, devotional mind.",
    },
    {
      title: "No Intoxication",
      description: "Alcohol, drugs, tobacco, and even caffeine cloud consciousness and cause forgetfulness of Krishna.",
    },
    {
      title: "No Illicit Sex",
      description: "Sexual life is restricted to marriage, for procreation, in keeping with a life of self-control.",
    },
  ],
  dailyPractices: [
    {
      title: "Chant the Holy Names",
      description: "Chant japa on 108 beads — 16 rounds daily is the standard for serious practitioners, ideally in the early morning hours.",
    },
    {
      title: "Worship at Your Altar",
      description: "Keep it clean, offer fresh water and incense daily, and remove wilted flowers promptly.",
    },
    {
      title: "Offer Your Food",
      description: "Prepare vegetarian food with devotion and offer it to Krishna before eating — it becomes prasadam, spiritualized food.",
    },
    {
      title: "Read Daily",
      description: "Set aside time each day to read Srila Prabhupada's books — available at store.krishna.com.",
    },
    {
      title: "Engage Your Work",
      description: "Offer the fruits of your profession — writing, art, or any skill — in service to Krishna rather than for self alone.",
    },
    {
      title: "Stay in Association",
      description: "Visit the temple regularly and join a home study group to stay connected to the devotee community.",
    },
  ],
} as const;

export const faqs = [
  {
    q: "What should I wear?",
    a: "Modest, comfortable clothing is welcome — there's no strict dress code for visitors. Many devotees wear traditional Indian clothing, but it isn't required.",
  },
  {
    q: "Is there anything to eat?",
    a: "Yes — a free vegetarian feast (prasadam) is offered every Sunday after the program, open to everyone regardless of background.",
  },
  {
    q: "Do I need to know anything about Krishna consciousness beforehand?",
    a: "Not at all. Newcomers are welcome at every program, and temple greeters are happy to explain what's happening as it unfolds.",
  },
  {
    q: "Is parking available?",
    a: "Yes, free on-site parking is available at the temple. TODO: confirm parking details for the new location.",
  },
  {
    q: "Can I bring my family, including children?",
    a: "Absolutely — Sunday programs are family-friendly, with activities for children and a warm, welcoming community.",
  },
];
