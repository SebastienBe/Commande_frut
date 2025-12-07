"use client";

import { create } from "zustand";
import type { BookingState, ServiceOption } from "@/types/booking";

const defaultServices: ServiceOption[] = [
  { id: "consulting", label: "Product Consulting", durationMinutes: 45 },
  { id: "onboarding", label: "White-glove Onboarding", durationMinutes: 60 },
  { id: "training", label: "Team Enablement", durationMinutes: 30 },
];

export const useBookingStore = create<BookingState>((set) => ({
  services: defaultServices,
  selectedServiceId: defaultServices[0]?.id ?? null,
  selectedDate: undefined,
  notes: "",
  setService: (id) => set({ selectedServiceId: id }),
  setDate: (date) => set({ selectedDate: date }),
  addNote: (note) => set({ notes: note }),
}));
