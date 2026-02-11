import { Card, CardContent, CardHeader } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Progress } from "./ui/progress";
import {
  IconDots,
  IconStar,
  IconCalendar,
  IconUsers,
  IconFolder,
} from "@tabler/icons-react";

interface Project {
  id: string;
  name: string;
  description: string;
  progress: number;
  status: "On Track" | "At Risk" | "Delayed" | "Completed";
  dueDate: string;
  team: Array<{ name: string; avatar: string }>;
  color: string;
  tasks: { completed: number; total: number };
  isFavorite?: boolean;
}

const ProjectCard = () => {
  const projects: Project[] = [
    {
      id: "1",
      name: "Website Redesign",
      description: "Complete overhaul of company website with modern UI/UX",
      progress: 75,
      status: "On Track",
      dueDate: "Dec 31, 2024",
      team: [
        { name: "JD", avatar: "https://i.pravatar.cc/150?img=1" },
        { name: "SK", avatar: "https://i.pravatar.cc/150?img=2" },
        { name: "AL", avatar: "https://i.pravatar.cc/150?img=3" },
      ],
      color: "bg-blue-500",
      tasks: { completed: 18, total: 24 },
      isFavorite: true,
    },
    {
      id: "2",
      name: "Mobile App Development",
      description: "iOS and Android app for customer engagement",
      progress: 45,
      status: "At Risk",
      dueDate: "Jan 15, 2025",
      team: [
        { name: "MC", avatar: "https://i.pravatar.cc/150?img=4" },
        { name: "SR", avatar: "https://i.pravatar.cc/150?img=5" },
      ],
      color: "bg-purple-500",
      tasks: { completed: 9, total: 20 },
    },
    {
      id: "3",
      name: "Brand Identity Refresh",
      description: "Update brand guidelines and marketing materials",
      progress: 90,
      status: "On Track",
      dueDate: "Dec 20, 2024",
      team: [
        { name: "EM", avatar: "https://i.pravatar.cc/150?img=6" },
        { name: "JL", avatar: "https://i.pravatar.cc/150?img=7" },
        { name: "PK", avatar: "https://i.pravatar.cc/150?img=8" },
        { name: "RW", avatar: "https://i.pravatar.cc/150?img=9" },
      ],
      color: "bg-green-500",
      tasks: { completed: 27, total: 30 },
      isFavorite: true,
    },
    {
      id: "4",
      name: "Data Migration",
      description: "Migrate legacy systems to cloud infrastructure",
      progress: 30,
      status: "Delayed",
      dueDate: "Feb 1, 2025",
      team: [
        { name: "DT", avatar: "https://i.pravatar.cc/150?img=10" },
        { name: "BH", avatar: "https://i.pravatar.cc/150?img=11" },
      ],
      color: "bg-orange-500",
      tasks: { completed: 6, total: 18 },
    },
    {
      id: "5",
      name: "E-commerce Platform",
      description: "Build new online store with payment integration",
      progress: 60,
      status: "On Track",
      dueDate: "Jan 30, 2025",
      team: [
        { name: "NH", avatar: "https://i.pravatar.cc/150?img=12" },
        { name: "FG", avatar: "https://i.pravatar.cc/150?img=13" },
        { name: "TY", avatar: "https://i.pravatar.cc/150?img=14" },
      ],
      color: "bg-pink-500",
      tasks: { completed: 12, total: 20 },
    },
    {
      id: "6",
      name: "Customer Portal",
      description: "Self-service portal for customer support and tracking",
      progress: 85,
      status: "Completed",
      dueDate: "Dec 15, 2024",
      team: [
        { name: "UI", avatar: "https://i.pravatar.cc/150?img=15" },
        { name: "OP", avatar: "https://i.pravatar.cc/150?img=16" },
      ],
      color: "bg-teal-500",
      tasks: { completed: 17, total: 17 },
    },
    {
      id: "7",
      name: "AI Integration",
      description: "Integrate AI chatbot and automation features",
      progress: 20,
      status: "On Track",
      dueDate: "Mar 1, 2025",
      team: [{ name: "QW", avatar: "https://i.pravatar.cc/150?img=17" }],
      color: "bg-cyan-500",
      tasks: { completed: 4, total: 22 },
    },
    {
      id: "8",
      name: "Security Audit",
      description: "Comprehensive security review and improvements",
      progress: 55,
      status: "At Risk",
      dueDate: "Jan 10, 2025",
      team: [
        { name: "ER", avatar: "https://i.pravatar.cc/150?img=18" },
        { name: "AS", avatar: "https://i.pravatar.cc/150?img=19" },
      ],
      color: "bg-red-500",
      tasks: { completed: 11, total: 20 },
    },
  ];

  const getStatusColor = (status: Project["status"]) => {
    switch (status) {
      case "On Track":
        return "bg-green-100 text-green-700 border-green-200";
      case "At Risk":
        return "bg-yellow-100 text-yellow-700 border-yellow-200";
      case "Delayed":
        return "bg-red-100 text-red-700 border-red-200";
      case "Completed":
        return "bg-blue-100 text-blue-700 border-blue-200";
      default:
        return "bg-gray-100 text-gray-700 border-gray-200";
    }
  };

  const getProgressColor = (progress: number) => {
    if (progress >= 75) return "bg-green-500";
    if (progress >= 50) return "bg-blue-500";
    if (progress >= 25) return "bg-yellow-500";
    return "bg-red-500";
  };

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Projects</h2>
          <p className="text-sm text-gray-500 mt-1">
            {projects.length} active projects
          </p>
        </div>
        <Button className="gap-2">
          <IconFolder className="h-4 w-4" />
          New Project
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {projects.map((project) => (
          <Card
            key={project.id}
            className="group hover:shadow-lg transition-all duration-200 cursor-pointer border-2 hover:border-gray-300"
          >
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between mb-3">
                <div
                  className={`h-10 w-10 rounded-lg ${project.color} flex items-center justify-center text-white font-bold shadow-md`}
                >
                  {project.name
                    .split(" ")
                    .map((word) => word[0])
                    .join("")
                    .slice(0, 2)
                    .toUpperCase()}
                </div>
                <div className="flex items-center gap-1">
                  {project.isFavorite && (
                    <IconStar className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                  )}
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <IconDots className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-base text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">
                  {project.name}
                </h3>
                <p className="text-xs text-gray-600 line-clamp-2">
                  {project.description}
                </p>
              </div>
            </CardHeader>

            <CardContent className="space-y-4">
              {/* Progress */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs text-gray-600">Progress</span>
                  <span className="text-xs font-semibold text-gray-900">
                    {project.progress}%
                  </span>
                </div>
                <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className={`h-full ${getProgressColor(project.progress)} transition-all duration-300`}
                    style={{ width: `${project.progress}%` }}
                  />
                </div>
              </div>

              {/* Status & Tasks */}
              <div className="flex items-center justify-between">
                <Badge
                  variant="secondary"
                  className={`${getStatusColor(project.status)} text-xs font-medium border`}
                >
                  {project.status}
                </Badge>
                <span className="text-xs text-gray-600">
                  {project.tasks.completed}/{project.tasks.total} tasks
                </span>
              </div>

              {/* Team & Due Date */}
              <div className="flex items-center justify-between pt-3 border-t">
                <div className="flex -space-x-2">
                  {project.team.slice(0, 3).map((member, idx) => (
                    <Avatar key={idx} className="h-7 w-7 border-2 border-white">
                      <AvatarImage src={member.avatar} />
                      <AvatarFallback className="text-xs bg-linear-to-br from-blue-500 to-purple-600 text-white">
                        {member.name}
                      </AvatarFallback>
                    </Avatar>
                  ))}
                  {project.team.length > 3 && (
                    <div className="h-7 w-7 rounded-full border-2 border-white bg-gray-200 flex items-center justify-center">
                      <span className="text-xs font-medium text-gray-600">
                        +{project.team.length - 3}
                      </span>
                    </div>
                  )}
                </div>
                <div className="flex items-center gap-1 text-xs text-gray-500">
                  <IconCalendar className="h-3 w-3" />
                  <span>{project.dueDate}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
