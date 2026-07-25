import React from "react";
import {
  Wifi,
  Tv,
  Smartphone,
  Phone,
  Check,
  Shield,
  Tag,
  Lock,
  Zap,
  Headphones,
  CheckCircle2,
  Award,
  Rocket,
  ListChecks,
  ArrowRight,
  Users,
  Clock,
  LayoutGrid,
  Sparkles,
} from "lucide-react";

// ---------------------------------------------------------------------------
// Static content
// ---------------------------------------------------------------------------

const SERVICE_CARDS = [
  {
    icon: Wifi,
    iconBg: "bg-[#E7ECFB]",
    iconColor: "text-[#3B4FE0]",
    title: "High-Speed Internet",
    items: ["Fiber Internet", "Cable Internet", "DSL Internet", "Fixed Wireless", "5G Home Internet"],
    bullet: "text-[#3B4FE0]",
    button: "Compare Internet Plans",
    buttonClass: "bg-[#3B4FE0] hover:bg-[#2f3fc4]",
  },
  {
    icon: Tv,
    iconBg: "bg-[#E1F6EA]",
    iconColor: "text-[#1FA24A]",
    title: "TV Services",
    items: ["Live TV Packages", "Sports Channels", "Entertainment", "Premium Add-ons"],
    bullet: "text-[#1FA24A]",
    button: "Compare TV Plans",
    buttonClass: "bg-[#1FA24A] hover:bg-[#188a3c]",
  },
  {
    icon: Smartphone,
    iconBg: "bg-[#F2E7FB]",
    iconColor: "text-[#8B2FD1]",
    title: "Mobile Services",
    items: ["Unlimited Plans", "Family Plans", "5G Coverage", "Bring Your Own Device"],
    bullet: "text-[#8B2FD1]",
    button: "Compare Mobile Plans",
    buttonClass: "bg-[#8B2FD1] hover:bg-[#7526b3]",
  },
  {
    icon: Phone,
    iconBg: "bg-[#FDEBD8]",
    iconColor: "text-[#E8871E]",
    title: "Home Phone",
    items: ["Reliable Calling", "Nationwide Coverage", "Voicemail", "Call Features"],
    bullet: "text-[#E8871E]",
    button: "Compare Home Phone Plans",
    buttonClass: "bg-[#E8871E] hover:bg-[#cc7412]",
  },
];

const PLANS = [
  { plan: "300 Mbps", speed: "Up to 300 Mbps", promo: "$45.00 /mo.", regular: "$65.00 /mo. after", contract: "24 Months", connection: "Cable or Fiber", equipment: "$15 /mo.", data: "Unlimited", featured: false },
  { plan: "500 Mbps", speed: "Up to 500 Mbps", promo: "$60.00 /mo.", regular: "$80.00 /mo. after", contract: "24 Months", connection: "Cable or Fiber", equipment: "$15 /mo.", data: "Unlimited", featured: false },
  { plan: "1 Gig", speed: "Up to 1,000 Mbps", promo: "$70.00 /mo.", regular: "$90.00 /mo. after", contract: "24 Months", connection: "Cable or Fiber", equipment: "$15 /mo.", data: "Unlimited", featured: true },
  { plan: "1.2 Gig", speed: "Up to 1,200 Mbps", promo: "$100.00 /mo.", regular: "$120.00 /mo. after", contract: "24 Months", connection: "Cable or Fiber", equipment: "$15 /mo.", data: "Unlimited", featured: false },
  { plan: "2 Gig", speed: "Up to 2,000 Mbps", promo: "$100.00 /mo.", regular: "$130.00 /mo. after", contract: "24 Months", connection: "Cable or Fiber", equipment: "$15 /mo.", data: "Unlimited", featured: false },
];

const HIGHLIGHT_PLANS = [
  { icon: Tag, badge: "Best for budgets", name: "300 Mbps", price: "$45.00", term: "for 24 months", speed: "Speeds up to 300 Mbps" },
  { icon: Award, badge: "Best overall", name: "1 Gig", price: "$70.00", term: "for 24 months", speed: "Speeds up to 1,000 Mbps" },
  { icon: Rocket, badge: "Best for speed", name: "2 Gig", price: "$100.00", term: "for 24 months", speed: "Speeds up to 2,000 Mbps" },
];

const TRUST_FEATURES = [
  { icon: Shield, title: "Independent Comparison", desc: "We show you multiple options so you can choose the best." },
  { icon: Tag, title: "Transparent Pricing", desc: "We display prices clearly with no hidden fees or surprises." },
  { icon: Lock, title: "Secure Information", desc: "Your data is safe, private and never sold or shared." },
  { icon: Zap, title: "Fast & Easy", desc: "Browse and compare plans in minutes, no account needed." },
  { icon: Headphones, title: "Expert Support", desc: "Our specialists are here to help you every step of the way." },
  { icon: CheckCircle2, title: "No Obligation", desc: "Compare plans with absolutely no obligation to buy." },
];

const STEPS = [
  { icon: LayoutGrid, title: "Browse Plans", desc: "Explore internet, TV, mobile and home phone options in one place." },
  { icon: ListChecks, title: "Compare Side by Side", desc: "Line up speeds, prices, and features to see what fits." },
  { icon: CheckCircle2, title: "Choose Your Plan", desc: "Pick the plan that best fits your needs and budget." },
  { icon: Rocket, title: "Get Connected", desc: "We'll connect you with the provider and get you set up." },
];

const STATS = [
  { icon: LayoutGrid, value: "100+", label: "Plans Compared" },
  { icon: Sparkles, value: "50+", label: "Providers Covered" },
  { icon: Users, value: "10k+", label: "Happy Customers" },
  { icon: Clock, value: "24/7", label: "Expert Support" },
];

// Hero right-side icon panel — one tile per service, each carrying its own
// brand color (matches the service cards below) so it reads as a system,
// not a generic feature grid.
const HERO_ICON_TILES = [
  { icon: Wifi, label: "Internet", price: "from $45/mo.", bg: "bg-[#E7ECFB]", ring: "ring-[#3B4FE0]/15", color: "text-[#3B4FE0]" },
  { icon: Tv, label: "TV", price: "from $35/mo.", bg: "bg-[#E1F6EA]", ring: "ring-[#1FA24A]/15", color: "text-[#1FA24A]" },
  { icon: Smartphone, label: "Mobile", price: "from $25/mo.", bg: "bg-[#F2E7FB]", ring: "ring-[#8B2FD1]/15", color: "text-[#8B2FD1]" },
  { icon: Phone, label: "Home Phone", price: "from $15/mo.", bg: "bg-[#FDEBD8]", ring: "ring-[#E8871E]/15", color: "text-[#E8871E]" },
];

// ---------------------------------------------------------------------------

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      <style>{`
        @keyframes heroFadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes tileFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
        }
        .animate-hero-fade { animation: heroFadeIn 0.5s ease-out both; }
        .stagger-2 { animation-delay: 0.1s; }
        .tile-float { animation: tileFloat 5s ease-in-out infinite; }
      `}</style>

      {/* ---------------------------------------------------------------- */}
      {/* Hero — light theme, consistent with the rest of the page. A soft */}
      {/* indigo-tinted background (not stark white) keeps it from feeling */}
      {/* flat, while staying in the same light family as every other      */}
      {/* section. Signature element: four floating icon tiles, one per    */}
      {/* service, each in that service's own brand color — a light,       */}
      {/* content-grounded stand-in for the old dark snapshot panel.       */}
      {/* ---------------------------------------------------------------- */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#F3F5FE] to-white">
        {/* ambient accent glow, kept subtle for a light surface */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-32 right-[-8%] h-[480px] w-[480px] rounded-full opacity-30 blur-3xl"
          style={{ background: "radial-gradient(circle, #B9C4FA 0%, transparent 70%)" }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-24 left-[-6%] h-[360px] w-[360px] rounded-full opacity-25 blur-3xl"
          style={{ background: "radial-gradient(circle, #FBD9B0 0%, transparent 70%)" }}
        />

        <div className="relative mx-auto w-full max-w-7xl px-6 pb-20 pt-24 lg:pb-28 lg:pt-28">
          <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
            {/* LEFT — thesis */}
            <div className="animate-hero-fade">
              <span className="mb-7 inline-flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.14em] text-[#3B4FE0]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#3B4FE0]" />
                Independent Comparison &middot; Trusted Nationwide
              </span>

              <h1
                className="mb-6 font-extrabold leading-[1.08] tracking-tight text-slate-900"
                style={{ fontSize: "clamp(2.5rem, 4.6vw, 3.75rem)" }}
              >
                The clearest way to compare
                <span className="block text-[#3B4FE0]">
                  internet, TV, mobile &amp; phone.
                </span>
              </h1>

              <p className="mb-9 max-w-lg text-lg leading-relaxed text-slate-600">
                Real prices, real speeds, side by side. No sales calls, no
                hidden fees, no favorites — just a clear picture so you can
                choose with confidence.
              </p>

              <div className="mb-10 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#pricing"
                  className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg bg-[#3B4FE0] px-7 py-3.5 text-sm font-semibold text-white shadow-[0_8px_24px_-8px_rgba(59,79,224,0.5)] transition hover:bg-[#2f3fc4]"
                >
                  Compare All Plans
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="#services"
                  className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg border border-slate-200 bg-white px-7 py-3.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
                >
                  Browse Services
                </a>
              </div>

              {/* rating line */}
              <div className="mb-9 flex items-center gap-3">
                <div className="flex -space-x-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} viewBox="0 0 20 20" className="h-4 w-4 fill-[#F5A623]">
                      <path d="M10 1.5l2.6 5.4 5.9.7-4.3 4.1 1.1 5.9L10 14.7l-5.3 2.9 1.1-5.9L1.5 7.6l5.9-.7L10 1.5z" />
                    </svg>
                  ))}
                </div>
                <span className="text-sm text-slate-500">
                  <span className="font-bold text-slate-900">4.9/5</span> from 2,000+ verified comparisons
                </span>
              </div>

              {/* trust row */}
              <div className="flex flex-wrap items-center gap-x-9 gap-y-5 border-t border-slate-200 pt-7">
                {[
                  { icon: Award, value: "100+", label: "Plans Compared" },
                  { icon: Users, value: "1M+", label: "Happy Customers" },
                  { icon: Shield, value: "100%", label: "Free & Unbiased" },
                ].map((b) => (
                  <div key={b.label} className="flex items-center gap-3">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#EEF0FC]">
                      <b.icon className="h-[18px] w-[18px] text-[#3B4FE0]" strokeWidth={2} />
                    </span>
                    <span className="flex flex-col leading-tight">
                      <span className="text-base font-bold text-slate-900">{b.value}</span>
                      <span className="text-xs font-medium text-slate-500">{b.label}</span>
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT — signature element: four brand-colored icon tiles,   */}
            {/* one per service, gently floating at staggered offsets.     */}
            {/* Light, airy, and grounded in the actual services compared. */}
            <div className="animate-hero-fade stagger-2 hidden lg:block">
              <div className="relative mx-auto grid max-w-md grid-cols-2 gap-5">
                {HERO_ICON_TILES.map((tile, i) => (
                  <div
                    key={tile.label}
                    className={`tile-float rounded-2xl border border-slate-100 bg-white p-6 shadow-[0_16px_40px_-16px_rgba(15,23,42,0.15)] ${i % 2 === 1 ? "mt-8" : ""}`}
                    style={{ animationDelay: `${i * 0.6}s` }}
                  >
                    <span className={`flex h-12 w-12 items-center justify-center rounded-xl ${tile.bg} ring-4 ${tile.ring}`}>
                      <tile.icon className={`h-6 w-6 ${tile.color}`} />
                    </span>
                    <div className="mt-4 text-sm font-bold text-slate-900">{tile.label}</div>
                    <div className="mt-1 text-xs font-medium text-slate-500">{tile.price}</div>
                  </div>
                ))}

                {/* connective badge floating in the center to tie the grid together */}
                <div className="pointer-events-none absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 sm:flex">
                  <span className="flex items-center gap-2 rounded-full border border-slate-100 bg-white px-4 py-2 text-xs font-semibold text-slate-600 shadow-[0_10px_30px_-10px_rgba(15,23,42,0.25)]">
                    <Sparkles className="h-3.5 w-3.5 text-[#3B4FE0]" />
                    All compared at once
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* Service cards                                                    */}
      {/* ---------------------------------------------------------------- */}
      <section id="services" className="mx-auto max-w-7xl scroll-mt-8 px-6 py-14">
        <div className="mb-8 max-w-2xl">
          <span className="text-xs font-bold uppercase tracking-wide text-[#3B4FE0]">Services</span>
          <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
            Everything you need, in one comparison
          </h2>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICE_CARDS.map((card) => (
            <div
              key={card.title}
              className="flex flex-col rounded-2xl border border-slate-100 bg-white p-6 shadow-[0_1px_3px_rgba(15,23,42,0.06)]"
            >
              <div className="flex items-center gap-3">
                <span className={`flex h-11 w-11 items-center justify-center rounded-full ${card.iconBg}`}>
                  <card.icon className={`h-5 w-5 ${card.iconColor}`} />
                </span>
                <h3 className="text-base font-bold text-slate-900">{card.title}</h3>
              </div>
              <ul className="mt-5 flex-1 space-y-3">
                {card.items.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-slate-600">
                    <Check className={`h-4 w-4 shrink-0 ${card.bullet}`} />
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href="#pricing"
                className={`mt-6 inline-flex items-center justify-center gap-2 rounded-lg ${card.buttonClass} px-4 py-3 text-sm font-semibold text-white transition`}
              >
                {card.button}
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* Pricing table                                                    */}
      {/* ---------------------------------------------------------------- */}
      <section id="pricing" className="mx-auto max-w-7xl scroll-mt-8 px-6 pb-14">
        <span className="text-xs font-bold uppercase tracking-wide text-[#3B4FE0]">Pricing</span>
        <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
          All <span className="text-[#3B4FE0]">Internet</span> Plans and Pricing
        </h2>
        <p className="mt-2 text-sm text-slate-500">
          Compare high-speed internet plans and prices at a glance.
        </p>

        <div className="mt-6 overflow-hidden rounded-2xl border border-slate-100 shadow-[0_1px_3px_rgba(15,23,42,0.06)]">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[900px] border-collapse text-left text-sm">
              <thead>
                <tr className="bg-[#EEF0FC] text-slate-700">
                  {["Plan", "Download Speed", "Promo Price*", "Price After 24 Months", "Contract", "Connection Type", "Equipment", "Data", "Status"].map(
                    (h) => (
                      <th key={h} className="whitespace-nowrap px-5 py-4 text-xs font-semibold uppercase tracking-wide">
                        {h}
                      </th>
                    )
                  )}
                </tr>
              </thead>
              <tbody>
                {PLANS.map((row, i) => (
                  <tr
                    key={row.plan}
                    className={`${row.featured ? "bg-[#F3F5FE]" : i % 2 === 0 ? "bg-white" : "bg-slate-50/60"} border-b border-slate-100 last:border-0`}
                  >
                    <td className="whitespace-nowrap px-5 py-4 font-semibold text-[#3B4FE0]">
                      <span className="flex items-center gap-2">
                        {row.plan}
                        {row.featured && (
                          <span className="rounded-full bg-[#3B4FE0] px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-white">
                            Popular
                          </span>
                        )}
                      </span>
                    </td>
                    <td className="whitespace-nowrap px-5 py-4 text-slate-600">{row.speed}</td>
                    <td className="whitespace-nowrap px-5 py-4 font-semibold text-slate-900">{row.promo}</td>
                    <td className="whitespace-nowrap px-5 py-4 text-slate-600">{row.regular}</td>
                    <td className="whitespace-nowrap px-5 py-4 text-slate-600">{row.contract}</td>
                    <td className="whitespace-nowrap px-5 py-4 text-slate-600">{row.connection}</td>
                    <td className="whitespace-nowrap px-5 py-4 text-slate-600">{row.equipment}</td>
                    <td className="whitespace-nowrap px-5 py-4 text-slate-600">{row.data}</td>
                    <td className="whitespace-nowrap px-5 py-4">
                      <span className="inline-flex items-center gap-1.5 text-sm font-medium text-[#1FA24A]">
                        <CheckCircle2 className="h-4 w-4" />
                        Active
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <p className="mt-3 text-xs text-slate-400">
          * Promo pricing applies for the first 24 months. Prices are subject to change. See{" "}
          <a href="#disclaimers" className="text-[#3B4FE0] hover:underline">
            disclaimers
          </a>
          .
        </p>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* Highlight plan cards                                             */}
      {/* ---------------------------------------------------------------- */}
      <section className="mx-auto max-w-7xl px-6 pb-14">
        <div className="grid gap-5 sm:grid-cols-3">
          {HIGHLIGHT_PLANS.map((p) => (
            <div
              key={p.badge}
              className="rounded-2xl border border-slate-100 bg-white p-7 text-center shadow-[0_1px_3px_rgba(15,23,42,0.06)]"
            >
              <span className="mx-auto inline-flex items-center gap-2 rounded-full bg-slate-50 px-4 py-1.5 text-xs font-semibold text-slate-600">
                <p.icon className="h-3.5 w-3.5 text-[#3B4FE0]" />
                {p.badge}
              </span>
              <h3 className="mt-5 text-lg font-bold text-slate-900">{p.name}</h3>
              <div className="mt-2">
                <span className="text-4xl font-extrabold text-slate-900">{p.price}</span>
                <span className="text-sm font-medium text-slate-500">/mo.*</span>
              </div>
              <p className="mt-1 text-xs text-slate-400">{p.term}</p>
              <p className="mt-3 text-sm text-slate-500">{p.speed}</p>
              <a
                href="#pricing"
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#3B4FE0] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#2f3fc4]"
              >
                View Plan
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* Trust features                                                   */}
      {/* ---------------------------------------------------------------- */}
      <section className="border-y border-slate-100 bg-slate-50/60">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-14 sm:grid-cols-2 lg:grid-cols-3">
          {TRUST_FEATURES.map((f) => (
            <div key={f.title} className="flex flex-col items-center text-center">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#EEF0FC]">
                <f.icon className="h-5 w-5 text-[#3B4FE0]" />
              </span>
              <h4 className="mt-4 text-sm font-bold text-slate-900">{f.title}</h4>
              <p className="mt-1.5 max-w-[220px] text-xs leading-relaxed text-slate-500">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* How it works                                                     */}
      {/* ---------------------------------------------------------------- */}
      <section className="mx-auto max-w-7xl px-6 py-14">
        <div className="text-center">
          <span className="text-xs font-bold uppercase tracking-wide text-[#3B4FE0]">Process</span>
          <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
            How It Works
          </h2>
          <p className="mt-2 text-sm text-slate-500">
            Get connected in 4 simple steps.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step, i) => (
            <div key={step.title} className="relative flex flex-col items-center text-center">
              {i < STEPS.length - 1 && (
                <ArrowRight className="absolute -right-5 top-6 hidden h-4 w-4 text-slate-300 lg:block" />
              )}
              <div className="relative">
                <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-[0_1px_3px_rgba(15,23,42,0.08)]">
                  <step.icon className="h-6 w-6 text-[#3B4FE0]" />
                </span>
                <span className="absolute -left-1 -top-1 flex h-6 w-6 items-center justify-center rounded-full bg-[#3B4FE0] text-[11px] font-bold text-white">
                  {i + 1}
                </span>
              </div>
              <h4 className="mt-4 text-sm font-bold text-slate-900">{step.title}</h4>
              <p className="mt-1.5 max-w-[200px] text-xs leading-relaxed text-slate-500">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* CTA banner                                                       */}
      {/* ---------------------------------------------------------------- */}
      <section className="mx-auto max-w-7xl px-6 pb-14">
        <div className="flex flex-col items-center gap-6 rounded-2xl bg-[#3B4FE0] px-8 py-9 text-center lg:flex-row lg:justify-between lg:text-left">
          <div className="flex items-center gap-4">
            <span className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/15 sm:flex">
              <Zap className="h-6 w-6 text-white" />
            </span>
            <div>
              <h3 className="text-lg font-bold text-white">Ready to find the best plan?</h3>
              <p className="mt-1 text-sm text-white/80">
                Compare internet, TV, mobile and home phone plans side by side, no forms required.
              </p>
            </div>
          </div>
          <div className="flex w-full max-w-md flex-col gap-3 sm:flex-row">
            <a
              href="#pricing"
              className="inline-flex flex-1 items-center justify-center gap-2 whitespace-nowrap rounded-lg border-2 border-white bg-white px-6 py-3.5 text-sm font-semibold text-[#3B4FE0] transition hover:bg-indigo-50"
            >
              Compare All Plans
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#services"
              className="inline-flex flex-1 items-center justify-center gap-2 whitespace-nowrap rounded-lg border-2 border-white/40 bg-transparent px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Browse Services
            </a>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* Stats                                                            */}
      {/* ---------------------------------------------------------------- */}
      <section className="mx-auto max-w-7xl px-6 pb-14">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
          {STATS.map((s) => (
            <div key={s.label} className="flex flex-col items-center text-center">
              <s.icon className="h-5 w-5 text-[#3B4FE0]" />
              <span className="mt-2 text-2xl font-extrabold text-slate-900">{s.value}</span>
              <span className="text-xs text-slate-500">{s.label}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}