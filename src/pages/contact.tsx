import { motion } from "framer-motion";
import { Link } from "wouter";
import {
  Mail, Phone, MapPin, ArrowRight, Clock,
  MessageSquare, CheckCircle2, Loader2, Shield, Lock,
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
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from "@/components/ui/select";
import mailIcon from "@/assets/mail icon .png";

const FORMSPREE = "https://formspree.io/f/mwvjdbno";

const schema = z.object({
  fullName: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(5, "Phone number is required"),
  subject: z.string().min(1, "Please select a subject"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormValues = z.infer<typeof schema>;
type Status = "idle" | "submitting" | "success" | "error";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22,1,0.36,1] as [number, number, number, number] } },
};
const stagger = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.07 } } };

const SUBJECT_OPTIONS = [
  "General Inquiry",
  "Technical Support",
  "Billing Question",
  "Partnership Opportunity",
  "Career Inquiry",
  "Other",
];

const CONNECT_METHODS = [
  {
    icon: Phone,
    title: "Call Our Team",
    desc: "Speak with our experts for immediate assistance.",
    linkText: "+1 (262) 399-2770",
    href: "tel:+12623992770",
  },
  {
    icon: Mail,
    title: "Email Us",
    desc: "Send us your questions anytime.",
    linkText: "info@zsolutionz.com",
    href: "mailto:info@zsolutionz.com",
  },
  {
    icon: MessageSquare,
    title: "Live Chat",
    desc: "Chat with our support team during business hours.",
    linkText: "Available on our website",
    href: "#",
  },
  {
    icon: MapPin,
    title: "Visit Our Office",
    desc: "Stop by our office or send us mail.",
    linkText: "259 W Broadway, 1st Floor, Waukesha, WI, USA",
    href: "#",
  },
  {
    icon: Clock,
    title: "Business Hours",
    desc: "We're here to help during our business hours.",
    linkText: "Mon - Sun: 8:00 AM - 9:00 PM (CT)",
    href: "#",
  },
];

const COMMON_INQUIRIES = [
  "Service availability in your area",
  "Plan comparisons and recommendations",
  "Technical support and troubleshooting",
  "Billing and account questions",
  "Partnership and business opportunities",
  "General feedback and suggestions",
];

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
      <section className="relative flex items-center pb-10 pt-24 md:pb-14 md:pt-28 overflow-hidden bg-white">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div style={{ background: "radial-gradient(ellipse 60% 60% at 75% 40%, rgba(37,99,235,0.10) 0%, transparent 60%)" }} className="absolute inset-0" />
          <div style={{ backgroundImage: "linear-gradient(rgba(37,99,235,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(37,99,235,0.05) 1px, transparent 1px)", backgroundSize: "64px 64px" }} className="absolute inset-0" />
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white to-transparent" />
        </div>

        <div className="container relative z-10 mx-auto px-6 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <div className="flex items-center gap-2 text-sm font-medium text-slate-400 mb-6">
                <Link href="/" className="hover:text-slate-600 transition-colors">Home</Link>
                <span className="text-slate-300">/</span>
                <span className="text-blue-500">Contact Us</span>
              </div>

              <div className="inline-flex items-center gap-3 rounded-full border border-blue-200 bg-blue-50 px-5 py-2 text-sm font-medium text-blue-600 mb-6">
                <span className="h-2 w-2 rounded-full bg-blue-500 animate-pulse" />
                We'd Love to Hear From You
              </div>

              <h1 className="font-extrabold text-slate-900 tracking-tight leading-[1.05] mb-4"
                style={{ fontSize: "clamp(2.25rem, 4.5vw, 3.75rem)" }}>
                Let's <span className="gradient-text">Connect</span>
              </h1>
              <p className="text-lg md:text-xl text-slate-500 max-w-xl leading-relaxed mb-8">
                We're here to help! Reach out to our team for any questions, support, or partnership opportunities.
              </p>

              <div className="flex flex-wrap gap-3">
                {[
                  { icon: MessageSquare, label: "Quick Response",  sub: "Within 24 hours" },
                  { icon: Shield,        label: "Trusted Support", sub: "Professional Team" },
                  { icon: Phone,         label: "Customer First",  sub: "Your satisfaction matters" },
                ].map((b, i) => (
                  <div key={i} className="glass-card rounded-2xl px-5 py-3 flex items-center gap-2.5">
                    <b.icon size={16} className="text-blue-500 shrink-0" strokeWidth={1.5} />
                    <div className="leading-tight">
                      <div className="text-slate-800 text-sm font-semibold">{b.label}</div>
                      <div className="text-slate-400 text-xs">{b.sub}</div>
                    </div>
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
                <div className="relative h-[230px] w-[230px] rounded-full border border-blue-200/60 flex items-center justify-center overflow-hidden">
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
              <img
                src={mailIcon}
                alt="Contact us"
                className="max-w-[340px] w-full mx-auto animate-float-y relative"
              />
              <motion.a
                href="tel:+12623992770"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="absolute top-2 right-0 glass-card rounded-2xl px-5 py-4 flex items-center gap-3 hover:-translate-y-0.5 transition-transform"
              >
                <div className="h-11 w-11 rounded-full bg-blue-600 flex items-center justify-center text-white shrink-0">
                  <Phone size={18} strokeWidth={1.75} />
                </div>
                <div className="leading-tight">
                  <div className="text-slate-400 text-[11px] font-semibold uppercase tracking-wider mb-0.5">Call Us</div>
                  <div className="text-slate-900 text-sm font-extrabold">+1 (262) 399-2770</div>
                  <div className="text-slate-400 text-[11px]">Mon - Sun, 8AM - 9PM CT</div>
                </div>
              </motion.a>
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
              { icon: Phone,  label: "Call Us",     value: "+1 (262) 399-2770",  sub: "Available Mon - Sun, 8:00 AM - 9:00 PM (CT)", href: "tel:+12623992770" },
              { icon: Mail,   label: "Email Us",    value: "info@zsolutionz.com", sub: "We reply within 24 hours every business day.", href: "mailto:info@zsolutionz.com" },
              { icon: MapPin, label: "Our Address", value: "259 W Broadway, 1st Floor, Waukesha, WI, USA", sub: "Serving customers across the United States.",  href: "#" },
            ].map((item, i) => (
              <motion.a key={i} variants={fadeUp} href={item.href}
                className="flex items-center gap-6 p-8 hover:bg-white transition-all group">
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
      <section className="py-14 md:py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-50 rounded-full blur-3xl opacity-60" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-50 rounded-full blur-3xl opacity-40" />
        </div>
        <div className="container mx-auto px-6 lg:px-16 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 max-w-7xl mx-auto">

            {/* ── LEFT COLUMN: WAYS TO CONNECT ────────── */}
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.2 }}
              className="lg:col-span-4 flex flex-col gap-5">
              <div className="mb-2">
                <h2 className="text-2xl font-extrabold text-slate-900 mb-2">Ways to Connect</h2>
                <p className="text-slate-500 text-sm leading-relaxed">
                  Choose the method that works best for you.
                </p>
              </div>

              {CONNECT_METHODS.map((item, i) => (
                <a key={i} href={item.href} data-testid={`link-${item.title.toLowerCase().replace(/\s+/g, "-")}`}
                  className="glass-card rounded-2xl p-6 flex items-start gap-5 hover:border-blue-200 transition-all duration-300 group hover:-translate-y-0.5">
                  <div className="h-12 w-12 rounded-full bg-blue-600 flex items-center justify-center text-white shrink-0 group-hover:bg-blue-700 transition-all duration-300">
                    <item.icon size={20} strokeWidth={1.75} />
                  </div>
                  <div>
                    <h4 className="text-sm font-extrabold text-slate-900 mb-1">{item.title}</h4>
                    <p className="text-slate-500 text-xs mb-1.5 leading-relaxed">{item.desc}</p>
                    <p className="text-blue-600 text-sm font-semibold group-hover:text-blue-700 transition-colors">{item.linkText}</p>
                  </div>
                </a>
              ))}
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
                    </div>
                    <h3 className="text-4xl font-extrabold text-slate-900 mb-4">Message Sent!</h3>
                    <p className="text-slate-500 text-lg max-w-sm leading-relaxed">
                      Thank you for reaching out to ZSolutionz. Our team will get back to you within 24 hours.
                    </p>
                  </motion.div>
                )}

                <div className="p-8 lg:p-10">
                  <div className="mb-8">
                    <span className="section-label">Send Us a Message</span>
                    <h2 className="text-3xl font-extrabold text-slate-900 mb-3">We'd Love to Hear From You</h2>
                    <p className="text-slate-400 text-sm">Fill out the form below and our team will get back to you within 24 hours.</p>
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
                              <Input placeholder="(262) 123-4567" data-testid="input-phone"
                                className="bg-slate-50 border-slate-200 text-slate-900 h-13 rounded-xl px-5 focus:border-blue-400 focus:ring-0 placeholder:text-slate-300 text-sm"
                                {...field} />
                            </FormControl>
                            <FormMessage className="text-red-500 text-xs" />
                          </FormItem>
                        )} />
                        <FormField control={form.control} name="subject" render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-slate-500 text-xs font-semibold uppercase tracking-wider">Subject</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger data-testid="select-subject"
                                  className="bg-slate-50 border-slate-200 text-slate-900 h-13 rounded-xl px-5 focus:border-blue-400 focus:ring-0 text-sm">
                                  <SelectValue placeholder="Select a subject" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                {SUBJECT_OPTIONS.map((opt) => (
                                  <SelectItem key={opt} value={opt}>{opt}</SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                            <FormMessage className="text-red-500 text-xs" />
                          </FormItem>
                        )} />
                      </div>

                      <FormField control={form.control} name="message" render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-slate-500 text-xs font-semibold uppercase tracking-wider">Your Message</FormLabel>
                          <FormControl>
                            <Textarea placeholder="How can we help you?" data-testid="input-message"
                              className="bg-slate-50 border-slate-200 text-slate-900 min-h-[150px] resize-none rounded-xl p-5 focus:border-blue-400 focus:ring-0 placeholder:text-slate-300 text-sm"
                              {...field} />
                          </FormControl>
                          <FormMessage className="text-red-500 text-xs" />
                        </FormItem>
                      )} />

                      <div className="pt-2">
                        <button type="submit" disabled={status === "submitting"} data-testid="button-submit"
                          className="w-full inline-flex items-center justify-center gap-2.5 rounded-xl text-base font-bold transition-all bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed h-14 shadow-sm hover:shadow-md hover:-translate-y-0.5">
                          {status === "submitting" ? (
                            <><Loader2 size={18} className="animate-spin" /> Sending...</>
                          ) : (
                            <>Send Message <ArrowRight size={18} /></>
                          )}
                        </button>
                        <p className="text-slate-400 text-xs text-center mt-4 flex items-center justify-center gap-1.5">
                          <Lock size={12} /> Your information is secure and will never be shared.
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

      {/* ══ STILL HAVE QUESTIONS / FAQ STRIP ═══════════════════ */}
      <section className="pb-14 md:pb-20 bg-white">
        <div className="container mx-auto px-6 lg:px-16">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="max-w-7xl mx-auto rounded-3xl bg-slate-50 border border-slate-100 p-8 lg:p-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
              <div className="lg:col-span-4">
                <h3 className="text-2xl font-extrabold text-slate-900 mb-3">Still Have Questions?</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-6">
                  Check out our FAQ section for quick answers to common questions.
                </p>
                <Link href="/faq"
                  className="inline-flex items-center gap-2 rounded-xl border border-blue-200 bg-white px-5 py-3 text-blue-600 text-sm font-bold hover:bg-blue-50 transition-colors">
                  View FAQs <ArrowRight size={15} />
                </Link>
              </div>
              <div className="lg:col-span-8">
                <h4 className="text-sm font-extrabold text-slate-900 uppercase tracking-wider mb-5">Common Inquiries</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-4">
                  {COMMON_INQUIRIES.map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <CheckCircle2 size={18} className="text-blue-600 shrink-0" />
                      <span className="text-slate-600 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}