
import { useState } from 'react';
import { DashboardLayout } from '../components/layout/DashboardLayout';
import { TaskList } from '../components/tasks/TaskList';
import { TaskForm } from '../components/tasks/TaskForm';
import type { TaskFormData } from '../components/tasks/TaskForm';
import { Modal } from '../components/common/Modal';
import { Button } from '../components/common/Button';
import type { Task } from '../services/taskService';
import { Plus } from 'lucide-react';
import { useTasks } from '../hooks/useTasks';

const TasksPage = () => {
  const { tasks, isLoading, createTask, updateTask, deleteTask, toggleTaskStatus } = useTasks();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingTask, setEditingTask] = useState<Task | null>(null);
  const [filter, setFilter] = useState<'all' | 'pending' | 'completed'>('all');

  const handleCreateTask = async (data: TaskFormData) => {
    try {
      await createTask(data);
      setIsModalOpen(false);
    } catch {
       // Error handled
    }
  };

  const handleUpdateTask = async (data: TaskFormData) => {
    if (!editingTask) return;
    try {
      await updateTask(editingTask._id, data);
      setIsModalOpen(false);
      setEditingTask(null);
    } catch {
       // Error handled
    }
  };

  const [deletingTaskId, setDeletingTaskId] = useState<string | null>(null);

  const handleDeleteClick = (id: string) => {
    setDeletingTaskId(id);
  };

  const confirmDeleteTask = async () => {
    if (!deletingTaskId) return;
    await deleteTask(deletingTaskId);
    setDeletingTaskId(null);
  };

  const openCreateModal = () => {
    setEditingTask(null);
    setIsModalOpen(true);
  };

  const openEditModal = (task: Task) => {
    setEditingTask(task);
    setIsModalOpen(true);
  };

  const filteredTasks = Array.isArray(tasks) ? tasks.filter((task) => {
    if (filter === 'pending') return !task.isCompleted;
    if (filter === 'completed') return task.isCompleted;
    return true;
  }) : [];

  return (
    <DashboardLayout title="Tasks">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-gray-900">All Tasks</h1>
          <Button onClick={openCreateModal}>
            <Plus className="mr-2 h-4 w-4" />
            New Task
          </Button>
        </div>

        <div className="flex space-x-2 border-b border-gray-200 pb-1">
          {(['all', 'pending', 'completed'] as const).map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-4 py-2 text-sm font-medium rounded-t-lg transition-colors ${
                filter === f
                  ? 'bg-white text-blue-600 border-b-2 border-blue-600'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              {f.charAt(0).toUpperCase() + f.slice(1)}
            </button>
          ))}
        </div>

        <TaskList
          tasks={filteredTasks}
          isLoading={isLoading}
          onToggle={toggleTaskStatus}
          onDelete={handleDeleteClick}
          onEdit={openEditModal}
        />

        <Modal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          title={editingTask ? 'Edit Task' : 'Create New Task'}
        >
          <TaskForm
            onSubmit={editingTask ? handleUpdateTask : handleCreateTask}
            defaultValues={
              editingTask
                ? { title: editingTask.title, description: editingTask.description || '' }
                : undefined
            }
            onCancel={() => setIsModalOpen(false)}
          />
        </Modal>

        <Modal
          isOpen={!!deletingTaskId}
          onClose={() => setDeletingTaskId(null)}
          title="Delete Task"
        >
          <div className="space-y-4">
            <p className="text-gray-600">
              Are you sure you want to delete this task? This action cannot be undone.
            </p>
            <div className="flex justify-end space-x-2">
              <Button
                variant="ghost"
                onClick={() => setDeletingTaskId(null)}
              >
                Cancel
              </Button>
              <Button
                variant="primary" // Could style as destructive
                className="bg-red-600 hover:bg-red-700 focus:ring-red-500"
                onClick={confirmDeleteTask}
              >
                Delete
              </Button>
            </div>
          </div>
        </Modal>
      </div>
    </DashboardLayout>
  );
};

export default TasksPage;
