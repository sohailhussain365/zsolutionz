import { motion, AnimatePresence } from "framer-motion";
import { Link } from "wouter";
import { useState } from "react";
import {
  Shield, Lock, FileText, Ban, ScrollText, PhoneOff,
  ArrowRight, AlertTriangle,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
};

type PolicyKey = "privacy" | "refund" | "disclaimer" | "terms" | "dns" | "tcpa";

const policies: { key: PolicyKey; label: string; icon: typeof Shield; updated: string; sections: { heading: string; body: string }[] }[] = [
  {
    key: "privacy",
    label: "Privacy Policy",
    icon: Lock,
    updated: "Updated July 2026",
    sections: [
      { heading: "What we collect", body: "When you check availability at your address, we collect the information you submit — such as your zip code, name, and contact details — along with basic technical data like your browser and device type, so we can match you to accurate provider options." },
      { heading: "How we use it", body: "Your information is used to show you accurate provider and plan availability, connect you with a provider or our support team when you request it, and improve the accuracy of our comparison results over time." },
      { heading: "Who we share it with", body: "We share your details only with the provider(s) you express interest in, or with service partners who help us operate this site. We do not sell your personal information to unrelated third parties." },
      { heading: "Your choices", body: "You can request a copy of the data we hold about you, ask us to correct it, or ask us to delete it at any time by contacting our support team." },
    ],
  },
  {
    key: "refund",
    label: "Refund Policy",
    icon: FileText,
    updated: "Updated July 2026",
    sections: [
      { heading: "Our comparison service is free", body: "We never charge you to search, compare, or get connected with a provider, so there is nothing to refund on our end for using this site." },
      { heading: "Provider billing", body: "Once you sign up with a provider, your service agreement, billing, and any refunds are governed directly by that provider's own refund and cancellation terms, not by us." },
      { heading: "How we can help", body: "If you run into a billing issue with a provider you found through our site, reach out to our support team and we'll help you get in touch with the right people to resolve it." },
    ],
  },
  {
    key: "disclaimer",
    label: "Disclaimer",
    icon: AlertTriangle,
    updated: "Updated July 2026",
    sections: [
      { heading: "Independent comparison service", body: "We are an independent marketing and comparison service. We are not an internet, TV, phone, or mobile provider, and we do not control provider pricing, availability, or service quality." },
      { heading: "Accuracy of information", body: "We work to keep plan details, pricing, and availability current, but providers can change their offers at any time. Always confirm final pricing and terms directly with the provider before signing up." },
      { heading: "No guarantee of availability", body: "Showing a provider or plan for your zip code does not guarantee service is available at your exact address. Final availability is always confirmed by the provider." },
    ],
  },
  {
    key: "terms",
    label: "Terms of Service",
    icon: ScrollText,
    updated: "Updated July 2026",
    sections: [
      { heading: "Using this site", body: "By using this site, you agree to use it only to research and compare telecom services for your own personal or household use, and not to misuse, scrape, or interfere with the service." },
      { heading: "Third-party providers", body: "Any plans, pricing, or offers you see originate from third-party providers. Your relationship and contract for service is with that provider, governed by their own terms." },
      { heading: "Changes to these terms", body: "We may update these terms from time to time. Continuing to use the site after an update means you accept the revised terms." },
      { heading: "Limitation of liability", body: "We provide this comparison service on an as-is basis and are not liable for losses arising from provider service issues, outages, or billing disputes between you and a provider." },
    ],
  },
  {
    key: "dns",
    label: "Do Not Sell My Info",
    icon: Ban,
    updated: "Updated July 2026",
    sections: [
      { heading: "Your right to opt out", body: "Depending on where you live, you may have the right to opt out of the sale or sharing of your personal information. We honor these requests regardless of your location." },
      { heading: "What counts as a sale", body: "We do not sell your personal information for money. Where applicable law defines certain data-sharing arrangements as a 'sale,' you can still ask us to stop any such sharing." },
      { heading: "How to submit a request", body: "Contact our support team with 'Do Not Sell My Info' in the subject line, and we will confirm your opt-out and stop any applicable sharing of your data." },
    ],
  },
  {
    key: "tcpa",
    label: "TCPA Consent",
    icon: PhoneOff,
    updated: "Updated July 2026",
    sections: [
      { heading: "Consent to be contacted", body: "By submitting your phone number through this site, you consent to receive calls and text messages — including from automatic telephone dialing systems and prerecorded messages — about provider offers, at the number you provided." },
      { heading: "Not a condition of service", body: "Your consent to be contacted is not required to sign up for any provider's service. You can still shop for a plan without agreeing to receive marketing calls or texts." },
      { heading: "Message and data rates", body: "Message and data rates may apply to any texts you receive. Message frequency varies based on your inquiry." },
      { heading: "How to revoke consent", body: "You can revoke your consent at any time by replying STOP to any text message, or by contacting our support team directly to be removed from calling and texting lists." },
    ],
  },
];

export default function PoliciesPage() {
  const [active, setActive] = useState<PolicyKey>("privacy");
  const activePolicy = policies.find((p) => p.key === active)!;

  return (
    <div className="flex flex-col w-full overflow-x-hidden">

      {/* ══ HERO ════════════════════════════════════════════════ */}
      <section className="relative min-h-[65vh] flex items-center pb-16 pt-32 md:pb-20 md:pt-40 overflow-hidden bg-slate-900">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div style={{ background: "radial-gradient(ellipse 60% 60% at 25% 25%, rgba(99,102,241,0.35) 0%, transparent 60%)" }} className="absolute inset-0" />
          <div style={{ background: "radial-gradient(ellipse 50% 55% at 80% 70%, rgba(168,85,247,0.25) 0%, transparent 60%)" }} className="absolute inset-0" />
          <div style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)", backgroundSize: "56px 56px" }} className="absolute inset-0" />
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-slate-900 to-transparent" />
        </div>

        <div className="container relative z-10 mx-auto px-6 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-16 items-center">
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <div className="flex items-center gap-2 text-sm font-medium text-slate-400 mb-8">
                <Link href="/" className="hover:text-slate-200 transition-colors">Home</Link>
                <span className="text-slate-600">/</span>
                <span className="text-violet-300">Policies</span>
              </div>

              <div className="inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/5 backdrop-blur-sm px-5 py-2.5 text-sm font-medium text-violet-200 mb-8">
                <Shield size={14} />
                Transparency You Can Trust
              </div>

              <h1 className="font-extrabold text-white tracking-tight leading-[1.02] mb-6"
                style={{ fontSize: "clamp(2.5rem, 5vw, 4.25rem)" }}>
                Clear Terms.{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 to-violet-300">
                  No Fine-Print Surprises.
                </span>
              </h1>
              <p className="text-xl text-slate-300 max-w-xl leading-relaxed">
                Every policy that governs how we handle your data, your privacy, and your right to be contacted — laid out in plain language, all in one place.
              </p>
            </motion.div>

            {/* Signature: fanned document / shield cluster */}
            <div className="relative h-[320px] hidden lg:block">
              <div style={{ background: "radial-gradient(circle, rgba(139,92,246,0.25) 0%, transparent 70%)" }}
                className="absolute inset-0 blur-2xl" />
              {[
                { icon: Lock, rotate: -14, top: "10%", left: "8%", delay: 0 },
                { icon: FileText, rotate: -4, top: "2%", left: "38%", delay: 0.2 },
                { icon: ScrollText, rotate: 8, top: "14%", left: "62%", delay: 0.4 },
                { icon: Ban, rotate: -8, top: "48%", left: "16%", delay: 0.6 },
                { icon: PhoneOff, rotate: 12, top: "52%", left: "56%", delay: 0.8 },
              ].map((c, i) => (
                <motion.div
                  key={i}
                  className="absolute h-16 w-16 rounded-2xl bg-white/8 border border-white/15 backdrop-blur-md flex items-center justify-center text-violet-200 shadow-xl"
                  style={{ top: c.top, left: c.left, rotate: `${c.rotate}deg` }}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: [0, -10, 0] }}
                  transition={{
                    opacity: { duration: 0.6, delay: c.delay },
                    y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: c.delay },
                  }}
                >
                  <c.icon size={22} strokeWidth={1.5} />
                </motion.div>
              ))}
              <motion.div
                className="absolute top-1/2 left-1/2 h-28 w-28 -translate-x-1/2 -translate-y-1/2 rounded-full border border-violet-300/30 flex items-center justify-center"
                animate={{ scale: [1, 1.1, 1], opacity: [0.6, 1, 0.6] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <Shield size={30} className="text-violet-200" strokeWidth={1.5} />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ POLICY TABS + CONTENT ═══════════════════════════════ */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-16">

          {/* Tabs */}
          <div className="flex flex-wrap gap-2 mb-12 sticky top-[72px] z-20 bg-white/90 backdrop-blur-md py-3 -mx-6 px-6 lg:-mx-16 lg:px-16 border-b border-slate-100">
            {policies.map((p) => {
              const isActive = active === p.key;
              return (
                <button
                  key={p.key}
                  onClick={() => setActive(p.key)}
                  className={`inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition-all duration-200 ${
                    isActive
                      ? "bg-gradient-to-r from-indigo-600 to-violet-600 text-white shadow-sm"
                      : "bg-slate-50 text-slate-500 border border-slate-200 hover:border-indigo-200 hover:text-indigo-600"
                  }`}
                >
                  <p.icon size={15} strokeWidth={1.75} />
                  {p.label}
                </button>
              );
            })}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activePolicy.key}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3 }}
              className="max-w-3xl"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center text-white shadow-lg shadow-indigo-200 shrink-0">
                  <activePolicy.icon size={24} strokeWidth={1.5} />
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900">{activePolicy.label}</h2>
                  <span className="text-xs font-medium text-slate-400">{activePolicy.updated}</span>
                </div>
              </div>

              <div className="space-y-6">
                {activePolicy.sections.map((s, i) => (
                  <div key={i} className="glass-card rounded-2xl p-7">
                    <h3 className="text-base font-extrabold text-slate-900 mb-2">{s.heading}</h3>
                    <p className="text-sm text-slate-500 leading-relaxed">{s.body}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* ══ CONTACT CTA ═════════════════════════════════════════ */}
      <section className="py-16 md:py-24 bg-slate-50 border-t border-slate-100">
        <div className="container mx-auto px-6 lg:px-16">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="glass-card rounded-3xl p-10 md:p-14 max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-3">
              Questions about any of these policies?
            </h2>
            <p className="text-slate-500 mb-8 max-w-lg mx-auto">
              Our team is happy to walk you through what any of this means for you.
            </p>
            <Link href="/contact"
              className="inline-flex items-center justify-center gap-1.5 rounded-full bg-gradient-to-r from-indigo-600 to-violet-600 text-white h-12 px-8 text-sm font-bold hover:-translate-y-0.5 transition-all">
              Contact Us <ArrowRight size={15} />
            </Link>
          </motion.div>
        </div>
      </section>

    </div>
  );
}