import { motion } from "framer-motion";
import { Link } from "wouter";
import {
  Mail, Phone, MapPin, ArrowRight, Clock,
  MessageSquare, CheckCircle2, Loader2, Star, Shield, Users
} from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Form, FormControl, FormField, FormItem, FormLabel, FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ContactGraphic } from "@/components/contact-graphics.tsx";

const FORMSPREE = "https://formspree.io/f/mwvjdbno";

const schema = z.object({
  fullName: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(5, "Phone number is required"),
  subject: z.string().min(2, "Please enter a subject"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormValues = z.infer<typeof schema>;
type Status = "idle" | "submitting" | "success" | "error";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22,1,0.36,1] as [number, number, number, number] } },
};
const stagger = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.07 } } };

export default function ContactPage() {
  const [status, setStatus] = useState<Status>("idle");

  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { fullName: "", email: "", phone: "", subject: "", message: "" },
  });

  async function onSubmit(values: FormValues) {
    setStatus("submitting");
    try {
      const res = await fetch(FORMSPREE, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ name: values.fullName, email: values.email, phone: values.phone, subject: values.subject, message: values.message }),
      });
      if (res.ok) {
        setStatus("success");
        form.reset();
        setTimeout(() => setStatus("idle"), 8000);
      } else {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 5000);
      }
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  }

  return (
    <div className="flex flex-col w-full overflow-x-hidden">

      {/* ══ HERO ════════════════════════════════════════════════ */}
      <section className="relative min-h-[75vh] flex items-center pb-16 pt-32 md:pb-20 md:pt-40 overflow-hidden bg-white">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div style={{ background: "radial-gradient(ellipse 60% 60% at 75% 40%, rgba(37,99,235,0.10) 0%, transparent 60%)" }} className="absolute inset-0" />
          <div style={{ backgroundImage: "linear-gradient(rgba(37,99,235,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(37,99,235,0.05) 1px, transparent 1px)", backgroundSize: "64px 64px" }} className="absolute inset-0" />
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white to-transparent" />
        </div>

        <div className="container relative z-10 mx-auto px-6 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <div className="flex items-center gap-2 text-sm font-medium text-slate-400 mb-8">
                <Link href="/" className="hover:text-slate-600 transition-colors">Home</Link>
                <span className="text-slate-300">/</span>
                <span className="text-blue-500">Contact Us</span>
              </div>

              <div className="inline-flex items-center gap-3 rounded-full border border-blue-200 bg-blue-50 px-5 py-2.5 text-sm font-medium text-blue-600 mb-8">
                <span className="h-2 w-2 rounded-full bg-blue-500 animate-pulse" />
                We'd Love to Hear From You
              </div>

              <h1 className="font-extrabold text-slate-900 tracking-tight leading-[1.02] mb-6"
                style={{ fontSize: "clamp(2.5rem, 5.5vw, 4.5rem)" }}>
                Let's <span className="gradient-text">Connect</span>
              </h1>
              <p className="text-xl text-slate-500 max-w-xl leading-relaxed mb-10">
                Reach out to our team and we'll respond promptly. Whether you have a question, need support, or want to explore working together — we're here for you.
              </p>

              <div className="flex flex-wrap gap-3">
                {[
                  { icon: Shield, label: "Trusted Service" },
                  { icon: Clock,  label: "24hr Response"  },
                  { icon: Users,  label: "Expert Team"    },
                ].map((b, i) => (
                  <div key={i} className="glass-card rounded-full px-5 py-2.5 flex items-center gap-2.5">
                    <b.icon size={15} className="text-blue-500" strokeWidth={1.5} />
                    <span className="text-slate-600 text-sm font-medium">{b.label}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="relative hidden lg:block"
            >
              {/* Radar sweep — "we're listening" signature, unique to Contact */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none" aria-hidden="true">
                <div className="relative h-[300px] w-[300px] rounded-full border border-blue-200/60 flex items-center justify-center overflow-hidden">
                  <div className="absolute h-[70%] w-[70%] rounded-full border border-blue-200/50" />
                  <div className="absolute h-[40%] w-[40%] rounded-full border border-blue-200/40" />
                  <motion.div
                    className="absolute inset-0 origin-center"
                    style={{ background: "conic-gradient(from 0deg, rgba(37,99,235,0.28), transparent 28%)" }}
                    animate={{ rotate: 360 }}
                    transition={{ duration: 3.2, repeat: Infinity, ease: "linear" }}
                  />
                  <span className="h-2.5 w-2.5 rounded-full bg-blue-600 z-10" />
                </div>
              </div>
              <ContactGraphic className="max-w-[520px] mx-auto animate-float-y relative" />
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="absolute top-4 right-2 glass-card rounded-2xl px-5 py-4 flex items-center gap-3"
              >
                <div className="h-10 w-10 rounded-xl bg-blue-600 flex items-center justify-center shrink-0">
                  <MessageSquare size={18} className="text-white" />
                </div>
                <div>
                  <div className="text-slate-900 font-bold text-sm">Quick Response</div>
                  <div className="text-slate-500 text-xs">Within 24 hours</div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══ 3-CARD QUICK STRIP ══════════════════════════════════ */}
      <section className="bg-slate-50 border-y border-slate-100">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
          className="container mx-auto px-6 lg:px-16">
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-slate-100">
            {[
              { icon: Phone,  label: "Call Us",     value: "+1(262) 399-2770",  sub: "Available during business hours", href: "tel:+12623992770" },
              { icon: Mail,   label: "Email Us",    value: "info@zsolutionz.com", sub: "We reply within 24 hours", href: "mailto:info@zsolutionz.com" },
              { icon: MapPin, label: "Our Address", value: "Waukesha, WI 53189", sub: "1906 Madera St Apt 8, USA",  href: "#" },
            ].map((item, i) => (
              <motion.a key={i} variants={fadeUp} href={item.href}
                className="flex items-center gap-6 p-10 hover:bg-white transition-all group">
                <div className="h-14 w-14 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                  <item.icon size={26} strokeWidth={1.5} />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400 mb-1">{item.label}</div>
                  <div className="text-slate-900 font-extrabold text-base mb-0.5">{item.value}</div>
                  <div className="text-slate-400 text-xs">{item.sub}</div>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ══ MAIN CONTACT LAYOUT ═════════════════════════════════ */}
      <section className="py-16 md:py-32 bg-white relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-50 rounded-full blur-3xl opacity-60" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-50 rounded-full blur-3xl opacity-40" />
        </div>
        <div className="container mx-auto px-6 lg:px-16 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 max-w-7xl mx-auto">

            {/* ── LEFT COLUMN ─────────────────────────── */}
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.2 }}
              className="lg:col-span-4 flex flex-col gap-5">
              <div className="mb-4">
                <span className="section-label">Contact Information</span>
                <h2 className="text-2xl font-extrabold text-slate-900 mb-3">We're Here to Help</h2>
                <p className="text-slate-500 text-sm leading-relaxed">
                  Have a question or need assistance? Our team is ready to help. Reach out through any of the channels below or use the form.
                </p>
              </div>

              {/* Email */}
              <a href="mailto:info@zsolutionz.com" data-testid="link-email"
                className="glass-card rounded-2xl p-6 flex items-start gap-5 hover:border-blue-200 transition-all duration-300 group hover:-translate-y-0.5">
                <div className="h-12 w-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                  <Mail size={22} strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="text-sm font-extrabold text-slate-900 mb-1">Email Us</h4>
                  <p className="text-blue-600 text-sm group-hover:text-blue-700 transition-colors">info@zsolutionz.com</p>
                  <p className="text-slate-400 text-xs mt-1">We reply within 24 hours</p>
                </div>
              </a>

              {/* Phone */}
              <a href="tel:+12623992770" data-testid="link-phone"
                className="glass-card rounded-2xl p-6 flex items-start gap-5 hover:border-blue-200 transition-all duration-300 group hover:-translate-y-0.5">
                <div className="h-12 w-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                  <Phone size={22} strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="text-sm font-extrabold text-slate-900 mb-1">Call Us</h4>
                  <p className="text-blue-600 text-sm group-hover:text-blue-700 transition-colors">+1(262) 399-2770</p>
                  <p className="text-slate-400 text-xs mt-1">Mon – Fri, 9am – 6pm CST</p>
                </div>
              </a>

              {/* Address */}
              <div className="glass-card rounded-2xl p-6 flex items-start gap-5">
                <div className="h-12 w-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 shrink-0">
                  <MapPin size={22} strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="text-sm font-extrabold text-slate-900 mb-1">Visit Us</h4>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    1906 Madera St Apt 8<br />Waukesha, WI 53189<br />United States of America
                  </p>
                </div>
              </div>

              {/* Hours */}
              <div className="glass-card rounded-2xl p-6 flex items-start gap-5">
                <div className="h-12 w-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 shrink-0">
                  <Clock size={22} strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="text-sm font-extrabold text-slate-900 mb-2">Business Hours</h4>
                  <div className="space-y-1">
                    <div className="flex justify-between gap-6 text-xs">
                      <span className="text-slate-400">Mon – Fri</span>
                      <span className="text-slate-700 font-medium">9:00am – 6:00pm</span>
                    </div>
                    <div className="flex justify-between gap-6 text-xs">
                      <span className="text-slate-400">Saturday</span>
                      <span className="text-slate-700 font-medium">By appointment</span>
                    </div>
                    <div className="flex justify-between gap-6 text-xs">
                      <span className="text-slate-400">Sunday</span>
                      <span className="text-slate-400">Closed</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Careers nudge */}
              <div className="rounded-2xl border border-blue-100 bg-blue-50 p-6">
                <div className="flex items-center gap-2 mb-3">
                  <MessageSquare size={16} className="text-blue-500" />
                  <h4 className="text-sm font-extrabold text-slate-900">Looking to Join?</h4>
                </div>
                <p className="text-slate-500 text-xs leading-relaxed mb-4">
                  Interested in career opportunities? Check out our open positions.
                </p>
                <Link href="/join"
                  className="inline-flex items-center gap-1.5 text-blue-600 text-xs font-bold hover:text-blue-700 transition-colors uppercase tracking-wider">
                  View Openings <ArrowRight size={12} />
                </Link>
              </div>
            </motion.div>

            {/* ── RIGHT COLUMN: FORM ───────────────────── */}
            <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.3 }}
              className="lg:col-span-8">
              <div className="relative rounded-3xl overflow-hidden border border-slate-200 bg-white shadow-sm">
                {/* Top accent bar */}
                <div className="h-1 bg-gradient-to-r from-blue-500 via-blue-400 to-indigo-500" />

                {/* Success overlay */}
                {status === "success" && (
                  <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                    className="absolute inset-0 z-30 bg-white flex flex-col items-center justify-center p-12 text-center">
                    <div className="relative mb-8">
                      <div className="h-28 w-28 rounded-full bg-green-50 flex items-center justify-center">
                        <CheckCircle2 size={52} className="text-green-500" />
                      </div>
                      <div className="absolute -top-2 -right-2 h-8 w-8 rounded-full bg-blue-600 flex items-center justify-center">
                        <Star size={14} className="text-white" fill="currentColor" />
                      </div>
                    </div>
                    <h3 className="text-4xl font-extrabold text-slate-900 mb-4">Message Sent!</h3>
                    <p className="text-slate-500 text-lg max-w-sm leading-relaxed">
                      Thank you for reaching out to ZSolutionz. Our team will get back to you within 24 hours.
                    </p>
                  </motion.div>
                )}

                <div className="p-10 lg:p-14">
                  <div className="mb-10">
                    <span className="section-label">Send a Message</span>
                    <h2 className="text-3xl font-extrabold text-slate-900 mb-3">We'd Love to Hear From You</h2>
                    <p className="text-slate-400 text-sm">All fields are required. We'll respond within 24 hours.</p>
                  </div>

                  {status === "error" && (
                    <div className="mb-6 rounded-xl bg-red-50 border border-red-200 px-5 py-4 text-red-600 text-sm flex items-center gap-3">
                      <span className="h-2 w-2 rounded-full bg-red-500 shrink-0" />
                      Something went wrong. Please try again or email us at info@zsolutionz.com.
                    </div>
                  )}

                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormField control={form.control} name="fullName" render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-slate-500 text-xs font-semibold uppercase tracking-wider">Full Name</FormLabel>
                            <FormControl>
                              <Input placeholder="John Doe" data-testid="input-fullname"
                                className="bg-slate-50 border-slate-200 text-slate-900 h-13 rounded-xl px-5 focus:border-blue-400 focus:ring-0 placeholder:text-slate-300 text-sm"
                                {...field} />
                            </FormControl>
                            <FormMessage className="text-red-500 text-xs" />
                          </FormItem>
                        )} />
                        <FormField control={form.control} name="email" render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-slate-500 text-xs font-semibold uppercase tracking-wider">Email Address</FormLabel>
                            <FormControl>
                              <Input placeholder="john@example.com" data-testid="input-email"
                                className="bg-slate-50 border-slate-200 text-slate-900 h-13 rounded-xl px-5 focus:border-blue-400 focus:ring-0 placeholder:text-slate-300 text-sm"
                                {...field} />
                            </FormControl>
                            <FormMessage className="text-red-500 text-xs" />
                          </FormItem>
                        )} />
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormField control={form.control} name="phone" render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-slate-500 text-xs font-semibold uppercase tracking-wider">Phone Number</FormLabel>
                            <FormControl>
                              <Input placeholder="+1 (555) 000-0000" data-testid="input-phone"
                                className="bg-slate-50 border-slate-200 text-slate-900 h-13 rounded-xl px-5 focus:border-blue-400 focus:ring-0 placeholder:text-slate-300 text-sm"
                                {...field} />
                            </FormControl>
                            <FormMessage className="text-red-500 text-xs" />
                          </FormItem>
                        )} />
                        <FormField control={form.control} name="subject" render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-slate-500 text-xs font-semibold uppercase tracking-wider">Subject</FormLabel>
                            <FormControl>
                              <Input placeholder="How can we help?" data-testid="input-subject"
                                className="bg-slate-50 border-slate-200 text-slate-900 h-13 rounded-xl px-5 focus:border-blue-400 focus:ring-0 placeholder:text-slate-300 text-sm"
                                {...field} />
                            </FormControl>
                            <FormMessage className="text-red-500 text-xs" />
                          </FormItem>
                        )} />
                      </div>

                      <FormField control={form.control} name="message" render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-slate-500 text-xs font-semibold uppercase tracking-wider">Message</FormLabel>
                          <FormControl>
                            <Textarea placeholder="Tell us more about your inquiry..." data-testid="input-message"
                              className="bg-slate-50 border-slate-200 text-slate-900 min-h-[150px] resize-none rounded-xl p-5 focus:border-blue-400 focus:ring-0 placeholder:text-slate-300 text-sm"
                              {...field} />
                          </FormControl>
                          <FormMessage className="text-red-500 text-xs" />
                        </FormItem>
                      )} />

                      <div className="flex flex-col sm:flex-row gap-4 pt-2">
                        <button type="submit" disabled={status === "submitting"} data-testid="button-submit"
                          className="flex-1 inline-flex items-center justify-center gap-2.5 rounded-xl text-base font-bold transition-all bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed h-14 shadow-sm hover:shadow-md hover:-translate-y-0.5">
                          {status === "submitting" ? (
                            <><Loader2 size={18} className="animate-spin" /> Sending...</>
                          ) : (
                            <>Send Message <ArrowRight size={18} /></>
                          )}
                        </button>
                        <p className="text-slate-400 text-xs text-center sm:text-left self-center max-w-[180px] leading-relaxed">
                          We respect your privacy. No spam, ever.
                        </p>
                      </div>
                    </form>
                  </Form>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ══ BOTTOM TRUST STRIP ══════════════════════════════════ */}
      <section className="py-12 md:py-24 bg-slate-50 border-t border-slate-100">
        <div className="container mx-auto px-6 lg:px-16">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
            className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: Clock,         title: "Fast Response Time",  desc: "We respond to all inquiries within 24 business hours. For urgent matters, call us directly at +1(262) 399-2770." },
              { icon: MessageSquare, title: "Career Inquiries",    desc: "Interested in joining ZSolutionz? Visit our Careers page or send your resume directly to info@zsolutionz.com." },
              { icon: Shield,        title: "Trusted & Secure",    desc: "Your information is safe with us. We use industry-standard practices to protect your data and privacy." },
            ].map((item, i) => (
              <motion.div key={i} variants={fadeUp} className="glass-card rounded-2xl p-8">
                <div className="h-12 w-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 mb-5">
                  <item.icon size={22} strokeWidth={1.5} />
                </div>
                <h3 className="text-base font-extrabold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

    </div>
  );
}