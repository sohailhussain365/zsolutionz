import { motion } from "framer-motion";
import { Link } from "wouter";
import { useState } from "react";
import {
  Wifi, Tv, Phone, Smartphone, ArrowRight, Info, Star,
  ShieldCheck, DollarSign, Headphones, Lock, Zap, BadgeCheck,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
};
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.06 } } };

type Category = "internet" | "tv" | "phone" | "mobile";

const categories: { key: Category; label: string; icon: typeof Wifi }[] = [
  { key: "internet", label: "Internet", icon: Wifi },
  { key: "tv", label: "TV", icon: Tv },
  { key: "phone", label: "Home Phone", icon: Phone },
  { key: "mobile", label: "Mobile", icon: Smartphone },
];

interface Provider {
  name: string;
  type: string;
  states: number;
  rating: number;
  reviews: string;
  textColor: string;
  font?: string;
}

// Provider names/marks are used solely for identification & comparison purposes (see disclaimer below).
const providers: Record<Category, Provider[]> = {
  internet: [
    { name: "AT&T", type: "Fiber • DSL • Cable", states: 21, rating: 4.8, reviews: "12,345", textColor: "text-sky-600" },
    { name: "Xfinity", type: "Cable • Fiber • DSL", states: 39, rating: 4.6, reviews: "8,742", textColor: "text-slate-900" },
    { name: "Spectrum", type: "Cable • Internet", states: 41, rating: 4.5, reviews: "9,123", textColor: "text-blue-700" },
    { name: "Frontier", type: "Fiber • DSL • Internet", states: 25, rating: 4.4, reviews: "6,213", textColor: "text-red-600" },
    { name: "Optimum", type: "Cable • Internet • TV", states: 14, rating: 4.3, reviews: "4,512", textColor: "text-slate-900" },
    { name: "Cox", type: "Cable • Internet • Phone", states: 18, rating: 4.2, reviews: "7,823", textColor: "text-teal-500" },
    { name: "T-Mobile Home Internet", type: "5G Home Internet", states: 33, rating: 4.6, reviews: "5,912", textColor: "text-pink-600" },
    { name: "Verizon Home Internet", type: "5G Home Internet", states: 30, rating: 4.6, reviews: "6,411", textColor: "text-red-600" },
  ],
  tv: [
    { name: "Xfinity", type: "Cable • Streaming TV", states: 39, rating: 4.5, reviews: "6,204", textColor: "text-slate-900" },
    { name: "Spectrum", type: "Cable TV", states: 41, rating: 4.4, reviews: "5,340", textColor: "text-blue-700" },
    { name: "Optimum", type: "Cable • TV", states: 14, rating: 4.2, reviews: "2,981", textColor: "text-slate-900" },
    { name: "Cox", type: "Cable TV", states: 18, rating: 4.1, reviews: "3,552", textColor: "text-teal-500" },
    { name: "DirecTV", type: "Satellite TV", states: 50, rating: 4.3, reviews: "9,004", textColor: "text-blue-600" },
  ],
  phone: [
    { name: "AT&T", type: "Home Voice", states: 21, rating: 4.5, reviews: "3,120", textColor: "text-sky-600" },
    { name: "Spectrum", type: "Digital Voice", states: 41, rating: 4.4, reviews: "2,876", textColor: "text-blue-700" },
    { name: "Frontier", type: "Landline • Digital Voice", states: 25, rating: 4.3, reviews: "1,942", textColor: "text-red-600" },
    { name: "Optimum", type: "Home Phone", states: 14, rating: 4.2, reviews: "1,203", textColor: "text-slate-900" },
    { name: "Cox", type: "Home Voice", states: 18, rating: 4.2, reviews: "1,655", textColor: "text-teal-500" },
  ],
  mobile: [
    { name: "AT&T", type: "Unlimited • Prepaid", states: 50, rating: 4.5, reviews: "14,208", textColor: "text-sky-600" },
    { name: "T-Mobile", type: "Unlimited • 5G", states: 50, rating: 4.6, reviews: "16,533", textColor: "text-pink-600" },
  ],
};

const trustItems = [
  { icon: ShieldCheck, title: "Trusted Providers", desc: "We partner with top-rated providers you can trust." },
  { icon: DollarSign, title: "Best Prices", desc: "Compare plans and find the best deals." },
  { icon: Headphones, title: "Expert Support", desc: "Our team is here to help you anytime." },
  { icon: Lock, title: "Secure & Private", desc: "Your information is safe and never shared." },
  { icon: Zap, title: "Fast & Easy", desc: "Compare in minutes and save time & money." },
  { icon: BadgeCheck, title: "No Hidden Fees", desc: "Transparent pricing with no surprises." },
];

export default function ProvidersPage() {
  const [active, setActive] = useState<Category>("internet");

  return (
    <div className="flex flex-col w-full overflow-x-hidden">

      {/* ══ HERO ════════════════════════════════════════════════ */}
      <section className="relative bg-slate-50/60 pt-32 pb-14 md:pt-40 md:pb-16 text-center overflow-hidden">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div style={{ background: "radial-gradient(ellipse 60% 60% at 75% 20%, rgba(37,99,235,0.08) 0%, transparent 60%)" }} className="absolute inset-0" />
        </div>
        <div className="container relative z-10 mx-auto px-6 lg:px-16">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="font-black text-slate-900 tracking-tight leading-[1.05] mb-5"
              style={{ fontSize: "clamp(2.2rem, 4.5vw, 3.4rem)" }}>
              Providers We Help Compare
            </h1>
            <p className="text-slate-500 text-lg leading-relaxed max-w-2xl mx-auto">
              We help customers compare internet, TV, home phone, and mobile service options from a wide range of trusted providers available in their area.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-6 lg:px-16">

        {/* ══ IMPORTANT NOTICE ════════════════════════════════════ */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
          className="rounded-2xl border-2 border-blue-100 bg-blue-50/40 shadow-sm p-7 md:p-8 mb-12">
          <div className="flex items-center gap-2.5 mb-3">
            <div className="h-8 w-8 rounded-full bg-blue-600 flex items-center justify-center shrink-0">
              <Info size={16} className="text-white" />
            </div>
            <h2 className="font-bold text-slate-900 text-base">Important Notice</h2>
          </div>
          <p className="text-sm text-slate-500 leading-relaxed mb-3">
            Service availability, plans, pricing, speeds, promotions, and terms may vary by location and are subject to change without prior notice.
          </p>
          <p className="text-sm text-slate-500 leading-relaxed">
            Provider names, trademarks, service marks, and logos are used solely for identification and comparison purposes. Their use does not imply any affiliation, endorsement, sponsorship, authorization, or representation by{" "}
            <span className="font-semibold text-blue-600">ZSolutionz LLC</span>. All trademarks and brand names remain the property of their respective owners.
          </p>
        </motion.div>

        {/* ══ CATEGORY TABS ═══════════════════════════════════════ */}
        <div className="flex flex-wrap justify-center gap-2.5 mb-10">
          {categories.map((c) => {
            const isActive = active === c.key;
            return (
              <button
                key={c.key}
                onClick={() => setActive(c.key)}
                data-testid={`tab-${c.key}`}
                className={`inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition-all duration-200 ${
                  isActive
                    ? "bg-blue-600 text-white shadow-md shadow-blue-200"
                    : "bg-white text-slate-500 border border-slate-200 hover:border-blue-200 hover:text-blue-600"
                }`}
              >
                <c.icon size={16} strokeWidth={1.75} />
                {c.label}
              </button>
            );
          })}
        </div>

        {/* ══ PROVIDER CARDS ══════════════════════════════════════ */}
        <motion.div key={active} initial="hidden" animate="visible" variants={stagger}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {providers[active].map((p, i) => (
            <motion.div key={i} variants={fadeUp}
              className="rounded-2xl border-2 border-slate-200 bg-white shadow-sm p-6 flex flex-col hover:border-blue-400 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <h3 className={`text-xl font-black mb-3 ${p.textColor}`}>{p.name}</h3>
              <p className="text-sm font-semibold text-slate-700 mb-1">{p.type}</p>
              <p className="text-sm text-slate-400 mb-3">Available in {p.states} States</p>
              <div className="flex items-center gap-1.5 mb-6">
                <Star size={15} className="text-amber-400 fill-amber-400" />
                <span className="text-sm font-bold text-slate-900">{p.rating}</span>
                <span className="text-sm text-slate-400">({p.reviews})</span>
              </div>
              <Link href="/contact"
                className="mt-auto inline-flex items-center justify-center gap-1.5 rounded-xl border border-slate-200 h-11 px-5 text-sm font-bold text-slate-700 hover:border-blue-300 hover:text-blue-600 hover:bg-blue-50 transition-all">
                View Plans <ArrowRight size={14} />
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* ══ TRUST STRIP ═════════════════════════════════════════ */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
          className="rounded-2xl border-2 border-slate-200 bg-white shadow-sm p-8 md:p-10 mb-20 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {trustItems.map((t, i) => (
            <motion.div key={i} variants={fadeUp} className="flex flex-col items-center text-center gap-3">
              <div className="h-12 w-12 rounded-full border-2 border-blue-600 flex items-center justify-center text-blue-600">
                <t.icon size={20} strokeWidth={1.75} />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-sm mb-1">{t.title}</h4>
                <p className="text-slate-500 text-xs leading-relaxed">{t.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </div>
  );
}