import { motion } from "framer-motion";
import { Headphones, Globe, BarChart3, CheckCircle, Shield, Users, Clock, Heart } from "lucide-react";
import aboutTechBg from "@/assets/about-tech.png";
import missionBg from "@/assets/mission-bg.png";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

export function Marquee() {
  return (
    <div className="bg-blue-600 py-4 overflow-hidden flex">
      <div className="animate-marquee whitespace-nowrap flex items-center space-x-8">
        {[...Array(10)].map((_, i) => (
          <span key={i} className="text-sm md:text-base font-semibold text-white/90 uppercase tracking-widest inline-block px-4">
            The world's leading brands trust ZSolutionz.
          </span>
        ))}
      </div>
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
      `}</style>
    </div>
  );
}

export function LifecycleSection() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">A Connected Lifecycle Empowering the End-to-End Customer Experience</h2>
          <div className="h-1 w-20 bg-blue-500 mx-auto rounded-full"></div>
        </motion.div>

        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {[
            { icon: Headphones, title: "Service & Support", desc: "Round-the-clock professional assistance." },
            { icon: Globe, title: "Digital Customer Acquisition", desc: "Connecting you with the right audience." },
            { icon: BarChart3, title: "Surveys & Feedback Analytics", desc: "Data-driven insights for improvement." }
          ].map((item, i) => (
            <motion.div key={i} variants={fadeInUp} className="glass-card p-8 rounded-2xl hover:border-blue-300 transition-all group">
              <div className="h-14 w-14 rounded-full bg-blue-50 flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors text-blue-600">
                <item.icon size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
              <p className="text-slate-500">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export function OverviewSection() {
  return (
    <section className="py-24 relative overflow-hidden border-t border-slate-100">
      <div className="absolute inset-0 z-0">
        <img src={aboutTechBg} alt="Abstract Tech" className="w-full h-full object-cover opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-white/70" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-2xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp}>
            <h2 className="text-4xl md:text-6xl font-bold text-slate-900 mb-8">Simple. Reliable. Connected.</h2>
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed mb-8">
              We help customers explore internet solutions and provide support throughout the sign-up process. Our goal is to deliver a smooth customer experience through professional service and dedicated support.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export function WhyChooseSection() {
  const cards = [
    { icon: Shield, title: "Reliable Service", desc: "Helping customers find suitable connectivity solutions." },
    { icon: Users, title: "Professional Team", desc: "Experienced sales and support professionals." },
    { icon: Clock, title: "Fast Response", desc: "Quick assistance and customer support." },
    { icon: Heart, title: "Customer Focused", desc: "Delivering a smooth customer experience." }
  ];

  return (
    <section className="py-24 bg-slate-50 border-t border-slate-100">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Why Choose ZSolutionz</h2>
          <div className="h-1 w-16 bg-blue-500 rounded-full"></div>
        </motion.div>

        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {cards.map((card, i) => (
            <motion.div key={i} variants={fadeInUp} className="glass-card p-6 rounded-2xl hover:-translate-y-1 transition-transform duration-300">
              <div className="h-12 w-12 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600 mb-6">
                <card.icon size={24} />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">{card.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{card.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export function MissionSection() {
  const bullets = [
    "Personalized solutions tailored to customer needs",
    "Dedicated support and professional guidance",
    "Trusted technology and connectivity partners",
    "Focus on quality service and customer experience"
  ];

  return (
    <section className="py-24 relative overflow-hidden border-t border-slate-100">
      <div className="absolute inset-0 z-0">
        <img src={missionBg} alt="Mission" className="w-full h-full object-cover opacity-10" />
        <div className="absolute inset-0 bg-white/92" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Customer-inspired.<br/><span className="gradient-text">Client Driven.</span></h2>
            <p className="text-xl text-slate-700 mb-8 font-medium">To unite a business that connects people around the globe, you need to know what you stand for.</p>
            <p className="text-slate-600 leading-relaxed mb-8">
              Connect customers with reliable and innovative technology solutions that improve communication, productivity, and everyday life. We strive to deliver exceptional service, build lasting relationships, and create value through trusted partnerships and customer-focused support.
            </p>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="glass-card p-8 rounded-3xl">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Our Focus</h3>
            <ul className="space-y-4">
              {bullets.map((bullet, i) => (
                <motion.li key={i} variants={fadeInUp} className="flex items-start">
                  <CheckCircle className="text-blue-600 mt-1 mr-4 shrink-0" size={20} />
                  <span className="text-slate-700">{bullet}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
