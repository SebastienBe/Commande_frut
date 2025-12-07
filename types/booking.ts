export type ServiceOption = {
  id: string;
  label: string;
  durationMinutes: number;
};

export interface BookingState {
  services: ServiceOption[];
  selectedServiceId: string | null;
  selectedDate?: Date;
  notes: string;
  setService: (serviceId: string) => void;
  setDate: (date: Date | undefined) => void;
  addNote: (note: string) => void;
}

export interface BookingPayload {
  companyName: string;
  contactEmail: string;
  serviceId: string;
  slot: Date;
  notes?: string;
}
