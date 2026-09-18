import { motion } from "framer-motion";
import { UserPlus, Settings, Rocket } from "lucide-react";

const steps = [
  {
    icon: UserPlus,
    title: "You're Live in Minutes",
    description: "Sign up and your clinic is ready to go. No IT team, no long onboarding calls, no credit card required. Just your clinic, live and working.",
  },
  {
    icon: Settings,
    title: "It Fits the Way You Work",
    description: "Add your treatments, your staff, your schedules. Clinexus bends to fit your clinic, you don't bend to fit it.",
  },
  {
    icon: Rocket,
    title: "Watch Your Clinic Transform",
    description: "From the first appointment booked to the first invoice paid without a phone call, you'll wonder how you managed without it.",
  },
];

const HowItWorksSection = () => {
  return (
    <section className="relative site-section-tint overflow-hidden py-24 md:py-32">
      <div className="pointer-events-none absolute inset-0 bg-muted/20" />

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto mb-16 max-w-2xl text-center"
        >
          <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-widest text-primary">
            Getting Started
          </span>
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            From Chaos to Clarity in Three Steps
          </h2>
          <p className="text-muted-foreground">
            Most clinics are up and running the same day. No steep learning curve. No consultants needed.
          </p>
        </motion.div>

        <div className="relative mx-auto max-w-5xl">
          <div className="pointer-events-none absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-muted/20 lg:block" />

          <div className="flex flex-col gap-16 lg:gap-0">
            {steps.map((step, i) => {
              const isEven = i % 2 === 0;
              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.15 }}
                  className={`relative flex items-center lg:min-h-[180px] ${
                    isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                  }`}
                >
                  <div className={`flex-1 ${isEven ? "lg:pr-16 lg:text-right" : "lg:pl-16 lg:text-left"}`}>
                    <div className="rounded-2xl border border-border/50 bg-card p-6 shadow-sm transition-all duration-300 hover:shadow-md hover:shadow-primary/5">
                      <div className={`mb-3 flex items-center gap-3 ${isEven ? "lg:flex-row-reverse" : ""}`}>
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                          <step.icon className="h-6 w-6 text-primary" />
                        </div>
                        <h3 className="text-xl font-bold text-foreground">{step.title}</h3>
                      </div>
                      <p className={`text-sm leading-relaxed text-muted-foreground ${isEven ? "lg:ml-auto" : ""} max-w-xs`}>
                        {step.description}
                      </p>
                    </div>
                  </div>

                  <div className="absolute left-1/2 hidden -translate-x-1/2 lg:flex">
                    <div className="relative flex h-14 w-14 items-center justify-center rounded-full border-4 border-background bg-primary shadow-lg shadow-primary/20">
                      <span className="text-lg font-bold text-primary-foreground">{i + 1}</span>
                    </div>
                  </div>

                  <div className="hidden flex-1 lg:block" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
