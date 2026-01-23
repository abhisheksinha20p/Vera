
import { useState, useMemo, useCallback } from 'react';
import { useTasks } from '../hooks/useTasks';
import { Calendar as BigCalendar, dateFnsLocalizer, type View, type Event } from 'react-big-calendar';
import withDragAndDrop, { type withDragAndDropProps } from 'react-big-calendar/lib/addons/dragAndDrop';
import { format } from 'date-fns';
import { parse } from 'date-fns';
import { startOfWeek } from 'date-fns';
import { getDay } from 'date-fns';
import { enUS } from 'date-fns/locale';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import 'react-big-calendar/lib/addons/dragAndDrop/styles.css';
import { DashboardLayout } from '../components/layout/DashboardLayout';
import { Card } from '../components/common/Card';
import { TaskEvent } from '../components/calendar/TaskEvent';
import { Modal } from '../components/common/Modal';
import { TaskForm, type TaskFormData } from '../components/tasks/TaskForm';
import type { Task } from '../services/taskService';

const locales = {
  'en-US': enUS,
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

const DnDCalendar = withDragAndDrop(BigCalendar);

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface CalendarPageProps {}

const CalendarPage: React.FC<CalendarPageProps> = () => {
    
  const { tasks, updateTask } = useTasks();
  const [date, setDate] = useState(new Date());
  const [view, setView] = useState<View>('month');
  const [editingTask, setEditingTask] = useState<Task | null>(null);

  const onNavigate = (newDate: Date) => setDate(newDate);

  const events = useMemo(() => {
    return tasks
      .filter((task) => task.startTime) 
      .map((task) => {
        const start = new Date(task.startTime!);
        const end = task.endTime ? new Date(task.endTime) : new Date(start.getTime() + 60 * 60 * 1000); 
        return {
          title: task.title,
          start,
          end,
          allDay: false, 
          resource: task,
        };
      });
  }, [tasks]);

  const components = useMemo(() => ({
    event: TaskEvent,
  }), []);

  /* eslint-disable @typescript-eslint/no-explicit-any */
  const onEventDrop: withDragAndDropProps['onEventDrop'] = useCallback(async (args: any) => {
    const { event, start, end } = args;
    const task = event.resource as Task;
    try {
      await updateTask(task._id, {
        startTime: start as any,
        endTime: end as any,
      } as any);
    } catch (error) {
      console.error('Failed to move task', error);
    }
  }, [updateTask]);

  const onEventResize: withDragAndDropProps['onEventResize'] = useCallback(async (args: any) => {
    const { event, start, end } = args;
    const task = event.resource as Task;
    try {
      await updateTask(task._id, {
        startTime: start as any,
        endTime: end as any,
      } as any); 
    } catch (error) {
      console.error('Failed to resize task', error);
    }
  }, [updateTask]);
  /* eslint-enable @typescript-eslint/no-explicit-any */

  const onSelectEvent = (event: Event) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    setEditingTask((event as any).resource);
  };

  const handleUpdateTask = async (data: TaskFormData) => {
    if (!editingTask) return;
    try {
      const formattedStart = data.startTime ? new Date(data.startTime).toISOString() : undefined;
      const formattedEnd = data.endTime ? new Date(data.endTime).toISOString() : undefined;

      await updateTask(editingTask._id, {
          title: data.title,
          description: data.description,
          startTime: formattedStart,
          endTime: formattedEnd,
      });
      setEditingTask(null);
    } catch (error) {
      console.error('Failed to update task', error);
    }
  };

  return (
    <DashboardLayout title="Calendar">
      <Card className="h-[calc(100vh-140px)] p-4 shadow-sm bg-white overflow-hidden">
        <DnDCalendar
          localizer={localizer}
          events={events}
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          startAccessor={"start" as any}
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          endAccessor={"end" as any}
          style={{ height: '100%' }}
          views={['month', 'week', 'day']}
          view={view}
          onView={setView}
          date={date}
          onNavigate={onNavigate}
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          components={components as any} 
          onEventDrop={onEventDrop}
          onEventResize={onEventResize}
          onSelectEvent={onSelectEvent}
          resizable
          selectable
          popup
        />
      </Card>

      <Modal
        isOpen={!!editingTask}
        onClose={() => setEditingTask(null)}
        title="Edit Task"
      >
        <TaskForm
          onSubmit={handleUpdateTask}
          defaultValues={editingTask ? {
            title: editingTask.title,
            description: editingTask.description || '',
            startTime: editingTask.startTime ? new Date(editingTask.startTime).toISOString().slice(0, 16) : undefined,
            endTime: editingTask.endTime ? new Date(editingTask.endTime).toISOString().slice(0, 16) : undefined,
          } : undefined}
          onCancel={() => setEditingTask(null)}
        />
      </Modal>
    </DashboardLayout>
  );
};

export default CalendarPage;
