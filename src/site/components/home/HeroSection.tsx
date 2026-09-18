import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import dashboardScreenshot from "@/assets/site/dashboard-screenshot.png";

const outcomes = ["More Revenue", "Fewer No-Shows", "Zero Paperwork", "Faster Payments", "Full Visibility"];

const TypingText = () => {
  const [wordIndex, setWordIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = outcomes[wordIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 100);
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 1800);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length - 1)), 60);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setWordIndex((prev) => (prev + 1) % outcomes.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, deleting, wordIndex]);

  return (
    <span className="bg-primary ">
      {displayed}
      <span className="animate-pulse text-[hsl(var(--primary))]">|</span>
    </span>
  );
};

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-[hsl(var(--medical-blue-dark))] py-24 md:py-32 lg:py-40">
      {/* Concentric circle wave patterns */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        {[700, 550, 400, 260].map((size, i) => (
          <div
            key={i}
            className="absolute rounded-full border border-white/[0.06]"
            style={{ width: size, height: size }}
          />
        ))}
      </div>
      <div className="pointer-events-none absolute inset-0 " />

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-3xl text-center"
        >
          <h1 className="mb-6 text-4xl font-extrabold leading-[1.1] tracking-tight text-white md:text-5xl lg:text-6xl">
            Your Clinic Deserves{" "}
            <TypingText />
          </h1>
          <p className="mx-auto mb-10 max-w-xl text-lg leading-relaxed text-white/60">
            Stop chasing payments, fixing billing mistakes, and drowning in paperwork. Clinexus runs the business side of your clinic so you can focus on patients, and actually go home on time.
          </p>
          <a href="/signup">
            <Button
              size="lg"
              className="gap-2 rounded-full bg-primary px-10 text-white shadow-lg shadow-[hsl(var(--primary))]/30 hover:opacity-90"
            >
              Get Started <ArrowRight className="h-4 w-4" />
            </Button>
          </a>
        </motion.div>

        {/* Dashboard mockup */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mx-auto mt-16 max-w-4xl"
        >
          <div className="rounded-2xl border border-white/10 bg-[#1a1a2e] p-2 shadow-2xl shadow-black/40 backdrop-blur-sm">
            <div className="flex items-center gap-2 rounded-t-xl bg-[#2a2a3e] px-4 py-2.5">
              <div className="h-3 w-3 rounded-full bg-[#ff5f57]" />
              <div className="h-3 w-3 rounded-full bg-[#febc2e]" />
              <div className="h-3 w-3 rounded-full bg-[#28c840]" />
              <div className="ml-3 flex-1 rounded-md bg-white/10 px-3 py-1 text-[10px] text-white/40">
                app.clinexus.com.ng
              </div>
            </div>
            <div className="overflow-hidden rounded-b-xl">
              <img src={dashboardScreenshot} alt="Clinexus Dashboard" className="w-full" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
