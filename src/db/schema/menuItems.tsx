import {
    pgTable,
    serial,
    varchar,
    text,
    integer,
    timestamp,
    real,
    boolean
  } from 'drizzle-orm/pg-core';
import { menus } from './menus';
  
  export const menuItems = pgTable('menu_items', {
    id: serial('id').primaryKey(),
    menuId: integer('menu_id').references(() => menus.id),
    name: text('name').notNull(),
    description: text('description'),
    imageUrl: text('image_url'),
    price: real('price').notNull(),
    category: text('category'), // e.g. "Soups", "Desserts", etc.
    tags: text('tags').array(), // optional: e.g. ["spicy", "veg", "kids"]
    isAvailable: boolean('is_available').default(true),
    createdAt: timestamp('created_at').defaultNow(),
  });
  