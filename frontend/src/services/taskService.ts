import api from './api';

export interface Task {
  _id: string;
  title: string;
  description?: string;
  isCompleted: boolean;
  userId: string;
  startTime?: string; // ISO date string from backend
  endTime?: string;
  createdAt: string;
  updatedAt: string;
}

export interface CreateTaskData {
  title: string;
  description?: string;
  startTime?: string;
  endTime?: string;
}

export interface UpdateTaskData {
  title?: string;
  description?: string;
  isCompleted?: boolean;
  startTime?: string;
  endTime?: string;
}

export const taskService = {
  getTasks: async (): Promise<Task[]> => {
    const response = await api.get<{ tasks: Task[] }>('/tasks');
    return response.data.tasks;
  },

  createTask: async (data: CreateTaskData): Promise<Task> => {
    const response = await api.post<{ task: Task }>('/tasks', data);
    return response.data.task;
  },

  updateTask: async (id: string, data: UpdateTaskData): Promise<Task> => {
    const response = await api.put<{ task: Task }>(`/tasks/${id}`, data);
    return response.data.task;
  },

  deleteTask: async (id: string): Promise<void> => {
    await api.delete(`/tasks/${id}`);
  },

  toggleTaskStatus: async (id: string, isCompleted: boolean): Promise<Task> => {
    // We can use PATCH here if we stuck to the plan, but PUT is also fine given our backend generic update
    // The backend plan said PATCH /status handled via PUT logic
    // Let's use the explicit PUT for now as per my previous backend implementation
    const response = await api.put<{ task: Task }>(`/tasks/${id}`, { isCompleted });
    return response.data.task;
  }
};
