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
  hours: "Sundays, 11:00 AM – 1:30 PM", // TODO: confirm single source of truth for hours
  socials: {
    facebook: "https://facebook.com/iskconaustin",
    instagram: "https://instagram.com/iskconaustin",
    youtube: "https://youtube.com/@iskconaustin",
  },
};

export const nav = [
  { href: "/", label: "Home" },
  { href: "/visit", label: "Visit" },
  { href: "/events", label: "Events" },
  { href: "/get-involved", label: "Get Involved" },
  { href: "/about", label: "About" },
  { href: "/giving", label: "Giving" },
  { href: "/media", label: "Media" },
  { href: "/contact", label: "Contact" },
];

export const weeklySchedule = [
  {
    day: "Every Day",
    title: "Mangala Aarti & Japa",
    time: "4:30 AM – 6:30 AM",
    description: "Morning worship and quiet meditation on the holy names.",
  },
  {
    day: "Every Day",
    title: "Evening Aarti",
    time: "7:00 PM – 7:30 PM",
    description: "Evening offering of lamps, incense, and kirtan.",
  },
  {
    day: "Sunday",
    title: "Kirtan",
    time: "11:00 AM – 12:00 PM",
    description: "Congregational chanting open to all — no experience needed.",
  },
  {
    day: "Sunday",
    title: "Class & Discussion",
    time: "12:00 PM – 1:00 PM",
    description: "A talk on the Bhagavad-gita followed by open discussion.",
  },
  {
    day: "Sunday",
    title: "Sunday Feast",
    time: "1:00 PM – 1:30 PM",
    description: "Free vegetarian feast, offered to Krishna and shared with everyone.",
  },
  {
    day: "Wednesday",
    title: "Bhagavad-gita Study Circle",
    time: "7:30 PM – 8:30 PM",
    description: "In-depth weekly study group for all levels, online and in person.",
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
