import { motion } from "framer-motion";
import { Link } from "wouter";
import { useState } from "react";
import {
  Wifi, Tv, Phone, Smartphone, ArrowRight, Star,
  ShieldCheck, BadgeCheck, HeadphonesIcon,
} from "lucide-react";
import { ZipCheckWidget } from "@/components/shared_zipcheck.tsx";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
};
const stagger = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.07 } } };

type Category = "internet" | "tv" | "phone" | "mobile";

const categories: { key: Category; label: string; icon: typeof Wifi }[] = [
  { key: "internet", label: "Internet", icon: Wifi },
  { key: "tv", label: "TV Package", icon: Tv },
  { key: "phone", label: "Home Phone", icon: Phone },
  { key: "mobile", label: "Mobile", icon: Smartphone },
];

const providers: Record<Category, { name: string; type: string; blurb: string; tags: string[] }[]> = {
  internet: [
    { name: "NovaFiber", type: "Fiber", blurb: "Symmetrical fiber speeds for streaming, gaming, and remote work.", tags: ["Up to 2 Gbps", "No data caps", "Self-install kit"] },
    { name: "SwiftLink Cable", type: "Cable", blurb: "Wide coverage cable internet with flexible no-contract plans.", tags: ["Up to 500 Mbps", "No annual contract", "24/7 support"] },
    { name: "ClearWave Broadband", type: "Fixed Wireless", blurb: "Reliable wireless internet built for rural and suburban areas.", tags: ["Quick install", "Weather-resistant", "Rural coverage"] },
  ],
  tv: [
    { name: "StreamVista", type: "Streaming Bundle", blurb: "Live channels plus on-demand apps in a single guide.", tags: ["150+ channels", "Cloud DVR", "Multi-device"] },
    { name: "PrimeView TV", type: "Cable TV", blurb: "Classic cable lineup with strong local and sports coverage.", tags: ["Local channels", "Sports tiers", "4K set-top box"] },
    { name: "HorizonCast", type: "Satellite", blurb: "Nationwide satellite coverage, including remote addresses.", tags: ["Nationwide reach", "HD included", "Add-on premiums"] },
  ],
  phone: [
    { name: "VoiceLine Home", type: "Digital Voice", blurb: "Crystal-clear home calling with modern call-management features.", tags: ["Unlimited calling", "Voicemail-to-email", "Caller ID"] },
    { name: "ClearTalk Phone", type: "Landline", blurb: "Traditional landline reliability, including during power outages.", tags: ["Battery backup", "911 reliability", "Simple pricing"] },
    { name: "EchoLink Voice", type: "VoIP", blurb: "Internet-based home phone bundled with your broadband plan.", tags: ["Bundle discount", "Call forwarding", "Easy setup"] },
  ],
  mobile: [
    { name: "PulseMobile", type: "Unlimited", blurb: "Unlimited talk, text, and data with nationwide 5G coverage.", tags: ["Unlimited data", "5G nationwide", "Family lines"] },
    { name: "OrbitCell", type: "Prepaid", blurb: "No-contract prepaid plans with flexible monthly data tiers.", tags: ["No credit check", "Flexible data", "Month-to-month"] },
    { name: "DriftWireless", type: "Family Bundle", blurb: "Multi-line family plans with per-line savings as you add lines.", tags: ["Up to 5 lines", "Shared data", "Bundle savings"] },
  ],
};

export default function ProvidersPage() {
  const [active, setActive] = useState<Category>("internet");

  return (
    <div className="flex flex-col w-full overflow-x-hidden">

      {/* ══ HERO ════════════════════════════════════════════════ */}
      <section className="relative min-h-[65vh] flex items-center pb-16 pt-32 md:pb-20 md:pt-40 overflow-hidden bg-white">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div style={{ background: "radial-gradient(ellipse 60% 60% at 75% 30%, rgba(37,99,235,0.10) 0%, transparent 60%)" }} className="absolute inset-0" />
          <div style={{ backgroundImage: "linear-gradient(rgba(37,99,235,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(37,99,235,0.05) 1px, transparent 1px)", backgroundSize: "64px 64px" }} className="absolute inset-0" />
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white to-transparent" />
        </div>

        <div className="container relative z-10 mx-auto px-6 lg:px-16">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-3xl">
            <div className="flex items-center gap-2 text-sm font-medium text-slate-400 mb-8">
              <Link href="/" className="hover:text-slate-600 transition-colors">Home</Link>
              <span className="text-slate-300">/</span>
              <span className="text-blue-500">Providers</span>
            </div>

            <div className="inline-flex items-center gap-3 rounded-full border border-blue-200 bg-blue-50 px-5 py-2.5 text-sm font-medium text-blue-600 mb-8">
              <span className="h-2 w-2 rounded-full bg-blue-500 animate-pulse" />
              Nationwide Coverage
            </div>

            <h1 className="font-extrabold text-slate-900 tracking-tight leading-[1.02] mb-6"
              style={{ fontSize: "clamp(2.5rem, 5.5vw, 4.5rem)" }}>
              Compare Top <span className="gradient-text">Providers</span> Near You
            </h1>
            <p className="text-xl text-slate-500 max-w-xl leading-relaxed mb-10">
              We work with trusted internet, TV, phone, and mobile providers across the country. Enter your zip code to see what's actually available at your address.
            </p>

            <ZipCheckWidget className="max-w-xl" />
          </motion.div>
        </div>
      </section>

      {/* ══ CATEGORY TABS + PROVIDER GRID ═══════════════════════ */}
      <section className="py-16 md:py-28 bg-slate-50 border-y border-slate-100">
        <div className="container mx-auto px-6 lg:px-16">

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="max-w-2xl mb-10">
            <span className="section-label">Browse by Category</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">Providers by Service</h2>
          </motion.div>

          {/* Tabs */}
          <div className="flex flex-wrap gap-2 mb-10">
            {categories.map((c) => {
              const isActive = active === c.key;
              return (
                <button
                  key={c.key}
                  onClick={() => setActive(c.key)}
                  data-testid={`tab-${c.key}`}
                  className={`inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition-all duration-200 ${
                    isActive
                      ? "bg-blue-600 text-white shadow-sm"
                      : "bg-white text-slate-500 border border-slate-200 hover:border-blue-200 hover:text-blue-600"
                  }`}
                >
                  <c.icon size={16} strokeWidth={1.5} />
                  {c.label}
                </button>
              );
            })}
          </div>

          {/* Provider cards */}
          <motion.div key={active} initial="hidden" animate="visible" variants={stagger}
            className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {providers[active].map((p, i) => (
              <motion.div key={i} variants={fadeUp}
                className="glass-card rounded-3xl p-8 flex flex-col hover:-translate-y-1 hover:border-blue-200 transition-all duration-300">
                <div className="flex items-center justify-between mb-5">
                  <span className="inline-flex items-center rounded-full bg-blue-50 text-blue-600 text-xs font-bold px-3 py-1.5 uppercase tracking-wide">
                    {p.type}
                  </span>
                  <div className="flex items-center gap-1 text-amber-400">
                    <Star size={13} fill="currentColor" />
                    <Star size={13} fill="currentColor" />
                    <Star size={13} fill="currentColor" />
                    <Star size={13} fill="currentColor" />
                    <Star size={13} fill="currentColor" />
                  </div>
                </div>
                <h3 className="text-xl font-extrabold text-slate-900 mb-2">{p.name}</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-6">{p.blurb}</p>
                <ul className="space-y-2 mb-8">
                  {p.tags.map((t, j) => (
                    <li key={j} className="flex items-center gap-2 text-xs font-medium text-slate-600">
                      <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
                      {t}
                    </li>
                  ))}
                </ul>
                <Link href="/contact"
                  className="mt-auto inline-flex items-center justify-center gap-1.5 rounded-xl border border-slate-200 h-11 text-sm font-bold text-slate-700 hover:border-blue-300 hover:text-blue-600 hover:bg-blue-50 transition-all">
                  View Plans <ArrowRight size={14} />
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ══ TRUST STRIP ═════════════════════════════════════════ */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-16">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
            className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: BadgeCheck, title: "Verified Partners", desc: "Every provider we list is vetted for service quality and reliability." },
              { icon: ShieldCheck, title: "No Hidden Fees", desc: "Pricing and terms are laid out clearly before you ever sign up." },
              { icon: HeadphonesIcon, title: "Local Support", desc: "Our team helps you compare options and answers questions along the way." },
            ].map((item, i) => (
              <motion.div key={i} variants={fadeUp} className="glass-card rounded-2xl p-8">
                <div className="h-12 w-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 mb-5">
                  <item.icon size={22} strokeWidth={1.5} />
                </div>
                <h3 className="text-base font-extrabold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

    </div>
  );
}