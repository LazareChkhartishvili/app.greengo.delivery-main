import { VALIDATION_MESSAGES } from '@/config/messages';
import { z } from 'zod';

// form zod validation schema
export const createEditProductCategorySchema = z.object({
  name_ka: z.string().min(1, { message: VALIDATION_MESSAGES.required }),
  name_en: z.string().optional(),
  status: z.any().optional(),
  svg: z.string().optional(),
});

// generate form types from zod validation schema
export type CreateEditProductCategorySchema = z.infer<
  typeof createEditProductCategorySchema
>;
