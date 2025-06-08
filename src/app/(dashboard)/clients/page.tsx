'use client';

import React from 'react';
import { PlusIcon, Edit, Trash2, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { SmartDataTable } from '@/components/ui/smartTable/SmartDataTable';

export default function ClientsPage() {
  const dummyClients = [
    {
      id: 1,
      name: 'The Spice Villa',
      description: 'Authentic Indian Cuisine',
      category: 'Restaurant',
      phone: '+971-12345678',
      email: 'contact@spicevilla.ae',
      status: 'Active',
      createdAt: '2024-05-02'
    },
    {
      id: 2,
      name: 'Ocean Blue Spa',
      description: 'Luxury wellness spa',
      category: 'Spa',
      phone: '+971-23456789',
      email: 'info@oceanblue.ae',
      status: 'Inactive',
      createdAt: '2024-04-20'
    },
    {
      id: 3,
      name: 'Iron Beast Gym',
      description: '24/7 Fitness Center',
      category: 'Gym',
      phone: '+971-98765432',
      email: 'support@ironbeast.ae',
      status: 'Active',
      createdAt: '2024-06-01'
    }
  ];

  const columns = [
    {
      key: 'name',
      label: 'Client',
      render: (row: any) => (
        <div className='flex flex-col'>
          <span className='font-medium'>{row.name}</span>
          <span className='text-muted-foreground text-xs'>
            {row.description}
          </span>
        </div>
      )
    },
    {
      key: 'category',
      label: 'Category',
      render: (row: any) => (
        <span className='rounded-full bg-blue-100 px-2 py-1 text-sm text-blue-800'>
          {row.category}
        </span>
      )
    },
    {
      key: 'phone',
      label: 'Phone'
    },
    {
      key: 'email',
      label: 'Email'
    },
    {
      key: 'status',
      label: 'Status',
      render: (row: any) => (
        <span
          className={`rounded-full px-2 py-1 text-sm ${
            row.status === 'Active'
              ? 'bg-green-100 text-green-600'
              : 'bg-red-100 text-red-600'
          }`}
        >
          {row.status}
        </span>
      )
    },
    {
      key: 'actions',
      label: 'Actions',
      render: () => (
        <div className='flex gap-2'>
          <Button
            size='icon'
            className='bg-gradient-to-tr from-indigo-500 to-purple-500 text-xs text-white'
          >
            <Edit className='h-4 w-4' />
          </Button>
          <Button
            size='icon'
            className='bg-gradient-to-tr from-indigo-500 to-purple-500 text-xs text-white'
          >
            <Trash2 className='h-4 w-4' />
          </Button>
        </div>
      )
    }
  ];

  return (
    <div className='space-y-4 p-6'>
      <h2 className='text-xl font-semibold'>Clients</h2>
      <SmartDataTable
        data={dummyClients}
        columns={columns}
        onExport={() => alert('Exported!')}
        renderToolbarActions={() => (
          <Button className='rounded-md bg-gradient-to-tr from-indigo-500 to-purple-500 text-white'>
            <Plus className='mr-2 h-4 w-4' /> Add Client
          </Button>
        )}
      />
    </div>
  );
}
