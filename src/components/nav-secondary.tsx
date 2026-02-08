import { Link, useLocation } from "react-router-dom";
import { type LucideIcon } from "lucide-react";
import {
  SidebarGroup,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

interface NavSecondaryProps {
  items: {
    title: string;
    url: string;
    icon?: LucideIcon | React.ComponentType<{ className?: string }>;
  }[];
  className?: string;
}

export function NavSecondary({ items, className }: NavSecondaryProps) {
  const location = useLocation();

  return (
    <SidebarGroup className={className}>
      <SidebarMenu>
        {items.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.url;

          return (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton asChild isActive={isActive}>
                <Link to={item.url}>
                  {Icon && <Icon className="h-4 w-4" />}
                  <span>{item.title}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          );
        })}
      </SidebarMenu>
    </SidebarGroup>
  );
}
