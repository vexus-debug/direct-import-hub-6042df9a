import Layout from "@/site/components/Layout";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Clock, MessageSquare, ArrowRight } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", clinic: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast({ title: "Please fill in all required fields.", variant: "destructive" });
      return;
    }
    toast({ title: "Message sent!", description: "We'll get back to you within 24 hours." });
    setForm({ name: "", email: "", clinic: "", message: "" });
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="relative overflow-hidden bg-[hsl(var(--medical-blue-dark))] py-24 md:py-32">
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          {[600, 450, 300].map((size, i) => (
            <div key={i} className="absolute rounded-full border border-white/[0.05]" style={{ width: size, height: size }} />
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
            <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-widest text-[hsl(var(--medical-teal))]">
              Contact Us
            </span>
            <h1 className="mb-6 text-4xl font-extrabold leading-[1.1] tracking-tight text-white md:text-5xl">
              Tell Us What's Slowing{" "}
              <span className="bg-primary ">
                Your Clinic Down
              </span>
            </h1>
            <p className="mx-auto max-w-xl text-lg leading-relaxed text-white/60">
              Want a demo, have questions, or need something specific? Our team is ready to help you get your time and money back.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Form + Info */}
      <section className="relative site-section-light overflow-hidden py-24">
        <div className="pointer-events-none absolute inset-0 bg-background" />
        <div className="pointer-events-none absolute -right-32 top-1/4 h-[400px] w-[400px] rounded-full bg-primary/5 blur-3xl" />

        <div className="container relative z-10">
          <div className="mx-auto grid max-w-5xl gap-12 md:grid-cols-2">
            <motion.form
              onSubmit={handleSubmit}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-5 rounded-2xl border border-border/50 bg-card/80 p-8 shadow-lg backdrop-blur-sm"
            >
              <h3 className="text-xl font-bold text-foreground">Send Us a Message</h3>
              <div className="space-y-2">
                <Label htmlFor="name">Name *</Label>
                <Input id="name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Dr. Adebayo Ogunleye" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email *</Label>
                <Input id="email" type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="doctor@yourclinic.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="clinic">Clinic Name & Specialty</Label>
                <Input id="clinic" value={form.clinic} onChange={(e) => setForm({ ...form, clinic: e.target.value })} placeholder="e.g. Sunrise Dental Clinic" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message *</Label>
                <Textarea id="message" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="Tell us what's slowing your clinic down, or request a personalized demo..." rows={5} />
              </div>
              <Button type="submit" className="w-full gap-2 rounded-md bg-primary text-white shadow-md hover:opacity-90">
                Send Message <ArrowRight className="h-4 w-4" />
              </Button>
            </motion.form>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h3 className="mb-6 text-xl font-bold text-foreground">Get in Touch</h3>
                <div className="space-y-4">
                  {[
                    { icon: Mail, label: "support@clinexus.com.ng", href: "mailto:support@clinexus.com.ng" },
                    { icon: Phone, label: "0901 7758 165", href: "https://wa.me/2349017758165" },
                    { icon: MapPin, label: "Ikeja, Lagos, Nigeria" },
                    { icon: Clock, label: "Mon, Fri, 8am, 6pm WAT" },
                  ].map((item) => (
                    <div key={item.label} className="flex items-center gap-3 text-muted-foreground">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
                        <item.icon className="h-5 w-5 text-primary" />
                      </div>
                      {"href" in item && item.href ? (
                        <a href={item.href} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-foreground">{item.label}</a>
                      ) : (
                        item.label
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl border border-border/50 bg-muted/20 p-6">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
                  <MessageSquare className="h-5 w-5 text-primary" />
                </div>
                <h4 className="mb-2 font-semibold text-foreground">See It Running Before You Commit</h4>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Want to see Clinexus set up for your specific specialty? Mention "demo" in your message and we'll book a personalized 30-minute walkthrough, no strings attached.
                </p>
              </div>

              <div className="rounded-2xl border border-border/50 bg-muted/20 p-6">
                <h4 className="mb-2 font-semibold text-foreground">Already a Customer?</h4>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Need help fast? Log into your dashboard and use the in-app support chat. Average response time: under 2 hours.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
