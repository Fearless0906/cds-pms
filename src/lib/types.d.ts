export interface Login {
  email: string;
  password: string;
}

export interface User {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  name: string;
  avatar?: string;
}

export interface Signup {
  name: string;
  email: string;
  password: string;
  re_password: string;
}

export interface ResetPassword {
  email: string;
}

export interface ResetPasswordConfirm {
  uid: string;
  token: string;
  new_password: string;
  re_new_password: string;
}

export interface authState {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  loading: boolean;
  error: string | null;
  success: boolean;
}

export interface Project {
  id: string;
  name: string;
  description: string;
  progress: number;
  status: "On Track" | "At Risk" | "Delayed" | "Completed";
  dueDate: string;
  team: Array<{ name: string; avatar: string }>;
  color: string;
  tasks: { completed: number; total: number };
  isFavorite?: boolean;
}

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
