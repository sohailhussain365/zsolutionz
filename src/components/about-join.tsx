import { motion } from "framer-motion";
  import { Button } from "@/components/ui/button";
  import { ArrowRight, Star, HeartHandshake, TrendingUp, Zap } from "lucide-react";
  import joinBg from "@/assets/join-bg.png";

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  export function AboutSection() {
    const values = [
      { icon: Star, text: "Integrity" },
      { icon: HeartHandshake, text: "Customer Commitment" },
      { icon: TrendingUp, text: "Professional Growth" },
      { icon: Zap, text: "Continuous Improvement" }
    ];

    return (
      <section id="about" className="py-24 bg-background border-t border-border">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Who We Are</h2>
              <div className="h-1 w-20 bg-primary mx-auto rounded-full mb-8"></div>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-16">
                ZSolutionz is committed to helping customers connect with reliable internet services while providing exceptional customer support. We focus on professionalism, transparency, and long-term customer satisfaction.
              </p>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {values.map((val, i) => (
                <motion.div key={i} variants={fadeInUp} className="flex flex-col items-center bg-card p-6 rounded-2xl border border-border">
                  <div className="h-12 w-12 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-4">
                    <val.icon size={24} />
                  </div>
                  <h4 className="text-white font-semibold text-center">{val.text}</h4>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    );
  }

  export function JoinSection() {
    const positions = [
      "Sales Representatives",
      "Customer Support Representatives",
      "Remote Team Members"
    ];

    return (
      <section id="join" className="py-24 relative overflow-hidden border-t border-border">
        <div className="absolute inset-0 z-0">
          <img src={joinBg} alt="Careers" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-background/80" />
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Build Your Career With ZSolutionz</h2>
              <p className="text-xl text-muted-foreground">We are looking for motivated individuals who want to grow with us.</p>
            </motion.div>
          </div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
            {positions.map((pos, i) => (
              <motion.div key={i} variants={fadeInUp} className="bg-card/60 backdrop-blur-md border border-border p-8 rounded-2xl flex flex-col items-center text-center hover:border-primary/50 transition-colors">
                <h3 className="text-xl font-bold text-white mb-6">{pos}</h3>
                <Button variant="outline" className="mt-auto border-primary/50 text-primary hover:bg-primary hover:text-white rounded-full w-full group">
                  View Role <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </motion.div>
            ))}
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="text-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white h-14 px-12 text-lg rounded-full shadow-[0_0_20px_rgba(37,99,235,0.4)]">
              Apply Now
            </Button>
          </motion.div>
        </div>
      </section>
    );
  }
  