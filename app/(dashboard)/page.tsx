import { CalendarWidget, BookingCard } from "@/components/features";
import { Button } from "@/components/ui/button";

const metrics = [
  { label: "Monthly GMV", value: "$142k", trend: "+18% vs last month" },
  { label: "Fill rate", value: "92%", trend: "SLA met" },
  { label: "Churn risk", value: "1.4%", trend: "Low" },
];

export default function DashboardPage() {
  return (
    <div className="space-y-8 px-6 py-10">
      <header className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <p className="text-sm uppercase tracking-widest text-muted-foreground">
            Control center
          </p>
          <h1 className="text-3xl font-semibold tracking-tight text-foreground">
            Merchant dashboard
          </h1>
          <p className="text-muted-foreground">
            Oversee live bookings, payouts, and staffing utilization in real
            time.
          </p>
        </div>
        <Button>Open command palette</Button>
      </header>

      <section className="grid gap-4 md:grid-cols-3">
        {metrics.map((metric) => (
          <div
            key={metric.label}
            className="rounded-2xl border bg-card p-5 shadow-sm"
          >
            <p className="text-sm text-muted-foreground">{metric.label}</p>
            <p className="text-2xl font-semibold text-foreground">
              {metric.value}
            </p>
            <p className="text-xs text-secondary-foreground">{metric.trend}</p>
          </div>
        ))}
      </section>

      <section className="grid gap-6 lg:grid-cols-2">
        <BookingCard />
        <CalendarWidget />
      </section>
    </div>
  );
}
