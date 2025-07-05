
"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight  } from "lucide-react";
import { CALENDAR_AVAILABILITY, MONTH_NAMES } from "@/constant/calenderdata";

export default function BookingCalendar() {
  const [monthOffset, setMonthOffset] = useState(0);
  const [calendarData] = useState(CALENDAR_AVAILABILITY);
  const [activeDay, setActiveDay] = useState<{
    day: number;
    month: number;
  } | null>(null);

  const getMonthDate = (offset: number) => {
    const now = new Date();
    now.setMonth(now.getMonth() + offset);
    return now;
  };

  const generateCalendarDays = (monthDate: Date) => {
    const year = monthDate.getFullYear();
    const month = monthDate.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const startDay = firstDay.getDay();

    const days = Array(startDay).fill(null);
    for (let i = 1; i <= lastDay.getDate(); i++) {
      days.push(i);
    }
    return days;
  };

  const getSlotStatus = (month: number, day: number, slot: string) => {
    return calendarData[month]?.[day]?.[
      slot as "morning" | "afternoon" | "evening"
    ];
  };

  const visibleMonths = [0, 1, 2].map((i) => getMonthDate(monthOffset + i));

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center px-4">
        <div>
          <h2 className="text-3xl font-bold text-gray-700 mb-2">
            Booking Calendar
          </h2>
          <p className="text-sm text-gray-600">
            🟩 Available | 🟥 Booked — Hover on a date to view morning,
            afternoon, and evening slots.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button
            onClick={() => setMonthOffset((prev) => prev - 3)}
            variant="outline"
          >
            <ChevronLeft className="w-4 h-4" />
          </Button>
          <Button
            onClick={() => setMonthOffset((prev) => prev + 3)}
            variant="outline"
          >
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>
      </div>

      {/* Calendar */}
      <div className="flex gap-6 justify-center px-4 overflow-x-auto pb-4 mt-4">
        {visibleMonths.map((monthDate, idx) => {
          const year = monthDate.getFullYear();
          const month = monthDate.getMonth();
          const days = generateCalendarDays(monthDate);

          return (
            <Card
              key={idx}
              className="w-[320px] flex-shrink-0 border shadow-md border-gray-200 bg-white rounded-xl"
            >
              <CardHeader className="text-center bg-gray-300 border-b rounded-t-xl py-3 shadow-inner">
                <CardTitle className="text-xl text-gray-900 font-bold tracking-wide">
                  {MONTH_NAMES[month]} {year}
                </CardTitle>
              </CardHeader>

              <CardContent className="p-4">
                {/* Weekdays */}
                {/* Weekdays with underline */}
                <div className="mb-3">
                  <div className="grid grid-cols-7 text-sm text-center text-gray-700 font-semibold mb-1">
                    {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((d) => (
                      <div key={d}>{d}</div>
                    ))}
                  </div>
                  <div className="h-px bg-gray-300 w-full "></div>
                </div>

                {/* Days Grid */}
                <div className="grid grid-cols-7 gap-1">
                  {days.map((day, i) => {
                    if (!day) return <div key={i}></div>;
                    const booked = calendarData[month]?.[day];
                    const bookedSlots = booked
                      ? Object.entries(booked).filter(([_, v]) => v === false)
                      : [];

                    const isActive =
                      activeDay?.day === day && activeDay?.month === month;

                    return (
                      <div
                        key={i}
                        onMouseEnter={() => setActiveDay({ day, month })}
                        onMouseLeave={() => setActiveDay(null)}
                        onClick={() =>
                          bookedSlots.length > 0
                            ? setActiveDay(isActive ? null : { day, month })
                            : null
                        }
                        className={`aspect-square flex flex-col items-center justify-center rounded-lg relative text-sm transition-all duration-150 p-1 cursor-pointer ${
                          bookedSlots.length > 0
                            ? "bg-green-200 hover:bg-green-300 border border-green-400"
                            : "bg-gray-100"
                        } ${isActive ? "ring-2 ring-indigo-500" : ""}`}
                      >
                        <span className="font-medium text-gray-800">{day}</span>

                        {/* Dots for booked slots */}
                        {bookedSlots.length > 0 && (
                          <div className="flex gap-[4px] mt-[2px]">
                            {Array.from({ length: bookedSlots.length }).map(
                              (_, idx) => (
                                <div
                                  key={idx}
                                  className="w-1.5 h-1.5 bg-black rounded-full"
                                ></div>
                              )
                            )}
                          </div>
                        )}

                        {/* Tooltip
                        {isActive && bookedSlots.length > 0 && (
                          <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 z-20 bg-black text-white text-xs rounded-lg px-3 py-2 shadow-xl w-max whitespace-nowrap">
                            {["morning", "afternoon", "evening"].map((slot) => {
                              const status = getSlotStatus(month, day, slot);
                              return (
                                <div key={slot} className="flex items-center gap-2">
                                  <div
                                    className={`w-2 h-2 rounded-full ${
                                      status === false
                                        ? "bg-white border border-gray-300"
                                        : "bg-green-400"
                                    }`}
                                  ></div>
                                  <span className="capitalize">
                                    {slot}: {status === false ? "booked" : "available"}
                                  </span>
                                </div>
                              );
                            })}
                            <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-b-black"></div>
                          </div>
                        )} */}
                        {isActive && (
                          <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 z-20 bg-black text-white text-xs rounded-lg px-3 py-2 shadow-xl w-max whitespace-nowrap">
                            {["morning", "afternoon", "evening"].map((slot) => {
                              const status = getSlotStatus(month, day, slot);
                              return (
                                <div
                                  key={slot}
                                  className="flex items-center gap-2"
                                >
                                  <div
                                    className={`w-2 h-2 rounded-full ${
                                      status === false
                                        ? "bg-red-300"
                                        : "bg-green-600"
                                    }`}
                                  ></div>
                                  <span className="capitalize">
                                    {slot}:{" "}
                                    {status === false ? "Booked" : "Available"}
                                  </span>
                                </div>
                              );
                            })}
                            <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-b-black"></div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
