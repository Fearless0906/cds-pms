import { Button } from "./ui/button";
import {
  IconArrowsSort,
  IconFilter,
  IconLayersIntersect,
  IconSearch,
} from "@tabler/icons-react";
import { Input } from "./ui/input";

const ProjectToolbar = () => {
  return (
    <>
      <div className="shrink-0 border-b bg-white py-3">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" className="gap-2 shrink-0">
              <IconFilter className="h-4 w-4" />
              <span className="hidden sm:inline">Filter</span>
            </Button>
            <Button variant="outline" size="sm" className="gap-2 shrink-0">
              <IconArrowsSort className="h-4 w-4" />
              <span className="hidden sm:inline">Sort</span>
            </Button>
            <Button variant="outline" size="sm" className="gap-2 shrink-0">
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
    </>
  );
};

export default ProjectToolbar;
