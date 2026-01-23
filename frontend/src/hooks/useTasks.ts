import { useState, useEffect, useCallback } from 'react';
import { taskService } from '../services/taskService';
import type { Task, CreateTaskData, UpdateTaskData } from '../services/taskService';
import { useToast } from '../context/ToastContext';

export const useTasks = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { addToast } = useToast();

  const fetchTasks = useCallback(async () => {
    try {
      setIsLoading(true);
      setError(null);
      const data = await taskService.getTasks();
      if (Array.isArray(data)) {
        setTasks(data);
      } else {
        console.error('Fetched tasks data is not an array:', data);
        setTasks([]);
      }
    } catch (err) {
      console.error('Failed to fetch tasks', err);
      setError('Failed to load tasks');
      addToast('Failed to load tasks', 'error');
    } finally {
      setIsLoading(false);
    }
  }, [addToast]);

  useEffect(() => {
    fetchTasks();
  }, [fetchTasks]);

  const createTask = async (data: CreateTaskData) => {
    try {
      const newTask = await taskService.createTask(data);
      setTasks((prev) => [newTask, ...prev]);
      addToast('Task created successfully', 'success');
      return newTask;
    } catch (err) {
      console.error('Failed to create task', err);
      addToast('Failed to create task', 'error');
      throw err;
    }
  };

  const updateTask = async (id: string, data: UpdateTaskData) => {
    try {
      const updatedTask = await taskService.updateTask(id, data);
      setTasks((prev) => prev.map((t) => (t._id === id ? updatedTask : t)));
      // Optional: Don't toast on every little update like toggle, or maybe specific ones?
      // addToast('Task updated', 'success'); 
      return updatedTask;
    } catch (err) {
      console.error('Failed to update task', err);
      addToast('Failed to update task', 'error');
      throw err;
    }
  };

  const deleteTask = async (id: string) => {
    try {
      await taskService.deleteTask(id);
      setTasks((prev) => prev.filter((t) => t._id !== id));
      addToast('Task deleted', 'info'); // Info or success
    } catch (err) {
      console.error('Failed to delete task', err);
      addToast('Failed to delete task', 'error');
      throw err;
    }
  };

  const toggleTaskStatus = async (id: string, isCompleted: boolean) => {
    // Optimistic update
    setTasks((prev) =>
      prev.map((t) => (t._id === id ? { ...t, isCompleted } : t))
    );
    try {
      await taskService.toggleTaskStatus(id, isCompleted);
      if (isCompleted) {
         addToast('Task completed!', 'success');
      }
    } catch (err) {
      console.error('Failed to toggle status', err);
      // Revert on failure
      setTasks((prev) =>
        prev.map((t) => (t._id === id ? { ...t, isCompleted: !isCompleted } : t))
      );
      addToast('Failed to update status', 'error');
      throw err;
    }
  };

  return {
    tasks,
    isLoading,
    error,
    createTask,
    updateTask,
    deleteTask,
    toggleTaskStatus,
    refreshTasks: fetchTasks,
  };
};
