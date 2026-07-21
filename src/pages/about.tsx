import { motion } from "framer-motion";
import { Link } from "wouter";
import {
  CheckCircle, Star, HeartHandshake, TrendingUp, Zap,
  ArrowRight, Target, Eye, Award, Users
} from "lucide-react";
import { AnimatedCounter } from "@/components/animated-counter";
import { IsometricStack } from "@/components/isometric-graphic";
import aboutTechBg from "@/assets/about-tech.png";
import missionBg from "@/assets/mission-bg.png";
import { AboutGraphic } from "@/components/about-graphics";


const fadeUp    = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22,1,0.36,1] as [number, number, number, number] } } };
const fadeLeft  = { hidden: { opacity: 0, x: -24 }, visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: [0.22,1,0.36,1] as [number, number, number, number] } } };
const fadeRight = { hidden: { opacity: 0, x: 24 }, visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: [0.22,1,0.36,1] as [number, number, number, number] } } };
const stagger   = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.07 } } };

export default function AboutPage() {
  return (
    <div className="flex flex-col w-full overflow-x-hidden">

      {/* ── HERO ─────────────────────────────────────────────── */}
 {/* ── HERO ─────────────────────────────────────────────── */}
<section className="relative min-h-[75vh] flex items-center pb-16 pt-32 md:pb-20 md:pt-40 overflow-hidden bg-white">
  <div className="absolute inset-0 z-0 pointer-events-none">
    <div style={{ background: "radial-gradient(ellipse 60% 70% at 75% 35%, rgba(37,99,235,0.10) 0%, transparent 65%)" }} className="absolute inset-0" />
    <div
      style={{
        backgroundImage: "repeating-radial-gradient(circle at 75% 35%, rgba(37,99,235,0.07) 0px, rgba(37,99,235,0.07) 1px, transparent 1px, transparent 64px)",
      }}
      className="absolute inset-0"
    />
    <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white to-transparent" />
  </div>

  <div className="container relative z-10 mx-auto px-6 lg:px-12">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <div className="flex items-center gap-2 text-xs font-medium text-slate-400 mb-7">
          <Link href="/" className="hover:text-slate-600 transition-colors">Home</Link>
          <span className="text-slate-300">/</span>
          <span className="text-blue-500">About Us</span>
        </div>
        <div className="inline-flex items-center gap-2.5 rounded-full border border-blue-200 bg-blue-50 px-5 py-2.5 text-sm font-medium text-blue-600 mb-7">
          <span className="h-2 w-2 rounded-full bg-blue-500 animate-pulse" />
          Who We Are
        </div>
        <h1 className="font-extrabold text-slate-900 tracking-tight leading-[1.03] mb-6" style={{ fontSize: "clamp(2.5rem, 5.5vw, 4.5rem)" }}>
          About{" "}
          <span className="gradient-text">ZSolutionz</span>
        </h1>
        <p className="text-xl text-slate-500 max-w-2xl leading-relaxed mb-10">
          Committed to connecting customers with reliable internet services while delivering exceptional customer support across every interaction.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link href="/contact"
            className="btn-glow inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 text-white font-semibold h-14 px-8 hover:bg-blue-700 transition-all">
            Contact Us <ArrowRight size={18} />
          </Link>
          <Link href="/join"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 text-slate-700 font-semibold h-14 px-8 hover:bg-slate-50 hover:border-slate-300 transition-all">
            Join Our Team
          </Link>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        className="relative hidden lg:block"
      >
        {/* Expanding signal rings behind the graphic — reinforces "connecting people" */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none" aria-hidden="true">
          {[0, 1, 2].map((i) => (
            <motion.span
              key={i}
              className="absolute rounded-full border border-blue-300/40"
              style={{ width: 200 + i * 130, height: 200 + i * 130 }}
              animate={{ scale: [1, 1.12, 1], opacity: [0.45, 0.1, 0.45] }}
              transition={{ duration: 4 + i, repeat: Infinity, ease: "easeInOut", delay: i * 0.5 }}
            />
          ))}
        </div>

        {/* ▼ CHANGED: AboutGraphic replaces IsometricStack */}
        <AboutGraphic className="max-w-[520px] mx-auto animate-float-y relative" />

        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="absolute top-4 right-2 glass-card rounded-2xl px-5 py-4 flex items-center gap-3"
        >
          <div className="h-10 w-10 rounded-xl bg-blue-600 flex items-center justify-center shrink-0">
            <Award size={18} className="text-white" />
          </div>
          <div>
            <div className="text-slate-900 font-bold text-sm">Est. 2016</div>
            <div className="text-slate-500 text-xs">10+ years strong</div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  </div>
</section>


      {/* ── WHO WE ARE ──────────────────────────────────────── */}
      <section className="py-16 md:py-32 bg-white relative overflow-hidden">
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeLeft}>
              <span className="section-label">Who We Are</span>
              <h2 className="font-extrabold text-slate-900 leading-tight mb-8" style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)" }}>
                Connecting People With<br />
                <span className="gradient-text">Trusted Solutions</span>
              </h2>
              <div className="space-y-5 text-slate-500 text-lg leading-relaxed">
                <p>ZSolutionz is committed to helping customers connect with reliable internet services while providing exceptional customer support. We focus on professionalism, transparency, and long-term customer satisfaction.</p>
                <p>At ZSolutionz, we connect customers with reliable technology, internet, and communication solutions tailored to their needs. Our focus is on delivering exceptional service, trusted partnerships, and a seamless customer experience.</p>
                <p>Founded on the belief that everyone deserves quality connectivity, ZSolutionz has grown into a trusted partner for hundreds of customers — always putting their needs first.</p>
              </div>
              <div className="mt-10 grid grid-cols-2 gap-5">
                {[
                  { num: 10, suffix: "+", label: "Years of Experience" },
                  { num: 500, suffix: "+", label: "Customers Served" },
                ].map((s, i) => (
                  <div key={i} className="glass-card rounded-2xl p-6 text-center">
                    <div className="text-3xl font-extrabold text-blue-600 mb-1">
                      <AnimatedCounter target={s.num} suffix={s.suffix} duration={1600} />
                    </div>
                    <div className="text-sm text-slate-500">{s.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeRight}
              className="relative rounded-3xl overflow-hidden aspect-[4/3]">
              <img src={aboutTechBg} alt="ZSolutionz Technology" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-transparent" />
              <motion.div initial={{ opacity: 0, y: -10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.5 }}
                className="absolute top-6 right-6 glass-card rounded-2xl p-5">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-xl bg-blue-600 flex items-center justify-center shadow-md">
                    <Award size={20} className="text-white" />
                  </div>
                  <div>
                    <div className="text-slate-900 font-bold text-sm">Premium Service</div>
                    <div className="text-slate-500 text-xs">Trusted by hundreds</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── MISSION ─────────────────────────────────────────── */}
      <section className="py-16 md:py-32 bg-slate-50 border-y border-slate-100 relative overflow-hidden">
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeLeft}>
              <span className="section-label">Our Mission</span>
              <h2 className="font-extrabold text-slate-900 leading-tight mb-8" style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)" }}>
                Customer-inspired.<br />
                <span className="gradient-text">Client Driven.</span>
              </h2>
              <p className="text-slate-500 text-lg leading-relaxed mb-10">
                Connect customers with reliable and innovative technology solutions that improve communication, productivity, and everyday life. We strive to deliver exceptional service, build lasting relationships, and create value through trusted partnerships and customer-focused support.
              </p>
              <motion.ul initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="space-y-3">
                {[
                  "Personalized solutions tailored to customer needs",
                  "Dedicated support and professional guidance",
                  "Trusted technology and connectivity partners",
                  "Focus on quality service and customer experience",
                ].map((item, i) => (
                  <motion.li key={i} variants={fadeUp}
                    className="flex items-center gap-4 glass-card rounded-xl p-4 hover:border-blue-200 transition-all duration-300">
                    <CheckCircle className="text-blue-500 shrink-0" size={18} />
                    <span className="text-slate-700 font-medium text-sm">{item}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeRight}
              className="relative rounded-3xl overflow-hidden aspect-[4/3]">
              <img src={missionBg} alt="Our Mission" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-blue-900/30" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 }}
                className="absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
                <p className="text-slate-700 font-semibold text-sm italic leading-relaxed">
                  "To unite a business that connects people around the globe, you need to know what you stand for."
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── VISION / MISSION / PURPOSE ──────────────────────── */}
      <section className="py-16 md:py-32 bg-white relative overflow-hidden">
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center max-w-3xl mx-auto mb-12 md:mb-24">
            <span className="section-label">Our Foundation</span>
            <h2 className="font-extrabold text-slate-900 mb-6" style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>Vision, Mission &amp; Purpose</h2>
            <p className="text-slate-500 text-lg">Three pillars that guide every decision we make and every customer we serve.</p>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: Eye,    title: "Our Vision",  desc: "To be the most trusted name in customer connectivity solutions — known for integrity, expertise, and genuine care for every person we serve." },
              { icon: Target, title: "Our Mission", desc: "Connect customers with reliable and innovative technology solutions that improve communication, productivity, and everyday life through exceptional service." },
              { icon: Users,  title: "Our Purpose", desc: "To build lasting relationships between customers and the technology solutions that empower them — creating value, trust, and connection that endures." },
            ].map((item, i) => (
              <motion.div key={i} variants={fadeUp}
                className="glass-card-shimmer rounded-3xl p-10 hover:border-blue-200 hover:shadow-md transition-all duration-500 group relative overflow-hidden">
                <div className="h-16 w-16 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 mb-8 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                  <item.icon size={30} strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-extrabold text-slate-900 mb-4">{item.title}</h3>
                <p className="text-slate-500 leading-relaxed text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── CORE VALUES ─────────────────────────────────────── */}
      <section className="py-16 md:py-32 bg-slate-50 border-t border-slate-100 relative overflow-hidden">
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center max-w-3xl mx-auto mb-12 md:mb-24">
            <span className="section-label">What We Stand For</span>
            <h2 className="font-extrabold text-slate-900 mb-6" style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>Our Core Values</h2>
            <p className="text-slate-500 text-lg">The principles that define our culture and guide our work every day.</p>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { icon: Star,           num: "01", title: "Integrity",              desc: "We operate with honesty and transparency in everything we do — with customers, partners, and each other." },
              { icon: HeartHandshake, num: "02", title: "Customer Commitment",    desc: "Our clients come first, always. We go above and beyond to ensure every customer feels valued and heard." },
              { icon: TrendingUp,     num: "03", title: "Professional Growth",    desc: "We invest in our team's continuous development because a stronger team delivers a stronger customer experience." },
              { icon: Zap,            num: "04", title: "Continuous Improvement", desc: "We never stop evolving. Every interaction, every process, every service — we're always looking to do better." },
            ].map((val, i) => (
              <motion.div key={i} variants={fadeUp}
                className="glass-card rounded-3xl p-8 group hover:border-blue-200 hover:shadow-md transition-all duration-300 relative overflow-hidden">
                <div className="text-xs font-black text-blue-200 tracking-widest mb-6">{val.num}</div>
                <div className="h-14 w-14 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                  <val.icon size={26} strokeWidth={1.5} />
                </div>
                <h3 className="text-lg font-extrabold text-slate-900 mb-3">{val.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{val.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────────── */}
      <section className="py-12 md:py-24 bg-blue-600">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center">
            <h2 className="font-extrabold text-white mb-4" style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)" }}>
              Ready to Work With Us?
            </h2>
            <p className="text-blue-100 text-lg max-w-xl mx-auto mb-10">
              Get in touch today and discover how ZSolutionz can connect your customers with the solutions they deserve.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white text-blue-600 font-semibold h-14 px-10 hover:bg-blue-50 transition-all shadow-lg">
                Contact Us <ArrowRight size={18} />
              </Link>
              <Link href="/join"
                className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/40 text-white font-semibold h-14 px-10 hover:bg-white/10 hover:border-white/60 transition-all">
                Join Our Team
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}