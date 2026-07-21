import { motion } from "framer-motion";
import { Link } from "wouter";
import { useState } from "react";
import {
  Wifi, Tv, Phone, Smartphone, ArrowRight,
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

// Real-world providers grouped by the service category they're commonly known for.
// Names/marks are used solely for identification & comparison purposes (see disclaimer below).
const providers: Record<Category, string[]> = {
  internet: ["AT&T", "Xfinity", "Spectrum", "Frontier", "Optimum", "EarthLink", "T-Mobile Home Internet", "Cox"],
  tv: ["Xfinity", "Spectrum", "Optimum", "Cox", "DirecTV"],
  phone: ["AT&T", "Spectrum", "Frontier", "Optimum", "Cox"],
  mobile: ["AT&T", "T-Mobile Home Internet"],
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
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="w-full flex flex-col items-center text-center">
            <div className="flex items-center gap-2 text-sm font-medium text-slate-400 mb-8 self-start">
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
              Providers We Help <span className="gradient-text">Compare</span>
            </h1>
            <p className="text-xl text-slate-500 max-w-2xl leading-relaxed mb-10">
              We help customers compare internet, TV, home phone, and mobile service options from a wide range of trusted providers available in their area.
            </p>

            <ZipCheckWidget className="w-full" />
          </motion.div>
        </div>
      </section>

      {/* ══ DISCLAIMER ══════════════════════════════════════════ */}
      <section className="py-8 bg-slate-50 border-b border-slate-100">
        <div className="container mx-auto px-6 lg:px-16">
          <p className="text-xs text-slate-400 leading-relaxed max-w-4xl">
            <span className="font-semibold text-slate-500">Important Notice:</span> Service availability, plans, pricing, speeds, promotions, and terms may vary by location and are subject to change without prior notice. Provider names, trademarks, service marks, and logos are used solely for identification and comparison purposes. Their use does not imply any affiliation, endorsement, sponsorship, authorization, or representation by ZSolutionz LLC. All trademarks and brand names remain the property of their respective owners.
          </p>
        </div>
      </section>

      {/* ══ CATEGORY TABS + PROVIDER GRID ═══════════════════════ */}
      <section className="py-16 md:py-28 bg-slate-50">
        <div className="container mx-auto px-6 lg:px-16">

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="max-w-2xl mb-10">
            <span className="section-label">Browse by Category</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">Available Providers</h2>
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
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {providers[active].map((name, i) => (
              <motion.div key={i} variants={fadeUp}
                className="glass-card rounded-3xl p-8 flex flex-col items-start hover:-translate-y-1 hover:border-blue-200 transition-all duration-300">
                <div className="h-12 w-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 mb-5">
                  {(() => {
                    const Icon = categories.find((c) => c.key === active)!.icon;
                    return <Icon size={22} strokeWidth={1.5} />;
                  })()}
                </div>
                <h3 className="text-xl font-extrabold text-slate-900 mb-2">{name}</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-8">
                  Compare {name} {active} plans, pricing, and availability at your address.
                </p>
                <Link href="/contact"
                  className="mt-auto inline-flex items-center justify-center gap-1.5 rounded-xl border border-slate-200 h-11 px-5 text-sm font-bold text-slate-700 hover:border-blue-300 hover:text-blue-600 hover:bg-blue-50 transition-all">
                  View Plans <ArrowRight size={14} />
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ══ TRUST STRIP ═════════════════════════════════════════ */}
   {/* ══ TRUST STRIP ═════════════════════════════════════════ */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-16">

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="max-w-2xl mb-12 text-center mx-auto">
            <span className="section-label">Why Choose Us</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
              Comparing Providers, Made Simple
            </h2>
            <p className="text-slate-500 text-lg leading-relaxed">
              We make it easy to find the right service for your address — no guesswork, no surprises, no pressure.
            </p>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
            className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: BadgeCheck, title: "Verified Partners", desc: "Every provider we list is vetted for service quality and reliability." },
              { icon: ShieldCheck, title: "No Hidden Fees", desc: "Pricing and terms are laid out clearly before you ever sign up." },
              { icon: HeadphonesIcon, title: "Local Support", desc: "Our team helps you compare options and answers questions along the way." },
            ].map((item, i) => (
              <motion.div key={i} variants={fadeUp} className="glass-card rounded-2xl p-8 text-center flex flex-col items-center">
                <div className="h-14 w-14 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 mb-5">
                  <item.icon size={26} strokeWidth={1.5} />
                </div>
                <h3 className="text-lg font-extrabold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}