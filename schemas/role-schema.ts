import { VALIDATION_MESSAGES } from '@/config/messages';
import { z } from 'zod';

// form zod validation schema
export const createEditRoleSchema = z.object({
  name: z.string().min(1, { message: VALIDATION_MESSAGES.required }),
  code: z.string().min(1, { message: VALIDATION_MESSAGES.required }),
});

// generate form types from zod validation schema
export type CreateEditRoleSchema = z.infer<typeof createEditRoleSchema>;
