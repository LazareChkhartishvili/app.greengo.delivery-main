import { routes } from '@/routes';
import { PagesOptions } from 'next-auth';

export const pagesOptions: Partial<PagesOptions> = {
  signIn: routes.pages.signIn,
  error: routes.pages.signIn,
};
