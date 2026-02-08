import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import {
  IconLayoutBoard,
  IconList,
  IconTimeline,
  IconCalendar,
  IconChartBar,
  IconFile,
  IconFilter,
  IconArrowsSort,
  IconLayersIntersect,
  IconSearch,
  IconPlus,
  IconStar,
  IconDots,
  IconMessage,
  IconCalendarEvent,
  IconCheck,
} from "@tabler/icons-react";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { SiteHeader } from "@/components/site-header";

interface Task {
  id: string;
  title: string;
  description: string;
  category: string;
  categoryColor: string;
  priority?: "High" | "Medium" | "Low";
  priorityColor?: string;
  progress?: number;
  assignees: Array<{ name: string; avatar: string }>;
  comments?: number;
  dueDate?: string;
  isCompleted?: boolean;
}

interface Column {
  id: string;
  title: string;
  count: number;
  color: string;
  tasks: Task[];
}

export const ProjectBoard = () => {
  const [activeView, setActiveView] = useState("board");

  const columns: Column[] = [
    {
      id: "backlog",
      title: "Backlog",
      count: 3,
      color: "text-gray-500",
      tasks: [
        {
          id: "1",
          title: "User Research & Analysis",
          description:
            "Conduct user interviews and analyze current website pain points",
          category: "Research",
          categoryColor: "bg-purple-100 text-purple-700",
          priority: "High",
          priorityColor: "bg-red-100 text-red-700",
          assignees: [
            { name: "JD", avatar: "https://i.pravatar.cc/150?img=20" },
          ],
          dueDate: "Dec 15",
        },
        {
          id: "2",
          title: "Competitor Analysis",
          description: "",
          category: "Analysis",
          categoryColor: "bg-yellow-100 text-yellow-700",
          priority: "Medium",
          priorityColor: "bg-orange-100 text-orange-700",
          assignees: [
            { name: "SK", avatar: "https://i.pravatar.cc/150?img=21" },
          ],
          dueDate: "Dec 18",
        },
        {
          id: "3",
          title: "Define Brand Guidelines",
          description: "",
          category: "Branding",
          categoryColor: "bg-pink-100 text-pink-700",
          assignees: [
            { name: "EM", avatar: "https://i.pravatar.cc/150?img=22" },
            { name: "JL", avatar: "https://i.pravatar.cc/150?img=23" },
          ],
          comments: 3,
        },
      ],
    },
    {
      id: "todo",
      title: "To Do",
      count: 4,
      color: "text-blue-600",
      tasks: [
        {
          id: "4",
          title: "Wireframe Homepage",
          description:
            "Create low-fidelity wireframes for the new homepage layout",
          category: "Design",
          categoryColor: "bg-green-100 text-green-700",
          priority: "High",
          priorityColor: "bg-red-100 text-red-700",
          progress: 40,
          assignees: [
            { name: "AL", avatar: "https://i.pravatar.cc/150?img=24" },
          ],
          comments: 5,
          dueDate: "Dec 20",
        },
        {
          id: "5",
          title: "Design System Setup",
          description: "",
          category: "Design",
          categoryColor: "bg-green-100 text-green-700",
          priority: "Medium",
          priorityColor: "bg-orange-100 text-orange-700",
          assignees: [
            { name: "MC", avatar: "https://i.pravatar.cc/150?img=25" },
            { name: "SR", avatar: "https://i.pravatar.cc/150?img=26" },
          ],
          dueDate: "8/8",
        },
        {
          id: "6",
          title: "Content Audit",
          description: "",
          category: "Content",
          categoryColor: "bg-blue-100 text-blue-700",
          assignees: [
            { name: "PK", avatar: "https://i.pravatar.cc/150?img=27" },
          ],
          dueDate: "Dec 22",
        },
        {
          id: "7",
          title: "SEO Strategy",
          description: "",
          category: "Marketing",
          categoryColor: "bg-teal-100 text-teal-700",
          assignees: [
            { name: "RW", avatar: "https://i.pravatar.cc/150?img=28" },
          ],
          comments: 2,
          dueDate: "Dec 25",
        },
      ],
    },
    {
      id: "progress",
      title: "In Progress",
      count: 2,
      color: "text-purple-600",
      tasks: [
        {
          id: "8",
          title: "UI Design - Product Pages",
          description:
            "Design high-fidelity mockups for product listing and detail pages",
          category: "Design",
          categoryColor: "bg-green-100 text-green-700",
          priority: "High",
          priorityColor: "bg-red-100 text-red-700",
          progress: 75,
          assignees: [
            { name: "DT", avatar: "https://i.pravatar.cc/150?img=29" },
          ],
          comments: 2,
          dueDate: "8/8",
        },
        {
          id: "9",
          title: "Frontend Development",
          description: "Implement responsive navigation and hero section",
          category: "Development",
          categoryColor: "bg-cyan-100 text-cyan-700",
          progress: 50,
          assignees: [
            { name: "BH", avatar: "https://i.pravatar.cc/150?img=30" },
            { name: "KL", avatar: "https://i.pravatar.cc/150?img=31" },
          ],
          dueDate: "Dec 28",
        },
      ],
    },
    {
      id: "review",
      title: "Review",
      count: 2,
      color: "text-orange-600",
      tasks: [
        {
          id: "10",
          title: "Mobile Responsiveness Test",
          description: "",
          category: "Testing",
          categoryColor: "bg-red-100 text-red-700",
          priority: "Medium",
          priorityColor: "bg-orange-100 text-orange-700",
          assignees: [
            { name: "NH", avatar: "https://i.pravatar.cc/150?img=32" },
          ],
          comments: 3,
          dueDate: "today",
        },
        {
          id: "11",
          title: "Accessibility Audit",
          description: "",
          category: "Testing",
          categoryColor: "bg-red-100 text-red-700",
          assignees: [
            { name: "FG", avatar: "https://i.pravatar.cc/150?img=33" },
          ],
          dueDate: "2/25",
        },
      ],
    },
    {
      id: "done",
      title: "Done",
      count: 3,
      color: "text-green-600",
      tasks: [
        {
          id: "12",
          title: "Project Kickoff Meeting",
          description: "",
          category: "Meeting",
          categoryColor: "bg-gray-100 text-gray-700",
          assignees: [
            { name: "TY", avatar: "https://i.pravatar.cc/150?img=34" },
            { name: "UI", avatar: "https://i.pravatar.cc/150?img=35" },
            { name: "OP", avatar: "https://i.pravatar.cc/150?img=36" },
          ],
          isCompleted: true,
        },
        {
          id: "13",
          title: "Stakeholder Interviews",
          description: "",
          category: "Research",
          categoryColor: "bg-purple-100 text-purple-700",
          assignees: [
            { name: "QW", avatar: "https://i.pravatar.cc/150?img=37" },
          ],
          isCompleted: true,
        },
        {
          id: "14",
          title: "Site Map Creation",
          description: "",
          category: "Design",
          categoryColor: "bg-green-100 text-green-700",
          assignees: [
            { name: "ER", avatar: "https://i.pravatar.cc/150?img=38" },
          ],
          isCompleted: true,
        },
      ],
    },
  ];

  const navItems = [
    { icon: IconLayoutBoard, label: "Board", value: "board" },
    { icon: IconList, label: "List", value: "list" },
    { icon: IconTimeline, label: "Timeline", value: "timeline" },
    { icon: IconCalendar, label: "Calendar", value: "calendar" },
    { icon: IconChartBar, label: "Dashboard", value: "dashboard" },
    { icon: IconFile, label: "Files", value: "files" },
  ];

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

        {/* Project Header - Fixed */}
        <div className="border-b bg-white px-4 py-4 lg:px-6">
          <div className="flex flex-col gap-4">
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3 min-w-0">
                <div className="h-10 w-10 lg:h-12 lg:w-12 rounded-xl bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center shadow-md flex-shrink-0">
                  <IconLayoutBoard className="h-5 w-5 lg:h-6 lg:w-6 text-white" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2">
                    <h1 className="text-xl lg:text-2xl font-bold text-gray-900 truncate">
                      Website Redesign Project
                    </h1>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8 flex-shrink-0"
                    >
                      <IconStar className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                    </Button>
                  </div>
                  <p className="text-xs lg:text-sm text-gray-500 truncate">
                    Marketing Team • Updated 2 hours ago
                  </p>
                </div>
              </div>
            </div>

            {/* Project Stats */}
            <div className="flex flex-wrap items-center gap-4 lg:gap-6 text-sm">
              <div className="flex items-center gap-2">
                <span className="text-gray-600 text-xs lg:text-sm">
                  Progress
                </span>
                <div className="w-16 lg:w-24 h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-emerald-500"
                    style={{ width: "68%" }}
                  />
                </div>
                <span className="font-semibold text-gray-900 text-xs lg:text-sm">
                  68%
                </span>
              </div>
              <div className="flex items-center gap-2 text-gray-600 text-xs lg:text-sm">
                <IconCalendarEvent className="h-4 w-4 flex-shrink-0" />
                <span className="whitespace-nowrap">Due: Dec 31, 2024</span>
              </div>
              <Badge className="bg-emerald-100 text-emerald-700 hover:bg-emerald-100 text-xs flex-shrink-0">
                On Track
              </Badge>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between">
              <nav className="flex gap-1 overflow-x-auto">
                {navItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <Button
                      key={item.value}
                      variant={
                        activeView === item.value ? "secondary" : "ghost"
                      }
                      size="sm"
                      onClick={() => setActiveView(item.value)}
                      className="gap-2 flex-shrink-0"
                    >
                      <Icon className="h-4 w-4" />
                      <span className="hidden sm:inline">{item.label}</span>
                    </Button>
                  );
                })}
              </nav>
            </div>
          </div>
        </div>

        {/* Toolbar - Fixed */}
        <div className="flex-shrink-0 border-b bg-white px-4 py-3 lg:px-6">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="sm"
                className="gap-2 flex-shrink-0"
              >
                <IconFilter className="h-4 w-4" />
                <span className="hidden sm:inline">Filter</span>
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="gap-2 flex-shrink-0"
              >
                <IconArrowsSort className="h-4 w-4" />
                <span className="hidden sm:inline">Sort</span>
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="gap-2 flex-shrink-0"
              >
                <IconLayersIntersect className="h-4 w-4" />
                <span className="hidden sm:inline">Group</span>
              </Button>
            </div>
            <div className="flex items-center gap-2">
              <div className="relative">
                <IconSearch className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input placeholder="Search..." className="pl-9 w-32 lg:w-64" />
              </div>
            </div>
          </div>
        </div>

        {/* Kanban Board - Scrollable Content Area */}
        <div className="flex-1 overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
          <div className="h-full overflow-x-auto overflow-y-hidden px-4 lg:px-6 py-4">
            <div className="inline-flex gap-4 h-full min-w-full">
              {columns.map((column) => (
                <div
                  key={column.id}
                  className="w-80 flex-shrink-0 flex flex-col h-full"
                >
                  {/* Column Header */}
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <h3 className={`font-semibold ${column.color}`}>
                        {column.title}
                      </h3>
                      <Badge
                        variant="secondary"
                        className="rounded-full px-2 text-xs"
                      >
                        {column.count}
                      </Badge>
                    </div>
                    <div className="flex items-center gap-1">
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <IconPlus className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <IconDots className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>

                  {/* Tasks - Vertical Scroll Container */}
                  <div className="flex-1 space-y-3 overflow-y-auto pr-1">
                    {column.tasks.map((task) => (
                      <Card
                        key={task.id}
                        className="group hover:shadow-lg transition-all duration-200 cursor-pointer border hover:border-gray-300"
                      >
                        <CardContent className="p-4">
                          {/* Task Header */}
                          <div className="flex items-start justify-between mb-2 gap-2">
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center gap-2 mb-2 flex-wrap">
                                <Badge
                                  variant="secondary"
                                  className={`${task.categoryColor} text-xs font-medium`}
                                >
                                  {task.category}
                                </Badge>
                                {task.priority && (
                                  <Badge
                                    variant="secondary"
                                    className={`${task.priorityColor} text-xs font-medium`}
                                  >
                                    {task.priority}
                                  </Badge>
                                )}
                              </div>
                              <h4 className="font-semibold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors text-sm">
                                {task.title}
                              </h4>
                              {task.description && (
                                <p className="text-xs text-gray-600 line-clamp-2">
                                  {task.description}
                                </p>
                              )}
                            </div>
                            <Button
                              variant="ghost"
                              size="icon"
                              className="h-6 w-6 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0"
                            >
                              <IconDots className="h-4 w-4" />
                            </Button>
                          </div>

                          {/* Progress Bar */}
                          {task.progress !== undefined && (
                            <div className="mb-3">
                              <div className="flex items-center justify-between mb-1">
                                <span className="text-xs text-gray-500">
                                  Progress
                                </span>
                                <span className="text-xs font-medium text-gray-700">
                                  {task.progress}%
                                </span>
                              </div>
                              <div className="h-1.5 bg-gray-200 rounded-full overflow-hidden">
                                <div
                                  className="h-full bg-gradient-to-r from-purple-500 to-purple-600 transition-all duration-300"
                                  style={{ width: `${task.progress}%` }}
                                />
                              </div>
                            </div>
                          )}

                          {/* Task Footer */}
                          <div className="flex items-center justify-between mt-3 pt-3 border-t gap-2">
                            <div className="flex -space-x-2 flex-shrink-0">
                              {task.assignees.map((assignee, idx) => (
                                <Avatar
                                  key={idx}
                                  className="h-7 w-7 border-2 border-white"
                                >
                                  <AvatarImage src={assignee.avatar} />
                                  <AvatarFallback className="text-xs bg-gradient-to-br from-blue-500 to-purple-600 text-white">
                                    {assignee.name}
                                  </AvatarFallback>
                                </Avatar>
                              ))}
                            </div>
                            <div className="flex items-center gap-3 text-gray-500">
                              {task.comments && (
                                <div className="flex items-center gap-1 text-xs">
                                  <IconMessage className="h-4 w-4" />
                                  <span>{task.comments}</span>
                                </div>
                              )}
                              {task.dueDate && (
                                <div className="flex items-center gap-1 text-xs">
                                  <IconCalendarEvent className="h-4 w-4" />
                                  <span>{task.dueDate}</span>
                                </div>
                              )}
                              {task.isCompleted && (
                                <div className="flex items-center gap-1 text-emerald-600">
                                  <IconCheck className="h-4 w-4" />
                                </div>
                              )}
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}

                    {/* Add Task Button */}
                    <Button
                      variant="ghost"
                      className="w-full justify-start text-gray-500 hover:text-gray-900 border-2 border-dashed hover:border-solid text-sm"
                    >
                      <IconPlus className="h-4 w-4 mr-2" />
                      Add Task
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
};
