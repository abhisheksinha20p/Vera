import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '../common/Button';
import { Input } from '../common/Input';
import { Textarea } from '../common/Textarea';
import { useEffect } from 'react';

const taskSchema = z.object({
  title: z.string().min(1, 'Title is required').max(100, 'Title is too long'),
  description: z.string().optional(),
  startTime: z.string().optional(),
  endTime: z.string().optional(),
});

export type TaskFormData = z.infer<typeof taskSchema>;

interface TaskFormProps {
  defaultValues?: TaskFormData;
  onSubmit: (data: TaskFormData) => Promise<void>;
  isLoading?: boolean;
  onCancel: () => void;
}

export const TaskForm: React.FC<TaskFormProps> = ({ defaultValues, onSubmit, isLoading, onCancel }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<TaskFormData>({
    resolver: zodResolver(taskSchema),
    defaultValues: {
      title: '',
      description: '',
      ...defaultValues,
    },
  });

  useEffect(() => {
    if (defaultValues) {
      reset(defaultValues);
    }
  }, [defaultValues, reset]);

  const handleFormSubmit = async (data: TaskFormData) => {
    await onSubmit(data);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-4">
      <Input
        label="Title"
        placeholder="What needs to be done?"
        error={errors.title?.message}
        {...register('title')}
        autoFocus
      />
      
      <Textarea
        label="Description (Optional)"
        placeholder="Add details..."
        error={errors.description?.message}
        {...register('description')}
      />

      <div className="grid grid-cols-2 gap-4">
        <Input
          label="Start Time (Optional)"
          type="datetime-local"
          error={errors.startTime?.message}
          {...register('startTime')}
        />
        <Input
          label="End Time (Optional)"
          type="datetime-local"
          error={errors.endTime?.message}
          {...register('endTime')}
        />
      </div>

      <div className="flex justify-end space-x-2 pt-2">
        <Button type="button" variant="ghost" onClick={onCancel}>
          Cancel
        </Button>
        <Button type="submit" isLoading={isLoading || isSubmitting}>
          {defaultValues ? 'Save Changes' : 'Create Task'}
        </Button>
      </div>
    </form>
  );
};
