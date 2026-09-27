export const SITE = {
  name: "KAIRON",
  domain: "thekairon.online",
  url: "https://thekairon.online",
  email: "hello@thekairon.online",
  tagline: "Growth, by design.",
  description:
    "KAIRON is a growth and performance marketing agency. We build the systems ambitious brands use to acquire customers, raise conversion, and scale revenue — paid acquisition, creative, and CRO working as one loop.",
  founders: ["Samiul", "Munthakim"],
} as const;

export const NAV_LINKS = [
  { label: "Approach", href: "/approach" },
  { label: "Capabilities", href: "/capabilities" },
  { label: "Client Wins", href: "/wins" },
  { label: "Studio", href: "/studio" },
] as const;

export const TICKER_ITEMS = [
  "Meta Ads",
  "Paid Acquisition",
  "Creative Strategy",
  "CRO",
  "Funnels",
  "Media Buying",
  "Experimentation",
  "Positioning",
  "Lifecycle",
  "Retention",
] as const;

export const SYSTEM_WORDS = [
  "Strategy",
  "Acquisition",
  "Creative",
  "Conversion",
  "Optimization",
] as const;

export type Capability = {
  index: string;
  name: string;
  tagline: string;
  body: string;
  chips: readonly string[];
};

export const CAPABILITIES: readonly Capability[] = [
  {
    index: "01",
    name: "Performance Marketing",
    tagline: "Paid acquisition, engineered.",
    body: "Meta ads built as a system — account architecture, media buying, retargeting, and a testing cadence that never stops. Spend scales only what the data proves.",
    chips: [
      "Meta Ads",
      "Media Buying",
      "Retargeting",
      "Campaign Strategy",
      "Testing & Optimization",
      "Scaling",
    ],
  },
  {
    index: "02",
    name: "Creative",
    tagline: "The variable that moves everything.",
    body: "Creative is the targeting. Ad concepts, UGC direction, video and static — built from the customer’s own language, iterated against performance, never left on autopilot.",
    chips: [
      "Ad Concepts",
      "Creative Strategy",
      "UGC",
      "Video",
      "Static",
      "Hooks & Messaging",
      "Creative Testing",
    ],
  },
  {
    index: "03",
    name: "Conversion",
    tagline: "Traffic is rented. Conversion is owned.",
    body: "Every click costs the same. CRO across landing pages, product pages, and checkout decides what each one returns. We raise the yield before we raise the spend.",
    chips: [
      "CRO",
      "Landing Pages",
      "Product Pages",
      "Funnel Optimization",
      "Checkout",
      "Offer Optimization",
    ],
  },
  {
    index: "04",
    name: "Strategy",
    tagline: "The thinking under the numbers.",
    body: "Customer and market research, positioning, and offer strategy — the upstream decisions that make every campaign after them easier and cheaper.",
    chips: [
      "Customer Research",
      "Market Research",
      "Positioning",
      "Offer Strategy",
      "Growth Strategy",
      "Experimentation",
    ],
  },
  {
    index: "05",
    name: "Retention",
    tagline: "Growth that survives the algorithm.",
    body: "Email, SMS, and lifecycle programs that deepen LTV — so scaling paid acquisition gets easier every month instead of more expensive.",
    chips: ["Email", "SMS", "Lifecycle Marketing", "Retargeting"],
  },
];

export type LoopStep = {
  index: string;
  title: string;
  body: string;
  meta: string;
};

export const LOOP_STEPS: readonly LoopStep[] = [
  {
    index: "01",
    title: "Signal",
    body: "Start with the customer, not the channel. Reviews, calls, comments, competitor gaps — mined for the language buyers actually use and the leverage nobody else has noticed.",
    meta: "Research · Voice of customer · Offer",
  },
  {
    index: "02",
    title: "System",
    body: "Turn signal into infrastructure: positioning, campaign architecture, creative angles, landing flows, and a test roadmap with a fixed cadence.",
    meta: "Positioning · Architecture · Roadmap",
  },
  {
    index: "03",
    title: "Scale",
    body: "Spend follows proof. Budget flows to the ads and pages the data confirms — never to opinion, never to the loudest idea in the room.",
    meta: "Media buying · Winners · Iteration",
  },
  {
    index: "04",
    title: "Study",
    body: "Every result is research. Winners get compounded, losers get studied. Then the loop turns again — sharper than before.",
    meta: "Analysis · Compounding · Next brief",
  },
];

export const ENGAGEMENT_STEPS = [
  {
    index: "01",
    title: "Audit",
    body: "A teardown of your funnel, creative, and spend. You see the leaks before a retainer is ever discussed.",
  },
  {
    index: "02",
    title: "Blueprint",
    body: "A 90-day growth plan: the offer, the creative angles, the test roadmap, the targets. Signed, not vague.",
  },
  {
    index: "03",
    title: "Build",
    body: "Campaigns live, creative shipping, landing pages converting. The system starts turning — visibly.",
  },
  {
    index: "04",
    title: "Scale",
    body: "Winners get budget, losers become lessons. Compounding takes over and the cost of growth falls.",
  },
] as const;

export const PRINCIPLES = [
  {
    index: "01",
    title: "Positioning before media.",
    body: "Great creative can’t save an offer nobody wants. We fix the message before we scale the spend — never the other way around.",
  },
  {
    index: "02",
    title: "Creative is the algorithm.",
    body: "On paid social, the audience is everyone. The creative decides who buys. So we test it like the budget depends on it — because it does.",
  },
  {
    index: "03",
    title: "Small bets, fast proof.",
    body: "We don’t bet a quarter on a hunch. We buy information with small, cheap tests, then invest in what the market confirms.",
  },
  {
    index: "04",
    title: "Efficiency before volume.",
    body: "Anyone can spend more. We scale acquisition only when unit economics say yes — and stop when they say no.",
  },
  {
    index: "05",
    title: "Retention closes the loop.",
    body: "Acquisition fills the bucket. Retention plugs the holes. Run both, or the spend is a tax on forgetting.",
  },
] as const;

/**
 * Client wins — EDIT ME.
 * Add one object per client. `live` shows the row on the site; keep false
 * until name, result, and url are final. Only real, verifiable entries.
 */
export type ClientWin = {
  client: string;
  industry: string;
  url: string;
  result: string;
  detail: string;
  services: readonly string[];
  year: string;
  live: boolean;
};

export const CLIENT_WINS: ClientWin[] = [
  {
    client: "Client name here",
    industry: "Industry",
    url: "https://clientwebsite.com",
    result: "Headline result, e.g. 3.2x ROAS in 90 days",
    detail:
      "One or two sentences: where the brand was stuck, what we changed, and what moved. Keep it factual — no invented numbers.",
    services: ["Meta Ads", "Creative", "CRO"],
    year: "2025",
    live: false,
  },
];
