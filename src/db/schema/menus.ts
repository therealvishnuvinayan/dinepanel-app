import {
  pgTable,
  serial,
  varchar,
  text,
  integer,
  timestamp
} from 'drizzle-orm/pg-core';
import { clients } from './clients';

export const menus = pgTable('menus', {
  id: serial('id').primaryKey(),
  clientId: integer('client_id').references(() => clients.id),
  name: text('name').notNull(), // e.g. "Lunch Menu", "Drinks"
  description: text('description'),
  createdAt: timestamp('created_at').defaultNow()
});
