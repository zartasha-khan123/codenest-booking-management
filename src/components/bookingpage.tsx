
"use client"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar, Clock, User, DollarSign,ClockArrowDown ,  NotebookPen } from "lucide-react"

// Import separate components

// Import constants
import { Bookings } from "@/constant/booking_card"
import { DASHBOARD_METRICS } from "@/constant/dashboarddata"
import BookingForm from "./booking-form"
import BookingData from "./booking-data"
import BookingCalendar from "./booking-calendar"

export default function BookingPage() {
  const [activeTab, setActiveTab] = useState("form")

  return (
    <div className="flex-1 min-h-screen ">
      <header className="flex h-16 items-end justify-between border-2 ml-3 mr-2 rounded-[12px] bg-white px-4 pb-4">
        <h1 className="text-2xl font-semibold">Booking Management</h1>
        <Badge className="bg-blue-500 text-white">{Bookings.length} Total Bookings</Badge>
      </header>

      <main className="p-4 h-full overflow-hidden">
        {/* Dashboard Cards - Always at top */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 mb-6">
          <div className="rounded-lg border bg-white p-4 shadow-sm">
            <div className="flex items-center justify-between">
              <h2 className="font-medium">{DASHBOARD_METRICS.upcomingBookings.title}</h2>
              <Calendar className="h-5 w-5 text-gray-400" />
            </div>
            <p className="mt-2 text-2xl font-bold">{Bookings.length}</p>
            <p className="text-sm text-gray-500">{DASHBOARD_METRICS.upcomingBookings.change}</p>
          </div>
          <div className="rounded-lg border bg-white p-4 shadow-sm">
            <div className="flex items-center justify-between">
              <h2 className="font-medium">{DASHBOARD_METRICS.pendingPayments.title}</h2>
              <ClockArrowDown className="h-5 w-5 text-gray-400" />
            </div>
            <p className="mt-2 text-2xl font-bold">{DASHBOARD_METRICS.pendingPayments.value}</p>
            <p className="text-sm text-gray-500">{DASHBOARD_METRICS.pendingPayments.change}</p>

          </div>
          <div className="rounded-lg border bg-white p-4 shadow-sm">
            <div className="flex items-center justify-between">
              <h2 className="font-medium">{DASHBOARD_METRICS.totalRevenue.title}</h2>
              < NotebookPen className="h-5 w-5 text-gray-400" />
            </div>
            <p className="mt-2 text-2xl font-bold">{DASHBOARD_METRICS.totalRevenue.value}</p>
            <p className="text-sm text-gray-500">{DASHBOARD_METRICS.totalRevenue.change}</p>


          </div>
        </div>

        {/* Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="h-full flex flex-col">
          <TabsList className="grid grid-cols-3 w-[600px] bg-gray-200 mb-6">
            <TabsTrigger value="form" className="flex items-center gap-2">
              <User className="h-4 w-4" />
              Booking Form
            </TabsTrigger>
            <TabsTrigger value="data" className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              Booking Data
            </TabsTrigger>
            <TabsTrigger value="calendar" className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              Calendar View
            </TabsTrigger>
          </TabsList>

          {/* Tab Contents */}
          <TabsContent value="form" className="flex-1">
            <BookingForm />
          </TabsContent>

          <TabsContent value="data" className="flex-1">
            <BookingData />
          </TabsContent>

          <TabsContent value="calendar" className="flex-1">
            <BookingCalendar />
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}
