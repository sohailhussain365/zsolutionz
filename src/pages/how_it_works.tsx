import { motion } from "framer-motion";
import { Link } from "wouter";
import {
  MapPin, ListChecks, PhoneCall, ClipboardCheck, ChevronRight,
  ShieldCheck, ArrowRight, Lock,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
};
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.08 } } };

const steps = [
  {
    number: "01",
    icon: MapPin,
    title: "Enter Your ZIP Code",
    desc: "Enter your ZIP code to see which internet, TV, home phone, and mobile service options are available in your area.",
    gradient: "from-blue-500 to-indigo-500",
  },
  {
    number: "02",
    icon: ListChecks,
    title: "Compare Available Plans",
    desc: "Compare providers, speeds, pricing, features, and plan options to find the best service for your needs.",
    gradient: "from-indigo-500 to-violet-500",
  },
  {
    number: "03",
    icon: PhoneCall,
    title: "Speak With Our Team",
    desc: "Our specialists will answer your questions, explain your options, and guide you through the ordering process.",
    gradient: "from-violet-500 to-fuchsia-500",
  },
  {
    number: "04",
    icon: ClipboardCheck,
    title: "Complete Your Order",
    desc: "Choose your preferred service, and we'll help coordinate your new order with the provider or authorized partner.",
    gradient: "from-fuchsia-500 to-pink-500",
  },
];

export default function HowItWorksPage() {
  return (
    <div className="flex flex-col w-full overflow-x-hidden">

      {/* ══ HERO ════════════════════════════════════════════════ */}
      <section className="relative bg-gradient-to-b from-indigo-50/70 to-white pt-32 pb-16 md:pt-40 md:pb-20 text-center overflow-hidden">
        <div className="absolute top-24 left-8 grid grid-cols-3 gap-3 opacity-40 pointer-events-none">
          {Array.from({ length: 9 }).map((_, i) => (
            <span key={i} className="h-1.5 w-1.5 rounded-full bg-indigo-300" />
          ))}
        </div>
        <div style={{ background: "radial-gradient(ellipse 55% 60% at 85% 30%, rgba(99,102,241,0.12) 0%, transparent 65%)" }}
          className="absolute inset-0 pointer-events-none" />

        <div className="container relative z-10 mx-auto px-6 lg:px-16">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="font-black text-slate-900 tracking-tight leading-[1.05] mb-5"
              style={{ fontSize: "clamp(2.4rem, 4.5vw, 3.6rem)" }}>
              How It Works
            </h1>
            <p className="text-slate-500 text-lg leading-relaxed max-w-2xl mx-auto mb-6">
              We make it easy to compare and order internet, TV, home phone, and mobile services in just a few simple steps.
            </p>
            <div className="h-1 w-14 bg-indigo-600 rounded-full mx-auto" />
          </motion.div>
        </div>
      </section>

      {/* ══ STEPS ═══════════════════════════════════════════════ */}
      <section className="pb-16 md:pb-20 bg-white">
        <div className="container mx-auto px-6 lg:px-16">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
            className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-6 relative">
            {steps.map((s, i) => (
              <motion.div key={i} variants={fadeUp} className="relative">
                <div className="relative rounded-2xl border-2 border-slate-200 bg-white shadow-md hover:shadow-2xl hover:border-indigo-400 hover:-translate-y-1.5 transition-all duration-300 pt-10 pb-8 px-6 flex flex-col items-center text-center h-full">
                  {/* Number badge */}
                  <div className="absolute -top-5 h-11 w-11 rounded-full bg-indigo-600 text-white font-bold text-base flex items-center justify-center shadow-lg shadow-indigo-300 ring-4 ring-white">
                    {s.number}
                  </div>

                  {/* Icon */}
                  <div className="h-16 w-16 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 mb-5 mt-2 ring-1 ring-indigo-200">
                    <s.icon size={26} strokeWidth={1.75} />
                  </div>

                  <h3 className="text-lg font-extrabold text-slate-900 mb-2">{s.title}</h3>
                  <div className="h-0.5 w-8 bg-indigo-200 rounded-full mb-3" />
                  <p className="text-sm text-slate-500 leading-relaxed">{s.desc}</p>
                </div>

                {/* Connector arrow (desktop only, between cards) */}
                {i < steps.length - 1 && (
                  <div className="hidden md:flex absolute top-1/2 -right-3 -translate-y-1/2 z-10 h-8 w-8 rounded-full bg-white border-2 border-indigo-200 items-center justify-center shadow-sm">
                    <ChevronRight size={16} className="text-indigo-500" />
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ══ DISCLAIMER STRIP ════════════════════════════════════ */}
      <section className="pb-16 md:pb-20 bg-white">
        <div className="container mx-auto px-6 lg:px-16">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="rounded-2xl border-2 border-indigo-100 bg-indigo-50/40 p-6 md:p-7 flex items-start gap-4">
            <div className="h-9 w-9 rounded-full bg-indigo-600 flex items-center justify-center shrink-0">
              <ShieldCheck size={18} className="text-white" />
            </div>
            <p className="text-sm text-slate-600 leading-relaxed">
              <span className="font-bold text-slate-900">ZSolutionz LLC</span> is an independent internet, TV, home phone, and mobile service comparison and ordering assistance platform. Service availability, pricing, speeds, promotions, installation timelines, and provider terms may vary by provider and service address.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ══ CTA ═════════════════════════════════════════════════ */}
      <section className="pb-20 md:pb-28 bg-white text-center">
        <div className="container mx-auto px-6 lg:px-16">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <Link href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-indigo-600 text-white font-bold text-sm h-14 px-9 hover:bg-indigo-700 transition-colors shadow-md shadow-indigo-200">
              Check Availability Now <ArrowRight size={16} />
            </Link>
            <p className="flex items-center justify-center gap-1.5 text-xs text-slate-400 mt-4">
              <Lock size={12} /> Your information is secure and will never be shared.
            </p>
          </motion.div>
        </div>
      </section>

    </div>
  );
}