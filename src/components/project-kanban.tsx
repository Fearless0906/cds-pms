import type { Column, Task } from "@/lib/types";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import {
  IconCalendarEvent,
  IconCheck,
  IconDots,
  IconMessage,
  IconPlus,
} from "@tabler/icons-react";
import { Card, CardContent } from "./ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { ScrollArea, ScrollBar } from "./ui/scroll-area";
import { Progress } from "./ui/progress";

interface ProjectKanbanProps {
  columns: Column[];
  onAddTask?: (columnId: string) => void;
  onTaskClick?: (task: Task) => void;
}

const ProjectKanban = ({
  columns = [],
  onAddTask,
  onTaskClick,
}: ProjectKanbanProps) => {
  return (
    <ScrollArea className="rounded-md border whitespace-nowrap">
      <div className="flex-1 overflow-hidden bg-linear-to-br from-gray-50 to-gray-100">
        <div className="h-full overflow-x-auto overflow-y-hidden px-4 lg:px-6 py-4">
          <div className="inline-flex gap-4 h-full min-w-full">
            {(columns || []).map((column) => (
              <div
                key={column.id}
                className="w-80 shrink-0 flex flex-col h-full"
              >
                {/* Column Header */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <h3 className={`font-semibold ${column.color}`}>
                      {column.title}
                    </h3>
                    <Badge
                      variant="secondary"
                      className="rounded-full px-2 text-xs"
                    >
                      {column.count}
                    </Badge>
                  </div>
                  <div className="flex items-center gap-1">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8"
                      onClick={() => onAddTask?.(column.id)}
                    >
                      <IconPlus className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <IconDots className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                {/* Tasks - Vertical Scroll Container */}
                <div className="flex-1 space-y-3 overflow-y-auto pr-1">
                  {(column.tasks || []).map((task) => (
                    <Card
                      key={task.id}
                      className="group hover:shadow-lg transition-all duration-200 cursor-pointer border hover:border-gray-300"
                      onClick={() => onTaskClick?.(task)}
                    >
                      <CardContent>
                        {/* Task Header */}
                        <div className="flex items-start justify-between gap-2">
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 mb-2 flex-wrap">
                              <Badge
                                variant="secondary"
                                className={`${task.category_color} text-xs font-medium`}
                              >
                                {task.category}
                              </Badge>
                              {task.priority && (
                                <Badge
                                  variant="secondary"
                                  className={`${task.priority_color} text-xs font-medium`}
                                >
                                  {task.priority}
                                </Badge>
                              )}
                            </div>
                            <h4 className="font-semibold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors text-sm">
                              {task.title}
                            </h4>
                            {task.description && (
                              <p className="text-xs text-gray-600 line-clamp-2">
                                {task.description}
                              </p>
                            )}
                          </div>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-6 w-6 opacity-0 group-hover:opacity-100 transition-opacity shrink-0"
                          >
                            <IconDots className="h-4 w-4" />
                          </Button>
                        </div>

                        {/* Progress Bar */}
                        {task.progress !== undefined && (
                          <div className="mb-3">
                            <div className="flex items-center justify-between mb-1">
                              <span className="text-xs text-gray-500">
                                Progress
                              </span>
                              <span className="text-xs font-medium text-gray-700">
                                {task.progress}%
                              </span>
                            </div>
                            <div className="h-1.5 bg-gray-200 rounded-full overflow-hidden">
                              <Progress value={task.progress} />
                            </div>
                          </div>
                        )}

                        {/* Task Footer */}
                        <div className="flex items-center justify-between mt-3 pt-3 border-t gap-2">
                          <div className="flex -space-x-2 shrink-0">
                            {(task.assignees || []).map((assignee, idx) => (
                              <Avatar
                                key={idx}
                                className="h-7 w-7 border-2 border-white"
                              >
                                <AvatarImage src={assignee.avatar} />
                                <AvatarFallback className="text-xs bg-linear-to-br from-blue-500 to-purple-600 text-white">
                                  {assignee.name}
                                </AvatarFallback>
                              </Avatar>
                            ))}
                          </div>
                          <div className="flex items-center gap-3 text-gray-500">
                            {task.comments && (
                              <div className="flex items-center gap-1 text-xs">
                                <IconMessage className="h-4 w-4" />
                                <span>{task.comments}</span>
                              </div>
                            )}
                            {task.due_date && (
                              <div className="flex items-center gap-1 text-xs">
                                <IconCalendarEvent className="h-4 w-4" />
                                <span>{task.due_date}</span>
                              </div>
                            )}
                            {task.is_completed && (
                              <div className="flex items-center gap-1 text-emerald-600">
                                <IconCheck className="h-4 w-4" />
                              </div>
                            )}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}

                  {/* Add Task Button */}
                  <Button
                    variant="ghost"
                    className="w-full justify-start text-gray-500 hover:text-gray-900 border-2 border-dashed hover:border-solid text-sm"
                  >
                    <IconPlus className="h-4 w-4 mr-2" />
                    Add Task
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
};

export default ProjectKanban;
