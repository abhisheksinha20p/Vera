import { useState, useEffect, useCallback } from 'react';
import { taskService } from '../services/taskService';
import type { Task, CreateTaskData, UpdateTaskData } from '../services/taskService';

export const useTasks = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

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
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchTasks();
  }, [fetchTasks]);

  const createTask = async (data: CreateTaskData) => {
    try {
      const newTask = await taskService.createTask(data);
      setTasks((prev) => [newTask, ...prev]);
      return newTask;
    } catch (err) {
      console.error('Failed to create task', err);
      throw err;
    }
  };

  const updateTask = async (id: string, data: UpdateTaskData) => {
    try {
      const updatedTask = await taskService.updateTask(id, data);
      setTasks((prev) => prev.map((t) => (t._id === id ? updatedTask : t)));
      return updatedTask;
    } catch (err) {
      console.error('Failed to update task', err);
      throw err;
    }
  };

  const deleteTask = async (id: string) => {
    try {
      await taskService.deleteTask(id);
      setTasks((prev) => prev.filter((t) => t._id !== id));
    } catch (err) {
      console.error('Failed to delete task', err);
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
    } catch (err) {
      console.error('Failed to toggle status', err);
      // Revert on failure
      setTasks((prev) =>
        prev.map((t) => (t._id === id ? { ...t, isCompleted: !isCompleted } : t))
      );
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
