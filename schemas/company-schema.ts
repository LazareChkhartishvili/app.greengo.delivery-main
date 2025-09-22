import { VALIDATION_MESSAGES } from '@/config/messages';
import { z } from 'zod';

// form zod validation schema
export const createEditCompanySchema = z.object({
  name_ka: z.string().min(1, { message: VALIDATION_MESSAGES.required }),
  name_en: z.string().optional(),
  description_ka: z.string().optional(),
  description_en: z.string().optional(),
  status: z.boolean().optional(),
  picture: z.any().optional(),

  city_id: z.string().min(1, { message: VALIDATION_MESSAGES.required }),
  category_id: z.string().min(1, { message: VALIDATION_MESSAGES.required }),

  address_ka: z.string().optional(),
  address_en: z.string().optional(),
  address_latitude: z.string().optional(),
  address_longitude: z.string().optional(),
  phone: z.string().optional(),
  email: z.string().optional(),
  soc_facebook: z.string().optional(),
  soc_instagram: z.string().optional(),
  soc_youtobe: z.string().optional(),
});

// generate form types from zod validation schema
export type CreateEditCompanySchema = z.infer<typeof createEditCompanySchema>;
