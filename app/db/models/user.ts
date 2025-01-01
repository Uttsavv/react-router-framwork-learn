import { integer, pgTable, varchar } from "drizzle-orm/pg-core";
import { serial } from "node_modules/drizzle-orm/pg-core/index.cjs";

export const userTable = pgTable('users', {
    id: serial().primaryKey(),
    name: varchar({ length: 255 }).notNull(),
    age: integer().notNull(),
    email: varchar({ length: 255 }).notNull().unique()
})