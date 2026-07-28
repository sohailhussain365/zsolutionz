import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import {
  Wifi, Tv, Phone, Smartphone, ArrowRight,
  ShieldCheck, DollarSign, Headphones, Lock,
  Award, Users, LayoutGrid, X, PhoneCall,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
};
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.08 } } };

const services = [
  { icon: Wifi, title: "Internet", desc: "Compare high-speed internet plans from top providers in your area.", color: "blue" },
  { icon: Tv, title: "TV Packages", desc: "Find the best TV plans with your favorite channels and premium entertainment.", color: "violet" },
  { icon: Phone, title: "Home Phone", desc: "Compare home phone plans with great calling features and affordable rates.", color: "emerald" },
  { icon: Smartphone, title: "Mobile Plans", desc: "Explore mobile plans and bundles that fit your needs and your budget.", color: "orange" },
];

const colorMap: Record<string, { bg: string; iconBg: string; border: string; text: string }> = {
  blue:    { bg: "bg-blue-50/60",    iconBg: "bg-blue-600",    border: "border-blue-100 hover:border-blue-300",       text: "text-blue-600" },
  violet:  { bg: "bg-violet-50/60",  iconBg: "bg-violet-600",  border: "border-violet-100 hover:border-violet-300",   text: "text-violet-600" },
  emerald: { bg: "bg-emerald-50/60", iconBg: "bg-emerald-600", border: "border-emerald-100 hover:border-emerald-300", text: "text-emerald-600" },
  orange:  { bg: "bg-orange-50/60",  iconBg: "bg-orange-600",  border: "border-orange-100 hover:border-orange-300",   text: "text-orange-600" },
};

const trustItems = [
  { icon: ShieldCheck, title: "Trusted Providers", desc: "We work with top-rated providers." },
  { icon: DollarSign, title: "Best Prices", desc: "Compare plans and find the best deals." },
  { icon: Headphones, title: "Expert Support", desc: "Our team is here to help you anytime." },
  { icon: Lock, title: "Secure & Private", desc: "Your information is safe with us." },
];

import servicelogo from "@/assets/Layer 2.png";

export default function ServicesPage() {
  const [activeService, setActiveService] = useState<typeof services[number] | null>(null);
  const phoneNumber = "+12623992770";

  return (
    <div className="flex flex-col w-full overflow-x-hidden">

      {/* ══ SERVICES HERO ═══════════════════════════════════════ */}
      <section className="relative bg-white overflow-hidden pt-8 lg:pt-24 pb-8 lg:pb-10 min-h-screen lg:min-h-0 flex items-center">
        {/* Layered background */}
        <div className="absolute top-0 right-0 w-[60%] h-full bg-gradient-to-bl from-blue-50/70 via-blue-50/10 to-transparent pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-60 pointer-events-none" />

        <div className="container mx-auto px-6 lg:px-16 relative z-10 w-full">
          <motion.div initial="hidden" animate="visible" variants={stagger}>

            {/* Breadcrumb */}
            <motion.div variants={fadeUp} className="flex items-center gap-2 text-sm font-medium text-slate-400 mb-3 lg:mb-4">
              <Link href="/" className="hover:text-slate-600 transition-colors">Home</Link>
              <span className="text-slate-300">/</span>
              <span className="text-blue-600 font-semibold">Services</span>
            </motion.div>

            {/* Badge */}
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 whitespace-nowrap rounded-full bg-blue-50 px-3.5 py-1 text-xs sm:text-sm font-medium text-blue-600 mb-3 lg:mb-4">
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500 animate-pulse" />
              Everything Under One Roof
            </motion.div>

            {/* Headline + intro + image */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-center mb-6 lg:mb-8">

              {/* LEFT — text */}
              <div>
                <motion.h1 variants={fadeUp}
                  className="font-black text-slate-900 tracking-tight leading-[1.05] mb-3"
                  style={{ fontSize: "clamp(1.9rem, 3.4vw, 2.75rem)" }}>
                  Services You<br />Can <span className="text-blue-600">Compare</span>
                </motion.h1>
                <motion.p variants={fadeUp} className="text-slate-500 text-base lg:text-lg leading-relaxed max-w-md">
                  ZSolutionz helps you compare top Internet, TV, Home Phone, and Mobile plans from trusted providers in one simple place.
                </motion.p>
              </div>

              {/* RIGHT — image */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="relative hidden lg:block"
              >
                <img
                  src={servicelogo}
                  alt="ZSolutionz service comparison illustration"
                  className="max-w-[380px] xl:max-w-[400px] mx-auto animate-float-y"
                />
              </motion.div>
            </div>

            {/* Quick stats */}
            <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-x-8 gap-y-3 border-y border-slate-200 py-4 lg:py-5">
              {[
                { icon: LayoutGrid, value: "15", label: "Core Services" },
                { icon: Users, value: "10k+", label: "Customers Served" },
                { icon: Award, value: "10+", label: "Years in Business" },
              ].map((b, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-blue-100/70 flex items-center justify-center shrink-0">
                    <b.icon size={18} className="text-blue-600" strokeWidth={2} />
                  </div>
                  <div className="flex flex-col leading-tight">
                    <span className="text-slate-900 text-base font-bold">{b.value}</span>
                    <span className="text-slate-500 text-xs font-medium">{b.label}</span>
                  </div>
                  {i < 2 && <span className="hidden sm:block h-8 w-px bg-slate-200 ml-5" />}
                </div>
              ))}
            </motion.div>

          </motion.div>
        </div>
      </section>

      {/* ══ SERVICE CARDS + TRUST ROW ═══════════════════════════ */}
      <section className="relative bg-slate-50/60 pt-14 pb-14 md:pt-16 md:pb-16">
        <div className="container mx-auto px-6 lg:px-16">

          {/* Service cards */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {services.map((s, i) => {
              const c = colorMap[s.color];
              return (
                <motion.div key={i} variants={fadeUp}
                  className={`group relative rounded-3xl ${c.bg} border-2 ${c.border} hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 p-8 text-center flex flex-col items-center`}>
                  <div className={`h-16 w-16 rounded-2xl ${c.iconBg} flex items-center justify-center text-white mb-6 shadow-lg shadow-black/10 group-hover:rotate-6 group-hover:scale-110 transition-transform duration-300`}>
                    <s.icon size={26} strokeWidth={2} />
                  </div>
                  <h3 className="text-lg font-extrabold text-slate-900 mb-2">{s.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed mb-6">{s.desc}</p>
                  <button
                    type="button"
                    onClick={() => setActiveService(s)}
                    className={`inline-flex items-center gap-1.5 text-sm font-bold ${c.text} group-hover:gap-2.5 transition-all mt-auto`}>
                    Learn More <ArrowRight size={14} />
                  </button>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Trust row */}
          <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="text-sm font-bold text-slate-400 uppercase tracking-[0.15em] mb-5">
            Why Choose Us
          </motion.h2>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
            className="rounded-2xl bg-white border border-slate-100 p-8 md:p-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {trustItems.map((t, i) => (
              <motion.div key={i} variants={fadeUp} className="flex items-start gap-3">
                <div className="h-11 w-11 rounded-full border-2 border-blue-600 flex items-center justify-center text-blue-600 shrink-0">
                  <t.icon size={18} strokeWidth={2} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm mb-1">{t.title}</h4>
                  <p className="text-slate-500 text-sm leading-relaxed">{t.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </section>

      {/* ══ LEARN MORE MODAL ════════════════════════════════════ */}
      {activeService && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 backdrop-blur-sm px-4"
          onClick={() => setActiveService(null)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-md rounded-2xl bg-white p-8 shadow-2xl"
          >
            <div className="flex items-start justify-between mb-6">
              <h3 className="text-xl font-bold text-slate-900">{activeService.title}</h3>
              <button
                onClick={() => setActiveService(null)}
                className="text-slate-400 hover:text-slate-600 transition-colors"
                aria-label="Close"
              >
                <X size={20} />
              </button>
            </div>

            <p className="text-center text-slate-700 mb-4">
              Speak with one of our specialists to review {activeService.title.toLowerCase()} plans and pricing available in your area.
            </p>

            <p className="text-center text-slate-500 text-sm mb-6">
              Availability, plans, and pricing are subject to confirmation by full address and provider coverage.
            </p>

            <a
              href={`tel:${phoneNumber}`}
              className="flex items-center justify-center gap-2 h-12 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors mb-4"
            >
              <PhoneCall size={16} fill="currentColor" />
              Call to Review Options
            </a>

            <p className="text-center text-xs text-slate-400 leading-relaxed">
              Results are estimates only. Actual availability, speeds, pricing, and terms may vary.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}