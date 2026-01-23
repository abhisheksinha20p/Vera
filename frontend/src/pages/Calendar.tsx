
import React, { useMemo, useState } from 'react';
import { useTasks } from '../hooks/useTasks';
import { Calendar as BigCalendar, dateFnsLocalizer, type View } from 'react-big-calendar';
import { format } from 'date-fns';
import { parse } from 'date-fns';
import { startOfWeek } from 'date-fns';
import { getDay } from 'date-fns';
import { enUS } from 'date-fns/locale';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { DashboardLayout } from '../components/layout/DashboardLayout';
import { Card } from '../components/common/Card';
import { TaskEvent } from '../components/calendar/TaskEvent';

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

interface CalendarPageProps {}

const CalendarPage: React.FC<CalendarPageProps> = () => {
    
  const { tasks } = useTasks();
  const [date, setDate] = useState(new Date());
  const [view, setView] = useState<View>('month');

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

  return (
    <DashboardLayout title="Calendar">
      <Card className="h-[calc(100vh-140px)] p-4 shadow-sm bg-white overflow-hidden">
        <BigCalendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          style={{ height: '100%' }}
          views={['month', 'week', 'day']}
          view={view}
          onView={setView}
          date={date}
          onNavigate={onNavigate}
          components={components}
          popup
        />
      </Card>
    </DashboardLayout>
  );
};

export default CalendarPage;
