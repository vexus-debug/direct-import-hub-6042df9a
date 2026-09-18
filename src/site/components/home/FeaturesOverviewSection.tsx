import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Users, Calendar, Receipt, Package, BarChart3, Shield, Stethoscope, FlaskConical } from "lucide-react";
import { Button } from "@/components/ui/button";

const outcomes = [
  {
    icon: Users,
    title: "Never Lose a Patient's History Again",
    description: "Every visit, prescription, and treatment in one place, accessible in seconds, not buried in a filing cabinet.",
  },
  {
    icon: Calendar,
    title: "Cut No-Shows by Up to 40%",
    description: "Automated reminders go out so patients remember to show up, and your chairs stay filled.",
  },
  {
    icon: Stethoscope,
    title: "Document Faster, See More Patients",
    description: "Clinical notes that take minutes, not an hour at the end of your shift. More patients. Less burnout.",
  },
  {
    icon: FlaskConical,
    title: "Stop Losing Track of Lab Work",
    description: "Know exactly where every lab case is, who's working on it, and when it's due, no more chasing technicians.",
  },
  {
    icon: Receipt,
    title: "Get Paid Faster, Every Time",
    description: "Invoices created in seconds, payment plans offered on the spot, and zero revenue slipping through the cracks.",
  },
  {
    icon: Package,
    title: "Know What's Running Low Before It Does",
    description: "No more emergency supply runs or treating patients with materials you don't have. Stay stocked, stay profitable.",
  },
  {
    icon: BarChart3,
    title: "Finally Know if Your Clinic is Profitable",
    description: "See your real revenue, your real costs, and exactly which services make you the most money, all at a glance.",
  },
  {
    icon: Shield,
    title: "Sleep Well Knowing Your Data is Safe",
    description: "Every staff member sees only what they should. Your financials, your records, your business, protected.",
  },
];

const FeaturesOverviewSection = () => {
  return (
    <section className="relative overflow-hidden bg-[hsl(var(--medical-blue-dark))] py-24 md:py-32">
      <div className="pointer-events-none absolute inset-0 " />
      <div className="pointer-events-none absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[hsl(var(--primary))]/10 blur-3xl" />

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto mb-14 max-w-2xl text-center"
        >
          <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-widest text-[hsl(var(--medical-teal))]">
            What You Actually Get
          </span>
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-white md:text-4xl">
            Real Problems. Real Results.
          </h2>
          <p className="text-white/60">
            Every part of Clinexus answers one question: what do you, the clinic owner, actually need to stop worrying and start earning more?
          </p>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {outcomes.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="group relative rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/10"
            >
              <div className="relative z-10">
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-[hsl(var(--primary))]/20">
                  <item.icon className="h-5 w-5 text-[hsl(var(--medical-teal))]" />
                </div>
                <h3 className="mb-1.5 text-base font-semibold text-white">{item.title}</h3>
                <p className="text-sm leading-relaxed text-white/50">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.4 }}
          className="mt-10 text-center"
        >
          <Link to="/industries">
            <Button variant="ghost" className="gap-2 text-white/80 hover:bg-white/10 hover:text-white">
              See Everything You Get <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesOverviewSection;
