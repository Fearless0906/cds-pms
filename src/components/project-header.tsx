import { IconLayoutBoard, IconStar } from "@tabler/icons-react";
import { Button } from "./ui/button";

const ProjectHeader = () => {
  return (
    <>
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
    </>
  );
};

export default ProjectHeader;
