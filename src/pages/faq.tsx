import { motion, AnimatePresence } from "framer-motion";
import { Link } from "wouter";
import { useState } from "react";
import { ChevronDown, HelpCircle, MessageCircleQuestion, ShieldCheck, Headphones } from "lucide-react";
import faqLogo from "@/assets/Layer 17.png";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
};
const stagger = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.07 } } };

type FaqItem = { q: string; a: string };

const faqItems: FaqItem[] = [
  {
    q: "Who is ZSolutionz LLC?",
    a: "ZSolutionz LLC operates as an independent comparison and ordering assistance platform, helping customers compare internet, TV, home phone, and mobile service options and complete new service orders.",
  },
  {
    q: "How do I check availability and compare plans?",
    a: "Simply enter your ZIP code or contact our team. We'll help you check available service options in your area, with final availability confirmed using your complete service address.",
  },
  {
    q: "Are prices and speeds guaranteed?",
    a: "No. Pricing, speeds, packages, taxes, fees, promotions, and terms vary by provider and service address and are subject to confirmation before an order is placed.",
  },
  {
    q: "Do you handle existing provider account issues?",
    a: "No. We do not manage existing provider accounts, billing, logins, technical support, outages, or repair requests. For assistance with an existing service, please get in touch with your provider directly through their official customer support channels.",
  },
  {
    q: "How is my information used?",
    a: "The information you provide is used to help check service availability, compare available options, and assist with your service request. For more information, please review our Privacy Policy.",
  },
];

function FaqRow({ item, isOpen, onClick }: { item: FaqItem; isOpen: boolean; onClick: () => void }) {
  return (
    <div className="glass-card rounded-2xl overflow-hidden">
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
      >
        <span className="text-base md:text-lg font-bold text-slate-900">{item.q}</span>
        <span className={`shrink-0 h-8 w-8 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}>
          <ChevronDown size={16} strokeWidth={2} />
        </span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="px-6 pb-5 text-sm md:text-base text-slate-500 leading-relaxed">
              {item.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQPage() {
  const [openKey, setOpenKey] = useState<string | null>("0");

  return (
    <div className="flex flex-col w-full overflow-x-hidden">

      {/* ══ HERO ════════════════════════════════════════════════ */}
      <section className="relative bg-white overflow-hidden pt-20 lg:pt-24 pb-12 lg:pb-20">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div style={{ background: "radial-gradient(ellipse 60% 60% at 75% 30%, rgba(37,99,235,0.10) 0%, transparent 60%)" }} className="absolute inset-0" />
          <div style={{ backgroundImage: "linear-gradient(rgba(37,99,235,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(37,99,235,0.05) 1px, transparent 1px)", backgroundSize: "64px 64px" }} className="absolute inset-0" />
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white to-transparent" />
        </div>

        <div className="container relative z-10 mx-auto px-6 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-center">

            {/* LEFT — text */}
            <motion.div initial="hidden" animate="visible" variants={stagger}>
              <motion.div variants={fadeUp} className="flex items-center gap-2 text-sm font-medium text-slate-400 mb-4">
                <Link href="/" className="hover:text-slate-600 transition-colors">Home</Link>
                <span className="text-slate-300">/</span>
                <span className="text-blue-500">FAQ</span>
              </motion.div>

              <motion.div variants={fadeUp} className="inline-flex items-center gap-3 rounded-full border border-blue-200 bg-blue-50 px-5 py-2 text-sm font-medium text-blue-600 mb-4">
                <HelpCircle size={14} />
                Frequently Asked Questions
              </motion.div>

              <motion.h1 variants={fadeUp} className="font-extrabold text-slate-900 tracking-tight leading-[1.05] mb-4"
                style={{ fontSize: "clamp(2.1rem, 4vw, 3.5rem)" }}>
                Got Questions? <span className="gradient-text">We've Got Answers</span>
              </motion.h1>
              <motion.p variants={fadeUp} className="text-base lg:text-lg text-slate-500 max-w-xl leading-relaxed">
                Everything you need to know about comparing providers, pricing, and getting connected.
              </motion.p>
            </motion.div>

            {/* RIGHT — image, same pattern as Home/Services hero */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="relative hidden lg:block"
            >
              <img
                src={faqLogo}
                alt="ZSolutionz FAQ illustration"
                className="max-w-[380px] xl:max-w-[380px] mx-auto animate-float-y"
              />

              {/* Floating badge — top right */}
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.6 }}
                className="absolute top-4 right-2 glass-card rounded-2xl px-5 py-4 flex items-center gap-3"
              >
                <div className="h-10 w-10 rounded-xl bg-blue-600 flex items-center justify-center shrink-0">
                  <ShieldCheck size={18} className="text-white" />
                </div>
                <div>
                  <div className="text-slate-900 font-bold text-sm">Trusted Answers</div>
                  <div className="text-slate-500 text-xs">Clear, honest info</div>
                </div>
              </motion.div>

              {/* Floating badge — bottom left */}
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
                  <div className="text-slate-900 font-bold text-sm">Real Support</div>
                  <div className="text-slate-500 text-xs">We're here to help</div>
                </div>
              </motion.div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ══ FAQ LIST ════════════════════════════════════════════ */}
      <section className="py-14 md:py-20 bg-slate-50 border-y border-slate-100">
        <div className="container mx-auto px-6 lg:px-16 max-w-3xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
            className="space-y-4">
            {faqItems.map((item, i) => {
              const key = String(i);
              return (
                <motion.div key={key} variants={fadeUp}>
                  <FaqRow
                    item={item}
                    isOpen={openKey === key}
                    onClick={() => setOpenKey(openKey === key ? null : key)}
                  />
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ══ STILL HAVE QUESTIONS ════════════════════════════════ */}
      <section className="py-14 md:py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-16">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="glass-card rounded-3xl p-8 md:p-10 max-w-3xl mx-auto text-center">
            <div className="h-12 w-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 mx-auto mb-4">
              <MessageCircleQuestion size={22} strokeWidth={1.5} />
            </div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-3">
              Still have a question?
            </h2>
            <p className="text-slate-500 mb-6 max-w-lg mx-auto">
              Our team is happy to help you compare plans or sort out anything that's not covered here.
            </p>
            <Link href="/contact"
              className="inline-flex items-center justify-center rounded-xl bg-blue-600 text-white h-12 px-8 text-sm font-bold hover:bg-blue-700 transition-all">
              Contact Us
            </Link>
          </motion.div>
        </div>
      </section>

    </div>
  );
}