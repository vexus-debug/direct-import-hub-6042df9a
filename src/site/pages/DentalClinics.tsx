import Layout from "@/site/components/Layout";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Boxes,
  CalendarClock,
  Check,
  ClipboardList,
  FileBarChart,
  MessageCircle,
  ShieldCheck,
  Smile,
  Users,
  Wallet,
} from "lucide-react";
import shotPatients from "@/assets/dental-sales/patients.png";
import shotAppointments from "@/assets/dental-sales/appointments.png";
import shotCharts from "@/assets/dental-sales/dental-charts.png";
import shotBilling from "@/assets/dental-sales/billing.png";
import shotInventory from "@/assets/dental-sales/inventory.png";
import shotDashboard from "@/assets/dental-sales/dashboard.png";
import { LocalSeo } from "@/site/components/LocalSeo";

const WHATSAPP = "https://wa.me/2349017758165";
const EASE = [0.22, 1, 0.36, 1] as const;
const viewport = { once: true, margin: "-70px" };
const reveal = { hidden: { opacity: 0, y: 34 }, show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } } };
const slide = (dir: "left" | "right" | "up") => ({ hidden: { opacity: 0, x: dir === "left" ? -70 : dir === "right" ? 70 : 0, y: dir === "up" ? 60 : 0 }, show: { opacity: 1, x: 0, y: 0, transition: { duration: 0.8, ease: EASE } } });

const Screenshot = ({ src, alt }: { src: string; alt: string }) => (
  <div className="mb-6 overflow-hidden rounded-2xl border border-primary/15 bg-background shadow-xl shadow-primary/10">
    <div className="flex items-center gap-1.5 border-b border-primary/10 bg-muted/40 px-3 py-2">
      <span className="h-2 w-2 rounded-full bg-primary/25" />
      <span className="h-2 w-2 rounded-full bg-primary/25" />
      <span className="h-2 w-2 rounded-full bg-primary/25" />
    </div>
    <img src={src} alt={alt} loading="lazy" className="block w-full" />
  </div>
);

const modules = [
  { icon: ClipboardList, name: "Patient records", shot: shotPatients, shotAlt: "Patient list with contact details, visit history and status", benefit: "One record instead of five folders per patient.", body: "Every treatment plan, prescription, visit, X-ray and note lives against the same patient, no digging through paper or a separate imaging folder. Personal details, emergency contact, medical history, allergies and alerts stay visible at the top of the profile." },
  { icon: CalendarClock, name: "Scheduling", shot: shotAppointments, shotAlt: "Monthly appointment calendar showing booked patients per day", benefit: "Scheduling that doesn't collide.", body: "Book by patient, clinician, treatment and chair without double-booking a chair or a clinician who's off that day. Day, week and month views, a live chair-availability grid, a walk-in queue and waiting list keep the whole day moving." },
  { icon: Smile, name: "Dental charting", shot: shotCharts, shotAlt: "Interactive adult tooth chart with per-tooth condition colours", benefit: "Clinical charting built around dentistry.", body: "Chart tooth-by-tooth, not in a paragraph someone has to re-read to work out what was actually done. Treatment planning, prescriptions and consent forms stay tied to the same patient record rather than kept separately." },
  { icon: Wallet, name: "Billing & profitability", shot: shotBilling, shotAlt: "Billing screen with invoices, amounts owed and payment status", benefit: "Billing that doesn't leak revenue.", body: "Know what's owed, what's on a payment plan and what each treatment actually costs to deliver. Invoicing, estimates, expenses, staff commissions, revenue allocation and profitability reporting stay connected by treatment and clinician." },
  { icon: Boxes, name: "Inventory", shot: shotInventory, shotAlt: "Inventory list showing stock levels and low-stock alerts", benefit: "Materials that don't run out mid-procedure.", body: "Know your stock levels before a filling starts, not while it's underway. Inventory, cost and valuation tracking, treatment materials, suppliers and purchase orders show what is available and what needs attention." },
  { icon: ShieldCheck, name: "Oversight & access", shot: shotDashboard, shotAlt: "Clinic dashboard with patient count, revenue and today's schedule", benefit: "The right people seeing the right things.", body: "A dashboard brings together patient count, today's completion rate, pending payments, monthly revenue, today's schedule and live activity. Role-based access keeps finance, staff and audit screens with the people who need them." },
];


const included = ["Full patient records, SOAP notes and tooth-tagged imaging", "Scheduling with chair and clinician conflict prevention", "Dental charting, treatment planning and consent forms", "Billing, payment plans, commissions and profitability reporting", "Inventory linked to treatments, suppliers and purchase orders", "Reports, analytics and role-based access control"];
const roles = ["Owner", "Admin", "Dentist", "Receptionist", "Hygienist", "Assistant", "Accountant", "Lab technician", "Lab assistant"];
const plans = [
  { label: "Quarterly", price: "₦15,000", period: "every 3 months" },
  { label: "Half-yearly", price: "₦30,000", period: "every 6 months", featured: true },
  { label: "Yearly", price: "₦60,000", period: "every 12 months" },
];

const coreGroups = [
  {
    icon: Users,
    title: "Patient care & scheduling",
    benefit: "Fewer no-shows, shorter waits, calmer front desk.",
    points: [
"Patient profiles with history, files, correspondence, allergies and alerts",
"Appointments, clinician schedules, chair availability and a live waiting list",
"SOAP notes, treatment plans, prescriptions and consent forms captured digitally",
"Treatment materials linked to what was used, so stock and clinical notes agree",
    ],
  },
  {
    icon: Wallet,
    title: "Finance & billing",
    benefit: "Know what you earned, what it cost and what's still owed.",
    points: [
"Invoicing and estimates before a patient commits to treatment",
"Payment plans for higher-value work like implants and orthodontics",
"Expenses, staff commission payouts and revenue allocation tracked as they happen",
"Profitability by treatment and clinician, not just month-end totals",
    ],
  },
  {
    icon: Boxes,
    title: "Inventory & supply chain",
    benefit: "Never lose a procedure to an empty shelf or forgotten reorder.",
    points: [
"Materials and consumables tracked with real cost and valuation",
"Treatment materials linked directly to the treatments that consume them",
"Suppliers and purchase orders kept against the items they deliver",
"Stock levels visible before the next patient is in the chair",
    ],
  },
  {
    icon: FileBarChart,
    title: "Reports & administration",
    benefit: "Run the clinic on evidence, and prove what happened.",
    points: [
"Standard reports and advanced analytics across clinical, financial and operational activity",
"Staff records, document storage, website settings and clinic administration",
"An audit log showing who changed what and when",
"A live activity feed so owners see the day without chasing updates",
    ],
  },
];

const DentalClinics = () => {
  return (
    <Layout>
      <div className="eye-theme">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <header className="mb-24 text-center">
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-5 text-xs font-semibold uppercase tracking-[0.25em] text-primary"
            >
              Clinexus for Dental Clinics
            </motion.p>

            <motion.h1
              initial="hidden"
              animate="show"
              variants={reveal}
              className="mx-auto mb-8 max-w-4xl text-4xl font-bold leading-tight text-foreground md:text-6xl"
            >
              The clinical work is solid. Is everything around it?
            </motion.h1>
            <motion.div initial="hidden" animate="show" variants={reveal} transition={{ delay: 0.3 }} className="flex flex-col items-center justify-center gap-4 md:flex-row">
              <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-md bg-primary px-10 py-4 font-bold text-primary-foreground transition-colors hover:bg-foreground">
                <MessageCircle className="h-5 w-5" /> Talk to us on WhatsApp
              </a>
              <Link to="/industries/dental-clinics/features" className="inline-flex items-center gap-2 rounded-md border border-primary px-10 py-4 font-bold text-primary transition-colors hover:bg-primary/10">
                See the full feature list <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>
            <motion.p initial="hidden" whileInView="show" viewport={viewport} variants={reveal} className="mx-auto mt-12 max-w-3xl border-t border-primary/20 pt-8 text-sm leading-relaxed text-muted-foreground">
              Clinexus is built working directly with dental clinics running real patient loads, the workflow below was shaped by what those clinics actually needed, not designed in the abstract and hoped to fit.
            </motion.p>
          </header>

          <section id="features" className="scroll-mt-24">
            <motion.h2 initial="hidden" whileInView="show" viewport={viewport} variants={reveal} className="mb-4 text-2xl font-bold text-foreground md:text-3xl">
              What's actually in it, <span className="text-muted-foreground">what it does, specifically</span>
            </motion.h2>
            <motion.p initial="hidden" whileInView="show" viewport={viewport} variants={reveal} className="mb-10 max-w-2xl text-muted-foreground">
              Patient care, scheduling, clinical records, money and stock move through one connected system instead of separate folders and conversations.
            </motion.p>
            <div className="mb-24 grid gap-6 md:grid-cols-2">
              {modules.map((item, i) => (
                <motion.article key={item.name} initial="hidden" whileInView="show" viewport={viewport} variants={slide(i % 2 === 0 ? "left" : "right")} whileHover={{ y: -5 }} className="eye-panel flex flex-col rounded-3xl p-7">
                  <Screenshot src={item.shot} alt={item.shotAlt} />
                  <div className="mb-5 flex items-center justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10"><item.icon className="h-5 w-5 text-primary" /></div>
                    <span className="font-display text-3xl font-bold text-primary/25">{String(i + 1).padStart(2, "0")}</span>
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-card-foreground">{item.name}</h3>
                  <p className="mb-3 font-medium text-primary">{item.benefit}</p>
                  <p className="text-sm leading-relaxed text-muted-foreground">{item.body}</p>
                </motion.article>
              ))}
            </div>
          </section>

          <motion.h2 initial="hidden" whileInView="show" viewport={viewport} variants={reveal} className="mb-4 text-2xl font-bold text-foreground md:text-3xl">
            The rest of the clinic, <span className="text-muted-foreground">included, not a separate product</span>
          </motion.h2>
          <motion.p initial="hidden" whileInView="show" viewport={viewport} variants={reveal} className="mb-10 max-w-2xl text-muted-foreground">
            The clinical work is only half of a practice. The other half, money, stock, staff and patients you haven't seen in a year, sits in the same system, using the same records.
          </motion.p>
          <div className="mb-24 grid gap-4 md:grid-cols-2">
            {coreGroups.map((group, i) => (
              <motion.article key={group.title} initial="hidden" whileInView="show" viewport={viewport} variants={slide(i % 2 === 0 ? "left" : "right")} whileHover={{ y: -5 }} className={i === 1 ? "eye-panel-light rounded-3xl p-8" : i === 2 ? "eye-panel-accent rounded-3xl p-8" : "eye-panel rounded-3xl p-8"}>
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10"><group.icon className="h-5 w-5 text-primary" /></div>
                <h3 className="mb-2 text-xl font-bold">{group.title}</h3>
                <p className="mb-5 font-medium text-primary">{group.benefit}</p>
                <ul className="space-y-2.5">{group.points.map((point) => <li key={point} className="flex items-start gap-2.5 text-sm leading-relaxed text-muted-foreground"><Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" /><span>{point}</span></li>)}</ul>
              </motion.article>
            ))}
          </div>

          <div className="mb-24 grid gap-4 md:grid-cols-12">
            <motion.section initial="hidden" whileInView="show" viewport={viewport} variants={slide("left")} className="eye-panel col-span-12 rounded-3xl p-8 md:col-span-7">
              <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10"><Users className="h-5 w-5 text-primary" /></div>
              <h3 className="mb-2 text-xl font-bold text-card-foreground">A clear view of the clinic, every day</h3>
              <p className="mb-5 font-medium text-primary">See what's happening without asking five people for an update.</p>
              <ul className="space-y-2.5">{["Patient count, today's completion rate, pending payments and monthly revenue", "Today's schedule, who's up next, weekly stats and a live activity feed", "Standard reports and advanced analytics for the decisions behind the numbers"].map((point) => <li key={point} className="flex items-start gap-2.5 text-sm leading-relaxed text-muted-foreground"><Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" /><span>{point}</span></li>)}</ul>
            </motion.section>
            <motion.section initial="hidden" whileInView="show" viewport={viewport} variants={slide("right")} className="eye-panel col-span-12 rounded-3xl p-8 md:col-span-5">
              <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10"><ShieldCheck className="h-5 w-5 text-primary" /></div>
              <h3 className="mb-2 text-xl font-bold text-card-foreground">Access follows the role</h3>
              <p className="mb-5 font-medium text-primary">Narrower roles don't see finance, staff or audit screens.</p>
              <div className="flex flex-wrap gap-2">{roles.map((role) => <span key={role} className="rounded-full border border-primary/20 px-3 py-1 text-xs text-muted-foreground">{role}</span>)}</div>
            </motion.section>
          </div>

          <motion.section initial="hidden" whileInView="show" viewport={viewport} variants={reveal} className="eye-panel rounded-[3rem] p-8 text-center md:p-12" style={{ borderColor: "hsl(var(--primary) / 0.3)" }}>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-primary">Getting started</p>
            <h2 className="mb-4 text-3xl font-bold text-card-foreground">One plan, everything above included</h2>
            <p className="mx-auto mb-12 max-w-2xl text-muted-foreground">No tier that holds back billing or inventory until you pay more, patient care, clinical, finance, inventory and admin are all included from day one.</p>
            <div className="mx-auto mb-12 grid max-w-4xl gap-8 md:grid-cols-3">{plans.map((plan, i) => <motion.div key={plan.period} initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={viewport} transition={{ delay: i * 0.12, duration: 0.6, ease: EASE }} whileHover={{ y: -6 }} className={plan.featured ? "eye-panel-accent scale-105 rounded-2xl p-6 shadow-xl" : "rounded-2xl bg-background/50 p-6"}><p className={plan.featured ? "mb-2 text-sm font-bold opacity-70" : "mb-2 text-sm text-muted-foreground"}>{plan.label}</p><div className={plan.featured ? "text-3xl font-bold" : "text-3xl font-bold text-primary"}>{plan.price}</div><p className={plan.featured ? "mt-1 text-xs opacity-60" : "mt-1 text-xs text-muted-foreground/60"}>{plan.period}</p></motion.div>)}</div>
            <div className="mx-auto max-w-2xl text-left"><p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">Included at every tier</p><div className="grid gap-4 md:grid-cols-2">{included.map((item) => <div key={item} className="flex items-start gap-2 text-sm text-muted-foreground"><Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" /><span>{item}</span></div>)}</div></div>
          </motion.section>

          <motion.section initial="hidden" whileInView="show" viewport={viewport} variants={reveal} className="mt-24 text-center">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-primary">Next step</p>
            <h2 className="mb-5 text-3xl font-bold text-foreground">See it against your own patient records</h2>
            <p className="mx-auto mb-10 max-w-2xl leading-relaxed text-muted-foreground">Tell us how your clinic currently handles scheduling, charting and billing, and we'll show you exactly how Clinexus fits in, using your workflow, not a generic demo.</p>
            <div className="inline-flex flex-col gap-4 md:flex-row"><a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-10 py-4 font-bold text-primary-foreground transition-colors hover:bg-foreground"><MessageCircle className="h-5 w-5" />Talk to us on WhatsApp</a><Link to="/signup" className="inline-flex items-center justify-center gap-2 rounded-md border border-primary px-10 py-4 font-bold text-primary transition-colors hover:bg-primary/10">Try demo <ArrowRight className="h-4 w-4" /></Link></div>
            <p className="mt-6 text-sm text-muted-foreground/60">Clinexus, clinic management built for how you actually work.</p>
          </motion.section>
        </div>
      </div>
      <div className="mx-auto max-w-6xl px-6 pb-24">
        <LocalSeo specialty="Dental clinics" />
      </div>
    </Layout>
  );
};

export default DentalClinics;