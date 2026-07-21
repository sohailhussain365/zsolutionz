import { motion } from "framer-motion";
import { Link } from "wouter";
import {
  TrendingUp, Users, Laptop, ArrowRight,
  CheckCircle, Briefcase, MapPin, Clock, DollarSign, Heart
} from "lucide-react";
import heroBg from "@/assets/hero-bg.png";
import { JoinGraphic } from "@/components/joinus-graphics.tsx";

const fadeUp    = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22,1,0.36,1] as [number, number, number, number] } } };
const fadeLeft  = { hidden: { opacity: 0, x: -24 }, visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: [0.22,1,0.36,1] as [number, number, number, number] } } };
const fadeRight = { hidden: { opacity: 0, x: 24 }, visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: [0.22,1,0.36,1] as [number, number, number, number] } } };
const stagger   = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.08 } } };

export default function JoinPage() {
  return (
    <div className="flex flex-col w-full overflow-x-hidden">

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="relative min-h-[75vh] flex items-center pb-16 pt-32 md:pb-20 md:pt-40 overflow-hidden bg-white">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div style={{ background: "radial-gradient(ellipse 60% 70% at 75% 35%, rgba(37,99,235,0.10) 0%, transparent 65%)" }} className="absolute inset-0" />
          {/* Diagonal ascending lines — a "growth trajectory" motif unique to Join */}
          <div
            style={{
              backgroundImage: "repeating-linear-gradient(115deg, rgba(37,99,235,0.055) 0px, rgba(37,99,235,0.055) 1px, transparent 1px, transparent 42px)",
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
                <span className="text-blue-500">Join Us</span>
              </div>
              <div className="inline-flex items-center gap-2.5 rounded-full border border-green-200 bg-green-50 px-5 py-2.5 text-sm font-medium text-green-700 mb-7">
                <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                We Are Hiring — 3 Open Roles
              </div>
              <h1 className="font-extrabold text-slate-900 tracking-tight leading-[1.03] mb-6" style={{ fontSize: "clamp(2.5rem, 5.5vw, 4.5rem)" }}>
                Build Your Career<br />With{" "}
                <span className="gradient-text">ZSolutionz</span>
              </h1>
              <p className="text-xl text-slate-500 max-w-2xl leading-relaxed mb-10">
                We are looking for motivated individuals who want to grow with us. Join a team that values your skills, supports your development, and rewards your hard work.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#openings"
                  className="btn-glow inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 text-white font-semibold h-14 px-8 hover:bg-blue-700 transition-all">
                  View Openings <ArrowRight size={18} />
                </a>
                <Link href="/about"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 text-slate-700 font-semibold h-14 px-8 hover:bg-slate-50 hover:border-slate-300 transition-all">
                  Learn More
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="relative hidden lg:block"
            >
              {/* Ascending bars — a "growth" signature unique to Join */}
              <div className="absolute -right-4 bottom-8 flex items-end gap-2.5 pointer-events-none" aria-hidden="true">
                {[36, 58, 82, 108].map((h, i) => (
                  <motion.div
                    key={i}
                    className="w-6 rounded-t-md bg-blue-600/15"
                    style={{ height: h }}
                    animate={{ height: [h * 0.55, h, h * 0.55] }}
                    transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut", delay: i * 0.22 }}
                  />
                ))}
              </div>
              <JoinGraphic className="max-w-[520px] mx-auto animate-float-y relative" />
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="absolute top-4 right-2 glass-card rounded-2xl px-5 py-4 flex items-center gap-3"
              >
                <div className="h-10 w-10 rounded-xl bg-blue-600 flex items-center justify-center shrink-0">
                  <Briefcase size={18} className="text-white" />
                </div>
                <div>
                  <div className="text-slate-900 font-bold text-sm">Open Roles</div>
                  <div className="text-slate-500 text-xs">Growing team</div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── WHY WORK WITH US ────────────────────────────────── */}
      <section className="py-16 md:py-32 bg-white relative overflow-hidden">
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center max-w-3xl mx-auto mb-12 md:mb-24">
            <span className="section-label">Why ZSolutionz</span>
            <h2 className="font-extrabold text-slate-900 mb-6" style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>Why Work With Us</h2>
            <p className="text-slate-500 text-lg">We're not just offering jobs — we're offering careers. Here's what makes ZSolutionz a place where people thrive.</p>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: TrendingUp, title: "Growth Opportunities",    desc: "Clear career paths and real advancement. We promote from within and invest in every team member's professional development and upward trajectory." },
              { icon: Users,      title: "Professional Environment",desc: "Work alongside experienced industry professionals in a culture that values collaboration, respect, and excellence in everything we do." },
              { icon: Laptop,     title: "Remote Flexibility",      desc: "Work from wherever you thrive. Our distributed team model gives you the freedom and flexibility to deliver your best work from anywhere." },
            ].map((benefit, i) => (
              <motion.div key={i} variants={fadeUp}
                className="glass-card-shimmer rounded-3xl p-10 group hover:border-blue-200 hover:shadow-md transition-all duration-500 relative overflow-hidden">
                <div className="h-16 w-16 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 mb-8 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                  <benefit.icon size={30} strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-extrabold text-slate-900 mb-4">{benefit.title}</h3>
                <p className="text-slate-500 leading-relaxed text-sm">{benefit.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── TEAM CULTURE ───────────────────────────────────── */}
      <section className="py-16 md:py-32 bg-slate-50 border-y border-slate-100 relative overflow-hidden">
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeLeft}>
              <span className="section-label">Our Culture</span>
              <h2 className="font-extrabold text-slate-900 leading-tight mb-8" style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)" }}>
                A Culture Built on<br />
                <span className="gradient-text">Trust &amp; Growth</span>
              </h2>
              <p className="text-slate-500 text-lg leading-relaxed mb-6">
                At ZSolutionz, we believe that our team is our greatest asset. We foster an environment where every voice is heard, every contribution is valued, and every person has the opportunity to grow.
              </p>
              <p className="text-slate-500 text-lg leading-relaxed mb-10">
                Whether you're starting your career or bringing years of experience, you'll find a team that supports you, challenges you, and celebrates your success.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Heart,       label: "People First"       },
                  { icon: TrendingUp,  label: "Career Growth"      },
                  { icon: CheckCircle, label: "Inclusive Culture"  },
                  { icon: Users,       label: "Team Collaboration" },
                ].map((item, i) => (
                  <div key={i} className="glass-card rounded-xl p-4 flex items-center gap-3 hover:border-blue-200 transition-all duration-300">
                    <item.icon size={16} className="text-blue-500 shrink-0" />
                    <span className="text-slate-700 text-sm font-medium">{item.label}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeRight}
              className="relative rounded-3xl overflow-hidden aspect-[4/3]">
              <img src={heroBg} alt="Team Culture" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/30 to-transparent" />
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 }}
                className="absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
                <div className="text-xl font-extrabold text-slate-900 mb-1">Join Our Growing Team</div>
                <div className="flex items-center gap-2 text-blue-600 text-sm font-medium">
                  <span className="h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse" />
                  3 open positions available
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── OPEN POSITIONS ──────────────────────────────────── */}
      <section id="openings" className="py-16 md:py-32 bg-white relative overflow-hidden">
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center max-w-3xl mx-auto mb-12 md:mb-24">
            <span className="section-label">Careers</span>
            <h2 className="font-extrabold text-slate-900 mb-6" style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>Current Openings</h2>
            <p className="text-slate-500 text-lg">Explore our open positions and find the role that matches your skills and ambitions.</p>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-10">
            {[
              {
                title: "Sales Representative",
                type: "Full-time",
                badge: "bg-green-50 text-green-700 border-green-200",
                icon: DollarSign,
                location: "On-site / Remote",
                desc: "Drive customer acquisition and help clients find the right internet solutions. Build lasting customer relationships and meet performance goals in a dynamic sales environment.",
                perks: ["Competitive base + commission", "Performance bonuses", "Career advancement", "Sales training provided"],
              },
              {
                title: "Customer Support Rep",
                type: "Full-time / Remote",
                badge: "bg-blue-50 text-blue-700 border-blue-200",
                icon: Heart,
                location: "Remote Available",
                desc: "Be the voice of ZSolutionz. Handle customer inquiries with professionalism and care. Resolve issues efficiently and deliver a consistently excellent experience.",
                perks: ["Remote-friendly role", "Paid training program", "Structured schedule", "Team support system"],
              },
              {
                title: "Remote Team Member",
                type: "Remote",
                badge: "bg-purple-50 text-purple-700 border-purple-200",
                icon: Laptop,
                location: "Fully Remote",
                desc: "Join our distributed team from anywhere. Multiple roles available across sales, support, and operations. Bring your skills and grow with a fast-moving company.",
                perks: ["100% remote position", "Flexible schedule", "Multiple role types", "Growth opportunities"],
              },
            ].map((job, i) => (
              <motion.div key={i} variants={fadeUp}
                className="glass-card rounded-3xl p-8 flex flex-col group hover:border-blue-200 hover:shadow-md transition-all duration-500 relative overflow-hidden">
                <div className="flex items-start justify-between mb-6">
                  <div className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold border ${job.badge}`}>
                    {job.type}
                  </div>
                  <div className="h-10 w-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                    <job.icon size={18} strokeWidth={1.5} />
                  </div>
                </div>

                <h3 className="text-xl font-extrabold text-slate-900 mb-2">{job.title}</h3>
                <div className="flex items-center gap-1.5 text-slate-400 text-sm mb-5">
                  <MapPin size={13} />
                  <span>{job.location}</span>
                </div>
                <p className="text-slate-500 leading-relaxed mb-6 text-sm flex-grow">{job.desc}</p>

                <ul className="space-y-2.5 mb-8">
                  {job.perks.map((perk, j) => (
                    <li key={j} className="flex items-center gap-2.5 text-sm text-slate-600">
                      <CheckCircle size={14} className="text-blue-500 shrink-0" />
                      {perk}
                    </li>
                  ))}
                </ul>

                <Link href="/contact" data-testid={`link-apply-${i}`}
                  className="mt-auto inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 text-white font-semibold h-12 px-6 hover:bg-blue-700 transition-all duration-300 hover:shadow-md w-full">
                  Apply Now
                  <ArrowRight size={16} />
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── BENEFITS GRID ───────────────────────────────────── */}
      <section className="py-14 md:py-28 bg-slate-50 border-t border-slate-100 relative overflow-hidden">
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center max-w-3xl mx-auto mb-10 md:mb-20">
            <span className="section-label">Employee Benefits</span>
            <h2 className="font-extrabold text-slate-900 mb-6" style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)" }}>What You Can Expect</h2>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: DollarSign, title: "Competitive Pay",    desc: "Market-rate salaries with performance bonuses" },
              { icon: TrendingUp, title: "Career Growth",      desc: "Clear paths for advancement and promotion" },
              { icon: Clock,      title: "Flexible Hours",     desc: "Work schedules that fit your lifestyle" },
              { icon: Users,      title: "Great Team",         desc: "Collaborative, supportive professionals" },
              { icon: Laptop,     title: "Remote Work",        desc: "Work from home options available" },
              { icon: Heart,      title: "Supportive Culture", desc: "People-first environment, always" },
              { icon: Briefcase,  title: "Training Provided",  desc: "Paid onboarding and skills development" },
              { icon: CheckCircle,title: "Job Security",       desc: "Stable, growing company with strong values" },
            ].map((b, i) => (
              <motion.div key={i} variants={fadeUp}
                className="glass-card rounded-2xl p-6 text-center group hover:border-blue-200 hover:shadow-sm transition-all duration-300">
                <div className="h-12 w-12 mx-auto rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 mb-4 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                  <b.icon size={20} strokeWidth={1.5} />
                </div>
                <h4 className="text-sm font-extrabold text-slate-900 mb-1.5">{b.title}</h4>
                <p className="text-slate-400 text-xs leading-relaxed">{b.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── APPLICATION CTA ─────────────────────────────────── */}
      <section className="py-14 md:py-28 bg-blue-600">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <span className="inline-flex items-center gap-2 text-blue-200 text-xs font-bold uppercase tracking-wider mb-6">
              <span className="h-px w-6 bg-blue-300" /> Get Started
            </span>
            <h2 className="font-extrabold text-white mb-6" style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>
              Ready to Join the Team?
            </h2>
            <p className="text-blue-100 text-lg max-w-xl mx-auto mb-10">
              Send your resume to info@zsolutionz.com or reach out through our contact form. We'll be in touch soon.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white text-blue-600 font-semibold h-14 px-10 hover:bg-blue-50 transition-all shadow-lg">
                Contact Us <ArrowRight size={18} />
              </Link>
              <a href="mailto:info@zsolutionz.com?subject=Job Application"
                className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/40 text-white font-semibold h-14 px-10 hover:bg-white/10 hover:border-white/60 transition-all">
                Email Us Directly
              </a>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}