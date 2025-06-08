
import { pgTable, serial, integer, text } from "drizzle-orm/pg-core";
import { clients } from "./clients";
import { users } from "./users";

export const userClientPermissions = pgTable('user_client_permissions', {
    id: serial('id').primaryKey(),
    userId: integer('user_id').references(() => users.id),
    clientId: integer('client_id').references(() => clients.id),
    role: text('role').$type<'owner' | 'manager' | 'chef'>(),
  });
  