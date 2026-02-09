import { AppSidebar } from "@/components/app-sidebar";
import ProjectHeader from "@/components/project-header";
import ProjectKanban from "@/components/project-kanban";
import ProjectNavigation from "@/components/project-navigation";
import ProjectStats from "@/components/project-stats";
import ProjectToolbar from "@/components/project-toolbar";
import { SiteHeader } from "@/components/site-header";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import type { Column } from "@/lib/types";
import {
  IconCalendar,
  IconChartBar,
  IconFile,
  IconLayoutBoard,
  IconList,
  IconTimeline,
} from "@tabler/icons-react";
import { useState } from "react";

const Project = () => {
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

        <div className="flex flex-1 flex-col">
          <div className="@container/main flex flex-1 flex-col gap-2">
            <div className="border-b bg-white px-4 py-4 lg:px-6">
              <div className="flex flex-col gap-4">
                <ProjectHeader />
                <ProjectStats />

                <ProjectNavigation
                  navItems={navItems}
                  activeView={activeView}
                  setActiveView={setActiveView}
                />

                <ProjectToolbar />
                <ProjectKanban columns={columns} />
              </div>
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
};

export default Project;
