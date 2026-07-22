import * as React from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "wouter";
import {
  ArrowRight, CheckCircle, Shield, Users, Clock, Heart,
  Headphones, Globe, BarChart3, Award, TrendingUp, Star,
  Search, X, Phone, MapPin,
} from "lucide-react";
import missionBg from "@/assets/mission-bg.png";
import aboutTechBg from "@/assets/about-tech.png";
import { IsometricStack } from "@/components/isometric-graphic";

const fadeUp = {
  hidden:  { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22,1,0.36,1] as [number, number, number, number] } },
};
const stagger = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.08 } },
};

/* ─── What We Do Illustration ─────────────────────────── */
function ServiceIllustration() {
  return (
    <div className="w-full aspect-square max-w-[480px] mx-auto">
      <svg viewBox="0 0 480 480" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <rect width="480" height="480" rx="24" fill="#EEF2FF"/>
        {/* Central hub */}
        <circle cx="240" cy="240" r="52" fill="rgba(37,99,235,0.10)"/>
        <circle cx="240" cy="240" r="36" fill="#2563EB"/>
        {/* Globe */}
        <circle cx="240" cy="240" r="18" stroke="white" strokeWidth="1.4" fill="none"/>
        <ellipse cx="240" cy="240" rx="10" ry="18" stroke="white" strokeWidth="1.2" fill="none"/>
        <line x1="222" y1="240" x2="258" y2="240" stroke="white" strokeWidth="1.4"/>
        <line x1="240" y1="222" x2="240" y2="258" stroke="white" strokeWidth="1.2"/>

        {/* 4 satellite nodes */}
        <line x1="240" y1="204" x2="240" y2="128" stroke="rgba(37,99,235,0.4)" strokeWidth="1.5" strokeDasharray="5 6"/>
        <line x1="276" y1="240" x2="350" y2="200" stroke="rgba(37,99,235,0.4)" strokeWidth="1.5" strokeDasharray="5 6"/>
        <line x1="240" y1="276" x2="240" y2="352" stroke="rgba(37,99,235,0.4)" strokeWidth="1.5" strokeDasharray="5 6"/>
        <line x1="204" y1="240" x2="130" y2="200" stroke="rgba(37,99,235,0.4)" strokeWidth="1.5" strokeDasharray="5 6"/>

        <circle cx="240" cy="112" r="28" fill="#0F172A"/>
        <circle cx="362" cy="192" r="26" fill="#0F172A"/>
        <circle cx="240" cy="368" r="26" fill="#0F172A"/>
        <circle cx="118" cy="192" r="26" fill="#0F172A"/>

        {/* Headphones icon in top node */}
        <circle cx="240" cy="112" r="11" stroke="white" strokeWidth="1.4" fill="none"/>
        <line x1="229" y1="109" x2="229" y2="115" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
        <line x1="251" y1="109" x2="251" y2="115" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>

        {/* Globe icon in right node */}
        <circle cx="362" cy="192" r="11" stroke="white" strokeWidth="1.3" fill="none"/>
        <ellipse cx="362" cy="192" rx="7" ry="11" stroke="white" strokeWidth="1" fill="none"/>
        <line x1="351" y1="192" x2="373" y2="192" stroke="white" strokeWidth="1.2"/>

        {/* Chart icon in bottom node */}
        <rect x="231" y="360" width="4" height="10" rx="1" fill="white"/>
        <rect x="237" y="364" width="4" height="6" rx="1" fill="white"/>
        <rect x="243" y="357" width="4" height="13" rx="1" fill="white"/>

        {/* Shield icon in left node */}
        <path d="M118 184 L118 194 C118 198 121 201 124 202 C127 201 130 198 130 194 L130 184 Z" stroke="white" strokeWidth="1.3" fill="none"/>

        {/* Outer small nodes */}
        <circle cx="140" cy="340" r="14" fill="#CBD5E1"/>
        <circle cx="340" cy="340" r="14" fill="#CBD5E1"/>
        <circle cx="100" cy="240" r="10" fill="#CBD5E1"/>
        <circle cx="380" cy="100" r="10" fill="#CBD5E1"/>

        <line x1="118" y1="218" x2="116" y2="230" stroke="rgba(37,99,235,0.2)" strokeWidth="1" strokeDasharray="3 5"/>
        <line x1="360" y1="218" x2="372" y2="240" stroke="rgba(37,99,235,0.2)" strokeWidth="1" strokeDasharray="3 5"/>
        <line x1="258" y1="358" x2="326" y2="344" stroke="rgba(37,99,235,0.2)" strokeWidth="1" strokeDasharray="3 5"/>
        <line x1="222" y1="358" x2="154" y2="344" stroke="rgba(37,99,235,0.2)" strokeWidth="1" strokeDasharray="3 5"/>

        {/* Blue accent dots */}
        <circle cx="310" cy="155" r="5" fill="#3B82F6"/>
        <circle cx="170" cy="160" r="5" fill="#3B82F6"/>
        <circle cx="300" cy="325" r="5" fill="#3B82F6"/>
        <circle cx="180" cy="325" r="5" fill="#3B82F6"/>
      </svg>
    </div>
  );
}

/* ─── Animated Progress Bar ───────────────────────────── */
function ProgressBar({ value, delay = 0 }: { value: number; delay?: number }) {
  const ref = React.useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });
  return (
    <div ref={ref} className="h-2 w-full rounded-full bg-blue-200/60 overflow-hidden">
      <motion.div
        className="h-full rounded-full bg-blue-600"
        initial={{ width: 0 }}
        animate={inView ? { width: `${value}%` } : { width: 0 }}
        transition={{ duration: 1.2, delay, ease: "easeOut" }}
      />
    </div>
  );
}

/* ─── Home Page ───────────────────────────────────────── */
export default function HomePage() {
  const [activeService, setActiveService] = React.useState(0);

  // Hero ZIP availability check
  const [zip, setZip] = React.useState("");
  const [showZipModal, setShowZipModal] = React.useState(false);
  const phoneNumber = "+1-800-555-0199";

  const handleZipSubmit = () => {
    if (!zip.trim()) return;
    setShowZipModal(true);
  };

  const services = [
    { num: "01", label: "Customer Support & Service", icon: Headphones },
    { num: "02", label: "Digital Customer Acquisition", icon: Globe },
    { num: "03", label: "Surveys & Feedback Analytics", icon: BarChart3 },
  ];

  const serviceDetails = [
    {
      headline: "Exceptional Customer Care, Every Time",
      body: "Our dedicated support team responds fast and resolves every issue with professionalism and genuine care — building loyalty that lasts beyond the first interaction.",
    },
    {
      headline: "Connect the Right Customers to the Right Solutions",
      body: "Strategic outreach and targeted digital campaigns that grow your customer base with precision — reaching people who are ready to connect today.",
    },
    {
      headline: "Real Insights That Drive Real Business Results",
      body: "We collect, analyze, and act on genuine customer feedback to continuously improve experiences, strengthen your brand, and deliver measurable growth.",
    },
  ];

  return (
    <div className="flex flex-col w-full overflow-x-hidden">

      {/* ══ HERO ════════════════════════════════════════════════ */}
      <section className="relative min-h-screen flex items-center bg-white overflow-hidden">
        {/* Layered background */}
        <div className="absolute top-0 right-0 w-[60%] h-full bg-gradient-to-bl from-blue-50/70 via-blue-50/10 to-transparent pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-60 pointer-events-none" />
        <div
          className="absolute inset-0 opacity-[0.35] pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(37,99,235,0.14) 1px, transparent 1px)",
            backgroundSize: "36px 36px",
            maskImage: "radial-gradient(ellipse 70% 60% at 75% 40%, black 0%, transparent 70%)",
            WebkitMaskImage: "radial-gradient(ellipse 70% 60% at 75% 40%, black 0%, transparent 70%)",
          }}
        />

        <div className="container mx-auto px-6 lg:px-16 pt-28 pb-16 lg:pb-24 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

            {/* LEFT */}
            <motion.div initial="hidden" animate="visible" variants={stagger}>
              <motion.div variants={fadeUp} className="inline-flex items-center gap-2.5 rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-sm font-medium text-blue-600 mb-8">
                <span className="h-2 w-2 rounded-full bg-blue-500 animate-pulse" />
                Internet Solutions Company · 10+ Years
              </motion.div>

              <motion.h1 variants={fadeUp}
                className="font-black text-slate-900 leading-[1.04] tracking-tight mb-6"
                style={{ fontSize: "clamp(2.6rem, 5.5vw, 5.2rem)" }}>
                Connecting.<br />
                Customers.<br />
                <span className="gradient-text">Solutions.</span>
              </motion.h1>

              <motion.p variants={fadeUp} className="text-slate-500 text-lg leading-relaxed mb-10 max-w-md">
                ZSolutionz helps customers find reliable home internet and connectivity solutions —
                professional service, dedicated support, real results.
              </motion.p>

              <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-3 mb-8">
                <Link href="/contact"
                  className="btn-glow inline-flex items-center justify-center gap-2.5 rounded-full bg-blue-600 text-white font-semibold text-sm h-14 px-8 hover:bg-blue-700 transition-colors shadow-sm group">
                  Get In Touch
                  <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
                </Link>
                <Link href="/about"
                  className="inline-flex items-center justify-center gap-2.5 rounded-full border border-slate-200 text-slate-700 font-semibold text-sm h-14 px-8 hover:bg-slate-50 hover:border-slate-300 transition-all">
                  Learn More
                </Link>
              </motion.div>

              {/* ZIP availability check */}
              <motion.div variants={fadeUp} className="mb-10 max-w-md">
                <div className="flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-4 h-14 shadow-sm">
                  <MapPin className="text-blue-600 shrink-0" size={18} />
                  <input
                    value={zip}
                    onChange={(e) => setZip(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && handleZipSubmit()}
                    placeholder="Enter Your ZIP Code"
                    className="flex-1 h-full bg-transparent outline-none text-sm text-slate-700 placeholder:text-slate-400"
                  />
                  <button
                    onClick={handleZipSubmit}
                    className="inline-flex items-center gap-1.5 rounded-xl bg-blue-600 text-white font-semibold text-sm h-10 px-5 hover:bg-blue-700 transition-colors shrink-0"
                  >
                    Search
                  </button>
                </div>
              </motion.div>

              {/* Trust row */}
              <motion.div variants={fadeUp} className="pt-8 border-t border-slate-100 flex flex-wrap gap-6">
                {[
                  { icon: Award, label: "10+ Years Experience" },
                  { icon: Users, label: "500+ Customers" },
                  { icon: Shield, label: "Trusted Service" },
                ].map((b, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <b.icon size={15} className="text-blue-500" strokeWidth={1.5} />
                    <span className="text-slate-500 text-sm font-medium">{b.label}</span>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* RIGHT — isometric illustration */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease: [0.22,1,0.36,1] }}
              className="relative hidden lg:block"
            >
              <IsometricStack className="max-w-[560px] mx-auto animate-float-y" />

              {/* Floating stat card */}
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.6 }}
                className="absolute top-6 right-2 glass-card rounded-2xl px-5 py-4 flex items-center gap-3"
              >
                <div className="h-10 w-10 rounded-xl bg-blue-600 flex items-center justify-center shrink-0">
                  <TrendingUp size={18} className="text-white" />
                </div>
                <div>
                  <div className="text-slate-900 font-bold text-sm">99.9% Uptime</div>
                  <div className="text-slate-500 text-xs">Reliable connectivity</div>
                </div>
              </motion.div>

              {/* Floating support card */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1, duration: 0.6 }}
                className="absolute bottom-2 left-0 glass-card rounded-2xl px-5 py-4 flex items-center gap-3"
              >
                <div className="h-10 w-10 rounded-xl bg-blue-50 flex items-center justify-center shrink-0">
                  <Headphones size={18} className="text-blue-600" />
                </div>
                <div>
                  <div className="text-slate-900 font-bold text-sm">Dedicated Support</div>
                  <div className="text-slate-500 text-xs">Real people, real help</div>
                </div>
              </motion.div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ══ ZIP AVAILABILITY MODAL ══════════════════════════════ */}
      {showZipModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 backdrop-blur-sm px-4"
          onClick={() => setShowZipModal(false)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-md rounded-2xl bg-white p-8 shadow-2xl"
          >
            <button
              onClick={() => setShowZipModal(false)}
              className="absolute top-5 right-5 text-slate-400 hover:text-slate-600 transition-colors"
              aria-label="Close"
            >
              <X size={20} />
            </button>

            <h3 className="text-xl font-bold text-slate-900 mb-6">
              Check Availability
            </h3>

            <p className="text-center text-slate-700 mb-4">
              Options may be available in <span className="font-bold">{zip}</span>.
            </p>

            <p className="text-center text-slate-500 text-sm mb-6">
              Availability is subject to confirmation by full address and
              provider coverage.
            </p>

            <a
              href={`tel:${phoneNumber}`}
              className="flex items-center justify-center gap-2 h-12 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors mb-4"
            >
              <Phone size={16} fill="currentColor" />
              Call to Review Options
            </a>

            <p className="text-center text-xs text-slate-400 leading-relaxed">
              Results are estimates only. Actual availability, speeds,
              pricing, and terms may vary.
            </p>
          </div>
        </div>
      )}

      {/* ══ STATS STRIP ═════════════════════════════════════════ */}
      <section className="bg-slate-900 py-10 border-y border-slate-800">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { num: "10+", label: "Years in Business" },
              { num: "500+", label: "Customers Served" },
              { num: "3", label: "Core Services" },
              { num: "100%", label: "Customer Focus" },
            ].map((s, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.08, duration: 0.5 }}>
                <div className="text-3xl md:text-4xl font-black text-white mb-1">{s.num}</div>
                <div className="text-slate-400 text-sm">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ WHAT WE DO ══════════════════════════════════════════ */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-6 lg:px-16">
          {/* Section header row */}
          <div className="flex items-start justify-between border-b border-slate-100 pb-6 mb-16 md:mb-24">
            <span className="text-slate-400 text-xs font-semibold uppercase tracking-[0.2em]">What We Do</span>
            <span className="text-slate-300 text-sm font-light">02</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* LEFT — text + numbered list */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
              <motion.h2 variants={fadeUp} className="font-black text-slate-900 leading-[1.08] mb-8"
                style={{ fontSize: "clamp(2rem, 3.5vw, 3.2rem)" }}>
                Connecting You to<br />Reliable Solutions
              </motion.h2>

              <motion.div variants={fadeUp} className="mb-10">
                <Link href="/contact"
                  className="inline-flex items-center gap-2 rounded-md bg-blue-600 text-white font-semibold text-sm h-11 px-6 hover:bg-blue-700 transition-colors group">
                  Get in Touch
                  <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </motion.div>

              {/* Numbered list */}
              <div className="space-y-0 divide-y divide-slate-100">
                {services.map((s, i) => (
                  <motion.button key={i} variants={fadeUp}
                    onClick={() => setActiveService(i)}
                    className={`w-full flex items-center justify-between py-5 text-left group transition-all duration-200 ${
                      activeService === i ? "opacity-100" : "opacity-40 hover:opacity-60"
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <span className="text-xs font-black text-blue-500 tracking-widest">{s.num}</span>
                      <span className={`font-bold text-base md:text-lg ${activeService === i ? "text-slate-900" : "text-slate-600"}`}>
                        {s.label}
                      </span>
                    </div>
                    <ArrowRight size={18} className={`shrink-0 transition-transform duration-300 ${
                      activeService === i ? "text-blue-600 translate-x-1" : "text-slate-300"
                    }`} />
                  </motion.button>
                ))}
              </div>

              {/* Active service description */}
              <motion.div key={activeService} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35 }}
                className="mt-8 p-6 rounded-xl bg-blue-50 border border-blue-100">
                <p className="text-slate-600 text-sm leading-relaxed">{serviceDetails[activeService].body}</p>
              </motion.div>
            </motion.div>

            {/* RIGHT — illustration */}
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}>
              <ServiceIllustration />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══ PERFORMANCE / TRACK RECORD ══════════════════════════ */}
      <section className="py-20 md:py-32 bg-[#EEF2FF]">
        <div className="container mx-auto px-6 lg:px-16">
          {/* Section header row */}
          <div className="flex items-start justify-between border-b border-blue-200/60 pb-6 mb-16 md:mb-24">
            <span className="text-slate-500 text-xs font-semibold uppercase tracking-[0.2em]">Track Record</span>
            <span className="text-blue-300 text-sm font-light">03</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            {/* LEFT */}
            <motion.div className="lg:col-span-5" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
              <motion.h2 variants={fadeUp} className="font-black text-slate-900 leading-[1.08] mb-5"
                style={{ fontSize: "clamp(1.8rem, 3vw, 2.8rem)" }}>
                Consistent results.<br />Every time.
              </motion.h2>
              <motion.p variants={fadeUp} className="text-slate-500 text-base leading-relaxed mb-8 max-w-sm">
                A decade of connecting customers with reliable internet solutions, building trust one interaction at a time.
              </motion.p>
              <motion.div variants={fadeUp}>
                <Link href="/contact"
                  className="inline-flex items-center gap-2 rounded-md bg-blue-600 text-white font-semibold text-sm h-11 px-6 hover:bg-blue-700 transition-colors group">
                  Contact Us
                  <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </motion.div>
            </motion.div>

            {/* RIGHT — stats with progress bars */}
            <div className="lg:col-span-7 space-y-8">
              {[
                { label: "Customer Satisfaction",  value: 98, display: "98%",  desc: "Customers rate our service as excellent or very good." },
                { label: "Years of Experience",    value: 84, display: "10+",  desc: "Over a decade of professional service and industry knowledge." },
                { label: "Customers Served",       value: 75, display: "500+", desc: "Hundreds of satisfied customers connected to reliable solutions." },
              ].map((stat, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }} transition={{ delay: i * 0.12, duration: 0.5 }}
                  className="grid grid-cols-[1fr_auto] gap-x-8 items-center">
                  <div>
                    <ProgressBar value={stat.value} delay={0.3 + i * 0.15} />
                  </div>
                  <div className="text-right min-w-[70px]">
                    <span className="font-black text-slate-900 leading-none" style={{ fontSize: "clamp(2rem, 3vw, 2.8rem)" }}>
                      {stat.display}
                    </span>
                  </div>
                  <div className="col-span-2 mt-1.5">
                    <span className="font-semibold text-slate-700 text-sm">{stat.label}</span>
                    <span className="text-slate-400 text-sm ml-2">{stat.desc}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══ WHY CHOOSE ══════════════════════════════════════════ */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-6 lg:px-16">
          {/* Section header row */}
          <div className="flex items-start justify-between border-b border-slate-100 pb-6 mb-16 md:mb-20">
            <span className="text-slate-400 text-xs font-semibold uppercase tracking-[0.2em]">Why Us</span>
            <span className="text-slate-300 text-sm font-light">04</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
              <motion.h2 variants={fadeUp} className="font-black text-slate-900 leading-[1.08] mb-6"
                style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)" }}>
                Why Choose<br />ZSolutionz
              </motion.h2>
              <motion.p variants={fadeUp} className="text-slate-500 text-lg leading-relaxed">
                The qualities that set us apart and keep our customers coming back — every single time.
              </motion.p>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
              className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {[
                { icon: Shield, title: "Reliable Service",       desc: "Helping customers find the right connectivity solutions." },
                { icon: Users,  title: "Professional Team",      desc: "Experienced sales and support professionals." },
                { icon: Clock,  title: "Fast Response",          desc: "Quick, efficient assistance when you need it." },
                { icon: Heart,  title: "Customer Focused",       desc: "Delivering a seamless, memorable experience." },
              ].map((card, i) => (
                <motion.div key={i} variants={fadeUp}
                  className="p-6 rounded-2xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/30 transition-all duration-300 group">
                  <div className="h-11 w-11 rounded-xl bg-slate-50 flex items-center justify-center text-blue-600 mb-4 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                    <card.icon size={20} strokeWidth={1.5} />
                  </div>
                  <h3 className="font-bold text-slate-900 text-sm mb-1.5">{card.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{card.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══ MISSION ═════════════════════════════════════════════ */}
      <section className="py-20 md:py-32 bg-slate-50 border-y border-slate-100">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="flex items-start justify-between border-b border-slate-200 pb-6 mb-16 md:mb-20">
            <span className="text-slate-400 text-xs font-semibold uppercase tracking-[0.2em]">Our Mission</span>
            <span className="text-slate-300 text-sm font-light">05</span>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
              <motion.h2 variants={fadeUp} className="font-black text-slate-900 leading-tight mb-8"
                style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)" }}>
                Customer-inspired.<br />
                <span className="text-blue-600">Client Driven.</span>
              </motion.h2>
              <motion.p variants={fadeUp} className="text-slate-500 text-lg leading-relaxed mb-8">
                Connect customers with reliable and innovative technology solutions that improve communication, productivity, and everyday life.
              </motion.p>
              <motion.ul variants={stagger} className="space-y-3">
                {[
                  "Personalized solutions tailored to each customer",
                  "Dedicated support and professional guidance",
                  "Trusted technology and connectivity partners",
                  "Focus on quality service and customer experience",
                ].map((item, i) => (
                  <motion.li key={i} variants={fadeUp} className="flex items-center gap-3">
                    <CheckCircle className="text-blue-500 shrink-0" size={16} />
                    <span className="text-slate-600 text-sm">{item}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}
              className="relative rounded-2xl overflow-hidden aspect-[4/3]">
              <img src={missionBg} alt="Our Mission" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-slate-900/35" />
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: 0.5 }}
                className="absolute bottom-6 left-6 right-6 bg-white rounded-xl p-5 shadow-lg">
                <p className="text-slate-700 font-semibold text-sm italic">
                  "To unite a business that connects people around the globe, you need to know what you stand for."
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══ CTA ════════════════════════════════════════════════ */}
      <section className="py-20 md:py-28 bg-blue-600">
        <div className="container mx-auto px-6 lg:px-16 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.h2 variants={fadeUp} className="font-black text-white mb-4"
              style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)" }}>
              Ready to Get Connected?
            </motion.h2>
            <motion.p variants={fadeUp} className="text-blue-100 text-lg max-w-xl mx-auto mb-10">
              Reach out today and discover how ZSolutionz can connect your customers with the solutions they deserve.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-white text-blue-600 font-bold h-13 px-10 hover:bg-blue-50 transition-all shadow-md">
                Contact Us <ArrowRight size={18} />
              </Link>
              <Link href="/join"
                className="inline-flex items-center justify-center gap-2 rounded-md border-2 border-white/35 text-white font-bold h-13 px-10 hover:bg-white/10 hover:border-white/60 transition-all">
                Join Our Team
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}