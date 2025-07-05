
export interface DashboardMetric {
  title: string
  value: string | number
  change: string
  icon: string
}

export const DASHBOARD_METRICS = {
  upcomingBookings: {
    title: "Up coming bookings",
    value: 12,
    change: "+2 from yesterday",
    icon: "Calendar",
  },
  pendingPayments: {
    title: "current month pending payments",
    value: "$ 2,350",
    change: "3 payments awaiting",
    icon: "HardDriveDownload",
  },
  totalRevenue: {
    title: "Current month available booking",
    value: "$ 12,234",
    change: "+8% from last month",
    icon: "DollarSign",
  },
}
