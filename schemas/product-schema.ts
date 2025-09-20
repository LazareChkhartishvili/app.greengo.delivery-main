import { VALIDATION_MESSAGES } from '@/config/messages';
import { z } from 'zod';

// form zod validation schema
export const createEditProductSchema = z.object({
  name_ka: z.string().min(1, { message: VALIDATION_MESSAGES.required }),
  name_en: z.string().optional(),
  description_ka: z.string().optional(),
  description_en: z.string().optional(),
  status: z.any().optional(),
  picture: z.any().optional(),

  product_category_id: z
    .string()
    .min(1, { message: VALIDATION_MESSAGES.required }),
  price: z.string().optional(),
  old_price: z.string().optional(),
});

// generate form types from zod validation schema
export type CreateEditProductSchema = z.infer<typeof createEditProductSchema>;
