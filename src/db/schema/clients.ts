import { pgTable, serial, text, timestamp } from 'drizzle-orm/pg-core';

export const clients = pgTable('clients', {
  id: serial('id').primaryKey(),
  name: text('name').notNull(),
  address: text('address'),
  phone: text('phone'),
  email: text('email'),
  category: text('category').notNull(), // e.g., restaurant, spa, gym
  createdAt: timestamp('created_at').defaultNow()
});
