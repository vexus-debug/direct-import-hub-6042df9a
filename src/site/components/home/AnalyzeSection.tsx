import { motion } from "framer-motion";
import { BarChart3, CheckCircle2 } from "lucide-react";
import profitabilityScreenshot from "@/assets/site/profitability-screenshot.png";

const AnalyzeSection = () => {
  return (
    <section className="relative site-section-light overflow-hidden py-20 md:py-28">
      <div className="pointer-events-none absolute inset-0 bg-muted/20" />
      <div className="pointer-events-none absolute left-1/4 top-0 h-[400px] w-[400px] -translate-y-1/2 rounded-full bg-primary/5 blur-3xl" />
      <div className="container relative z-10">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
              <BarChart3 className="h-6 w-6 text-primary" />
            </div>
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Finally See Where Your Money Really Comes From
            </h2>
            <p className="mb-6 text-lg leading-relaxed text-muted-foreground">
              See which treatments make you the most money, which patients keep coming back, and where every naira goes, updated in real time, ready to export whenever you need it.
            </p>
            <ul className="space-y-3">
              {[
"Know exactly which treatments actually make you money",
"Staff commissions calculated for you, every time",
"Spot trends before they hurt your bottom line",
"Reports ready to print or send, in one click",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-foreground">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" />
                  <span className="font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="rounded-2xl border border-border/50 bg-[#1a1a2e] p-2 shadow-xl shadow-primary/5">
              <div className="flex items-center gap-2 rounded-t-xl bg-[#2a2a3e] px-4 py-2.5">
                <div className="h-3 w-3 rounded-full bg-[#ff5f57]" />
                <div className="h-3 w-3 rounded-full bg-[#febc2e]" />
                <div className="h-3 w-3 rounded-full bg-[#28c840]" />
                <div className="ml-3 flex-1 rounded-md bg-white/10 px-3 py-1 text-[10px] text-white/40">
                  app.clinexus.com.ng/profitability
                </div>
              </div>
              <div className="overflow-hidden rounded-b-xl">
                <img src={profitabilityScreenshot} alt="Clinexus Profitability Dashboard" className="w-full" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AnalyzeSection;
