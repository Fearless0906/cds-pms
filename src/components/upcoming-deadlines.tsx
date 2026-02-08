import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import {
  IconAlertCircle,
  IconFlag,
  IconAlertTriangle,
  IconCircleCheck,
} from "@tabler/icons-react";

interface Deadline {
  id: string;
  title: string;
  project: string;
  dueDate: string;
  priority: "urgent" | "high" | "medium" | "low";
}

export const UpcomingDeadlines = () => {
  const deadlines: Deadline[] = [
    {
      id: "1",
      title: "Client Presentation",
      project: "Website Redesign",
      dueDate: "Tomorrow, 2:00 PM",
      priority: "urgent",
    },
    {
      id: "2",
      title: "Sprint Review",
      project: "Mobile App Launch",
      dueDate: "In 3 days",
      priority: "high",
    },
    {
      id: "3",
      title: "Content Delivery",
      project: "Marketing Campaign",
      dueDate: "In 5 days",
      priority: "medium",
    },
    {
      id: "4",
      title: "Team Meeting",
      project: "Brand Refresh",
      dueDate: "In 1 week",
      priority: "low",
    },
  ];

  const priorityConfig = {
    urgent: {
      label: "URGENT",
      bg: "bg-red-50",
      border: "border-l-red-500",
      textColor: "text-red-700",
      badgeBg: "bg-red-100",
      icon: IconAlertCircle,
      iconColor: "text-red-500",
    },
    high: {
      label: "HIGH",
      bg: "bg-orange-50",
      border: "border-l-orange-500",
      textColor: "text-orange-700",
      badgeBg: "bg-orange-100",
      icon: IconFlag,
      iconColor: "text-orange-500",
    },
    medium: {
      label: "MEDIUM",
      bg: "bg-yellow-50",
      border: "border-l-yellow-500",
      textColor: "text-yellow-700",
      badgeBg: "bg-yellow-100",
      icon: IconAlertTriangle,
      iconColor: "text-yellow-600",
    },
    low: {
      label: "LOW",
      bg: "bg-green-50",
      border: "border-l-green-500",
      textColor: "text-green-700",
      badgeBg: "bg-green-100",
      icon: IconCircleCheck,
      iconColor: "text-green-500",
    },
  };

  return (
    <div className="w-full space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold text-gray-900">
          Upcoming Deadlines
        </h2>
        <Button
          variant="ghost"
          size="sm"
          className="text-blue-600 hover:text-blue-700"
        >
          View Calendar
        </Button>
      </div>

      {/* Deadlines Grid */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {deadlines.map((deadline) => {
          const config = priorityConfig[deadline.priority];
          const Icon = config.icon;

          return (
            <Card
              key={deadline.id}
              className={`${config.bg} ${config.border} border-l-4 hover:shadow-md transition-shadow`}
            >
              <CardContent className="p-4">
                {/* Priority Badge */}
                <div className="flex items-center justify-between mb-3">
                  <Badge
                    variant="secondary"
                    className={`${config.badgeBg} ${config.textColor} text-xs font-semibold px-2 py-0.5`}
                  >
                    {config.label}
                  </Badge>
                  <Icon className={`h-5 w-5 ${config.iconColor}`} />
                </div>

                {/* Content */}
                <div className="space-y-2">
                  <h3 className="font-semibold text-gray-900 text-base">
                    {deadline.title}
                  </h3>
                  <p className="text-sm text-gray-600">{deadline.project}</p>
                  <p className="text-sm text-gray-500 font-medium">
                    {deadline.dueDate}
                  </p>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
};
