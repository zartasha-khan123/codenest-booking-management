

"use client"

import { useState } from "react"
import { BookingType, Booking as initialBookingData } from "@/constant/bookingData"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CalendarDays, Search } from "lucide-react"
import { Card } from "@/components/ui/card"
import { format } from "date-fns"
import { Dialog } from "@/components/ui/dialog"
import { DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"

export default function BookingData() {

  const [searchTerm, setSearchTerm] = useState("")
  const [bookingData, setBookingData] = useState(initialBookingData)
  const [selectedBooking, setSelectedBooking] = useState<BookingType | null>(null)
  const [isViewOpen, setIsViewOpen] = useState(false)
  const [isEditOpen, setIsEditOpen] = useState(false)

  const filteredData = bookingData.filter(b =>
    b.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const openView = (booking: BookingType) => {
    setSelectedBooking(booking)
    setIsViewOpen(true)
  }

  const openEdit = (booking: BookingType) => {
    setSelectedBooking(booking)
    setIsEditOpen(true)
  }

  const handleEditChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setSelectedBooking(prev => {
      if (!prev) return prev
      if (name === "status" && (value === "Confirmed" || value === "Pending" || value === "Cancelled")) {
        return { ...prev, [name]: value as BookingType["status"] }
      }
      return { ...prev, [name]: value }
    })
  }

  const saveEdit = () => {
    if (!selectedBooking) return;
    setBookingData(prev =>
      prev.map(b => b.id === selectedBooking.id ? selectedBooking : b)
    )
    setIsEditOpen(false)
  }

  return (
    <div className="space-y-6">
      {/* Heading */}
      <div>
        <h2 className="text-2xl font-semibold text-gray-900">Booking Data</h2>
        <p className="text-sm text-gray-600 mt-1">Manage all your bookings in one place</p>
      </div>

      {/* Filters */}
      <div className="flex items-center flex-wrap gap-3">
        <div className="flex items-center gap-2">
          <CalendarDays className="w-4 h-4 text-gray-500" />
          <Input type="date" className="w-[150px]" />
        </div>
        <div className="flex items-center gap-2">
          <CalendarDays className="w-4 h-4 text-gray-500" />
          <Input type="date" className="w-[150px]" />
        </div>
        <select className="border border-gray-300 rounded-md px-3 py-2 text-sm text-gray-700">
          <option value="">All Status</option>
          <option value="Confirmed">Confirmed</option>
          <option value="Pending">Pending</option>
          <option value="Cancelled">Cancelled</option>
        </select>
        <div className="ml-auto relative">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-500" />
          <Input
            type="text"
            placeholder="Search bookings..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-8 w-[200px]"
          />
        </div>
      </div>

      {/* Table */}
      <Card className="mt-4 overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200 text-sm text-left">
          <thead className="bg-gray-200 text-gray-700 font-medium">
            <tr>
              <th className="px-4 py-3">Client Name</th>
              <th className="px-4 py-3">Date</th>
              <th className="px-4 py-3">Event Type</th>
              <th className="px-4 py-3">Guests</th>
              <th className="px-4 py-3">Status</th>
              <th className="px-4 py-3 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {filteredData.map((booking) => (
              <tr key={booking.id} className="hover:bg-gray-50">
                <td className="px-4 py-3 text-gray-900">{booking.name}</td>
                <td className="px-4 py-3 text-gray-700">{format(new Date(booking.date), "MM/dd/yyyy")}</td>
                <td className="px-4 py-3 text-gray-700">{booking.timeSlot}</td>
                <td className="px-4 py-3 text-gray-700">{booking.duration}</td>
                <td className="px-4 py-3">
                  <Badge className={`text-xs ${booking.bgcolor} ${booking.color} border`}>
                    {booking.status}
                  </Badge>
                </td>
                <td className="px-4 py-3 text-right space-x-2">
                  <Button variant="outline" size="sm" className="text-xs" onClick={() => openView(booking)}>View</Button>
                  <Button variant="outline" size="sm" className="text-xs" onClick={() => openEdit(booking)}>Edit</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>

      {/* View Modal */}
      {selectedBooking && (
        <Dialog open={isViewOpen} onOpenChange={setIsViewOpen}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Booking Details</DialogTitle>
            </DialogHeader>
            <div className="space-y-2 text-sm text-gray-700">
              <p><strong>Name:</strong> {selectedBooking.name}</p>
              <p><strong>Date:</strong> {format(new Date(selectedBooking.date), "MM/dd/yyyy")}</p>
              <p><strong>Time Slot:</strong> {selectedBooking.timeSlot}</p>
              <p><strong>Duration:</strong> {selectedBooking.duration}</p>
              <p><strong>Status:</strong> {selectedBooking.status}</p>
            </div>
          </DialogContent>
        </Dialog>
      )}

      {/* Edit Modal */}
      {selectedBooking && (
        <Dialog open={isEditOpen} onOpenChange={setIsEditOpen}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Edit Booking</DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <Input name="name" value={selectedBooking.name} onChange={handleEditChange} placeholder="Name" />
              <Input name="date" type="date" value={selectedBooking.date} onChange={handleEditChange} />
              <Input name="duration" value={selectedBooking.duration} onChange={handleEditChange} placeholder="Duration" />
              <Input name="timeSlot" value={selectedBooking.timeSlot} onChange={handleEditChange} placeholder="Time Slot" />
              <select name="status" value={selectedBooking.status} onChange={handleEditChange} className="w-full border p-2 rounded text-sm">
                <option>Confirmed</option>
                <option>Pending</option>
                <option>Cancelled</option>
              </select>
              <Button onClick={saveEdit}>Save Changes</Button>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </div>
  )
}
