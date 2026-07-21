import { motion } from "framer-motion";
import { Link } from "wouter";
import {
  MapPin, ListChecks, PhoneCall, CheckCircle2, ArrowRight,
  ShieldCheck, Clock, Users,
} from "lucide-react";
import { ZipCheckWidget } from "@/components/shared_zipcheck.tsx";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
};
const stagger = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.07 } } };

const steps = [
  {
    number: "01",
    icon: MapPin,
    title: "Enter your zip code",
    desc: "Tell us where you live and we'll instantly pull up every internet, TV, phone, and mobile provider that actually serves your address — no guesswork.",
  },
  {
    number: "02",
    icon: ListChecks,
    title: "Compare your options",
    desc: "See plans side by side with speeds, channel counts, and pricing laid out clearly, so you can compare providers on your terms, not theirs.",
  },
  {
    number: "03",
    icon: PhoneCall,
    title: "Talk to a real person",
    desc: "Have questions about a bundle or contract terms? Our team is on hand to walk you through the details before you commit to anything.",
  },
  {
    number: "04",
    icon: CheckCircle2,
    title: "Get connected",
    desc: "Once you've picked a plan, we help you complete signup with the provider and confirm your install or activation date.",
  },
];

const highlights = [
  { icon: ShieldCheck, title: "No surprise fees", desc: "Every price we show reflects real terms, not a teaser rate that changes after month one." },
  { icon: Clock, title: "Takes minutes", desc: "Most people find and compare their options in under five minutes flat." },
  { icon: Users, title: "Free for everyone", desc: "Our comparison service costs you nothing, no matter which provider you choose." },
];

export default function HowItWorksPage() {
  return (
    <div className="flex flex-col w-full overflow-x-hidden">

      {/* ══ HERO ════════════════════════════════════════════════ */}
      <section className="relative min-h-[55vh] flex items-center pb-16 pt-32 md:pb-20 md:pt-40 overflow-hidden bg-white">
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
              <span className="text-blue-500">How It Works</span>
            </div>

            <div className="inline-flex items-center gap-3 rounded-full border border-blue-200 bg-blue-50 px-5 py-2.5 text-sm font-medium text-blue-600 mb-8">
              <span className="h-2 w-2 rounded-full bg-blue-500 animate-pulse" />
              Four Simple Steps
            </div>

            <h1 className="font-extrabold text-slate-900 tracking-tight leading-[1.02] mb-6"
              style={{ fontSize: "clamp(2.5rem, 5.5vw, 4.5rem)" }}>
              Finding Your Plan Is <span className="gradient-text">This Easy</span>
            </h1>
            <p className="text-xl text-slate-500 max-w-xl leading-relaxed">
              No hunting through provider websites or sitting on hold. Just enter your zip code and we'll show you exactly what's available at your address.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ══ STEPS ═══════════════════════════════════════════════ */}
      <section className="py-16 md:py-28 bg-slate-50 border-y border-slate-100">
        <div className="container mx-auto px-6 lg:px-16">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="max-w-2xl mb-14">
            <span className="section-label">The Process</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">From Zip Code to Signup</h2>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
            className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {steps.map((s, i) => (
              <motion.div key={i} variants={fadeUp}
                className="glass-card rounded-3xl p-8 flex flex-col hover:-translate-y-1 hover:border-blue-200 transition-all duration-300 relative overflow-hidden">
                <span className="absolute top-6 right-8 text-6xl font-extrabold text-blue-50 select-none leading-none">
                  {s.number}
                </span>
                <div className="h-12 w-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 mb-6 relative z-10">
                  <s.icon size={22} strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-extrabold text-slate-900 mb-2 relative z-10">{s.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed relative z-10">{s.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ══ HIGHLIGHTS ══════════════════════════════════════════ */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-16">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
            className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {highlights.map((item, i) => (
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

      {/* ══ CTA / ZIP CHECK ═════════════════════════════════════ */}
      <section className="py-16 md:py-24 bg-slate-50 border-t border-slate-100">
        <div className="container mx-auto px-6 lg:px-16">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="glass-card rounded-3xl p-10 md:p-14 max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-3">
              Ready to see what's available?
            </h2>
            <p className="text-slate-500 mb-8 max-w-lg mx-auto">
              Enter your zip code below and get a personalized list of providers in seconds.
            </p>
            <ZipCheckWidget className="max-w-xl mx-auto" />
            <Link href="/providers"
              className="inline-flex items-center justify-center gap-1.5 mt-6 text-sm font-bold text-blue-600 hover:text-blue-700 transition-colors">
              Or browse all providers <ArrowRight size={14} />
            </Link>
          </motion.div>
        </div>
      </section>

    </div>
  );
}