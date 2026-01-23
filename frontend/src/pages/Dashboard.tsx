
import { useMemo } from 'react';
import { DashboardLayout } from '../components/layout/DashboardLayout';
import { QuickAdd } from '../components/dashboard/QuickAdd';
import { TaskList } from '../components/tasks/TaskList';
import { useTasks } from '../hooks/useTasks';
import { format } from 'date-fns';
import { Calendar as CalendarIcon, CheckCircle2 } from 'lucide-react';

const Dashboard = () => {
  const { tasks, isLoading, createTask, toggleTaskStatus, deleteTask } = useTasks();

  const todayDate = format(new Date(), 'EEEE, MMM do');

  const upcomingTasks = useMemo(() => {
    // Filter pending tasks and specific upcoming logic (e.g. today/tomorrow or just next 5)
    return tasks
      .filter(t => !t.isCompleted)
      .sort((a, b) => {
          // Sort by start time if available, otherwise created at? 
          // For now, let's prioritize scheduled tasks
          if (a.startTime && b.startTime) return new Date(a.startTime).getTime() - new Date(b.startTime).getTime();
          if (a.startTime) return -1;
          if (b.startTime) return 1;
          return 0; 
      })
      .slice(0, 5);
  }, [tasks]);

  const handleQuickAdd = async (title: string) => {
    await createTask({ title });
  };

  return (
    <DashboardLayout title="Dashboard">
      <div className="max-w-4xl mx-auto space-y-8">
        
        {/* Header Section */}
        <header>
            <h2 className="text-gray-500 text-sm font-medium uppercase tracking-wide">Today</h2>
            <h1 className="text-3xl font-bold text-midnight-navy mt-1">{todayDate}</h1>
        </header>

        {/* Quick Add */}
        <section>
            <QuickAdd onAdd={handleQuickAdd} />
        </section>

        {/* Upcoming Tasks */}
        <section className="space-y-4">
            <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold text-gray-900 flex items-center">
                    <CalendarIcon className="h-5 w-5 mr-2 text-electric-blue" />
                    Upcoming Tasks
                </h3>
            </div>
            
            {upcomingTasks.length > 0 ? (
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                    <TaskList 
                        tasks={upcomingTasks} 
                        isLoading={isLoading} 
                        onToggle={toggleTaskStatus}
                        onDelete={deleteTask} 
                        onEdit={() => {}} // simplified for dashboard
                    />
                </div>
            ) : (
                <div className="text-center py-12 bg-white rounded-xl border border-gray-100 border-dashed">
                    <div className="mx-auto h-12 w-12 text-gray-300 mb-3">
                        <CheckCircle2 className="h-full w-full" />
                    </div>
                    <h3 className="text-lg font-medium text-gray-900">All caught up!</h3>
                    <p className="text-gray-500">No upcoming tasks for today.</p>
                </div>
            )}
        </section>

      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
