import { useEffect, useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logoImg from "@/assets/logo.png";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [hoveredHref, setHoveredHref] = useState<string | null>(null);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setIsScrolled(scrollTop > 50);
      setScrollProgress(docHeight > 0 ? scrollTop / docHeight : 0);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/services", label: "Services" },
    { href: "/providers", label: "providers" },
    { href: "/how-it-works", label: "How It Works" },
    { href: "/faq", label: "FAQ" },
    { href: "/policies", label: "Policies" },
    { href: "/join", label: "Join Us" },
  ];

  const easeOut = [0.22, 1, 0.36, 1] as [number, number, number, number];

  return (
    <>
      {/* Scroll progress bar */}
      <div className="fixed top-0 left-0 right-0 z-[60] h-[2px] bg-transparent pointer-events-none">
        <motion.div
          className="h-full bg-gradient-to-r from-indigo-600 via-violet-500 to-fuchsia-500"
          style={{ scaleX: scrollProgress, transformOrigin: "0% 50%" }}
          transition={{ type: "spring", stiffness: 400, damping: 40 }}
        />
      </div>

      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: easeOut }}
        className={`fixed top-[2px] left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "py-2.5 bg-white/90 backdrop-blur-xl border-b border-slate-200/70 shadow-[0_2px_24px_-4px_rgba(79,70,229,0.12)]"
            : "py-4 bg-white/70 backdrop-blur-md border-b border-transparent"
        }`}
      >
        <div className="container mx-auto px-6 lg:px-10 flex items-center justify-between gap-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group shrink-0">
            <motion.img
              src={logoImg}
              alt="ZSolutionz Logo"
              className="h-9 w-auto"
              whileHover={{ scale: 1.08, rotate: 5 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            />
            <span className="text-lg font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-700 group-hover:from-indigo-600 group-hover:to-violet-600 transition-all duration-300">
              ZSolutionz
            </span>
          </Link>

          {/* Desktop nav */}
          <div
            className="hidden lg:flex items-center gap-0.5 relative rounded-full border border-slate-200/80 bg-slate-50/60 px-1.5 py-1.5"
            onMouseLeave={() => setHoveredHref(null)}
          >
            {links.map((link) => {
              const isActive = location === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onMouseEnter={() => setHoveredHref(link.href)}
                  className="relative px-3.5 py-2 rounded-full"
                >
                  {/* Persistent pill on the active tab — independent of hover */}
                  {isActive && (
                    <motion.span
                      layoutId="nav-active-pill"
                      className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-600 to-violet-600"
                      transition={{ type: "spring", stiffness: 500, damping: 35 }}
                    />
                  )}
                  {/* Hover pill on whichever tab the cursor is over (skips the active tab, which already has its own) */}
                  {hoveredHref === link.href && !isActive && (
                    <motion.span
                      layoutId="nav-hover-pill"
                      className="absolute inset-0 rounded-full bg-white shadow-sm border border-slate-200/80"
                      transition={{ type: "spring", stiffness: 500, damping: 35 }}
                    />
                  )}
                  <span
                    className={`relative z-10 text-[13px] font-semibold whitespace-nowrap transition-colors duration-200 ${
                      isActive
                        ? "text-white"
                        : "text-slate-500 hover:text-slate-900"
                    }`}
                  >
                    {link.label}
                  </span>
                </Link>
              );
            })}
          </div>

          {/* CTA + mobile toggle */}
          <div className="flex items-center gap-3 shrink-0">
            <Link
              href="/contact"
              className="hidden md:inline-flex relative overflow-hidden rounded-full bg-gradient-to-r from-indigo-600 to-violet-600 text-white text-sm font-semibold h-10 px-5 items-center gap-1.5 transition-all duration-300 shadow-[0_2px_12px_-2px_rgba(79,70,229,0.5)] hover:shadow-[0_6px_20px_-2px_rgba(124,58,237,0.55)] hover:-translate-y-0.5"
            >
              <span className="relative z-10">Contact Us</span>
              <ArrowRight size={14} className="relative z-10" />
            </Link>

            <motion.button
              className="lg:hidden relative h-10 w-10 flex items-center justify-center rounded-xl text-slate-600 border border-slate-200 hover:border-indigo-300 hover:bg-indigo-50 transition-all"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              whileTap={{ scale: 0.9 }}
              aria-label="Toggle menu"
            >
              <AnimatePresence mode="wait">
                {isMobileMenuOpen ? (
                  <motion.span key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}>
                    <X size={20} />
                  </motion.span>
                ) : (
                  <motion.span key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.15 }}>
                    <Menu size={20} />
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              key="mobile-menu"
              initial={{ opacity: 0, height: 0, y: -10 }}
              animate={{ opacity: 1, height: "auto", y: 0 }}
              exit={{ opacity: 0, height: 0, y: -10 }}
              transition={{ duration: 0.3, ease: easeOut }}
              className="lg:hidden overflow-hidden bg-white border-b border-slate-200 shadow-lg"
            >
              <motion.div
                initial="hidden"
                animate="visible"
                variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.05 } } }}
                className="container mx-auto px-6 py-5 flex flex-col gap-1"
              >
                {links.map((link) => (
                  <motion.div
                    key={link.href}
                    variants={{ hidden: { opacity: 0, x: -16 }, visible: { opacity: 1, x: 0 } }}
                  >
                    <Link
                      href={link.href}
                      className={`flex items-center gap-3 py-3.5 px-4 rounded-xl text-sm font-medium transition-all duration-200 ${
                        location === link.href
                          ? "bg-gradient-to-r from-indigo-50 to-violet-50 text-indigo-600 border border-indigo-100"
                          : "text-slate-500 hover:text-slate-900 hover:bg-slate-50"
                      }`}
                    >
                      {location === link.href && (
                        <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-indigo-600 to-violet-600" />
                      )}
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
                <motion.div variants={{ hidden: { opacity: 0, x: -16 }, visible: { opacity: 1, x: 0 } }} className="pt-2">
                  <Link
                    href="/contact"
                    className="flex items-center justify-center gap-1.5 w-full rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 text-white text-sm font-semibold h-12 hover:brightness-110 transition-all"
                  >
                    Contact Us
                    <ArrowRight size={15} />
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
}