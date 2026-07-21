import { motion, AnimatePresence } from "framer-motion";
import { Link } from "wouter";
import { useState } from "react";
import { ChevronDown, HelpCircle, MessageCircleQuestion } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
};
const stagger = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.07 } } };

type FaqItem = { q: string; a: string };
type FaqGroup = { category: string; items: FaqItem[] };

const faqGroups: FaqGroup[] = [
  {
    category: "Getting Started",
    items: [
      {
        q: "Is this comparison service really free?",
        a: "Yes. Checking your address and comparing providers costs you nothing. We're paid by our provider partners, never by you, and it never affects the prices or plans you see.",
      },
      {
        q: "Do I need to enter my zip code every time?",
        a: "Just once per visit. After you enter your zip code, we'll show you every provider available at that address so you can compare plans without re-entering it.",
      },
      {
        q: "What if no providers show up for my address?",
        a: "Coverage can vary block by block, especially in rural areas. If nothing shows up, reach out to our support team and we'll manually check for options near you.",
      },
    ],
  },
  {
    category: "Plans & Pricing",
    items: [
      {
        q: "Are the prices I see the final price?",
        a: "The prices shown reflect the provider's published rate for that plan. Some providers offer promotional pricing for an introductory period, which we always call out clearly before you sign up.",
      },
      {
        q: "Can I bundle internet, TV, and phone together?",
        a: "Many providers offer bundle discounts when you combine services. Look for the bundle tag on a plan, or ask our team to put together a custom bundle for your address.",
      },
      {
        q: "Do any plans require a contract?",
        a: "It depends on the provider. We clearly mark which plans are no-contract and which include a term agreement, so you always know what you're signing up for.",
      },
    ],
  },
  {
    category: "Signup & Installation",
    items: [
      {
        q: "How do I actually sign up once I pick a plan?",
        a: "Select a plan and our team will connect you directly with that provider to complete signup, or guide you through it ourselves depending on the provider.",
      },
      {
        q: "How long does installation usually take?",
        a: "Most internet and TV installs are scheduled within a week of signup. Fiber and cable providers often offer self-install kits that can get you online the same day.",
      },
      {
        q: "Will someone need to be home for the install?",
        a: "For most professional installs, yes, an adult needs to be present. Self-install kits, where available, skip this requirement entirely.",
      },
    ],
  },
  {
    category: "Support",
    items: [
      {
        q: "What if I have a problem with my provider after signing up?",
        a: "Reach out to our support team any time. While your service contract is with the provider directly, we're happy to help you get in touch with them or escalate an issue.",
      },
      {
        q: "Can I switch plans or providers later?",
        a: "Absolutely. Come back any time to compare new plans, whether you're looking to upgrade speeds, drop a service you don't use, or switch providers entirely.",
      },
    ],
  },
];

function FaqRow({ item, isOpen, onClick }: { item: FaqItem; isOpen: boolean; onClick: () => void }) {
  return (
    <div className="glass-card rounded-2xl overflow-hidden">
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between gap-4 px-7 py-6 text-left"
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
            <p className="px-7 pb-6 text-sm md:text-base text-slate-500 leading-relaxed">
              {item.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQPage() {
  const [openKey, setOpenKey] = useState<string | null>("Getting Started-0");

  return (
    <div className="flex flex-col w-full overflow-x-hidden">

      {/* ══ HERO ════════════════════════════════════════════════ */}
      <section className="relative min-h-[45vh] flex items-center pb-16 pt-32 md:pb-20 md:pt-40 overflow-hidden bg-white">
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
              <span className="text-blue-500">FAQ</span>
            </div>

            <div className="inline-flex items-center gap-3 rounded-full border border-blue-200 bg-blue-50 px-5 py-2.5 text-sm font-medium text-blue-600 mb-8">
              <HelpCircle size={14} />
              Frequently Asked Questions
            </div>

            <h1 className="font-extrabold text-slate-900 tracking-tight leading-[1.02] mb-6"
              style={{ fontSize: "clamp(2.5rem, 5.5vw, 4.5rem)" }}>
              Got Questions? <span className="gradient-text">We've Got Answers</span>
            </h1>
            <p className="text-xl text-slate-500 max-w-xl leading-relaxed">
              Everything you need to know about comparing providers, pricing, and getting connected.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ══ FAQ GROUPS ══════════════════════════════════════════ */}
      <section className="py-16 md:py-28 bg-slate-50 border-y border-slate-100">
        <div className="container mx-auto px-6 lg:px-16 max-w-3xl">
          {faqGroups.map((group, gi) => (
            <motion.div key={gi} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
              className="mb-14 last:mb-0">
              <motion.h2 variants={fadeUp} className="text-sm font-extrabold uppercase tracking-wide text-blue-600 mb-5">
                {group.category}
              </motion.h2>
              <motion.div variants={stagger} className="space-y-4">
                {group.items.map((item, ii) => {
                  const key = `${group.category}-${ii}`;
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
            </motion.div>
          ))}
        </div>
      </section>

      {/* ══ STILL HAVE QUESTIONS ════════════════════════════════ */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-16">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="glass-card rounded-3xl p-10 md:p-14 max-w-3xl mx-auto text-center">
            <div className="h-12 w-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 mx-auto mb-5">
              <MessageCircleQuestion size={22} strokeWidth={1.5} />
            </div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-3">
              Still have a question?
            </h2>
            <p className="text-slate-500 mb-8 max-w-lg mx-auto">
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