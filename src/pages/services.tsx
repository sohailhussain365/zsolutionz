import { motion } from "framer-motion";
import { Link } from "wouter";
import {
  Wifi, Tv, Phone, Smartphone, ArrowRight,
  ShieldCheck, DollarSign, Headphones, Lock,
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

export default function ServicesPage() {
  return (
    <div className="flex flex-col w-full overflow-x-hidden">
      <section className="relative bg-slate-50/60 pt-32 pb-20 md:pt-40 md:pb-24">
        <div className="container mx-auto px-6 lg:px-16">

          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm font-medium text-slate-400 mb-8">
            <Link href="/" className="hover:text-slate-600 transition-colors">Home</Link>
            <span className="text-slate-300">/</span>
            <span className="text-blue-600 font-semibold">Services</span>
          </div>

          {/* Badge */}
          <div className="inline-flex items-center gap-2.5 rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-sm font-medium text-blue-600 mb-8">
            <span className="h-2 w-2 rounded-full bg-blue-500 animate-pulse" />
            Everything Under One Roof
          </div>

          {/* Headline + intro */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start mb-16">
            <h1 className="font-black text-slate-900 tracking-tight leading-[1.05]"
              style={{ fontSize: "clamp(2.4rem, 4.5vw, 3.6rem)" }}>
              Services You<br />Can <span className="text-blue-600">Compare</span>
            </h1>
            <p className="text-slate-500 text-lg leading-relaxed lg:pt-3">
              ZSolutionz helps you compare top Internet, TV, Home Phone, and Mobile plans from trusted providers in one simple place.
            </p>
          </div>

         

{/* Service cards */}
<motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
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
        <Link href="/providers"
          className={`inline-flex items-center gap-1.5 text-sm font-bold ${c.text} group-hover:gap-2.5 transition-all mt-auto`}>
          Learn More <ArrowRight size={14} />
        </Link>
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
    </div>
  );
}