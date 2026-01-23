
import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import { Button } from '../common/Button';

interface QuickAddProps {
  onAdd: (title: string) => Promise<void>;
}

export const QuickAdd: React.FC<QuickAddProps> = ({ onAdd }) => {
  const [title, setTitle] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;

    setIsSubmitting(true);
    try {
      await onAdd(title);
      setTitle('');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex items-center space-x-3">
      <div className="bg-electric-blue/10 p-2 rounded-full">
        <Plus className="h-5 w-5 text-electric-blue" />
      </div>
      <input
        type="text"
        placeholder="Write a task..."
        className="flex-1 bg-transparent border-none focus:ring-0 text-gray-900 placeholder-gray-400 text-lg"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        disabled={isSubmitting}
      />
      <Button 
        type="submit" 
        disabled={!title.trim() || isSubmitting}
        size="sm"
        className="rounded-full px-4"
      >
        Add
      </Button>
    </form>
  );
};
