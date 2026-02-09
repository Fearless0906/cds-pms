import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  IconChevronLeft,
  IconChevronRight,
  IconSearch,
  IconPlus,
  IconDotsVertical,
} from "@tabler/icons-react";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { SiteHeader } from "@/components/site-header";

interface CalendarEvent {
  id: string;
  title: string;
  time: string;
  date: number;
  color: string;
}

const Calendar = () => {
  const [currentMonth, setCurrentMonth] = useState("February 2025");
  const [viewMode, setViewMode] = useState("Month");

  const events: CalendarEvent[] = [
    {
      id: "1",
      title: "Team Standup",
      time: "9:00 AM",
      date: 2,
      color: "bg-blue-100 text-blue-700 border-blue-200",
    },
    {
      id: "2",
      title: "Client Review",
      time: "3:00 PM",
      date: 4,
      color: "bg-purple-100 text-purple-700 border-purple-200",
    },
    {
      id: "3",
      title: "Team Standup",
      time: "9:00 AM",
      date: 9,
      color: "bg-blue-100 text-blue-700 border-blue-200",
    },
    {
      id: "4",
      title: "Sprint Planning",
      time: "2:00 PM",
      date: 9,
      color: "bg-green-100 text-green-700 border-green-200",
    },
    {
      id: "5",
      title: "Design Review",
      time: "11:00 AM",
      date: 12,
      color: "bg-orange-100 text-orange-700 border-orange-200",
    },
    {
      id: "6",
      title: "Team Standup",
      time: "9:00 AM",
      date: 16,
      color: "bg-blue-100 text-blue-700 border-blue-200",
    },
    {
      id: "7",
      title: "Client Presentation",
      time: "10:00 AM",
      date: 19,
      color: "bg-red-100 text-red-700 border-red-200",
    },
    {
      id: "8",
      title: "Design Workshop",
      time: "2:30 PM",
      date: 19,
      color: "bg-pink-100 text-pink-700 border-pink-200",
    },
    {
      id: "9",
      title: "Team Standup",
      time: "9:00 AM",
      date: 23,
      color: "bg-blue-100 text-blue-700 border-blue-200",
    },
    {
      id: "10",
      title: "Sprint Review",
      time: "4:00 PM",
      date: 23,
      color: "bg-teal-100 text-teal-700 border-teal-200",
    },
  ];

  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const firstDayOfMonth = 6;
  const daysInMonth = 28;
  const startDate = 26;

  const calendarDays = [];

  for (let i = 0; i < firstDayOfMonth; i++) {
    calendarDays.push({
      date: startDate + i,
      isCurrentMonth: false,
      events: [],
    });
  }

  for (let i = 1; i <= daysInMonth; i++) {
    calendarDays.push({
      date: i,
      isCurrentMonth: true,
      events: events.filter((e) => e.date === i),
    });
  }

  const remainingDays = 42 - calendarDays.length;
  for (let i = 1; i <= remainingDays; i++) {
    calendarDays.push({
      date: i,
      isCurrentMonth: false,
      events: [],
    });
  }

  const today = 19;

  return (
    <SidebarProvider
      style={
        {
          "--sidebar-width": "calc(var(--spacing) * 72)",
          "--header-height": "calc(var(--spacing) * 12)",
        } as React.CSSProperties
      }
    >
      <AppSidebar variant="inset" />
      <SidebarInset>
        <SiteHeader />

        <div className="flex flex-col h-[calc(100vh-var(--header-height))] bg-gradient-to-br from-gray-50 to-gray-100">
          {/* Calendar Header */}
          <div className="shrink-0 border-b bg-white px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <h1 className="text-2xl font-bold text-gray-900">Calendar</h1>
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="icon" className="h-9 w-9">
                    <IconChevronLeft className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="icon" className="h-9 w-9">
                    <IconChevronRight className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="sm" className="ml-2">
                    Today
                  </Button>
                  <span className="ml-4 text-lg font-semibold text-gray-900">
                    {currentMonth}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="relative">
                  <IconSearch className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input placeholder="Search events..." className="pl-9 w-64" />
                </div>
                <Select value={viewMode} onValueChange={setViewMode}>
                  <SelectTrigger className="w-32">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Month">Month</SelectItem>
                    <SelectItem value="Week">Week</SelectItem>
                    <SelectItem value="Day">Day</SelectItem>
                    <SelectItem value="Agenda">Agenda</SelectItem>
                  </SelectContent>
                </Select>
                <Button variant="ghost" size="icon">
                  <IconDotsVertical className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>

          {/* Calendar Content */}
          <div className="flex-1 overflow-auto p-6">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 h-full">
              {/* Main Calendar - 3 columns */}
              <div className="lg:col-span-3">
                <Card className="h-full">
                  <CardContent className="p-0">
                    {/* Days of Week Header */}
                    <div className="grid grid-cols-7 border-b">
                      {daysOfWeek.map((day) => (
                        <div
                          key={day}
                          className="p-3 text-center text-sm font-semibold text-gray-700 border-r last:border-r-0"
                        >
                          {day}
                        </div>
                      ))}
                    </div>

                    {/* Calendar Days */}
                    <div className="grid grid-cols-7 h-[calc(100%-48px)]">
                      {calendarDays.map((day, index) => (
                        <div
                          key={index}
                          className={`border-r border-b last:border-r-0 p-2 min-h-30 relative ${
                            !day.isCurrentMonth
                              ? "bg-gray-50"
                              : day.date === today
                                ? "bg-blue-50"
                                : "bg-white hover:bg-gray-50"
                          } transition-colors cursor-pointer group`}
                        >
                          {/* Date Number */}
                          <div className="flex items-center justify-between mb-2">
                            <span
                              className={`text-sm font-medium ${
                                !day.isCurrentMonth
                                  ? "text-gray-400"
                                  : day.date === today
                                    ? "bg-blue-600 text-white w-7 h-7 flex items-center justify-center rounded-full"
                                    : "text-gray-900"
                              }`}
                            >
                              {day.date}
                            </span>
                            {day.isCurrentMonth && (
                              <Button
                                variant="ghost"
                                size="icon"
                                className="h-6 w-6 opacity-0 group-hover:opacity-100 transition-opacity"
                              >
                                <IconPlus className="h-3 w-3" />
                              </Button>
                            )}
                          </div>

                          {/* Events */}
                          <div className="space-y-1">
                            {day.events.map((event) => (
                              <div
                                key={event.id}
                                className={`text-xs p-1.5 rounded border ${event.color} truncate cursor-pointer hover:shadow-sm transition-shadow`}
                              >
                                <div className="font-medium truncate">
                                  {event.title}
                                </div>
                                <div className="text-[10px] opacity-80">
                                  {event.time}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Right Sidebar - 1 column */}
              <div className="lg:col-span-1">
                <div className="space-y-4 h-full overflow-y-auto">
                  {/* New Event Button */}
                  <Button variant="default" className="w-full">
                    <IconPlus className="h-4 w-4" />
                    New Event
                  </Button>

                  {/* My Calendars */}
                  <Card>
                    <CardContent className="p-4">
                      <h3 className="text-xs font-semibold text-gray-500 uppercase mb-3 tracking-wide">
                        My Calendars
                      </h3>
                      <div className="space-y-2.5">
                        {[
                          { name: "Personal", color: "bg-purple-500" },
                          { name: "Work Projects", color: "bg-blue-500" },
                          { name: "Team Meetings", color: "bg-green-500" },
                          { name: "Client Calls", color: "bg-orange-500" },
                          { name: "Deadlines", color: "bg-red-500" },
                        ].map((calendar) => (
                          <label
                            key={calendar.name}
                            className="flex items-center gap-2.5 cursor-pointer hover:bg-gray-50 p-1.5 rounded transition-colors"
                          >
                            <Checkbox defaultChecked className="rounded" />
                            <div
                              className={`w-3 h-3 rounded ${calendar.color}`}
                            />
                            <span className="text-sm text-gray-700">
                              {calendar.name}
                            </span>
                          </label>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  {/* Team Calendars */}
                  <Card>
                    <CardContent className="p-4">
                      <h3 className="text-xs font-semibold text-gray-500 uppercase mb-3 tracking-wide">
                        Team Calendars
                      </h3>
                      <div className="space-y-2.5">
                        {[
                          { name: "Design Team", color: "bg-pink-500" },
                          { name: "Development", color: "bg-cyan-500" },
                        ].map((calendar) => (
                          <label
                            key={calendar.name}
                            className="flex items-center gap-2.5 cursor-pointer hover:bg-gray-50 p-1.5 rounded transition-colors"
                          >
                            <Checkbox defaultChecked className="rounded" />
                            <div
                              className={`w-3 h-3 rounded ${calendar.color}`}
                            />
                            <span className="text-sm text-gray-700">
                              {calendar.name}
                            </span>
                          </label>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  {/* Upcoming Events */}
                  <Card>
                    <CardContent className="p-4">
                      <h3 className="text-xs font-semibold text-gray-500 uppercase mb-3 tracking-wide">
                        Upcoming
                      </h3>
                      <div className="space-y-3">
                        <div className="flex items-start gap-3">
                          <div className="w-2 h-2 rounded-full bg-blue-500 mt-1.5 flex-shrink-0" />
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium text-gray-900">
                              Sprint Planning
                            </p>
                            <p className="text-xs text-gray-500">
                              Today, 2:00 PM
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="w-2 h-2 rounded-full bg-blue-500 mt-1.5 flex-shrink-0" />
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium text-gray-900">
                              Team Standup
                            </p>
                            <p className="text-xs text-gray-500">
                              Tomorrow, 9:00 AM
                            </p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
};

export default Calendar;
