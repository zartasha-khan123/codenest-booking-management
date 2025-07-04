
"use client";
import { useState, useMemo } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Notify_Cards } from "@/constant/notify_data_card";
import {
  Bell,
  Calendar,
  ChevronDown,
  ChevronUp,
  Clock,
  CreditCard,
  DollarSign,
  SlidersHorizontal,
  X,
} from "lucide-react";
import { Bookings } from "@/constant/booking_card";

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState("notifications");
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  // Filter states - Changed to arrays for multiple selections
  const [notificationFilters, setNotificationFilters] = useState({
    type: [] as string[],
    status: [] as string[],
  });

  const [bookingFilters, setBookingFilters] = useState({
    status: [] as string[],
    service: [] as string[],
    time: [] as string[],
  });

  // Calculate unread notifications count
  const unreadNotificationsCount = useMemo(() => {
    return Notify_Cards.filter((notification) => notification.badge === true)
      .length;
  }, []);

  // Calculate total notifications and bookings count
  const totalNotificationsCount = Notify_Cards.length;
  const totalBookingsCount = Bookings.length;

  // Filter notifications - Updated for multiple selections
  const filteredNotifications = useMemo(() => {
    return Notify_Cards.filter((notification) => {
      const typeMatch =
        notificationFilters.type.length === 0 ||
        notificationFilters.type.includes(notification.type);
      const statusMatch =
        notificationFilters.status.length === 0 ||
        (notificationFilters.status.includes("unread") &&
          notification.badge === true) ||
        (notificationFilters.status.includes("read") &&
          (notification.badge === false || notification.badge === undefined));
      return typeMatch && statusMatch;
    });
  }, [notificationFilters]);

  // Filter bookings - Updated for multiple selections
  const filteredBookings = useMemo(() => {
    return Bookings.filter((booking) => {
      const statusMatch =
        bookingFilters.status.length === 0 ||
        bookingFilters.status.includes(booking.status);
      const serviceMatch =
        bookingFilters.service.length === 0 ||
        bookingFilters.service.some((service) =>
          booking.service.toLowerCase().includes(service.toLowerCase())
        );
      const timeMatch =
        bookingFilters.time.length === 0 ||
        (bookingFilters.time.includes("morning") &&
          booking.service.includes("AM")) ||
        (bookingFilters.time.includes("afternoon") &&
          booking.service.includes("PM") &&
          !booking.service.includes("6:")) ||
        (bookingFilters.time.includes("evening") &&
          booking.service.includes("6:"));
      return statusMatch && serviceMatch && timeMatch;
    });
  }, [bookingFilters]);

  const clearNotificationFilters = () => {
    setNotificationFilters({ type: [], status: [] });
  };

  const clearBookingFilters = () => {
    setBookingFilters({ status: [], service: [], time: [] });
  };

  // Handle checkbox changes
  const handleNotificationFilterChange = (
    filterType: "type" | "status",
    value: string,
    checked: boolean
  ) => {
    setNotificationFilters((prev) => ({
      ...prev,
      [filterType]: checked
        ? [...prev[filterType], value]
        : prev[filterType].filter((item) => item !== value),
    }));
  };

  const handleBookingFilterChange = (
    filterType: "status" | "service" | "time",
    value: string,
    checked: boolean
  ) => {
    setBookingFilters((prev) => ({
      ...prev,
      [filterType]: checked
        ? [...prev[filterType], value]
        : prev[filterType].filter((item) => item !== value),
    }));
  };

  // Handle notification bell click
  const handleNotificationClick = () => {
    setIsNotificationOpen(!isNotificationOpen);
    // Switch to notifications tab when bell is clicked
    setActiveTab("notifications");
  };

  // Check if any filters are active
  const hasActiveNotificationFilters =
    notificationFilters.type.length > 0 ||
    notificationFilters.status.length > 0;
  const hasActiveBookingFilters =
    bookingFilters.status.length > 0 ||
    bookingFilters.service.length > 0 ||
    bookingFilters.time.length > 0;
  const hasActiveFilters =
    activeTab === "notifications"
      ? hasActiveNotificationFilters
      : hasActiveBookingFilters;

  return (
    <>
      <div className="flex-1 overflow-hidden">
        <header className="flex h-16 items-end justify-between border-2 ml-3 mr-2 rounded-[12px] bg-white px-4 pb-4">
          <h1 className="text-2xl font-semibold">Dashboard</h1>

          {/* Functional Notification Bell */}
          <Popover
            open={isNotificationOpen}
            onOpenChange={setIsNotificationOpen}
          >
            <PopoverTrigger asChild>
              <Button
                variant="ghost"
                size="sm"
                className="relative rounded-full bg-gray-100 p-2 hover:bg-gray-200"
                onClick={handleNotificationClick}
              >
                <Bell className="h-5 w-5" />
                {unreadNotificationsCount > 0 && (
                  <Badge className="absolute -top-1 -right-1 h-5 w-5 rounded-full p-0 text-xs flex items-center justify-center bg-red-500 hover:bg-red-500">
                    {unreadNotificationsCount}
                  </Badge>
                )}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-80 p-0" align="end">
              <div className="p-4 border-b">
                <h3 className="font-semibold">Recent Notifications</h3>
                <p className="text-sm text-muted-foreground">
                  You have {unreadNotificationsCount} unread notifications
                </p>
              </div>
              <ScrollArea className="h-[300px] px-6">
                <div className="p-2">
                  {Notify_Cards.slice(0, 5).map((notification) => (
                    <div
                      key={notification.id}
                      className="flex items-start gap-3 p-2 hover:bg-gray-50 rounded-lg cursor-pointer"
                    >
                      <div
                        className={`flex h-8 w-8 items-center justify-center rounded-full bg-${notification.color}-100`}
                      >
                        <notification.icon className="h-4 w-4" />
                      </div>
                      <div className="flex-1 space-y-1">
                        <p className="text-sm font-medium">
                          {notification.title}
                        </p>
                        <p className="text-xs text-muted-foreground line-clamp-2">
                          {notification.description}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {notification.time}
                        </p>
                      </div>
                      {notification.badge && (
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      )}
                    </div>
                  ))}
                </div>
              </ScrollArea>
              <div className="p-3 border-t">
                <Button
                  variant="ghost"
                  className="w-full text-sm"
                  onClick={() => {
                    setActiveTab("notifications");
                    setIsNotificationOpen(false);
                  }}
                >
                  View All Notifications
                </Button>
              </div>
            </PopoverContent>
          </Popover>
        </header>
        <main className="p-4 h-full overflow-hidden">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3 mb-6">
            <div className="rounded-lg border bg-white p-4 shadow-sm">
              <div className="flex items-center justify-between">
                <h2 className="font-medium">Up coming bookings</h2>
                <Calendar className="h-5 w-5 text-gray-400" />
              </div>
              <p className="mt-2 text-2xl font-bold">{totalBookingsCount}</p>
              <p className="text-sm text-gray-500">+2 from yesterday</p>
            </div>
            <div className="rounded-lg border bg-white p-4 shadow-sm">
              <div className="flex items-center justify-between">
                <h2 className="font-medium">Pending Payments</h2>
                <CreditCard className="h-5 w-5 text-gray-400" />
              </div>
              <p className="mt-2 text-2xl font-bold">$ 2,350</p>
              <p className="text-sm text-gray-500">3 payments awaiting</p>
            </div>
            <div className="rounded-lg border bg-white p-4 shadow-sm">
              <div className="flex items-center justify-between">
                <h2 className="font-medium">Total Revenue</h2>
                <DollarSign className="h-5 w-5 text-gray-400" />
              </div>
              <p className="mt-2 text-2xl font-bold">$ 12,234</p>
              <p className="text-sm text-gray-500">+8% from last month</p>
            </div>
          </div>
          <div className="space-y-4 h-full">
            <Tabs
              value={activeTab}
              onValueChange={setActiveTab}
              className="h-full"
            >
              <div className="flex items-center justify-between mb-4">
                <TabsList className="grid grid-cols-2 w-[500px] bg-gray-200">
                  <TabsTrigger
                    value="notifications"
                    className="flex items-center gap-2"
                  >
                    <Bell className="h-4 w-4" />
                    Notifications
                    <Badge
                      variant="secondary"
                      className="ml-1 text-xs bg-red-400 text-white"
                    >
                      {totalNotificationsCount}
                    </Badge>
                  </TabsTrigger>
                  <TabsTrigger
                    value="bookings"
                    className="flex items-center gap-2"
                  >
                    <Calendar className="h-4 w-4" />
                    Today`&apos;`s Bookings
                    <Badge
                      variant="secondary"
                      className="ml-1 text-xs  bg-red-400 text-white "
                    >
                      {totalBookingsCount}
                    </Badge>
                  </TabsTrigger>
                </TabsList>
                {/* Modern Filter Toggle Button */}
                <div className="relative inline-block">
                  <Button
                    variant="outline"
                    onClick={() => setIsFilterOpen((prev) => !prev)}
                    className={`relative flex items-center gap-2 px-4 py-2 rounded-xl border-2 transition-all duration-300 hover:shadow-md ${
                      hasActiveFilters
                        ? "border-blue-500 bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-700 shadow-blue-100 shadow-lg"
                        : "border-gray-200 bg-white hover:border-gray-300"
                    } ${isFilterOpen ? "shadow-lg scale-105" : ""}`}
                  >
                    <div
                      className={`p-1 rounded-lg ${
                        hasActiveFilters ? "bg-blue-100" : "bg-gray-100"
                      }`}
                    >
                      <SlidersHorizontal
                        className={`h-4 w-4 transition-colors ${
                          hasActiveFilters ? "text-blue-600" : "text-gray-600"
                        }`}
                      />
                    </div>
                    <span className="font-medium">Filters</span>
                    {hasActiveFilters && (
                      <Badge className="bg-blue-500 hover:bg-blue-500 text-white text-xs px-2 py-0.5 rounded-full animate-pulse">
                        {activeTab === "notifications"
                          ? notificationFilters.type.length +
                            notificationFilters.status.length
                          : bookingFilters.status.length +
                            bookingFilters.service.length +
                            bookingFilters.time.length}
                      </Badge>
                    )}
                    {isFilterOpen ? (
                      <ChevronUp className="h-4 w-4 transition-transform" />
                    ) : (
                      <ChevronDown className="h-4 w-4 transition-transform" />
                    )}
                  </Button>
                </div>
              </div>
              {/* Fixed Position Filter Panel */}
              {isFilterOpen && (
                <div className="absolute right-0 mt-10 z-50 w-80">
                  <div className="bg-white rounded-xl border border-gray-200 shadow-lg p-4 mr-4 animate-in slide-in-from-top-2 duration-200">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <div className="p-1.5 bg-blue-100 rounded-lg">
                          <SlidersHorizontal className="h-4 w-4 text-blue-600" />
                        </div>
                        <span className="text-sm font-medium text-gray-700">
                          Filter{" "}
                          {activeTab === "notifications"
                            ? "Notifications"
                            : "Bookings"}
                        </span>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => setIsFilterOpen(false)}
                        className="h-6 w-6 p-0 hover:bg-gray-100 rounded-full"
                      >
                        <X className="h-3 w-3" />
                      </Button>
                    </div>
                    <div className="space-y-4">
                      {activeTab === "notifications" ? (
                        <>
                          <div className="space-y-3">
                            <label className="text-xs font-medium text-gray-600">
                              Notification Type
                            </label>
                            <div className="space-y-2">
                              {[
                                {
                                  value: "booking-cancel",
                                  label: "Booking Cancel",
                                },
                                { value: "new-booking", label: "New Booking" },
                                { value: "payment", label: "Payment" },
                                {
                                  value: "new-customer",
                                  label: "New Customer",
                                },
                                {
                                  value: "system-update",
                                  label: "System Update",
                                },
                              ].map((option) => (
                                <div
                                  key={option.value}
                                  className="flex items-center space-x-2"
                                >
                                  <Checkbox
                                    id={`type-${option.value}`}
                                    checked={notificationFilters.type.includes(
                                      option.value
                                    )}
                                    onCheckedChange={(checked) =>
                                      handleNotificationFilterChange(
                                        "type",
                                        option.value,
                                        checked as boolean
                                      )
                                    }
                                  />
                                  <label
                                    htmlFor={`type-${option.value}`}
                                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                  >
                                    {option.label}
                                  </label>
                                </div>
                              ))}
                            </div>
                          </div>

                          <Button
                            variant="outline"
                            onClick={clearNotificationFilters}
                            className="w-full h-9 text-sm bg-white hover:bg-gray-50 border-gray-200"
                          >
                            <X className="h-4 w-4 mr-2" />
                            Clear All Filters
                          </Button>
                        </>
                      ) : (
                        <>
                          <div className="space-y-3">
                            <label className="text-xs font-medium text-gray-600">
                              Booking Status
                            </label>
                            <div className="space-y-2">
                              {[
                                { value: "Confirmed", label: "Confirmed" },
                                { value: "Pending", label: "Pending" },
                              ].map((option) => (
                                <div
                                  key={option.value}
                                  className="flex items-center space-x-2"
                                >
                                  <Checkbox
                                    id={`booking-status-${option.value}`}
                                    checked={bookingFilters.status.includes(
                                      option.value
                                    )}
                                    onCheckedChange={(checked) =>
                                      handleBookingFilterChange(
                                        "status",
                                        option.value,
                                        checked as boolean
                                      )
                                    }
                                  />
                                  <label
                                    htmlFor={`booking-status-${option.value}`}
                                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                  >
                                    {option.label}
                                  </label>
                                </div>
                              ))}
                            </div>
                          </div>

                          <div className="space-y-3">
                            <label className="text-xs font-medium text-gray-600">
                              Service Type
                            </label>
                            <div className="space-y-2">
                              {[
                                { value: "hair cut", label: "Hair Cut" },
                                { value: "beard trim", label: "Beard Trim" },
                                {
                                  value: "full service",
                                  label: "Full Service",
                                },
                                { value: "hair wash", label: "Hair Wash" },
                                {
                                  value: "color treatment",
                                  label: "Color Treatment",
                                },
                              ].map((option) => (
                                <div
                                  key={option.value}
                                  className="flex items-center space-x-2"
                                >
                                  <Checkbox
                                    id={`service-${option.value}`}
                                    checked={bookingFilters.service.includes(
                                      option.value
                                    )}
                                    onCheckedChange={(checked) =>
                                      handleBookingFilterChange(
                                        "service",
                                        option.value,
                                        checked as boolean
                                      )
                                    }
                                  />
                                  <label
                                    htmlFor={`service-${option.value}`}
                                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                  >
                                    {option.label}
                                  </label>
                                </div>
                              ))}
                            </div>
                          </div>

                          <Button
                            variant="outline"
                            onClick={clearBookingFilters}
                            className="w-full h-9 text-sm bg-white hover:bg-gray-50 border-gray-200"
                          >
                            <X className="h-4 w-4 mr-2" />
                            Clear All Filters
                          </Button>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              )}
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="text-xl">Recent Activity</CardTitle>
                </CardHeader>
                <CardContent>
                  <TabsContent value="notifications" className="h-full m-0">
                    <div className="px-6 pb-2">
                      <p className="text-sm text-muted-foreground">
                        {filteredNotifications.length === 0
                          ? "No notifications match your filters"
                          : `Showing ${filteredNotifications.length} of ${totalNotificationsCount} notifications`}
                      </p>
                    </div>
                    <ScrollArea className="h-[800px] px-6">
                      <div className="space-y-2">
                        {filteredNotifications.map((item) => (
                          <Card
                            key={item.id}
                            className={`h-[80px] flex justify-center border-l-6 border-l-${item.color}-500`}
                          >
                            <CardContent className="px-4">
                              <div className="flex items-start justify-between">
                                <div className="flex gap-3">
                                  <div
                                    className={`flex h-8 w-8 items-center justify-center rounded-full bg-${item.color}-100`}
                                  >
                                    <item.icon
                                      className={`h-4 w-4 ${item.color}`}
                                    />
                                  </div>
                                  <div className="space-y-0.5">
                                    <h3 className="font-medium text-sm">
                                      {item.title}
                                    </h3>
                                    <p className="text-xs text-muted-foreground">
                                      {item.description}
                                    </p>
                                    <p className="text-xs text-muted-foreground">
                                      {item.time}
                                    </p>
                                  </div>
                                </div>
                                {item.badge && (
                                  <Badge className="text-xs my-auto">New</Badge>
                                )}
                              </div>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    </ScrollArea>
                  </TabsContent>

                  <TabsContent value="bookings" className="h-full m-0">
                    <div className="px-6 pb-2">
                      <p className="text-sm text-muted-foreground">
                        {filteredBookings.length === 0
                          ? "No bookings match your filters"
                          : `Showing ${filteredBookings.length} of ${totalBookingsCount} bookings scheduled for today`}
                      </p>
                    </div>
                    <ScrollArea className="h-[800px] px-6">
                      <div className="space-y-2 pb-4">
                        {filteredBookings.map((booking) => (
                          <Card
                            key={booking.id}
                            className={`h-[80px] flex justify-center border-l-6 border-l-${booking.color.replace(
                              "text-",
                              ""
                            )}`}
                          >
                            <CardContent className="p-3">
                              <div className="flex items-start justify-between">
                                <div className="flex gap-2">
                                  <div
                                    className={`flex h-8 w-8 items-center justify-center rounded-full ${booking.bgcolor}`}
                                  >
                                    <Clock
                                      className={`h-4 w-4 ${booking.color}`}
                                    />
                                  </div>
                                  <div className="space-y-0.5">
                                    <h3 className="font-medium text-sm">
                                      {booking.name}
                                    </h3>
                                    <p className="text-xs text-muted-foreground">
                                      {booking.service}
                                    </p>
                                    <p className="text-xs text-muted-foreground">
                                      Duration: {booking.duration}
                                    </p>
                                  </div>
                                </div>
                                <Badge
                                  variant={
                                    booking.status === "Confirmed"
                                      ? "secondary"
                                      : "outline"
                                  }
                                  className="text-xs"
                                >
                                  {booking.status}
                                </Badge>
                              </div>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    </ScrollArea>
                  </TabsContent>
                </CardContent>
              </Card>
            </Tabs>
          </div>
        </main>
      </div>
    </>
  );
}
