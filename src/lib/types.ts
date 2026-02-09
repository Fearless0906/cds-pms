export interface Task {
  id: string;
  title: string;
  description: string;
  category: string;
  categoryColor: string;
  priority?: "High" | "Medium" | "Low";
  priorityColor?: string;
  progress?: number;
  assignees: Array<{ name: string; avatar: string }>;
  comments?: number;
  dueDate?: string;
  isCompleted?: boolean;
}

export interface Column {
  id: string;
  title: string;
  count: number;
  color: string;
  tasks: Task[];
}

export interface CalendarEvent {
  id: string;
  title: string;
  time: string;
  date: number;
  color: string;
}
