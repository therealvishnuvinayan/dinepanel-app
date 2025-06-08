'use client';

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { AlertTriangle } from 'lucide-react';

interface DeleteConfirmationModalProps {
  open: boolean;
  onClose: () => void;
  onConfirm: () => void;
  message?: React.ReactNode;
}

export default function DeleteConfirmationModal({
  open,
  onClose,
  onConfirm,
  message = 'Are you sure you want to delete this item?'
}: DeleteConfirmationModalProps) {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className='max-w-sm'>
        <div className='flex items-start gap-3'>
          <div>
            <div className='flex gap-2'>
              <DialogHeader className='p-0'>
                <DialogTitle className='text-lg font-semibold'>
                  Confirm Deletion
                </DialogTitle>
              </DialogHeader>
              <AlertTriangle className='mt-1 h-5 w-5 text-red-500' />
            </div>
            <div className='text-muted-foreground py-2 text-sm'>{message}</div>
          </div>
        </div>
        <DialogFooter className='mt-4 flex justify-end gap-2'>
          <Button variant='ghost' onClick={onClose}>
            Cancel
          </Button>
          <Button
            variant='destructive'
            onClick={onConfirm}
            className='cursor-pointer'
          >
            Delete
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
