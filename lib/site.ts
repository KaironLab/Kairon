export const SITE = {
  name: "KAIRON",
  domain: "thekairon.online",
  url: "https://thekairon.online",
  email: "thekaironlab@gmail.com",
  /** WhatsApp deep link — number in international format, no spaces/dashes. */
  whatsapp: "https://wa.me/8801759556138",
  tagline: "Growth, by design.",
  description:
    "KAIRON is a growth and performance marketing agency. We build the systems ambitious brands use to acquire customers, raise conversion, and scale revenue — paid acquisition, creative, and CRO working as one loop.",
  founders: ["Samiul", "Munthakim"],
} as const;

/**
 * Contact links. The Gmail compose URL opens a pre-addressed compose in
 * the normal Gmail interface (no fs=1 — that renders a bare full-screen
 * compose). Body carries the "first email useful" prompts.
 */
const EMAIL_SUBJECT = "Growth conversation";
const EMAIL_BODY =
  "Store or site URL: \nMonthly ad spend range: \nWhat growth is currently stuck on: \n\n";
export const EMAIL_GMAIL_COMPOSE = `https://mail.google.com/mail/?view=cm&to=${SITE.email}&su=${encodeURIComponent(EMAIL_SUBJECT)}&body=${encodeURIComponent(EMAIL_BODY)}`;

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

export const CLIENT_WINS: ClientWin[] = [];

/* ------------------------------------------------------------------ */
/* Case studies — /wins                                                */
/* ------------------------------------------------------------------ */

/**
 * A scale indicator is an observed, on-site signal (traffic, ad volume,
 * market, catalog size) — NOT a guaranteed result and NOT agency-attributed
 * revenue. Never invent ROAS, revenue, or conversion numbers here.
 */
export type CaseStudyMetric = {
  /** Shown big; may include a suffix like "K+" or "%". */
  value: string;
  /** Numeric part used by the count-up animation ("231", "93", ...). "" = no animation. */
  count: string;
  label: string;
};

export type CaseStudyStep = {
  title: string;
  body: string;
};

export type CaseStudy = {
  index: string;
  brand: string;
  product: string;
  url: string;
  category: string;
  headline: string;
  description: string;
  metrics: readonly CaseStudyMetric[];
  steps: readonly CaseStudyStep[];
  insight: string;
  /** Wordmark rendered in the case-study panel. */
  wordmark: string;
  /** Two-tone panel palette (tailwind-safe hex). */
  panel: { bg: string; ink: string; sub: string };
};

export const CASE_STUDIES: CaseStudy[] = [
  {
    index: "01",
    brand: "AMUA",
    product: "AMUA VitalDrops™",
    url: "https://shopamua.com/products/amua-vitaldrops",
    category: "DTC / Women's Wellness / Ecommerce",
    headline: "Turning a DTC Wellness Product Into a Scalable Acquisition Engine",
    description:
      "AMUA came in with a strong product but needed a growth system capable of turning creative testing and paid acquisition into predictable ecommerce scale.",
    metrics: [
      { value: "231K+", count: "231", label: "Monthly Visits" },
      { value: "207", count: "207", label: "Active Ads" },
      { value: "US", count: "", label: "Primary Market" },
      { value: "Growth", count: "", label: "Paid Acquisition + CRO" },
    ],
    steps: [
      {
        title: "Positioning",
        body: "Refined the offer, messaging, and customer-facing value proposition around the strongest product benefits.",
      },
      {
        title: "Creative Velocity",
        body: "Built a continuous testing system for hooks, angles, UGC concepts, product demonstrations, and direct-response creatives.",
      },
      {
        title: "Paid Acquisition",
        body: "Structured campaigns around creative testing, audience signals, retargeting, and scalable acquisition.",
      },
      {
        title: "Conversion Architecture",
        body: "Improved the product page experience, offer structure, trust elements, bundles, social proof, and CTA hierarchy.",
      },
    ],
    insight: "Growth came from the system — not a single winning ad.",
    wordmark: "amua",
    panel: { bg: "#f5d43a", ink: "#1a1405", sub: "#4a3d0d" },
  },
  {
    index: "02",
    brand: "NexDrive",
    product: "NexDrive™ AFM/DFM Disabler",
    url: "https://mynexdrive.com/",
    category: "Automotive / DTC Ecommerce",
    headline: "Building a High-Intent Automotive Funnel Around a Technical Product",
    description:
      "NexDrive operates in a highly specific automotive category where customers need clarity and confidence before purchasing. The growth system focused on communicating the product simply while capturing high-intent demand.",
    metrics: [
      { value: "38K+", count: "38", label: "Monthly Visits" },
      { value: "371", count: "371", label: "Active Ads" },
      { value: "93%+", count: "93", label: "US Traffic" },
      { value: "2", count: "", label: "Core Products" },
    ],
    steps: [
      {
        title: "Product Education",
        body: "Turned a technical automotive product into simple, benefit-driven messaging.",
      },
      {
        title: "Creative Testing",
        body: "Tested product demonstrations, pain-point creatives, technical explanations, and direct-response concepts.",
      },
      {
        title: "Landing Page Optimization",
        body: "Created a clearer path from product discovery to purchase.",
      },
      {
        title: "Paid Acquisition",
        body: "Focused campaigns around high-intent automotive audiences and scalable creative variations.",
      },
    ],
    insight:
      "Complex products sell better when the customer understands the outcome in seconds.",
    wordmark: "NexDrive",
    panel: { bg: "#17282e", ink: "#f2f1ec", sub: "#7d929a" },
  },
  {
    index: "03",
    brand: "Saybeam",
    product: "Saybeam Sculpt Brief",
    url: "https://saybeam.com/",
    category: "Women's Apparel / Shapewear / DTC",
    headline: "Turning a Shapewear Product Into a High-Volume Direct-Response Brand",
    description:
      "Saybeam’s opportunity was not simply selling shapewear. It was creating a clear transformation story that could be communicated repeatedly through paid social.",
    metrics: [
      { value: "47K+", count: "47", label: "Monthly Visits" },
      { value: "961", count: "961", label: "Active Ads" },
      { value: "10,000+", count: "10000", label: "Customer Reviews" },
      { value: "US", count: "", label: "Primary Market" },
    ],
    steps: [
      {
        title: "Avatar Research",
        body: "Focused messaging around the specific customer problems the product solves.",
      },
      {
        title: "Creative System",
        body: "Developed multiple creative angles around transformation, comfort, fit, social proof, product demonstrations, and customer stories.",
      },
      {
        title: "Offer Architecture",
        body: "Built stronger bundle economics and offer presentation to increase average order value.",
      },
      {
        title: "Conversion Optimization",
        body: "Strengthened trust, reviews, guarantees, product education, and purchase-path clarity.",
      },
    ],
    insight:
      "The product became easier to understand — and easier to buy.",
    wordmark: "Saybeam",
    panel: { bg: "#f6e7e0", ink: "#3f1f2b", sub: "#96606f" },
  },
  {
    index: "04",
    brand: "NIVA",
    product: "Le Polo Marceau",
    url: "https://mynivashop.com/",
    category: "Fashion / DTC Ecommerce",
    headline: "Scaling a Fashion Product Through Positioning, Creative and Offer Strategy",
    description:
      "NIVA competes in a crowded fashion market where the product itself is only part of the equation. The growth system focused on positioning, product presentation, creative volume, and offer structure.",
    metrics: [
      { value: "31K+", count: "31", label: "Monthly Visits" },
      { value: "363", count: "363", label: "Active Ads" },
      { value: "13", count: "13", label: "Products" },
      { value: "FR", count: "", label: "Primary Market" },
    ],
    steps: [
      {
        title: "Brand Positioning",
        body: "Created a clearer premium identity around the product.",
      },
      {
        title: "Creative Testing",
        body: "Tested different product angles, lifestyle imagery, benefits, fit messaging, and customer objections.",
      },
      {
        title: "Offer Strategy",
        body: "Improved promotional architecture and bundle presentation.",
      },
      {
        title: "Ecommerce Experience",
        body: "Optimized product discovery, sizing, product education, social proof, and checkout intent.",
      },
    ],
    insight: "Strong positioning turns a commodity into a brand.",
    wordmark: "N I V A",
    panel: { bg: "#efeadf", ink: "#232019", sub: "#8a8471" },
  },
  {
    index: "05",
    brand: "Mireva",
    product: "Mireva Fit™ Pelvic & Thigh Trainer",
    url: "https://trymireva.com/",
    category: "Women's Fitness / Wellness / DTC",
    headline: "Building a Direct-Response Funnel Around a Single Hero Product",
    description:
      "Mireva demonstrates how a focused single-product ecommerce model can be built around one hero product, one clear customer problem, and a strong direct-response funnel.",
    metrics: [
      { value: "24K+", count: "24", label: "Monthly Visits" },
      { value: "129", count: "129", label: "Active Ads" },
      { value: "34,000+", count: "34000", label: "Customers / Users Claimed On-Site" },
      { value: "Single", count: "", label: "Hero Product Strategy" },
    ],
    steps: [
      {
        title: "Product Positioning",
        body: "Positioned the trainer around specific use cases and customer outcomes.",
      },
      {
        title: "Creative Testing",
        body: "Built multiple creative concepts around product demonstrations, education, lifestyle, and customer pain points.",
      },
      {
        title: "Offer Architecture",
        body: "Introduced bundles, discounts, bonuses, and urgency to increase purchase intent.",
      },
      {
        title: "CRO",
        body: "Optimized the product page around social proof, benefits, objections, guarantees, and stronger CTAs.",
      },
    ],
    insight: "One product. One problem. One focused growth engine.",
    wordmark: "MIREVA",
    panel: { bg: "#f7d7de", ink: "#4a1f28", sub: "#a06474" },
  },
];
