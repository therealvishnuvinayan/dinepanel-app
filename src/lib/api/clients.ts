// lib/api/clients.ts
import axios from 'axios';
import { API_ROUTES } from 'constants/routes';

export const createClient = async (payload: any) => {
  const res = await axios.post(API_ROUTES.CLIENTS, payload);
  return res.data;
};

export const deleteClient = async (id: number) => {
  const res = await axios.delete(`${API_ROUTES.CLIENTS}/${id}`);
  return res.data;
};

export const getClients = async () => {
  const res = await axios.get(API_ROUTES.CLIENTS);
  return res.data;
};
