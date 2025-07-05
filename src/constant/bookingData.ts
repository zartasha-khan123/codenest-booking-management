


export interface BookingType {
  id: number
  name: string
  status: "Confirmed" | "Pending" | "Cancelled"
  duration: string
  date: string
  timeSlot: string
  bgcolor: string
  color: string
}

export const Booking: BookingType[] = [
  {
    id: 1,
    name: "Alice Johnson",
    status: "Confirmed",
    duration: "3 hours",
    date: "2025-05-15",
    timeSlot: "Wedding",
    bgcolor: "bg-green-100",
    color: "text-green-700"
  },
  {
    id: 2,
    name: "Bob Smith",
    status: "Pending",
    duration: "4 hours",
    date: "2025-05-16",
    timeSlot: "Engagement",
    bgcolor: "bg-orange-100",
    color: "text-orange-700"
  },
   {
    id: 3,
    name: "Carol Davis",
    status: "Confirmed",
    duration: "5 hours",
    date: "2025-05-17",
    timeSlot: "Evening",
    bgcolor: "bg-green-100",
    color: "text-green-700"
  },
  {
    id: 4,
    name: "David Wilson",
    status: "Cancelled",
    duration: "2 hours",
    date: "2025-05-18",
    timeSlot: "Morning",
    bgcolor: "bg-red-100",
    color: "text-red-700"
  },
   {
     id: 5,
     name: "Eva Brown",
     status: "Confirmed",
     duration: "3.5 hours",
     date: "2025-05-20",
     timeSlot: "Afternoon",
     bgcolor: "bg-green-100",
     color: "text-green-700"
   }
]
