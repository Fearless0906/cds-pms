import {
  Avatar,
  AvatarFallback,
  AvatarGroup,
  AvatarGroupCount,
  AvatarImage,
} from "./ui/avatar";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Progress } from "./ui/progress";

interface TeamMember {
  id: string;
  name: string;
  avatar: string;
}

interface ProjectItem {
  id: string;
  title: string;
  dueDate: string;
  progress: number;
  color: string;
  teamMembers: TeamMember[];
}

export const RecentProject = () => {
  const projects: ProjectItem[] = [
    {
      id: "1",
      title: "Website Redesign",
      dueDate: "Due in 5 days",
      progress: 75,
      color: "bg-blue-500",
      teamMembers: [
        {
          id: "1",
          name: "John Doe",
          avatar: "https://i.pravatar.cc/150?img=1",
        },
        {
          id: "2",
          name: "Jane Smith",
          avatar: "https://i.pravatar.cc/150?img=2",
        },
        {
          id: "3",
          name: "Mike Johnson",
          avatar: "https://i.pravatar.cc/150?img=3",
        },
      ],
    },
    {
      id: "2",
      title: "Mobile App Development",
      dueDate: "Due in 10 days",
      progress: 45,
      color: "bg-purple-500",
      teamMembers: [
        {
          id: "4",
          name: "Sarah Wilson",
          avatar: "https://i.pravatar.cc/150?img=4",
        },
        {
          id: "5",
          name: "Tom Brown",
          avatar: "https://i.pravatar.cc/150?img=5",
        },
      ],
    },
    {
      id: "3",
      title: "Brand Identity",
      dueDate: "Due in 3 days",
      progress: 90,
      color: "bg-green-500",
      teamMembers: [
        {
          id: "6",
          name: "Emily Davis",
          avatar: "https://i.pravatar.cc/150?img=6",
        },
        {
          id: "7",
          name: "Chris Lee",
          avatar: "https://i.pravatar.cc/150?img=7",
        },
        {
          id: "8",
          name: "Alex Kim",
          avatar: "https://i.pravatar.cc/150?img=8",
        },
        {
          id: "9",
          name: "Sam Park",
          avatar: "https://i.pravatar.cc/150?img=9",
        },
      ],
    },
  ];

  return (
    <Card className="flex flex-col w-full">
      <div className="flex justify-between items-center px-5">
        <h2 className="text-xl font-semibold text-gray-900">Recent Projects</h2>
        <Button variant="link">View All</Button>
      </div>

      <div className="p-5 space-y-3">
        {projects.map((project) => (
          <div
            key={project.id}
            className="flex items-center justify-between rounded-lg border border-gray-200 bg-white px-4 py-3 hover:shadow-xs transition-shadow"
          >
            {/* Left Section */}
            <div className="flex items-center gap-3">
              {/* Project Icon */}
              <div
                className={`flex h-12 w-12 items-center justify-center rounded-lg ${project.color} text-white font-semibold text-lg`}
              >
                {project.title
                  .split(" ")
                  .map((word) => word[0])
                  .join("")
                  .slice(0, 2)
                  .toUpperCase()}
              </div>

              {/* Project Info */}
              <div className="flex flex-col">
                <h3 className="font-semibold text-gray-900">{project.title}</h3>
                <p className="text-sm text-gray-500">{project.dueDate}</p>
              </div>
            </div>

            {/* Right Section */}
            <div className="flex items-center gap-4">
              {/* Team Members */}
              <div className="flex -space-x-2">
                {project.teamMembers.map((member, index) => (
                  <div
                    key={member.id}
                    className="relative h-8 w-8 rounded-full border-2 border-white overflow-hidden"
                    style={{ zIndex: project.teamMembers.length - index }}
                  >
                    <AvatarGroup className="grayscale">
                      <Avatar>
                        <AvatarImage src={member.avatar} />
                        <AvatarFallback>{member.name}</AvatarFallback>
                        <AvatarGroupCount>+3</AvatarGroupCount>
                      </Avatar>
                    </AvatarGroup>
                  </div>
                ))}
              </div>

              {/* Progress */}
              <div className="flex items-center gap-2 min-w-[80px]">
                <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                  <Progress value={project.progress} />
                </div>
                <span className="text-sm font-medium text-gray-700 min-w-[40px] text-right">
                  {project.progress}%
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};
