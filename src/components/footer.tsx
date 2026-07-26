import { Link } from "wouter";
import { motion } from "framer-motion";
import logoImg from "@/assets/logo.png";
import { Mail, Phone, MapPin } from "lucide-react";
import { FaLinkedinIn, FaFacebook } from "react-icons/fa";

const fadeUp = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22,1,0.36,1] as [number, number, number, number] } } };
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.07 } } };

// Keys must match the `key` values used in policies-page.tsx so these links
// deep-link straight into the right tab via /policies?tab=<key>.
const policyLinks: { label: string; key: string }[] = [
  { label: "Privacy Policy", key: "privacy" },
  { label: "Refund Policy", key: "refund" },
  { label: "Disclaimer", key: "disclaimer" },
  { label: "Terms of Service", key: "terms" },
  { label: "Do Not Sell My Info", key: "dns" },
  { label: "TCPA Consent", key: "tcpa" },
];

export function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={stagger}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12 py-14 md:py-16 border-b border-slate-800"
        >
          {/* Brand column */}
          <motion.div variants={fadeUp} className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <img src={logoImg} alt="ZSolutionz Logo" className="h-11 w-auto" />
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed mb-5">
              Connecting Customers With Reliable Internet Solutions. Professional service. Dedicated support. Real results.
            </p>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-blue-400 mb-5">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-400 animate-pulse" />
              10+ Years of Experience
            </div>
            <div className="flex items-center gap-2.5">
              <a href="https://www.linkedin.com/company/zsolutionz" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"
                className="h-9 w-9 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-400 hover:bg-blue-600 hover:text-white hover:border-blue-600 hover:shadow-[0_0_14px_rgba(37,99,235,0.4)] transition-all duration-300">
                <FaLinkedinIn size={13} />
              </a>
              <a href="https://www.facebook.com/zsolutionz" target="_blank" rel="noopener noreferrer" aria-label="Facebook"
                className="h-9 w-9 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-400 hover:bg-blue-600 hover:text-white hover:border-blue-600 hover:shadow-[0_0_14px_rgba(37,99,235,0.4)] transition-all duration-300">
                <FaFacebook size={13} />
              </a>
            </div>
          </motion.div>

          {/* Quick links */}
          <motion.div variants={fadeUp}>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About Us" },
                { href: "/pricing", label: "Pricing" },
                { href: "/services", label: "Services" },
                { href: "/join", label: "Join Us" },
                { href: "/contact", label: "Contact Us" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-slate-400 hover:text-blue-400 transition-colors text-sm flex items-center gap-2 group">
                    <span className="h-px w-4 bg-blue-500/0 group-hover:bg-blue-500/60 transition-all duration-300" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Policies */}
          <motion.div variants={fadeUp}>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-6">Policies</h4>
            <ul className="space-y-3">
              {policyLinks.map((p) => (
                <li key={p.key}>
                  <Link
                    href={`/policies?tab=${p.key}`}
                    className="text-slate-400 hover:text-blue-400 transition-colors text-sm flex items-center gap-2 group"
                  >
                    <span className="h-px w-4 bg-blue-500/0 group-hover:bg-blue-500/60 transition-all duration-300" />
                    {p.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div variants={fadeUp}>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-6">Contact</h4>
            <ul className="space-y-5">
              <li>
                <a href="mailto:info@zsolutionz.com" className="flex items-start gap-3 text-slate-400 hover:text-blue-400 transition-colors group">
                  <div className="h-8 w-8 rounded-lg bg-blue-600/15 flex items-center justify-center text-blue-400 shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 mt-0.5">
                    <Mail size={14} strokeWidth={1.5} />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 mb-0.5">Email</div>
                    <div className="text-sm font-medium">info@zsolutionz.com</div>
                  </div>
                </a>
              </li>
              <li>
                <a href="tel:+12623992770" className="flex items-start gap-3 text-slate-400 hover:text-blue-400 transition-colors group">
                  <div className="h-8 w-8 rounded-lg bg-blue-600/15 flex items-center justify-center text-blue-400 shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 mt-0.5">
                    <Phone size={14} strokeWidth={1.5} />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 mb-0.5">Phone</div>
                    <div className="text-sm font-medium">+1(262) 399-2770</div>
                  </div>
                </a>
              </li>
              <li className="flex items-start gap-3 text-slate-400">
                <div className="h-8 w-8 rounded-lg bg-blue-600/15 flex items-center justify-center text-blue-400 shrink-0 mt-0.5">
                  <MapPin size={14} strokeWidth={1.5} />
                </div>
                <div>
                  <div className="text-xs text-slate-500 mb-0.5">Address</div>
                  <div className="text-sm leading-relaxed">259 W Broadway<br />1st Floor, Waukesha<br /> WI, USA</div>
                </div>
              </li>
            </ul>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-col md:flex-row justify-between items-center gap-4 py-8 text-sm text-slate-500"
        >
          <p>Copyright &copy; 2026 ZSolutionz. All Rights Reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/policies?tab=privacy" className="hover:text-blue-400 transition-colors cursor-pointer">
              Privacy Policy
            </Link>
            <span className="h-4 w-px bg-slate-700" />
            <Link href="/policies?tab=terms" className="hover:text-blue-400 transition-colors cursor-pointer">
              Terms &amp; Conditions
            </Link>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}