

import { Calendar, CreditCard, Users, Bell, type LucideIcon } from "lucide-react"

export interface Notify_Data {
  id: string
  title: string
  time: string
  color: string
  bgcolor?: string
  description: string
  type: "booking-cancel" | "new-booking" | "payment" | "new-customer" | "system-update"
  badge?: boolean
  icon: LucideIcon
}

export const Notify_Cards: Notify_Data[] = [
  {
    id: "1",
    title: "Booking Cancellation",
    time: "10 minutes ago",
    color: "text-red-500",
    bgcolor: "bg-red-500",
    description: "John Smith has canceled their booking for tomorrow at 2:00 PM",
    type: "booking-cancel",
    icon: Calendar,
  },
  {
    id: "2",
    title: "New Booking",
    time: "1 hour ago",
    color: "text-green-600",
    description: "Sarah Johnson has made a new booking on Friday 10:00 AM",
    type: "new-booking",
    icon: CreditCard,
  },
  {
    id: "3",
    type: "payment",
    title: "Payment Received",
    description: "You've received a payment of $150 from Michael Brown",
    time: "3 hours ago",
    color: "text-yellow-500",
    badge: true,
    icon: Users,
  },
  {
    id: "4",
    type: "new-customer",
    title: "New Customer",
    description: "Emma Wilson has created a new account",
    time: "5 hours ago",
    color: "text-blue-500",
    badge: true,
    icon: Users,
  },
  {
    id: "5",
    type: "system-update",
    title: "System Update",
    description: "System maintenance completed successfully",
    time: "1 day ago",
    color: "text-purple-500",
    badge: false,
    icon: Bell,
  },
  {
    id: "6",
    title: "Booking Cancellation",
    time: "10 minutes ago",
    color: "text-red-500",
    description: "John Smith has canceled their booking for tomorrow at 2:00 PM",
    type: "booking-cancel",
    icon: Calendar,
  },
  {
    id: "7",
    title: "Booking Cancellation",
    time: "10 minutes ago",
    color: "text-red-500",
    description: "John Smith has canceled their booking for tomorrow at 2:00 PM",
    type: "booking-cancel",
    icon: Calendar,
  },
  {
    id: "8",
    title: "Booking Cancellation",
    time: "10 minutes ago",
    color: "text-red-500",
    description: "John Smith has canceled their booking for tomorrow at 2:00 PM",
    type: "booking-cancel",
    icon: Calendar,
  },
  {
    id: "9",
    title: "Booking Cancellation",
    time: "10 minutes ago",
    color: "text-red-500",
    description: "John Smith has canceled their booking for tomorrow at 2:00 PM",
    type: "booking-cancel",
    icon: Calendar,
  },
  {
    id: "10",
    title: "Booking Cancellation",
    time: "10 minutes ago",
    color: "text-red-500",
    description: "John Smith has canceled their booking for tomorrow at 2:00 PM",
    type: "booking-cancel",
    icon: Calendar,
  },
]
