// Every fact here comes from @mightbevivek on Instagram, his YouTube channels, or the press pieces
// linked in research.md. Anything still unconfirmed is written as a [bracketed placeholder].

export const IG = "https://www.instagram.com/mightbevivek/";
export const DM = "https://ig.me/m/mightbevivek";
export const YT = "https://www.youtube.com/@mightbevivekyt";
export const TICKETS = "https://in.bookmyshow.com/events/sanity-in-diversity-ft-vivek-muralidharan/ET00477805";
export const GOAT = "https://www.youtube.com/watch?v=zmztR8MvN14";
export const CLAUDAURA_URL = "https://www.claudaura.ca";

export function siteUrl() {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL;
  if (explicit) return explicit.replace(/\/$/, "");
  const prod = process.env.VERCEL_ENV === "production" ? process.env.VERCEL_PROJECT_PRODUCTION_URL : undefined;
  const host = prod || process.env.VERCEL_BRANCH_URL || process.env.VERCEL_URL;
  return host ? `https://${host}` : "http://localhost:3000";
}

export const seo = {
  title: "Vivek Muralidharan | Stand-up comedian, Sanity in Diversity on tour",
  description:
    "Vivek Muralidharan, political stand-up from Hyderabad. Sanity in Diversity tickets, the GOAT special, life advice (questions only) and corporate enquiries.",
};

export const ticker = [
  "Breaking: Ok bye friends",
  "Sanity in Diversity: Hyderabad, 22 Nov",
  "Chennai, 29 Nov",
  "Bengaluru, 5 Dec",
  "GOAT, the full special, is free on YouTube",
  "Life advice. Questions only.",
  "Corporate enquiries: ask for Namit",
];

export type Show = { date: string; city: string; detail: string; href?: string; cta?: string; joke?: boolean };
export const shows: Show[] = [
  { date: "4 to 15 Nov", city: "Jupiter", detail: "As printed on the official poster. Travel desk has questions.", joke: true },
  { date: "Sun 22 Nov", city: "Hyderabad", detail: "The Comedy Theatre, 4:00 PM", href: TICKETS, cta: "Tickets" },
  { date: "Sun 29 Nov", city: "Chennai", detail: "Ticket link posted on Instagram", href: IG, cta: "Ticket link" },
  { date: "Sat 5 Dec", city: "Bengaluru", detail: "Ticket link posted on Instagram", href: IG, cta: "Ticket link" },
];

export const specials = {
  goat: {
    id: "zmztR8MvN14",
    title: "GOAT",
    year: "2026",
    question: "Are humans under pressure to be better than animals?",
    blurb:
      "Social commentary woven through law, nature, religion, politics, atheism, marriage and animal sacrifice. The full special, free to watch.",
    credits: "Written and performed by Vivek Muralidharan. Directed by Rakesh UP. Produced by Namit Jain. Recorded at Bangalore International Centre.",
    image: "/images/yt-goat.jpg",
  },
  indiaJuice: {
    href: "https://www.youtube.com/watch?v=rxQr_-koG2g",
    title: "India Juice",
    year: "2021",
    blurb: "The 2021 political special. Researched, issue based, and still free on YouTube.",
    image: "/images/yt-india-juice.jpg",
  },
};

export const clips = [
  { title: "Atheist", href: "https://www.youtube.com/watch?v=ICUi5fLsrc8", image: "/images/yt-atheist.jpg" },
  { title: "Nithyananda", href: "https://www.youtube.com/watch?v=mRCk3oqEBQI", image: "/images/yt-nithyananda.jpg" },
  { title: "The Ritual", href: "https://www.youtube.com/watch?v=t7pQBdBOjds", image: "/images/yt-ritual.jpg" },
  { title: "Paranormal Activity", href: "https://www.youtube.com/watch?v=DaM8l31mX58", image: "/images/yt-paranormal.jpg" },
];

// Questions exactly as they appear on his "Life Advice Questions Only" reels.
export const letters = [
  { q: "Jailer 2 review", href: "https://www.instagram.com/reel/Degs_IiqPG8/", image: "/images/advice-jailer.jpg" },
  { q: "Did you like KCR in Paradise?", href: "https://www.instagram.com/reel/DdrQ-xQPUeF/", image: "/images/advice-kcr.jpg" },
  { q: "Rahul Gandhi ate chicken roll on tuesday", href: "https://www.instagram.com/reel/DeOlFaiPn6g/", image: "/images/advice-chicken-roll.jpg" },
  { q: "Where would u support in upcoming elections of ap??", href: "https://www.instagram.com/reel/DfHJuVHKP5l/", image: "/images/advice-ap-elections.jpg" },
];

// Official Instagram embeds (reels play in place).
export const embeds = [
  "https://www.instagram.com/reel/Degs_IiqPG8/",
  "https://www.instagram.com/reel/DeOlFaiPn6g/",
  "https://www.instagram.com/reel/DeyYDvwv_UK/",
  "https://www.instagram.com/reel/DdrQ-xQPUeF/",
];

export const quotes = [
  {
    text: "Unity in diversity, we can get later. But sanity in diversity is something that is much more needed right now.",
    source: "Indulge Express, January 2026",
    href: "https://www.indulgexpress.com/culture/2026/Jan/02/vivek-muralidharans-show-in-hyderabad-sanity-in-diversity-tackles-politics-with-humour",
  },
  {
    text: "Half the jokes are already written by what is going on.",
    source: "Indulge Express, January 2026",
    href: "https://www.indulgexpress.com/culture/2026/Jan/02/vivek-muralidharans-show-in-hyderabad-sanity-in-diversity-tackles-politics-with-humour",
  },
  {
    text: "Dude, you didn't have to bring Thomas Alva Edison into this and that too in front of the other comics.",
    source: "The New Indian Express, May 2023, on his worst early set",
    href: "https://www.newindianexpress.com/cities/bengaluru/2023/May/23/at-the-end-its-all-laughs-that-matter-2577589.html",
  },
];

export const numbers = [
  { n: "386K", label: "following along on Instagram", note: "Nov 2026" },
  { n: "39K", label: "subscribers on YouTube", note: "Nov 2026" },
  { n: "11", label: "years in stand-up", note: "as of Jan 2026" },
  { n: "2", label: "full specials free on YouTube", note: "India Juice, GOAT" },
];

export const enquiries = [
  { k: "Corporate enquiries", v: "Namit, +91 97385 77724", href: "tel:+919738577724" },
  { k: "Fan mail, roasts, life advice", v: "DM @mightbevivek", href: DM },
  { k: "Tickets", v: "Sanity in Diversity on BookMyShow", href: TICKETS },
  { k: "Watch", v: "YouTube @mightbevivekyt", href: YT },
  { k: "Daily dispatches", v: "Instagram @mightbevivek", href: IG },
  { k: "Press and festivals", v: "[Press email to confirm]" },
];

// Build guard: no two hyphens in a row anywhere in the copy above.
const all = JSON.stringify({ seo, ticker, shows, specials, clips, letters, quotes, numbers, enquiries });
if (all.includes("--")) throw new Error("Double hyphen found in lib/data.ts copy");
