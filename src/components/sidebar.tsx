"use client"

import { BarChart3, Calendar, Settings, Users } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

export function Sidebar() {
  const pathname = usePathname()

  const navItems = [
    {
      href: "/dashboard",
      icon: BarChart3,
      label: "Dashboard",
    },
    {
      href: "/booking",
      icon: Calendar,
      label: "Booking",
    },
    {
      href: "/customer",
      icon: Users,
      label: "Customer",
    },
    {
      href: "/setting",
      icon: Settings,
      label: "Setting",
    },
  ]

  return (
    <div className="w-64 bg-gray-100">
      <div className="flex h-16 items-end border-2 rounded-[12px] px-4 pb-4 bg-white">
        <div className="flex items-center gap-2">
          <Calendar className="h-6 w-6" />
          <h1 className="text-xl font-semibold">Booking System</h1>
        </div>
      </div>

      <div className="w-65 h-[600px] border-2 bg-gray-50 rounded-xl mt-[10px]">
        <nav className="p-2">
          {navItems.map((item) => {
            const Icon = item.icon
            const isActive = pathname === item.href

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-3 rounded-md px-3 py-2 transition-colors ${
                  isActive ? "bg-gray-200 text-gray-900" : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                <Icon className="h-5 w-5" />
                <span>{item.label}</span>
              </Link>
            )
          })}
        </nav>
      </div>
    </div>
  )
}
