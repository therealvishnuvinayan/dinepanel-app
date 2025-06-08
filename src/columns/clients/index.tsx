import { Column } from '@/components/ui/smartTable/SmartDataTable';
import { Edit, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

export interface Client {
  id: number;
  name: string;
  description: string;
  category: string;
  phone: string;
  email: string;
  status: 'Active' | 'Inactive';
  createdAt: string;
}

export const getClientColumns = (
  onEdit: (client: Client) => void,
  onDelete: (client: Client) => void
): Column<Client>[] => [
  {
    key: 'name',
    label: 'Client',
    render: (row) => (
      <div className='flex flex-col'>
        <span className='font-medium'>{row.name}</span>
        <span className='text-muted-foreground text-xs'>{row.description}</span>
      </div>
    )
  },
  {
    key: 'category',
    label: 'Category',
    render: (row) => (
      <span className='rounded-full bg-blue-100 px-2 py-1 text-sm text-blue-800'>
        {row.category}
      </span>
    )
  },
  { key: 'phone', label: 'Phone' },
  { key: 'email', label: 'Email' },
  // {
  //   key: 'status',
  //   label: 'Status',
  //   render: (row) => (
  //     <span
  //       className={`rounded-full px-2 py-1 text-sm ${
  //         row.status === 'Active'
  //           ? 'bg-green-100 text-green-600'
  //           : 'bg-red-100 text-red-600'
  //       }`}
  //     >
  //       {row.status}
  //     </span>
  //   )
  // },
  {
    key: 'actions',
    label: 'Actions',
    render: (row) => (
      <div className='flex gap-2'>
        <Button
          size='icon'
          onClick={() => onEdit(row)}
          className='cursor-pointer bg-gradient-to-tr from-indigo-500 to-purple-500 text-xs text-white'
        >
          <Edit className='h-4 w-4' />
        </Button>
        <Button
          size='icon'
          onClick={() => onDelete(row)}
          className='cursor-pointer bg-gradient-to-tr from-indigo-500 to-purple-500 text-xs text-white'
        >
          <Trash2 className='h-4 w-4' />
        </Button>
      </div>
    )
  }
];
