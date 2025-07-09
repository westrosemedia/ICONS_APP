// Dummy calendar utility for booking slots

export const cities = ["Calgary", "Toronto", "Vancouver"];

// Returns available time slots for a city and date (dummy data)
export function getAvailableTimeSlots(city: string, date: string): string[] {
  // In real app, fetch from API or DB
  if (!cities.includes(city)) return [];
  // Dummy: 9am, 10am, 11am, 1pm, 2pm, 3pm
  return [
    "09:00 AM",
    "10:00 AM",
    "11:00 AM",
    "01:00 PM",
    "02:00 PM",
    "03:00 PM",
  ];
} 