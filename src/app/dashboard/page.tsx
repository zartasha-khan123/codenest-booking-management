// import {
//   BarChart3,
//   Bell,
//   Calendar,
//   CreditCard,
//   DollarSign,
//   Settings,
//   Users,
//   Clock,
// } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import { Notify_Cards } from "@/constant/notify_data_card";
import { Bell, Calendar, Clock, CreditCard, DollarSign } from "lucide-react";
import { Bookings } from "@/constant/booking_card";

export default function DashboardPage() {
  return (
    <>
      <div className="flex-1 overflow-hidden">
        <header className="flex h-16 items-end justify-between border-2 ml-3 mr-2 rounded-[12px] bg-white px-4 pb-4">
          <h1 className="text-2xl font-semibold">Dashboard</h1>
          <button className="rounded-full bg-gray-100 p-2">
            <Bell className="h-5 w-5" />
          </button>
        </header>

        <main className="p-4 h-full overflow-hidden">
          {/* Stats Cards */}
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3 mb-6">
            <div className="rounded-lg border bg-white p-4 shadow-sm">
              <div className="flex items-center justify-between">
                <h2 className="font-medium">Up coming bookings</h2>
                <Calendar className="h-5 w-5 text-gray-400" />
              </div>
              <p className="mt-2 text-2xl font-bold">12</p>
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

          {/* Tabs Section */}
          <div className="space-y-4 h-full">
            <Tabs defaultValue="notifications">
              <TabsList className="grid grid-cols-2 w-[400px] bg-gray-200">
                <TabsTrigger value="notifications">Notifications</TabsTrigger>
                <TabsTrigger value="bookings">{"Today's Bookings"}</TabsTrigger>
              </TabsList>

              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="text-xl">Recent Activity</CardTitle>
                </CardHeader>

                <CardContent>
                  {/* Notifications */}
                  <TabsContent value="notifications" className="h-full m-0">
                    <div className="px-6 pb-2">
                      <p className="text-sm text-muted-foreground">
                        You have 4 unread notifications
                      </p>
                    </div>
                    <ScrollArea className="h-[800px] px-6">
                      <div className="space-y-2">
                        {Notify_Cards.map((item) => (
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
                                    {<item.icon />}{" "}
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

                  {/* Today's Bookings */}
                  <TabsContent value="bookings" className="h-full m-0">
                    <div className="px-6 pb-2">
                      <p className="text-sm text-muted-foreground">
                        {"You have 5 bookings scheduled for today"}
                      </p>
                    </div>
                    <ScrollArea className="h-[800px] px-6">
                      <div className="space-y-2 pb-4">
                        {Bookings.map((booking) => (
                          <Card
                            key={booking.id}
                            className={`h-[80px] flex justify-center border-l-6 border-l-${booking.color.replace(
                              "text-",
                              "border-l-"
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
                                      {booking.duration}
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
