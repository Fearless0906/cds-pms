import type { LucideIcon } from "lucide-react";
import { Button } from "./ui/button";

export interface NavItem {
  value: string;
  label: string;
  icon: LucideIcon;
}

interface ProjectNavigationProps {
  navItems: NavItem[];
  activeView: string;
  setActiveView: (value: string) => void;
}

const ProjectNavigation = ({
  navItems,
  activeView,
  setActiveView,
}: ProjectNavigationProps) => {
  return (
    <>
      <div className="flex items-center justify-between">
        <nav className="flex gap-1 overflow-x-auto">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <Button
                key={item.value}
                variant={activeView === item.value ? "secondary" : "ghost"}
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
    </>
  );
};

export default ProjectNavigation;
