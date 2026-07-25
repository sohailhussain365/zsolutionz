import React, { useState } from "react";
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
  MapPin,
  Award,
  Rocket,
  ClipboardList,
  ListChecks,
  ArrowRight,
  ChevronDown,
  Users,
  Clock,
  LayoutGrid,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Mail,
} from "lucide-react";

// ---------------------------------------------------------------------------
// Static content — mirrors the reference layout section by section
// ---------------------------------------------------------------------------

const NAV_LINKS = [
  { label: "Home", href: "#" },
  { label: "Internet", href: "#internet", dropdown: true },
  { label: "TV", href: "#tv" },
  { label: "Mobile", href: "#mobile" },
  { label: "Home Phone", href: "#home-phone" },
  { label: "About Us", href: "#about" },
  { label: "Resources", href: "#resources", dropdown: true },
];

const HERO_STATS = [
  { icon: CheckCircle2, label: "100%", sub: "Free Comparison" },
  { icon: Tag, label: "No", sub: "Hidden Fees" },
  { icon: Zap, label: "Fast", sub: "Availability Check" },
  { icon: Headphones, label: "Expert", sub: "Support" },
];

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
  { plan: "300 Mbps", speed: "Up to 300 Mbps", start: "$45.00 /mo.", price24: "$45.00 /mo.", contract: "24 Months", connection: "Cable or Fiber", equipment: "$15 /mo.", data: "Unlimited" },
  { plan: "500 Mbps", speed: "Up to 500 Mbps", start: "$60.00 /mo.", price24: "$60.00 /mo.", contract: "24 Months", connection: "Cable or Fiber", equipment: "$15 /mo.", data: "Unlimited" },
  { plan: "1 Gig", speed: "Up to 1,000 Mbps", start: "$70.00 /mo.", price24: "$70.00 /mo.", contract: "24 Months", connection: "Cable or Fiber", equipment: "$15 /mo.", data: "Unlimited" },
  { plan: "1.2 Gig", speed: "Up to 1,200 Mbps", start: "$100.00 /mo.", price24: "$100.00 /mo.", contract: "24 Months", connection: "Cable or Fiber", equipment: "$15 /mo.", data: "Unlimited" },
  { plan: "2 Gig", speed: "Up to 2,000 Mbps", start: "$100.00 /mo.", price24: "$100.00 /mo.", contract: "24 Months", connection: "Cable or Fiber", equipment: "$15 /mo.", data: "Unlimited" },
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
  { icon: Zap, title: "Fast & Easy", desc: "Check availability in minutes and get connected faster." },
  { icon: Headphones, title: "Expert Support", desc: "Our specialists are here to help you every step of the way." },
  { icon: CheckCircle2, title: "No Obligation", desc: "Compare plans with absolutely no obligation to buy." },
];

const STEPS = [
  { icon: MapPin, title: "Enter ZIP Code", desc: "Enter your ZIP Code and we'll find services in your area." },
  { icon: ListChecks, title: "Compare Plans", desc: "Compare speeds, prices, and features side by side." },
  { icon: CheckCircle2, title: "Choose Your Plan", desc: "Pick the plan that best fits your needs and budget." },
  { icon: Rocket, title: "Get Connected", desc: "We'll connect you with the provider and get you set up." },
];

const STATS = [
  { icon: LayoutGrid, value: "100+", label: "Plans Compared" },
  { icon: MapPin, value: "50+", label: "Service Areas" },
  { icon: Users, value: "1M+", label: "Happy Customers" },
  { icon: Clock, value: "24/7", label: "Expert Support" },
];

const FOOTER_COLUMNS = [
  {
    title: "Company",
    links: ["About Us", "How It Works", "Careers", "Contact Us", "Blog"],
  },
  {
    title: "Services",
    links: ["Internet", "TV", "Mobile", "Home Phone"],
  },
  {
    title: "Resources",
    links: ["Coverage Map", "Guides", "FAQs", "Support Center"],
  },
  {
    title: "Legal",
    links: ["Privacy Policy", "Terms of Service", "Cookie Policy", "Do Not Sell My Info"],
  },
];

// ---------------------------------------------------------------------------

function ZipInput({ dark = false }: { dark?: boolean }) {
  const [zip, setZip] = useState("");
  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className={`flex w-full flex-col gap-3 sm:flex-row ${dark ? "" : "max-w-xl"}`}
    >
      <div className="relative flex-1">
        <MapPin className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#3B4FE0]" />
        <input
          type="text"
          inputMode="numeric"
          value={zip}
          onChange={(e) => setZip(e.target.value)}
          placeholder="Enter your ZIP Code"
          className="w-full rounded-lg border border-slate-300 bg-white py-3.5 pl-11 pr-4 text-sm font-medium text-slate-800 shadow-sm placeholder:font-normal placeholder:text-slate-400 transition hover:border-slate-400 focus:border-[#3B4FE0] focus:outline-none focus:ring-2 focus:ring-[#3B4FE0]/20"
        />
      </div>
      <button
        type="submit"
        className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg border-2 border-[#3B4FE0] bg-[#3B4FE0] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#2f3fc4] hover:border-[#2f3fc4]"
      >
        Check Availability
        <ArrowRight className="h-4 w-4" />
      </button>
    </form>
  );
}

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      <style>{`
        @keyframes floatY {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
      `}</style>
  
      {/* ---------------------------------------------------------------- */}
      {/* Hero                                                             */}
      {/* ---------------------------------------------------------------- */}
      <section className="border-b border-slate-100 bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="inline-block rounded-full bg-[#EEF0FC] px-4 py-1.5 text-xs font-semibold text-[#3B4FE0]">
              Compare. Connect. Save.
            </span>
            <h1 className="mt-5 text-4xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-5xl">
              Find the Best Internet Plans
              <br />
              in <span className="text-[#3B4FE0]">Your Area</span>
            </h1>
            <p className="mt-5 max-w-lg text-[15px] leading-relaxed text-slate-500">
              Compare high-speed internet, TV, mobile and home phone plans from
              trusted providers. Enter your ZIP Code to check availability and
              find the best deals near you.
            </p>

            <div className="mt-7">
              <ZipInput />
            </div>

            <div className="mt-8 grid grid-cols-2 gap-y-4 sm:grid-cols-4">
              {HERO_STATS.map(({ icon: Icon, label, sub }) => (
                <div key={sub} className="flex items-center gap-2">
                  <Icon className="h-4 w-4 shrink-0 text-[#3B4FE0]" />
                  <span className="text-xs text-slate-600">
                    <span className="block font-semibold text-slate-800">{label}</span>
                    {sub}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-6 flex items-center gap-2 text-xs text-slate-400">
              <Lock className="h-3.5 w-3.5" />
              Your information is secure and will never be shared.
            </div>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-2xl bg-gradient-to-br from-[#EEF0FC] to-[#E4E9FB]">
              <HeroIllustration className="aspect-[4/3] w-full" />
            </div>
            <FloatingIcon icon={Tv} className="left-[26%] top-[4%]" delay={0} />
            <FloatingIcon icon={Wifi} className="left-[6%] top-[22%]" delay={0.7} />
            <FloatingIcon icon={Smartphone} className="left-[10%] top-[46%]" delay={1.4} />
            <FloatingIcon icon={Phone} className="left-[2%] top-[70%]" delay={2.1} />
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* Service cards                                                    */}
      {/* ---------------------------------------------------------------- */}
      <section className="mx-auto max-w-7xl px-6 py-14">
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
              <button
                className={`mt-6 inline-flex items-center justify-center gap-2 rounded-lg ${card.buttonClass} px-4 py-3 text-sm font-semibold text-white transition`}
              >
                {card.button}
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* Pricing table                                                    */}
      {/* ---------------------------------------------------------------- */}
      <section className="mx-auto max-w-7xl px-6 pb-14">
        <h2 className="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
          All <span className="text-[#3B4FE0]">Internet</span> Plans and Pricing
        </h2>
        <p className="mt-2 text-sm text-slate-500">
          Compare high-speed internet plans and prices in your area.
        </p>

        <div className="mt-6 overflow-hidden rounded-2xl border border-slate-100 shadow-[0_1px_3px_rgba(15,23,42,0.06)]">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[860px] border-collapse text-left text-sm">
              <thead>
                <tr className="bg-[#0B1148] text-white">
                  {["Plan", "Download Speed", "Starting Price*", "Price for 24 Months", "Contract", "Connection Type", "Equipment", "Data", "Availability"].map(
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
                    className={`${i % 2 === 0 ? "bg-white" : "bg-slate-50/60"} border-b border-slate-100 last:border-0`}
                  >
                    <td className="whitespace-nowrap px-5 py-4 font-semibold text-[#3B4FE0]">{row.plan}</td>
                    <td className="whitespace-nowrap px-5 py-4 text-slate-600">{row.speed}</td>
                    <td className="whitespace-nowrap px-5 py-4 font-semibold text-slate-900">{row.start}</td>
                    <td className="whitespace-nowrap px-5 py-4 text-slate-600">{row.price24}</td>
                    <td className="whitespace-nowrap px-5 py-4 text-slate-600">{row.contract}</td>
                    <td className="whitespace-nowrap px-5 py-4 text-slate-600">{row.connection}</td>
                    <td className="whitespace-nowrap px-5 py-4 text-slate-600">{row.equipment}</td>
                    <td className="whitespace-nowrap px-5 py-4 text-slate-600">{row.data}</td>
                    <td className="whitespace-nowrap px-5 py-4">
                      <span className="inline-flex items-center gap-1.5 text-sm font-medium text-[#1FA24A]">
                        <CheckCircle2 className="h-4 w-4" />
                        Available
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <p className="mt-3 text-xs text-slate-400">
          * Availability and speed may vary by location, and prices are subject to change. See{" "}
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
              <button className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#3B4FE0] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#2f3fc4]">
                View Plan
                <ArrowRight className="h-4 w-4" />
              </button>
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
          <h2 className="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
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
        <div className="flex flex-col items-center gap-6 rounded-2xl bg-[#3B4FE0] px-8 py-9 lg:flex-row lg:justify-between">
          <div className="flex items-center gap-4 text-center lg:text-left">
            <span className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/15 sm:flex">
              <MapPin className="h-6 w-6 text-white" />
            </span>
            <div>
              <h3 className="text-lg font-bold text-white">Ready to find the best plan?</h3>
              <p className="mt-1 text-sm text-white/80">
                Check internet, TV, mobile and home phone availability in your area today.
              </p>
            </div>
          </div>
          <div className="w-full max-w-md">
            <form onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-3 sm:flex-row">
              <div className="relative flex-1">
                <MapPin className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#3B4FE0]" />
                <input
                  type="text"
                  placeholder="Enter your ZIP code"
                  className="w-full rounded-lg border border-transparent bg-white py-3.5 pl-11 pr-4 text-sm font-medium text-slate-800 shadow-sm placeholder:font-normal placeholder:text-slate-400 transition focus:border-[#3B4FE0] focus:outline-none focus:ring-2 focus:ring-white/50"
                />
              </div>
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg border-2 border-[#3B4FE0] bg-[#0B1148] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#070c30]"
              >
                Check Availability
                <ArrowRight className="h-4 w-4" />
              </button>
            </form>
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

function HeroIllustration({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 560 420"
      className={className}
      preserveAspectRatio="xMidYMid slice"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Illustration of a connected smart home with TV, laptop, and Wi-Fi enabled devices"
    >
      <defs>
        <linearGradient id="wallGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#F5F6FD" />
          <stop offset="100%" stopColor="#E4E9FB" />
        </linearGradient>
        <linearGradient id="screenGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#4A5AE8" />
          <stop offset="100%" stopColor="#2634A6" />
        </linearGradient>
        <linearGradient id="consoleGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="100%" stopColor="#EEF0FC" />
        </linearGradient>
      </defs>

      {/* backdrop */}
      <rect x="0" y="0" width="560" height="420" fill="url(#wallGrad)" />
      {/* wall accent panel */}
      <rect x="0" y="0" width="560" height="250" fill="#FFFFFF" opacity="0.35" />
      {/* floor */}
      <rect x="0" y="330" width="560" height="90" fill="#DCE1F6" />
      <rect x="0" y="330" width="560" height="6" fill="#C7CFF2" />

      {/* rug */}
      <ellipse cx="300" cy="392" rx="230" ry="20" fill="#C7CFF2" opacity="0.6" />

      {/* window */}
      <rect x="40" y="50" width="120" height="150" rx="8" fill="#FFFFFF" stroke="#D7DCF7" strokeWidth="3" />
      <line x1="100" y1="50" x2="100" y2="200" stroke="#D7DCF7" strokeWidth="3" />
      <line x1="40" y1="125" x2="160" y2="125" stroke="#D7DCF7" strokeWidth="3" />

      {/* console / TV stand */}
      <rect x="230" y="300" width="230" height="60" rx="10" fill="url(#consoleGrad)" stroke="#D7DCF7" strokeWidth="2" />
      <circle cx="250" cy="330" r="6" fill="#C7CFF2" />
      <circle cx="440" cy="330" r="6" fill="#C7CFF2" />

      {/* TV stand legs */}
      <rect x="245" y="358" width="8" height="16" rx="2" fill="#C7CFF2" />
      <rect x="437" y="358" width="8" height="16" rx="2" fill="#C7CFF2" />

      {/* television */}
      <rect x="255" y="165" width="180" height="112" rx="10" fill="#161B3D" />
      <rect x="267" y="176" width="156" height="90" rx="4" fill="url(#screenGrad)" />
      <rect x="335" y="277" width="20" height="18" fill="#161B3D" />
      <rect x="315" y="295" width="60" height="6" rx="3" fill="#161B3D" />

      {/* wifi symbol on screen */}
      <g transform="translate(345,222)" stroke="#FFFFFF" fill="none" strokeWidth="6" strokeLinecap="round">
        <path d="M -26 6 A 36 36 0 0 1 26 6" opacity="0.9" />
        <path d="M -16 16 A 22 22 0 0 1 16 16" opacity="0.95" />
        <circle cx="0" cy="28" r="5" fill="#FFFFFF" stroke="none" />
      </g>

      {/* laptop on console */}
      <g transform="translate(255,285)">
        <rect x="0" y="0" width="70" height="44" rx="4" fill="#161B3D" />
        <rect x="5" y="5" width="60" height="34" rx="2" fill="#3B4FE0" />
        <path d="M -6 44 H 76 L 68 54 H 2 Z" fill="#2B3260" />
      </g>

      {/* speaker */}
      <rect x="405" y="286" width="20" height="34" rx="4" fill="#2B3260" />
      <circle cx="415" cy="296" r="3.5" fill="#4A5AE8" />
      <circle cx="415" cy="308" r="3.5" fill="#4A5AE8" />

      {/* floor lamp */}
      <g transform="translate(478,90)">
        <path d="M 8 220 L 2 220 L 14 120 L -4 120 L 8 220" fill="#B9C2EE" />
        <line x1="5" y1="120" x2="5" y2="40" stroke="#8C98E0" strokeWidth="4" />
        <path d="M -22 40 L 32 40 L 20 -10 L -10 -10 Z" fill="#FFD98A" opacity="0.9" />
      </g>

      {/* plant */}
      <g transform="translate(70,250)">
        <path d="M -22 70 L 22 70 L 16 40 L -16 40 Z" fill="#FFFFFF" stroke="#D7DCF7" strokeWidth="2" />
        <path d="M 0 40 C -30 30 -34 -10 -6 -18 C -8 4 -4 22 0 40 Z" fill="#3B4FE0" />
        <path d="M 0 40 C 30 26 36 -14 8 -26 C 12 -2 6 22 0 40 Z" fill="#5A6AEE" />
        <path d="M 0 40 C -6 14 -6 -6 0 -30 C 6 -6 6 14 0 40 Z" fill="#7C8AF2" />
      </g>

      {/* couch silhouette (foreground) */}
      <g transform="translate(0,300)">
        <rect x="-40" y="30" width="180" height="60" rx="16" fill="#A9B4E6" />
        <rect x="-40" y="10" width="40" height="80" rx="14" fill="#98A4E0" />
        <rect x="-20" y="20" width="150" height="26" rx="12" fill="#B9C2EE" />
      </g>

      {/* signal dots */}
      <circle cx="345" cy="150" r="3" fill="#3B4FE0" opacity="0.6" />
      <circle cx="360" cy="140" r="2" fill="#3B4FE0" opacity="0.4" />
      <circle cx="330" cy="142" r="2" fill="#3B4FE0" opacity="0.4" />
    </svg>
  );
}

function FloatingIcon({
  icon: Icon,
  className = "",
  delay = 0,
}: {
  icon: React.ComponentType<{ className?: string }>;
  className?: string;
  delay?: number;
}) {
  return (
    <span
      className={`absolute flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-white to-[#EEF0FC] shadow-[0_10px_24px_rgba(59,79,224,0.22)] ring-1 ring-white/70 ${className}`}
      style={{ animation: "floatY 4.5s ease-in-out infinite", animationDelay: `${delay}s` }}
    >
      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#3B4FE0]/10">
        <Icon className="h-5 w-5 text-[#3B4FE0]" strokeWidth={2.1} />
      </span>
    </span>
  );
}