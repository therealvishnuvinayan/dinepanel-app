'use client';

import React, { useEffect, useState } from 'react';
import { PlusIcon, Edit, Trash2, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SmartDataTable } from '@/components/ui/smartTable/SmartDataTable';
import { AddEditClientModal } from '@/components/modal/clients/AddEditClientModal';
import DeleteConfirmationModal from '@/components/modal/clients/DeleteConfirmationModal';
import { createClient, deleteClient, getClients } from '@/lib/api/clients';
import { getClientColumns } from '@/columns/clients';
import { addToast } from '@heroui/react';

interface Client {
  id: number;
  name: string;
  description: string;
  category: string;
  phone: string;
  email: string;
  status: 'Active' | 'Inactive';
  createdAt: string;
}

export default function ClientsPage() {
  const [selectedClient, setSelectedClient] = useState<Client | null>(null);
  const [deleteOpen, setDeleteOpen] = useState(false);
  const [openClientModal, setOpenClientModal] = useState(false);
  const [editingClient, setEditingClient] = useState<any | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [clients, setClients] = useState<Client[]>([]);
  const [fetching, setFetching] = useState(false);

  const [submittingModal, setSubmittingModal] = useState(false);

  useEffect(() => {
    const fetchClients = async () => {
      try {
        setFetching(true);
        const res = await getClients();
        setClients(res.clients);
      } catch (err) {
        console.error('Failed to fetch clients:', err);
      } finally {
        setFetching(false);
      }
    };
    fetchClients();
  }, []);

  const handleCreateClient = async (data: any) => {
    setSubmittingModal(true);
    try {
      await createClient(data);
      const updated = await getClients();
      setClients(updated.clients);
      setOpenClientModal(false);
      addToast({
        title: 'Client added successfully ✅',
        description: 'The client has been added.',
        color: 'success',
      });
      
    } catch (error) {
      console.error(error);
    } finally {
      setSubmittingModal(false);
    }
  };

  const handleEditClick = (client: any) => {
    setEditingClient(client);
    setOpenClientModal(true);
  };

  const handleDeleteClient = async () => {
    if (!selectedClient) return;
    try {
      await deleteClient(selectedClient.id);
      setDeleteOpen(false);
      addToast({
        title: 'Failed to delete client',
        description: 'Something went wrong ❌',
        color: 'danger',
      });
      
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className='space-y-4 p-6'>
      <h2 className='text-xl font-semibold'>Clients</h2>
      <SmartDataTable
        data={clients}
        columns={getClientColumns(handleEditClick, (row) => {
          setSelectedClient(row);
          setDeleteOpen(true);
        })}
        onExport={() => alert('Exported!')}
        renderToolbarActions={() => (
          <AddEditClientModal
            trigger={
              <Button
                className='cursor-pointer rounded-md bg-gradient-to-tr from-indigo-500 to-purple-500 text-white'
                isLoading={submitting} // ← add this
              >
                <Plus className='mr-2 h-4 w-4' /> Add Client
              </Button>
            }
            onSubmit={async (data) => {
              setSubmitting(true);
              await handleCreateClient(data);
              setSubmitting(false);
              setOpenClientModal(false);
            }}
            isLoading={submittingModal}
            open={openClientModal}
            onOpenChange={setOpenClientModal}
          />
        )}
      />
      <AddEditClientModal
        open={openClientModal}
        onOpenChange={setOpenClientModal}
        initialData={editingClient}
        onSubmit={async (data) => {
          setSubmitting(true);
          await handleCreateClient(data);
          setSubmitting(false);
          setOpenClientModal(false);
        }}
      />

      <DeleteConfirmationModal
        open={deleteOpen}
        onClose={() => setDeleteOpen(false)}
        onConfirm={handleDeleteClient}
        message={
          <>
            Are you sure you want to delete{' '}
            <strong>{selectedClient?.name}</strong> ?
          </>
        }
      />
    </div>
  );
}
