import type * as schema from '../db/schema'

// Photo type inference from schema
export type Photo = typeof schema.photo.$inferSelect
