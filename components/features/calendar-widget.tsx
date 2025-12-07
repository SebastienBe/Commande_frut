"use client";

import { addDays } from "date-fns";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Calendar } from "@/components/ui/calendar";
import { useBookingStore } from "@/lib/store/use-booking-store";

const today = new Date();

export function CalendarWidget() {
  const { selectedDate, setDate } = useBookingStore();

  return (
    <Card className="w-full border-border shadow-sm">
      <CardHeader>
        <CardTitle>Availability</CardTitle>
        <CardDescription>
          Sync your Stripe products, Supabase data, and internal staffing to
          publish reliable schedules for merchants.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Calendar
          mode="single"
          selected={selectedDate}
          onSelect={setDate}
          disabled={(date) =>
            date < today || date > addDays(today, 45)
          }
          className="rounded-md border"
        />
      </CardContent>
    </Card>
  );
}
