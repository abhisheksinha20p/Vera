
import React from 'react';
import type { EventProps } from 'react-big-calendar';
import { CheckCircle2, Circle } from 'lucide-react';
import type { Task } from '../../services/taskService';

interface TaskEventProps extends EventProps {
  event: {
    resource: Task;
    title: string;
  };
}

export const TaskEvent: React.FC<TaskEventProps> = ({ event }) => {
  const task = event.resource;
  const isCompleted = task.isCompleted;

  return (
    <div className={`
      h-full w-full rounded-lg shadow-sm border-l-4 overflow-hidden
      flex flex-col p-1.5 transition-all duration-200 hover:shadow-md
      ${isCompleted 
        ? 'bg-soft-surface border-green-500 opacity-75' 
        : 'bg-white border-electric-blue'}
    `}>
      <div className="flex items-start justify-between min-w-0">
        <span className={`
          text-xs font-semibold truncate
          ${isCompleted ? 'text-gray-500 line-through' : 'text-midnight-navy'}
        `}>
          {task.title}
        </span>
        {isCompleted ? (
          <CheckCircle2 className="h-3 w-3 text-green-500 flex-shrink-0 ml-1" />
        ) : (
          <Circle className="h-3 w-3 text-electric-blue flex-shrink-0 ml-1" />
        )}
      </div>
      
      {/* Time display for smaller slots could be hidden or simplified */}
      <div className="text-[10px] text-gray-500 mt-0.5 truncate">
        {event.title !== task.title ? event.title : '' /* RBC handles time text, but we might want custom */}
      </div>
    </div>
  );
};
