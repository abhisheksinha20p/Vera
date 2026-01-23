
import React, { createContext, useState, useCallback } from 'react';
import { X, CheckCircle2, AlertCircle, Info } from 'lucide-react';
import { cn } from '../utils/cn';

export type ToastType = 'success' | 'error' | 'info';

interface Toast {
  id: string;
  message: string;
  type: ToastType;
}

interface ToastContextType {
  addToast: (message: string, type: ToastType) => void;
  removeToast: (id: string) => void;
}

// eslint-disable-next-line react-refresh/only-export-components
export const ToastContext = createContext<ToastContextType | undefined>(undefined);

export const ToastProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const removeToast = useCallback((id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  const addToast = useCallback((message: string, type: ToastType) => {
    const id = Math.random().toString(36).substring(2, 9);
    setToasts((prev) => [...prev, { id, message, type }]);
    
    // Auto-dismiss
    setTimeout(() => {
        removeToast(id);
    }, 5000);
  }, [removeToast]);

  return (
    <ToastContext.Provider value={{ addToast, removeToast }}>
      {children}
      <div className="fixed bottom-4 right-4 z-[60] flex flex-col gap-2">
        {toasts.map((toast) => (
          <div
            key={toast.id}
            className={cn(
              "flex items-center w-full max-w-sm rounded-lg border px-4 py-3 shadow-lg transition-all animate-in slide-in-from-right-full duration-300",
              toast.type === 'success' && "bg-white border-green-200 text-gray-800",
              toast.type === 'error' && "bg-white border-red-200 text-gray-800",
              toast.type === 'info' && "bg-white border-blue-200 text-gray-800"
            )}
            role="alert"
          >
            <div className="mr-3">
                {toast.type === 'success' && <CheckCircle2 className="h-5 w-5 text-green-500" />}
                {toast.type === 'error' && <AlertCircle className="h-5 w-5 text-red-500" />}
                {toast.type === 'info' && <Info className="h-5 w-5 text-blue-500" />}
            </div>
            <p className="text-sm font-medium">{toast.message}</p>
            <button
              onClick={() => removeToast(toast.id)}
              className="ml-auto flex-shrink-0 text-gray-400 hover:text-gray-900"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
};

// useToast moved to hooks/useToast.ts
