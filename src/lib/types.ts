export interface Assignee {
  id?: string; // from API
  name: string;
  avatar: string;
}

export interface Task {
  id: string;
  title: string;
  description: string;
  category: string;
  category_color: string;
  priority?: "High" | "Medium" | "Low";
  prority_color?: string;
  progress?: number;
  assignees: Assignee[];
  column: string;
  comments?: number;
  due_date?: string;
  is_completed?: boolean;
  created_at?: string;
  updated_at?: string;
}

export interface Column {
  id: string;
  title: string;
  count: number;
  color: string;
  tasks: Task[];
  created_at?: string;
  updated_at?: string;
}

export interface CalendarEvent {
  id: string;
  title: string;
  time: string;
  date: number;
  color: string;
}
