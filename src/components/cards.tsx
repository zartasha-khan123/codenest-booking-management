// import React from 'react'
// import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
// import { TabsContent } from '@radix-ui/react-tabs'
// import { ScrollArea } from '@radix-ui/react-scroll-area'
// import { Clock } from 'lucide-react'
// import { Badge } from './ui/badge'
// import { Notify_Cards } from '@/constant/notify_data_card'
// import { Bookings } from '@/constant/booking_card'

// function Cards() {
//   // Example: filter all notifications (replace with your actual filter logic)
//   const filteredNotifications = Notify_Cards; // or apply a filter if needed
//   const totalNotificationsCount = Notify_Cards.length;

//   // Example: filter all bookings (replace with your actual filter logic)
//   const filteredBookings = Bookings; // or apply a filter if needed
//   const totalBookingsCount = Bookings.length;

//   return (
//     <>
//        <Card className="h-full">
//                 <CardHeader>
//                   <CardTitle className="text-xl">Recent Activity</CardTitle>
//                 </CardHeader>
//                 <CardContent>
//                   <TabsContent value="notifications" className="h-full m-0">
//                     <div className="px-6 pb-2">
//                       <p className="text-sm text-muted-foreground">
//                         {filteredNotifications.length === 0
//                           ? "No notifications match your filters"
//                           : `Showing ${filteredNotifications.length} of ${totalNotificationsCount} notifications`}
//                       </p>
//                     </div>
//                     <ScrollArea className="h-[800px] px-6">
//                       <div className="space-y-2">
//                         {filteredNotifications.map((item) => (
//                           <Card
//                             key={item.id}
//                             className={`h-[80px] flex justify-center border-l-6 border-l-${item.color}-500`}
//                           >
//                             <CardContent className="px-4">
//                               <div className="flex items-start justify-between">
//                                 <div className="flex gap-3">
//                                   <div
//                                     className={`flex h-8 w-8 items-center justify-center rounded-full bg-${item.color}-100`}
//                                   >
//                                     <item.icon className={`h-4 w-4 ${item.color}`} />
//                                   </div>
//                                   <div className="space-y-0.5">
//                                     <h3 className="font-medium text-sm">{item.title}</h3>
//                                     <p className="text-xs text-muted-foreground">{item.description}</p>
//                                     <p className="text-xs text-muted-foreground">{item.time}</p>
//                                   </div>
//                                 </div>
//                                 {item.badge && <Badge className="text-xs my-auto">New</Badge>}
//                               </div>
//                             </CardContent>
//                           </Card>
//                         ))}
//                       </div>
//                     </ScrollArea>
//                   </TabsContent>

//                   <TabsContent value="bookings" className="h-full m-0">
//                     <div className="px-6 pb-2">
//                       <p className="text-sm text-muted-foreground">
//                         {filteredBookings.length === 0
//                           ? "No bookings match your filters"
//                           : `Showing ${filteredBookings.length} of ${totalBookingsCount} bookings scheduled for today`}
//                       </p>
//                     </div>
//                     <ScrollArea className="h-[800px] px-6">
//                       <div className="space-y-2 pb-4">
//                         {filteredBookings.map((booking) => (
//                           <Card
//                             key={booking.id}
//                             className={`h-[80px] flex justify-center border-l-6 border-l-${booking.color.replace("text-", "")}`}
//                           >
//                             <CardContent className="p-3">
//                               <div className="flex items-start justify-between">
//                                 <div className="flex gap-2">
//                                   <div
//                                     className={`flex h-8 w-8 items-center justify-center rounded-full ${booking.bgcolor}`}
//                                   >
//                                     <Clock className={`h-4 w-4 ${booking.color}`} />
//                                   </div>
//                                   <div className="space-y-0.5">
//                                     <h3 className="font-medium text-sm">{booking.name}</h3>
//                                     <p className="text-xs text-muted-foreground">{booking.service}</p>
//                                     <p className="text-xs text-muted-foreground">Duration: {booking.duration}</p>
//                                   </div>
//                                 </div>
//                                 <Badge
//                                   variant={booking.status === "Confirmed" ? "secondary" : "outline"}
//                                   className="text-xs"
//                                 >
//                                   {booking.status}
//                                 </Badge>
//                               </div>
//                             </CardContent>
//                           </Card>
//                         ))}
//                       </div>
//                     </ScrollArea>
//                   </TabsContent>
//                 </CardContent>
//               </Card>
            
//      </>

//   )
// }

// export default Cards
