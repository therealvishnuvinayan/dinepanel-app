import {
  pgTable,
  serial,
  varchar,
  text,
  timestamp,
  integer
} from 'drizzle-orm/pg-core';
import { clients } from './clients';

export const users = pgTable('users', {
  id: serial('id').primaryKey(),
  clientId: integer('client_id').references(() => clients.id),
  name: text('name').notNull(),
  email: text('email').notNull().unique(),
  role: text('role').$type<'owner' | 'manager' | 'chef'>().default('manager'),
  passwordHash: text('password_hash'), // if not using Clerk
  createdAt: timestamp('created_at').defaultNow()
});
