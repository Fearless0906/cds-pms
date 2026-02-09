import { IconCalendarEvent } from "@tabler/icons-react";
import { Badge } from "./ui/badge";

const ProjectStats = () => {
  return (
    <>
      <div className="flex flex-wrap items-center gap-4 lg:gap-6 text-sm">
        <div className="flex items-center gap-2">
          <span className="text-gray-600 text-xs lg:text-sm">Progress</span>
          <div className="w-16 lg:w-24 h-2 bg-gray-200 rounded-full overflow-hidden">
            <div className="h-full bg-emerald-500" style={{ width: "68%" }} />
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
    </>
  );
};

export default ProjectStats;
