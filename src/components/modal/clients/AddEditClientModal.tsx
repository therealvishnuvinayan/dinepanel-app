'use client';

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect, useState } from 'react';
import * as z from 'zod';

const clientSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  address: z.string().optional(),
  phone: z.string().optional(),
  email: z.string().email('Invalid email').optional(),
  category: z.string().min(1, 'Category is required')
});

type ClientFormData = z.infer<typeof clientSchema>;

interface AddEditClientModalProps {
  trigger?: React.ReactNode;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  initialData?: any;
  onSubmit: (data: any) => Promise<void>;
  isLoading?: boolean;
}

export function AddEditClientModal({
  trigger,
  open,
  onOpenChange,
  initialData,
  onSubmit,
  isLoading
}: AddEditClientModalProps) {
  const isEdit = !!initialData;

  // const [open, setOpen] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<ClientFormData>({
    resolver: zodResolver(clientSchema),
    defaultValues: {
      name: initialData?.name || '',
      address: initialData?.address || '',
      phone: initialData?.phone || '',
      email: initialData?.email || '',
      category: initialData?.category || ''
    }
  });

  useEffect(() => {
    if (initialData) {
      reset(initialData);
    } else {
      reset();
    }
  }, [initialData, reset]);

  const handleFormSubmit = (data: ClientFormData) => {
    onSubmit(data);
    reset();
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{isEdit ? 'Edit Client' : 'Add Client'}</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit(handleFormSubmit)} className='space-y-4'>
          <Input placeholder='Name' {...register('name')} />
          {errors.name && (
            <p className='text-sm text-red-500'>{errors.name.message}</p>
          )}

          <Input placeholder='Category' {...register('category')} />
          {errors.category && (
            <p className='text-sm text-red-500'>{errors.category.message}</p>
          )}

          <Input placeholder='Phone' {...register('phone')} />
          <Input placeholder='Email' {...register('email')} />
          {errors.email && (
            <p className='text-sm text-red-500'>{errors.email.message}</p>
          )}

          <Input placeholder='Address' {...register('address')} />

          <div className='flex justify-end'>
            <Button
              type='submit'
              isLoading={isLoading}
              className='bg-gradient-to-tr from-indigo-500 to-purple-500 text-white'
            >
              {isEdit ? 'Update Client' : 'Add Client'}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
