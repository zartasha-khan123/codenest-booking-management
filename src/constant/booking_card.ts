// Booking Card Data

export interface Booking_Data {
  id: string
  name: string
  service: string
  duration: string
  status: "Confirmed" | "Pending" | "Cancelled"
  color: string
  bgcolor: string
}

export const Bookings: Booking_Data[] = [
  {
    id: "1",
    name: "John Smith",
    service: "Haircut & Styling",
    duration: "9:00 AM - 10:00 AM",
    status: "Confirmed",
    color: "text-green-600",
    bgcolor: "bg-green-100",
  },
  {
    id: "2",
    name: "Sarah Johnson",
    service: "Hair Coloring",
    duration: "10:30 AM - 12:00 PM",
    status: "Pending",
    color: "text-orange-600",
    bgcolor: "bg-orange-100",
  },
  {
    id: "3",
    name: "Mike Wilson",
    service: "Beard Trim",
    duration: "2:00 PM - 2:30 PM",
    status: "Confirmed",
    color: "text-blue-600",
    bgcolor: "bg-blue-100",
  },
  {
    id: "4",
    name: "Emma Davis",
    service: "Full Service",
    duration: "3:00 PM - 5:00 PM",
    status: "Confirmed",
    color: "text-purple-600",
    bgcolor: "bg-purple-100",
  },
  {
    id: "5",
    name: "Alex Brown",
    service: "Consultation",
    duration: "6:00 PM - 6:30 PM",
    status: "Pending",
    color: "text-gray-600",
    bgcolor: "bg-gray-100",
  },
{
    id: "6",
    name: "Emma Davis",
    service: "Full Service",
    duration: "3:00 PM - 5:00 PM",
    status: "Pending",
    color: "text-purple-600",
    bgcolor: "bg-purple-100",
  },
  {
    id: "7",
    name: "Emma Davis",
    service: "Full Service",
    duration: "3:00 PM - 5:00 PM",
    status: "Confirmed",
    color: "text-purple-600",
    bgcolor: "bg-purple-100",
  },
  {
    id: "8",
    name: "Mike Wilson",
    service: "Beard Trim",
    duration: "2:00 PM - 2:30 PM",
    status: "Pending",
    color: "text-blue-600",
    bgcolor: "bg-blue-100",
  },
{
    id: "9",
    name: "Mike Wilson",
    service: "Beard Trim",
    duration: "2:00 PM - 2:30 PM",
    status: "Confirmed",
    color: "text-blue-600",
    bgcolor: "bg-blue-100",
  },
  {
    id: "10",
    name: "Sarah Johnson",
    service: "Hair Coloring",
    duration: "10:30 AM - 12:00 PM",
    status: "Pending",
    color: "text-orange-600",
    bgcolor: "bg-orange-100",
  },
]
