import { motion } from "framer-motion";
import { Link } from "wouter";
import {
  Wifi, Tv, Phone, Smartphone, ArrowRight, Check,
  Signal, Users, MapPinned, Sparkles,
} from "lucide-react";
import { ZipCheckWidget } from "@/components/shared_zipcheck.tsx";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
};
const stagger = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.08 } } };

const floatCards = [
  { icon: Wifi, label: "Internet", top: "6%", left: "4%", rotate: -8, delay: 0 },
  { icon: Tv, label: "TV", top: "2%", left: "58%", rotate: 6, delay: 0.5 },
  { icon: Phone, label: "Home Phone", top: "56%", left: "2%", rotate: 5, delay: 1 },
  { icon: Smartphone, label: "Mobile", top: "60%", left: "60%", rotate: -6, delay: 1.5 },
];

const services = [
  {
    key: "internet",
    icon: Wifi,
    eyebrow: "Internet",
    title: "High-speed home internet, built for how you actually use it",
    desc: "From fiber to fixed wireless, we compare every internet option serving your address so you can stop paying for speed you don't need — or start getting the speed you do.",
    features: ["Fiber, cable & fixed wireless options", "Speeds from 100 Mbps to 2 Gbps+", "No-contract and self-install plans", "Rural and suburban coverage"],
    reverse: false,
  },
  {
    key: "tv",
    icon: Tv,
    eyebrow: "TV Package",
    title: "Live TV and streaming, without the guesswork",
    desc: "Whether you want a full cable lineup, a streaming-first bundle, or nationwide satellite reach, we lay out channel counts and DVR options side by side.",
    features: ["150+ channel lineups available", "Cloud DVR and multi-device apps", "Local, sports, and premium tiers", "4K set-top boxes where offered"],
    reverse: true,
  },
  {
    key: "phone",
    icon: Phone,
    eyebrow: "Home Phone",
    title: "Dependable home voice service, however you like to call",
    desc: "Traditional landline reliability, modern digital voice features, or VoIP bundled with your internet — we help you find the option that fits your household.",
    features: ["Unlimited local & long distance calling", "Battery backup for power outages", "Voicemail-to-email and call forwarding", "Bundle discounts with internet"],
    reverse: false,
  },
  {
    key: "mobile",
    icon: Smartphone,
    eyebrow: "Mobile",
    title: "Mobile plans and bundles for every line on your family",
    desc: "Unlimited, prepaid, or multi-line family plans — compare nationwide 5G coverage and per-line savings before you switch carriers.",
    features: ["Unlimited talk, text & data options", "No-credit-check prepaid plans", "Savings that scale up to 5 lines", "Nationwide 5G coverage"],
    reverse: true,
  },
];

const stats = [
  { icon: Signal, value: "4", label: "Service categories" },
  { icon: MapPinned, value: "50", label: "States covered" },
  { icon: Users, value: "20+", label: "Provider partners" },
  { icon: Sparkles, value: "100%", label: "Free to compare" },
];

export default function ServicesPage() {
  return (
    <div className="flex flex-col w-full overflow-x-hidden">

      {/* ══ HERO ════════════════════════════════════════════════ */}
      <section className="relative min-h-[80vh] flex items-center pb-20 pt-32 md:pb-24 md:pt-40 overflow-hidden bg-white">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div style={{ background: "radial-gradient(ellipse 55% 60% at 20% 20%, rgba(79,70,229,0.14) 0%, transparent 60%)" }} className="absolute inset-0" />
          <div style={{ background: "radial-gradient(ellipse 50% 55% at 85% 65%, rgba(139,92,246,0.12) 0%, transparent 60%)" }} className="absolute inset-0" />
          <div style={{ backgroundImage: "linear-gradient(rgba(79,70,229,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(79,70,229,0.05) 1px, transparent 1px)", backgroundSize: "64px 64px" }} className="absolute inset-0" />
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white to-transparent" />
        </div>

        <div className="container relative z-10 mx-auto px-6 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Text column */}
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <div className="flex items-center gap-2 text-sm font-medium text-slate-400 mb-8">
                <Link href="/" className="hover:text-slate-600 transition-colors">Home</Link>
                <span className="text-slate-300">/</span>
                <span className="text-indigo-500">Services</span>
              </div>

              <div className="inline-flex items-center gap-3 rounded-full border border-indigo-200 bg-indigo-50 px-5 py-2.5 text-sm font-medium text-indigo-600 mb-8">
                <span className="h-2 w-2 rounded-full bg-indigo-500 animate-pulse" />
                Everything Under One Roof
              </div>

              <h1 className="font-extrabold text-slate-900 tracking-tight leading-[1.02] mb-6"
                style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}>
                One Search.{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-violet-600">
                  Every Service
                </span>{" "}
                You Need.
              </h1>
              <p className="text-xl text-slate-500 max-w-lg leading-relaxed mb-10">
                Internet, TV, home phone, and mobile — compare it all from providers who actually serve your address, in one place.
              </p>

              <div className="flex flex-wrap gap-3">
                <Link href="/providers"
                  className="inline-flex items-center justify-center gap-1.5 rounded-full bg-gradient-to-r from-indigo-600 to-violet-600 text-white h-12 px-7 text-sm font-bold shadow-[0_2px_12px_-2px_rgba(79,70,229,0.5)] hover:shadow-[0_6px_20px_-2px_rgba(124,58,237,0.55)] hover:-translate-y-0.5 transition-all">
                  Compare Providers <ArrowRight size={15} />
                </Link>
                <Link href="/how-it-works"
                  className="inline-flex items-center justify-center rounded-full border border-slate-200 text-slate-700 h-12 px-7 text-sm font-bold hover:border-indigo-300 hover:text-indigo-600 transition-all">
                  See How It Works
                </Link>
              </div>
            </motion.div>

            {/* Floating icon collage column */}
            <div className="relative h-[420px] hidden lg:block">
              <div style={{ background: "radial-gradient(circle, rgba(99,102,241,0.18) 0%, transparent 70%)" }}
                className="absolute inset-0 blur-2xl" />
              {floatCards.map((c, i) => (
                <motion.div
                  key={i}
                  className="absolute glass-card rounded-2xl p-5 flex flex-col items-center gap-2 w-32 shadow-xl"
                  style={{ top: c.top, left: c.left, rotate: `${c.rotate}deg` }}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: [0, -14, 0] }}
                  transition={{
                    opacity: { duration: 0.6, delay: c.delay },
                    y: { duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: c.delay },
                  }}
                >
                  <div className="h-11 w-11 rounded-xl bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center text-white">
                    <c.icon size={20} strokeWidth={1.75} />
                  </div>
                  <span className="text-xs font-bold text-slate-700">{c.label}</span>
                </motion.div>
              ))}
              {/* center orb accent */}
              <motion.div
                className="absolute top-1/2 left-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-indigo-500/20 to-violet-500/20 border border-indigo-200/60 flex items-center justify-center"
                animate={{ scale: [1, 1.08, 1] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <Signal size={28} className="text-indigo-500" strokeWidth={1.5} />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ STATS STRIP ═════════════════════════════════════════ */}
      <section className="py-10 bg-slate-900">
        <div className="container mx-auto px-6 lg:px-16">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
            className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((s, i) => (
              <motion.div key={i} variants={fadeUp} className="flex flex-col items-center text-center gap-2">
                <s.icon size={20} className="text-violet-400" strokeWidth={1.75} />
                <span className="text-2xl md:text-3xl font-extrabold text-white">{s.value}</span>
                <span className="text-xs font-medium text-slate-400">{s.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ══ SERVICE DETAIL SECTIONS ═════════════════════════════ */}
      {services.map((s, i) => (
        <section key={s.key} className={`py-16 md:py-24 ${i % 2 === 0 ? "bg-white" : "bg-slate-50 border-y border-slate-100"}`}>
          <div className="container mx-auto px-6 lg:px-16">
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${s.reverse ? "lg:[&>*:first-child]:order-2" : ""}`}>
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center text-white mb-6 shadow-lg shadow-indigo-200">
                  <s.icon size={26} strokeWidth={1.5} />
                </div>
                <span className="section-label">{s.eyebrow}</span>
                <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-4 leading-tight">{s.title}</h2>
                <p className="text-slate-500 leading-relaxed mb-6">{s.desc}</p>
                <Link href="/providers"
                  className="inline-flex items-center gap-1.5 text-sm font-bold text-indigo-600 hover:text-violet-600 transition-colors">
                  Compare {s.eyebrow} Providers <ArrowRight size={14} />
                </Link>
              </motion.div>

              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                className="glass-card rounded-3xl p-8">
                <ul className="space-y-4">
                  {s.features.map((f, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <span className="mt-0.5 h-6 w-6 shrink-0 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-600">
                        <Check size={13} strokeWidth={2.5} />
                      </span>
                      <span className="text-sm font-medium text-slate-700 leading-relaxed">{f}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </section>
      ))}

      {/* ══ CTA / ZIP CHECK ═════════════════════════════════════ */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-16">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="glass-card rounded-3xl p-10 md:p-14 max-w-3xl mx-auto text-center relative overflow-hidden">
            <div style={{ background: "radial-gradient(ellipse 70% 70% at 50% 0%, rgba(99,102,241,0.10) 0%, transparent 70%)" }}
              className="absolute inset-0 pointer-events-none" />
            <h2 className="relative text-2xl md:text-3xl font-extrabold text-slate-900 mb-3">
              See what's available at your address
            </h2>
            <p className="relative text-slate-500 mb-8 max-w-lg mx-auto">
              Enter your zip code and get a personalized list of internet, TV, phone, and mobile options in seconds.
            </p>
            <div className="relative">
              <ZipCheckWidget className="max-w-xl mx-auto" />
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}