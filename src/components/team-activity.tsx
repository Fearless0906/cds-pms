import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { IconDots, IconDotsVertical } from "@tabler/icons-react";

interface ActivityItem {
  id: string;
  user: {
    name: string;
    avatar: string;
  };
  action: string;
  description: string;
  timestamp: string;
  status?: "completed" | "in-progress" | "pending" | "blocked";
}

export const TeamActivity = () => {
  const activities: ActivityItem[] = [
    {
      id: "1",
      user: {
        name: "John Davis",
        avatar: "https://i.pravatar.cc/150?img=11",
      },
      action: "completed task",
      description: "Design mockups for homepage",
      timestamp: "2 hours ago",
      status: "completed",
    },
    {
      id: "2",
      user: {
        name: "Sarah Johnson",
        avatar: "https://i.pravatar.cc/150?img=12",
      },
      action: "created new project",
      description: "Q4 Marketing Strategy",
      timestamp: "4 hours ago",
      status: "in-progress",
    },
    {
      id: "3",
      user: {
        name: "Mike Chen",
        avatar: "https://i.pravatar.cc/150?img=13",
      },
      action: "added comment",
      description: "Great work on the mobile designs!",
      timestamp: "6 hours ago",
    },
    {
      id: "4",
      user: {
        name: "Emma Wilson",
        avatar: "https://i.pravatar.cc/150?img=14",
      },
      action: "uploaded files",
      description: "Brand guidelines v2.pdf",
      timestamp: "8 hours ago",
      status: "pending",
    },
    {
      id: "5",
      user: {
        name: "Alex Martinez",
        avatar: "https://i.pravatar.cc/150?img=15",
      },
      action: "assigned task",
      description: "Review API documentation",
      timestamp: "Yesterday",
      status: "blocked",
    },
  ];

  const statusColors = {
    completed: "bg-green-500",
    "in-progress": "bg-blue-500",
    pending: "bg-orange-500",
    blocked: "bg-red-500",
  };

  const statusLabels = {
    completed: "Completed",
    "in-progress": "In Progress",
    pending: "Pending",
    blocked: "Blocked",
  };

  return (
    <Card className="flex flex-col w-full p-5">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-gray-900">Team Activity</h2>
        <div className="flex items-center gap-3">
          <Button variant="link">
            <IconDotsVertical className="h-5 w-5 text-gray-500" />
          </Button>
        </div>
      </div>

      {/* Activity List */}
      <div className="space-y-4">
        {activities.map((activity) => (
          <div key={activity.id} className="flex items-start gap-3">
            {/* Avatar */}
            <div className="relative flex-shrink-0">
              <Avatar>
                <AvatarImage src={activity.user.avatar} />
                <AvatarFallback>{activity.user.name}</AvatarFallback>
              </Avatar>
              {activity.status && (
                <div
                  className={`absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full border-2 border-white ${
                    statusColors[activity.status]
                  }`}
                />
              )}
            </div>

            {/* Content */}
            <div className="flex-1 min-w-0">
              <p className="text-sm text-gray-900">
                <span className="font-semibold">{activity.user.name}</span>{" "}
                <span className="text-gray-600">{activity.action}</span>
              </p>
              <p className="text-sm text-gray-500 mt-0.5 truncate">
                {activity.description}
              </p>
              <p className="text-xs text-gray-400 mt-1">{activity.timestamp}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Legend */}
      <div className="flex flex-wrap items-center gap-4 mt-6 pt-4 border-t border-gray-100">
        {(Object.keys(statusColors) as Array<keyof typeof statusColors>).map(
          (status) => (
            <div key={status} className="flex items-center gap-2">
              <div className={`h-3 w-3 rounded-sm ${statusColors[status]}`} />
              <span className="text-xs text-gray-600">
                {statusLabels[status]}
              </span>
            </div>
          ),
        )}
      </div>
    </Card>
  );
};
