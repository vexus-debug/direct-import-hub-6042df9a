import Layout from "@/site/components/Layout";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, MessageCircle, Check } from "lucide-react";
import shotDashboard from "@/assets/eye-sales/dashboard.png";
import shotOverview from "@/assets/eye-sales/eye-overview.png";
import shotExams from "@/assets/eye-sales/eye-exams.png";
import shotCharts from "@/assets/eye-sales/eye-charts.png";
import shotOrders from "@/assets/eye-sales/eye-orders.png";
import shotPrescriptions from "@/assets/eye-sales/eye-prescriptions.png";
import shotSurgery from "@/assets/eye-sales/eye-surgery.png";
import shotContactLenses from "@/assets/eye-sales/eye-contact-lenses.png";
import shotAppointments from "@/assets/eye-sales/appointments.png";
import { LocalSeo } from "@/site/components/LocalSeo";

const Screenshot = ({
  src,
  alt,
  caption,
  className = "",
}: {
  src: string;
  alt: string;
  caption?: string;
  className?: string;
}) => (
  <figure className={className}>
    <div className="overflow-hidden rounded-2xl border border-primary/15 bg-background shadow-2xl shadow-primary/10">
      <div className="flex items-center gap-1.5 border-b border-primary/10 bg-muted/40 px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-primary/25" />
        <span className="h-2.5 w-2.5 rounded-full bg-primary/25" />
        <span className="h-2.5 w-2.5 rounded-full bg-primary/25" />
      </div>
      <img src={src} alt={alt} loading="lazy" className="block w-full" />
    </div>
    {caption && (
      <figcaption className="mt-3 text-center text-sm text-muted-foreground">{caption}</figcaption>
    )}
  </figure>
);

const WHATSAPP = "https://wa.me/2349017758165";
const EASE = [0.22, 1, 0.36, 1] as const;

const reveal = {
  hidden: { opacity: 0, y: 34 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
};

const slide = (dir: "left" | "right" | "up") => ({
  hidden: {
    opacity: 0,
    x: dir === "left" ? -70 : dir === "right" ? 70 : 0,
    y: dir === "up" ? 60 : 0,
  },
  show: { opacity: 1, x: 0, y: 0, transition: { duration: 0.8, ease: EASE } },
});

const viewport = { once: true, margin: "-70px" };

const plans = [
  { label: "Quarterly", price: "₦15,000", period: "every 3 months" },
  { label: "Half-yearly", price: "₦30,000", period: "every 6 months", featured: true },
  { label: "Yearly", price: "₦60,000", period: "every 12 months" },
];

const included = [
"Full clinical exam and refraction records",
"Diagnostic imaging uploads with automatic trend charts",
"Contact lens fitting and optical order tracking",
"Surgery booking, biometry/IOL, consent tracking",
"Appointments, invoicing, inventory, staff scheduling, analytics",
];

const EyeClinics = () => {
  return (
    <Layout>
      <div className="eye-theme">
        <div className="mx-auto max-w-6xl px-6 py-24">
          {/* Hero */}
          <header className="mb-24 text-center">
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-5 text-xs font-semibold uppercase tracking-[0.25em] text-primary"
            >
              Clinexus for Eye Clinics
            </motion.p>

            <motion.h1
              initial="hidden"
              animate="show"
              variants={reveal}
              className="mx-auto mb-8 max-w-4xl text-4xl font-bold leading-tight text-foreground md:text-6xl"
            >
              Your patients trust you with their{" "}
              <span className="text-primary">sight</span>. Your systems shouldn't make that harder.
            </motion.h1>

            <motion.p
              initial="hidden"
              animate="show"
              variants={reveal}
              transition={{ delay: 0.12 }}
              className="mx-auto mb-6 max-w-2xl text-lg leading-relaxed text-muted-foreground"
            >
              A missing IOP trend, a forgotten contact lens aftercare check, an optical order tracked in a
              WhatsApp thread, none of it is dramatic on its own. Together, it's what keeps a well-run clinic
              from feeling like one.
            </motion.p>

            <motion.p
              initial="hidden"
              animate="show"
              variants={reveal}
              transition={{ delay: 0.2 }}
              className="mx-auto mb-10 max-w-2xl leading-relaxed text-muted-foreground/80"
            >
              Clinexus is a clinic management system built specifically around eye care, exams, refraction,
              diagnostics, dispensing, surgery and the everyday admin, in one place.
            </motion.p>

            <motion.div
              initial="hidden"
              animate="show"
              variants={reveal}
              transition={{ delay: 0.3 }}
              className="flex flex-col items-center justify-center gap-4 md:flex-row"
            >
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md bg-primary px-10 py-4 font-bold text-primary-foreground transition-colors hover:bg-foreground"
              >
                <MessageCircle className="h-5 w-5" />
                Talk to us on WhatsApp
              </a>
              <Link
                to="/industries/eye-clinics/features"
                className="inline-flex items-center gap-2 rounded-md border border-primary px-10 py-4 font-bold text-primary transition-colors hover:bg-primary/10"
              >
                See the full feature list
                <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>

            <motion.p
              initial="hidden"
              whileInView="show"
              viewport={viewport}
              variants={reveal}
              className="mx-auto mt-12 max-w-3xl border-t border-primary/20 pt-8 text-sm leading-relaxed text-muted-foreground"
            >
              Clinexus is built working directly alongside dental and eye clinics, the eye clinic workflow
              below was shaped with practitioners who deal with these exact records every day, not designed in
              the abstract and hoped to fit.
            </motion.p>
          </header>

          {/* Hero product shot */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            variants={reveal}
            className="mb-24"
          >
            <Screenshot
              src={shotDashboard}
              alt="Clinexus dashboard showing revenue, patient stats and today's appointments for a demo eye clinic"
              caption="The clinic dashboard, revenue, patients and today's schedule at a glance"
            />
          </motion.div>

          {/* Bento capabilities */}
          <motion.h2
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            variants={reveal}
            className="mb-10 text-2xl font-bold text-foreground md:text-3xl"
          >
            What's actually in it -{" "}
            <span className="text-muted-foreground">what it does, specifically</span>
          </motion.h2>

          <div className="mb-24 grid grid-cols-12 gap-4">
            {/* 01 */}
            <motion.article
              initial="hidden"
              whileInView="show"
              viewport={viewport}
              variants={slide("left")}
              whileHover={{ y: -5 }}
              className="eye-panel col-span-12 flex min-h-[400px] flex-col justify-between rounded-3xl p-8 md:col-span-8"
            >
              <div>
                <span className="font-display text-5xl font-bold text-primary/30">01</span>
                <h3 className="mb-2 mt-4 text-2xl font-bold text-card-foreground">
                  One record for every exam and refraction
                </h3>
                <Screenshot
                  src={shotExams}
                  alt="Eye exam records showing visual acuity and IOP readings per patient"
                  className="mt-5"
                />
                <p className="mb-4 font-medium text-primary">
                  Stop reconstructing a patient's history from memory or a paper folder, it's all on one
                  timeline, trending automatically.
                </p>
                <p className="max-w-2xl leading-relaxed text-muted-foreground">
                  Captures visual acuity (aided/unaided/pinhole), IOP with tonometry method, pupils, anterior
                  segment, fundus, C/D ratio and dilation flag. Full refraction per eye, sphere, cylinder,
                  axis, add, prism, PD, across distance, reading, bifocal, progressive, computer and contact
                  lens prescription types, with issue and expiry dates tracked.
                </p>
              </div>
              <div className="mt-8 flex gap-2 overflow-hidden">
                {["OD / OS timeline", "Refraction history", "IOP + C/D trend"].map((label, i) => (
                  <motion.div
                    key={label}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={viewport}
                    transition={{ delay: 0.25 + i * 0.12, duration: 0.6, ease: EASE }}
                    className="flex h-20 flex-1 items-end rounded-xl border border-primary/10 bg-background p-3 text-[11px] uppercase tracking-wide text-muted-foreground/70"
                  >
                    {label}
                  </motion.div>
                ))}
              </div>
            </motion.article>

            {/* 02 */}
            <motion.article
              initial="hidden"
              whileInView="show"
              viewport={viewport}
              variants={slide("right")}
              whileHover={{ y: -5 }}
              className="eye-panel-light col-span-12 rounded-3xl p-8 md:col-span-4"
            >
              <span className="font-display text-5xl font-bold opacity-20">02</span>
              <h3 className="mb-2 mt-4 text-2xl font-bold">Diagnostic results that plot themselves</h3>
              <Screenshot
                src={shotCharts}
                alt="Eye charts plotting IOP, OCT and visual field trends over time"
                className="mt-5"
              />
              <p className="mb-4 font-medium opacity-80">
                Catch slow changes, like early glaucoma progression, before they become obvious in a single
                visit.
              </p>
              <p className="text-sm leading-relaxed opacity-70">
                Log OCT (macula, RNFL), Humphrey visual fields, fundus photography, fluorescein angiography,
                corneal topography, pachymetry, biometry/IOL Master, B-scan and specular microscopy, with file
                uploads attached to findings. IOP, C/D ratio, RNFL and MD/PSD trend automatically, split
                OD/OS. A single reports view groups every fundus, OCT and field result per patient.
              </p>
            </motion.article>

            {/* 03 */}
            <motion.article
              initial="hidden"
              whileInView="show"
              viewport={viewport}
              variants={slide("up")}
              whileHover={{ y: -5 }}
              className="eye-panel col-span-12 rounded-3xl p-8 md:col-span-4"
            >
              <span className="font-display text-5xl font-bold text-primary/30">03</span>
              <h3 className="mb-2 mt-4 text-xl font-bold text-card-foreground">
                Dispensing that tracks itself
              </h3>
              <Screenshot
                src={shotContactLenses}
                alt="Contact lens fittings with brand, base curve and aftercare dates"
                className="mt-5"
              />
              <p className="mb-2 font-medium text-primary">
                Know the status of every fitting and order without opening a chat thread.
              </p>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Contact lens fittings record brand, type, modality, base curve, diameter, powers and fit
                assessment, with aftercare check dates scheduled automatically from the fitting date. Optical
                orders track frame, lens type, coatings and lab routing through ordered → at lab → ready →
                collected, against promised and delivery dates.
              </p>
            </motion.article>

            {/* 04 */}
            <motion.article
              initial="hidden"
              whileInView="show"
              viewport={viewport}
              variants={slide("up")}
              transition={{ delay: 0.1 }}
              whileHover={{ y: -5 }}
              className="eye-panel col-span-12 rounded-3xl p-8 md:col-span-4"
            >
              <span className="font-display text-5xl font-bold text-primary/30">04</span>
              <h3 className="mb-2 mt-4 text-xl font-bold text-card-foreground">
                Surgery bookings with nothing left loose
              </h3>
              <Screenshot
                src={shotSurgery}
                alt="Surgery bookings list with procedure, theatre and IOL details"
                className="mt-5"
              />
              <p className="mb-2 font-medium text-primary">
                Everything surgery day needs is attached to the booking, not scattered across folders.
              </p>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Book by procedure (phaco, trabeculectomy, YAG, pterygium, anti-VEGF injections and others),
                eye side and theatre. Biometry-based IOL power selection, pre-op checklists and eye-specific
                consent forms are tracked against the same record, with outcome notes after.
              </p>
            </motion.article>

            {/* 05 */}
            <motion.article
              initial="hidden"
              whileInView="show"
              viewport={viewport}
              variants={slide("up")}
              transition={{ delay: 0.2 }}
              whileHover={{ y: -5 }}
              className="eye-panel-accent col-span-12 rounded-3xl p-8 md:col-span-4"
            >
              <span className="font-display text-5xl font-bold opacity-30">05</span>
              <h3 className="mb-2 mt-4 text-xl font-bold">
                The rest of the clinic, not bolted on separately
              </h3>
              <Screenshot
                src={shotAppointments}
                alt="Appointments schedule for the demo clinic"
                className="mt-5"
              />
              <p className="mb-2 font-medium opacity-80">
                One system instead of three or four you have to keep in sync.
              </p>
              <p className="text-sm leading-relaxed opacity-90">
                Appointments and waiting list, invoicing and payments, inventory for drops, lenses and frames,
                pharmacy prescriptions, staff and schedules, and analytics across the whole clinic.
              </p>
            </motion.article>
          </div>

          {/* Product gallery */}
          <motion.h2
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            variants={reveal}
            className="mb-4 text-2xl font-bold text-foreground md:text-3xl"
          >
            See it in action -{" "}
            <span className="text-muted-foreground">real screens from a demo eye clinic</span>
          </motion.h2>
          <motion.p
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            variants={reveal}
            className="mb-10 max-w-2xl text-muted-foreground"
          >
            Every screen below is from a working demo clinic with real patient flow, not mockups.
          </motion.p>

          <div className="mb-24 grid gap-10 md:grid-cols-2">
            <motion.div initial="hidden" whileInView="show" viewport={viewport} variants={slide("left")}>
              <Screenshot
                src={shotOverview}
                alt="Eye care overview with raised-IOP alerts and glaucoma watch lists"
                caption="Eye care overview, raised-IOP alerts and glaucoma watch lists surface automatically"
              />
            </motion.div>
            <motion.div initial="hidden" whileInView="show" viewport={viewport} variants={slide("right")}>
              <Screenshot
                src={shotCharts}
                alt="Trend charts for eye pressure, OCT and visual field results"
                caption="Trend charts, IOP, OCT and visual field results plotted per eye over time"
              />
            </motion.div>
            <motion.div initial="hidden" whileInView="show" viewport={viewport} variants={slide("left")}>
              <Screenshot
                src={shotExams}
                alt="Clinical exam records with vision and pressure readings"
                caption="Exam records, visual acuity, IOP and refraction on one timeline"
              />
            </motion.div>
            <motion.div initial="hidden" whileInView="show" viewport={viewport} variants={slide("right")}>
              <Screenshot
                src={shotPrescriptions}
                alt="Optical prescriptions with full lens details per eye"
                caption="Prescriptions, sphere, cylinder, axis, add and PD per eye, with expiry tracked"
              />
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={viewport}
              variants={slide("up")}
              className="md:col-span-2"
            >
              <Screenshot
                src={shotOrders}
                alt="Optical orders tracking frames and lenses through the lab"
                caption="Optical orders, frames and lenses tracked from ordered to collected"
              />
            </motion.div>
          </div>

          {/* Pricing */}
          <motion.section
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            variants={reveal}
            className="eye-panel rounded-[3rem] p-8 text-center md:p-12"
            style={{ borderColor: "hsl(var(--primary) / 0.3)" }}
          >
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-primary">
              Getting started
            </p>
            <h2 className="mb-4 text-3xl font-bold text-card-foreground">
              One plan, everything above included
            </h2>
            <p className="mx-auto mb-12 max-w-2xl text-muted-foreground">
              No tier that holds back diagnostics or surgery tracking until you pay more, clinical,
              dispensing, diagnostics, surgery and admin are all included from day one. Choose the billing
              period that suits your clinic.
            </p>

            <div className="mx-auto mb-12 grid max-w-4xl gap-8 md:grid-cols-3">
              {plans.map((p, i) => (
                <motion.div
                  key={p.period}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={viewport}
                  transition={{ delay: i * 0.12, duration: 0.6, ease: EASE }}
                  whileHover={{ y: -6 }}
                  className={
                    p.featured
                      ? "eye-panel-accent scale-105 rounded-2xl p-6 shadow-xl"
                      : "rounded-2xl bg-background/50 p-6"
                  }
                >
                  <p
                    className={
                      p.featured
                        ? "mb-2 text-sm font-bold opacity-70"
                        : "mb-2 text-sm text-muted-foreground"
                    }
                  >
                    {p.label}
                  </p>
                  <div
                    className={p.featured ? "text-3xl font-bold" : "text-3xl font-bold text-primary"}
                  >
                    {p.price}
                  </div>
                  <p className={p.featured ? "mt-1 text-xs opacity-60" : "mt-1 text-xs text-muted-foreground/60"}>
                    {p.period}
                  </p>
                </motion.div>
              ))}
            </div>

            <div className="mx-auto max-w-2xl text-left">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                Included at every tier
              </p>
              <div className="grid gap-4 md:grid-cols-2">
                {included.map((item) => (
                  <div key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.section>

          {/* Final CTA */}
          <motion.section
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            variants={reveal}
            className="mt-24 text-center"
          >
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-primary">Next step</p>
            <h2 className="mb-5 text-3xl font-bold text-foreground">
              See it against your own patient records
            </h2>
            <p className="mx-auto mb-10 max-w-2xl leading-relaxed text-muted-foreground">
              Tell us how your clinic currently handles exams, dispensing and surgery bookings, and we'll show
              you exactly how Clinexus fits in, using your workflow, not a generic demo.
            </p>
            <div className="inline-flex flex-col gap-4 md:flex-row">
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-10 py-4 font-bold text-primary-foreground transition-colors hover:bg-foreground"
              >
                <MessageCircle className="h-5 w-5" />
                Talk to us on WhatsApp
              </a>
              <Link
                to="/signup"
                className="inline-flex items-center justify-center gap-2 rounded-md border border-primary px-10 py-4 font-bold text-primary transition-colors hover:bg-primary/10"
              >
                Try demo
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <p className="mt-6 text-sm text-muted-foreground/60">
              Clinexus, clinic management built for how you actually work.
            </p>
          </motion.section>
        </div>
      </div>
      <div className="mx-auto max-w-6xl px-6 pb-24">
        <LocalSeo specialty="Eye clinics" />
      </div>
    </Layout>
  );
};

export default EyeClinics;
