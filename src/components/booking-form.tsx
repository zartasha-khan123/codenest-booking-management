"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Building2 } from "lucide-react"

export default function BookingForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    emailAddress: "",
    eventDate: "",
    eventTime: "",
    eventType: "",
    guestCount: "",
    hallType: "",
    duration: "",
    totalCost: "",
    package: "",
    otherPackage: "",
    services: {
      catering: false,
      decoration: false,
      photography: false,
      dj: false,
      lighting: false,
      parking: false,
    },
    additionalComments: "",
  })

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Hall booking submitted:", formData)
    alert("Wedding hall booking request submitted successfully!")
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleServiceChange = (service: string, checked: boolean) => {
    setFormData((prev) => ({
      ...prev,
      services: { ...prev.services, [service]: checked },
    }))
  }

  return (
    <div className="max-w-4xl mx-auto p-6 min-h-screen">
      {/* Purple Gradient Form Container */}
      <div className="bg-gradient-to-br from-gray-400 via-gray-500 to-gray-600 p-6 rounded-3xl shadow-2xl">
        <div className="bg-white rounded-2xl p-6 shadow-lg">
          {/* Form Header */}
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-2xl font-bold text-gray-900 mb-1">Wedding Hall</h1>
              <h2 className="text-xl font-bold text-gray-800">Booking Form</h2>
              <div className="w-full h-px bg-gray-300 mt-3"></div>
            </div>
            <div className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-full">
              <Building2 className="h-6 w-6 text-gray-600" />
            </div>
          </div>

          <form onSubmit={handleFormSubmit} className="space-y-6">
            {/* Client Information */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-blue-400">Client Information</h3>

              <div>
                <Label htmlFor="fullName" className="text-sm font-medium text-gray-700 mb-1 block">
                  Full Name:
                </Label>
                <Input
                  id="fullName"
                  value={formData.fullName}
                  onChange={(e) => handleInputChange("fullName", e.target.value)}
                  className="w-full h-10 px-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="Enter your full name"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="phoneNumber" className="text-sm font-medium text-gray-700 mb-1 block">
                    Phone Number:
                  </Label>
                  <Input
                    id="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={(e) => handleInputChange("phoneNumber", e.target.value)}
                    className="w-full h-10 px-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="Enter your phone number"
                  />
                </div>

                <div>
                  <Label htmlFor="emailAddress" className="text-sm font-medium text-gray-700 mb-1 block">
                    Email Address:
                  </Label>
                  <Input
                    id="emailAddress"
                    type="email"
                    value={formData.emailAddress}
                    onChange={(e) => handleInputChange("emailAddress", e.target.value)}
                    className="w-full h-10 px-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="Enter your email address"
                  />
                </div>
              </div>
            </div>

            {/* Event Details */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-blue-400">Event Details</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="eventDate" className="text-sm font-medium text-gray-700 mb-1 block">
                    Event Date:
                  </Label>
                  <Input
                    id="eventDate"
                    type="date"
                    value={formData.eventDate}
                    onChange={(e) => handleInputChange("eventDate", e.target.value)}
                    className="w-full h-10 px-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <Label htmlFor="eventTime" className="text-sm font-medium text-gray-700 mb-1 block">
                    Event Time:
                  </Label>
                  <Input
                    id="eventTime"
                    type="time"
                    value={formData.eventTime}
                    onChange={(e) => handleInputChange("eventTime", e.target.value)}
                    className="w-full h-10 px-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="eventType" className="text-sm font-medium text-gray-700 mb-1 block">
                    Event Type:
                  </Label>
                  <Select value={formData.eventType} onValueChange={(value) => handleInputChange("eventType", value)}>
                    <SelectTrigger className="w-full h-10">
                      <SelectValue placeholder="Select event type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="wedding">Wedding</SelectItem>
                      <SelectItem value="engagement">Engagement</SelectItem>
                      <SelectItem value="reception">Reception</SelectItem>
                      <SelectItem value="anniversary">Anniversary</SelectItem>
                      <SelectItem value="birthday">Birthday Party</SelectItem>
                      <SelectItem value="corporate">Corporate Event</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="guestCount" className="text-sm font-medium text-gray-700 mb-1 block">
                    Guest Count:
                  </Label>
                  <Input
                    id="guestCount"
                    type="number"
                    value={formData.guestCount}
                    onChange={(e) => handleInputChange("guestCount", e.target.value)}
                    className="w-full h-10 px-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="Number of guests"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="hallType" className="text-sm font-medium text-gray-700 mb-1 block">
                    Hall Type:
                  </Label>
                  <Select value={formData.hallType} onValueChange={(value) => handleInputChange("hallType", value)}>
                    <SelectTrigger className="w-full h-10">
                      <SelectValue placeholder="Select hall type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="grand-ballroom">Grand Ballroom (500+ guests)</SelectItem>
                      <SelectItem value="premium-hall">Premium Hall (200-500 guests)</SelectItem>
                      <SelectItem value="standard-hall">Standard Hall (100-200 guests)</SelectItem>
                      <SelectItem value="intimate-hall">Intimate Hall (50-100 guests)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="duration" className="text-sm font-medium text-gray-700 mb-1 block">
                    Duration:
                  </Label>
                  <Select value={formData.duration} onValueChange={(value) => handleInputChange("duration", value)}>
                    <SelectTrigger className="w-full h-10">
                      <SelectValue placeholder="Select duration" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="4-hours">4 Hours</SelectItem>
                      <SelectItem value="6-hours">6 Hours</SelectItem>
                      <SelectItem value="8-hours">8 Hours</SelectItem>
                      <SelectItem value="full-day">Full Day (12 Hours)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <Label htmlFor="totalCost" className="text-sm font-medium text-gray-700 mb-1 block">
                  Total Cost $:
                </Label>
                <Input
                  id="totalCost"
                  value={formData.totalCost}
                  onChange={(e) => handleInputChange("totalCost", e.target.value)}
                  className="w-full h-10 px-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="Enter total cost"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Package Selection */}
                <div>
                  <Label className="text-sm font-medium text-gray-700 mb-3 block">Package:</Label>
                  <RadioGroup
                    value={formData.package}
                    onValueChange={(value) => handleInputChange("package", value)}
                    className="space-y-2"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="basic" id="basic" />
                      <Label htmlFor="basic" className="text-sm font-medium text-gray-700">
                        Basic Package
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="premium" id="premium" />
                      <Label htmlFor="premium" className="text-sm font-medium text-gray-700">
                        Premium Package
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="luxury" id="luxury" />
                      <Label htmlFor="luxury" className="text-sm font-medium text-gray-700">
                        Luxury Package
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="custom" id="custom" />
                      <Label htmlFor="custom" className="text-sm font-medium text-gray-700">
                        Custom:
                      </Label>
                      <Input
                        value={formData.otherPackage}
                        onChange={(e) => handleInputChange("otherPackage", e.target.value)}
                        className="ml-2 h-8 px-2 border border-gray-300 rounded focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        placeholder="Specify"
                      />
                    </div>
                  </RadioGroup>
                </div>

                {/* Additional Services */}
                <div>
                  <Label className="text-sm font-medium text-gray-700 mb-3 block">
                    Additional Services (Check all that apply):
                  </Label>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="catering"
                        checked={formData.services.catering}
                        onCheckedChange={(checked) => handleServiceChange("catering", checked as boolean)}
                      />
                      <Label htmlFor="catering" className="text-sm font-medium text-gray-700">
                        Catering Service
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="decoration"
                        checked={formData.services.decoration}
                        onCheckedChange={(checked) => handleServiceChange("decoration", checked as boolean)}
                      />
                      <Label htmlFor="decoration" className="text-sm font-medium text-gray-700">
                        Decoration & Flowers
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="photography"
                        checked={formData.services.photography}
                        onCheckedChange={(checked) => handleServiceChange("photography", checked as boolean)}
                      />
                      <Label htmlFor="photography" className="text-sm font-medium text-gray-700">
                        Photography & Videography
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="dj"
                        checked={formData.services.dj}
                        onCheckedChange={(checked) => handleServiceChange("dj", checked as boolean)}
                      />
                      <Label htmlFor="dj" className="text-sm font-medium text-gray-700">
                        DJ & Sound System
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="lighting"
                        checked={formData.services.lighting}
                        onCheckedChange={(checked) => handleServiceChange("lighting", checked as boolean)}
                      />
                      <Label htmlFor="lighting" className="text-sm font-medium text-gray-700">
                        Special Lighting
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="parking"
                        checked={formData.services.parking}
                        onCheckedChange={(checked) => handleServiceChange("parking", checked as boolean)}
                      />
                      <Label htmlFor="parking" className="text-sm font-medium text-gray-700">
                        Valet Parking
                      </Label>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Comments */}
            <div className="space-y-3">
              <Label htmlFor="additionalComments" className="text-sm font-medium text-gray-700 block">
                Additional Comments Or Special Requests:
              </Label>
              <Textarea
                id="additionalComments"
                value={formData.additionalComments}
                onChange={(e) => handleInputChange("additionalComments", e.target.value)}
                className="w-full min-h-[100px] px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none"
                placeholder="Please share any additional details, special requirements, or requests for your event..."
              />
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <Button
                type="submit"
                className="w-full h-12 bg-gradient-to-r from-blue-400 to-blue-700 hover:from-gray-500 hover:to-gray-400 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-200"
              >
                Submit Hall Booking Request
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
