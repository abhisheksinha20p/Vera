import React from 'react';
import { formatDistanceToNow } from 'date-fns';
import { Pencil, Trash2, CheckCircle2, Circle } from 'lucide-react';
import type { Task } from '../../services/taskService';
import { cn } from '../../lib/utils';
import { Button } from '../common/Button';

interface TaskItemProps {
  task: Task;
  onToggle: (id: string, isCompleted: boolean) => void;
  onDelete: (id: string) => void;
  onEdit: (task: Task) => void;
}

export const TaskItem: React.FC<TaskItemProps> = ({ task, onToggle, onDelete, onEdit }) => {
  return (
    <div className={cn(
      "group flex items-start space-x-4 rounded-lg bg-white p-4 shadow-sm border-l-4 transition-all duration-300 hover:shadow-md",
      task.isCompleted ? "border-green-500 opacity-75" : "border-electric-blue hover:-translate-y-0.5"
    )}>
      <button
        onClick={() => onToggle(task._id, !task.isCompleted)}
        className={cn(
          "mt-1 flex-shrink-0 text-gray-400 hover:text-blue-600 focus:outline-none",
          task.isCompleted && "text-green-500 hover:text-green-600"
        )}
      >
        {task.isCompleted ? (
          <CheckCircle2 className="h-5 w-5" />
        ) : (
          <Circle className="h-5 w-5" />
        )}
      </button>

      <div className="flex-1 min-w-0">
        <h3 className={cn(
          "text-base font-medium text-gray-900 truncate",
          task.isCompleted && "text-gray-500 line-through"
        )}>
          {task.title}
        </h3>
        {task.description && (
          <p className="mt-1 text-sm text-gray-500 line-clamp-2">{task.description}</p>
        )}
        <p className="mt-2 text-xs text-gray-400">
          Created {formatDistanceToNow(new Date(task.createdAt), { addSuffix: true })}
        </p>
      </div>

      <div className="flex space-x-1 opacity-0 group-hover:opacity-100 transition-opacity">
        <Button variant="ghost" size="sm" onClick={() => onEdit(task)} className="h-8 w-8 p-0 text-gray-500 hover:text-blue-600">
          <Pencil className="h-4 w-4" />
          <span className="sr-only">Edit</span>
        </Button>
        <Button variant="ghost" size="sm" onClick={() => onDelete(task._id)} className="h-8 w-8 p-0 text-gray-500 hover:text-red-600">
          <Trash2 className="h-4 w-4" />
          <span className="sr-only">Delete</span>
        </Button>
      </div>
    </div>
  );
};
