"use client";

import { format } from "date-fns";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useBookingStore } from "@/lib/store/use-booking-store";
import type { BookingPayload } from "@/types";

export function BookingCard() {
  const { services, selectedServiceId, selectedDate, setService } =
    useBookingStore();
  const [companyName, setCompanyName] = useState("Acme Retail");
  const [contactEmail, setContactEmail] = useState("ops@acme.co");
  const [message, setMessage] = useState<string | null>(null);

  const service = services.find((item) => item.id === selectedServiceId);

  const handleSubmit = () => {
    if (!selectedDate || !service) {
      setMessage("Please choose a service and time slot before confirming.");
      return;
    }

    const payload: BookingPayload = {
      companyName,
      contactEmail,
      serviceId: service.id,
      slot: selectedDate,
    };

    // In a real app you would POST this payload to /api/bookings.
    setMessage(
      `Reservation locked for ${payload.companyName} on ${format(
        payload.slot,
        "PPP 'at' p"
      )}.`
    );
  };

  return (
    <Card className="w-full max-w-md border-border shadow-sm">
      <CardHeader>
        <CardTitle>Instant Booking</CardTitle>
        <CardDescription>
          Close B2B deals from a single workspace powered by real-time
          availability.
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-4">
        <div className="space-y-2">
          <label className="text-sm font-medium text-foreground">
            Company
          </label>
          <Input
            value={companyName}
            onChange={(event) => setCompanyName(event.target.value)}
            placeholder="Company name"
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-foreground">
            Contact Email
          </label>
          <Input
            type="email"
            value={contactEmail}
            onChange={(event) => setContactEmail(event.target.value)}
            placeholder="ops@company.com"
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-foreground">
            Service
          </label>
          <Select
            value={selectedServiceId ?? undefined}
            onValueChange={(value) => setService(value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select a service" />
            </SelectTrigger>
            <SelectContent>
              {services.map((item) => (
                <SelectItem value={item.id} key={item.id}>
                  {item.label} · {item.durationMinutes} min
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="rounded-md border border-dashed p-3 text-sm text-muted-foreground">
          {selectedDate && service ? (
            <div>
              <p className="font-medium text-foreground">Upcoming meeting</p>
              <p>
                {format(selectedDate, "EEEE, MMM d")} · {service.durationMinutes}
                m session
              </p>
            </div>
          ) : (
            <p>Select a slot on the calendar to preview availability.</p>
          )}
        </div>
      </CardContent>

      <CardFooter className="flex flex-col gap-2">
        <Button className="w-full" onClick={handleSubmit}>
          Confirm Booking
        </Button>
        {message && <p className="text-sm text-muted-foreground">{message}</p>}
      </CardFooter>
    </Card>
  );
}
