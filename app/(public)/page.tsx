import { ArrowRight, ShieldCheck, Clock3, Sparkles } from "lucide-react";

import { BookingCard, CalendarWidget } from "@/components/features";
import { Button } from "@/components/ui/button";

const sellingPoints = [
  {
    title: "Unified inventory",
    description:
      "Centralize rooms, meeting pods, and service resources across every " +
      "merchant you support.",
    icon: ShieldCheck,
  },
  {
    title: "Hold windows",
    description:
      "Intelligently manage buffers, cancellation policies, and tiered " +
      "windows without spreadsheets.",
    icon: Clock3,
  },
  {
    title: "AI playbooks",
    description:
      "Trigger follow-ups, reminders, and billing hooks via Supabase and " +
      "Stripe automations.",
    icon: Sparkles,
  },
];

export default function PublicLandingPage() {
  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-b from-background via-white to-white dark:from-background">
      <section className="mx-auto flex w-full max-w-6xl flex-1 flex-col gap-12 px-6 py-16 lg:flex-row lg:items-center">
        <div className="flex-1 space-y-6">
          <p className="inline-flex items-center rounded-full border px-3 py-1 text-sm text-muted-foreground">
            SaaS B2B reservations · Next.js 14
          </p>
          <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
            Book revenue-driving experiences in seconds.
          </h1>
          <p className="text-lg text-muted-foreground">
            Ops teams orchestrate dozens of merchant calendars every week. We
            give them a unified cockpit powered by Supabase, Stripe, and a robust
            workflow API.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button size="lg" className="gap-2">
              Book a live demo
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="lg">
              Explore docs
            </Button>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {sellingPoints.map((point) => (
              <div
                key={point.title}
                className="rounded-xl border bg-card/40 p-4 shadow-sm"
              >
                <point.icon className="mb-3 h-5 w-5 text-primary" />
                <p className="font-semibold text-foreground">{point.title}</p>
                <p className="text-sm text-muted-foreground">
                  {point.description}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-1 flex-col gap-6">
          <BookingCard />
          <CalendarWidget />
        </div>
      </section>
    </div>
  );
}
