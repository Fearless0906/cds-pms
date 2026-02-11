import { getProjects, getTasks } from "@/api/apiClient";
import { AppSidebar } from "@/components/app-sidebar";
import ProjectCard from "@/components/project-card";
import ProjectHeader from "@/components/project-header";
import ProjectKanban from "@/components/project-kanban";
import ProjectNavigation from "@/components/project-navigation";
import ProjectStats from "@/components/project-stats";
import ProjectToolbar from "@/components/project-toolbar";
import { SiteHeader } from "@/components/site-header";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import type { Column, Project } from "@/lib/types";
import {
  IconCalendar,
  IconChartBar,
  IconFile,
  IconLayoutBoard,
  IconList,
  IconTimeline,
} from "@tabler/icons-react";
import { useEffect, useState } from "react";

const Project = () => {
  const [activeView, setActiveView] = useState("board");
  const [columns, setColumns] = useState<Column[]>([]);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const tasks = await getTasks();
        console.log(tasks);
        setColumns(tasks);
      } catch (error) {
        console.error("Error fetching tasks:", error);
      }
    };

    fetchTasks();
  }, []);

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
            {/* <div className="border-b bg-white px-4 py-4 lg:px-6">
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
            </div> */}

            <ProjectCard />
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
};

export default Project;
