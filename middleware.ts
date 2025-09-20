import { withAuth } from 'next-auth/middleware';
import { routes } from './routes';

const authMiddleware = withAuth({
  // Matches the pages config in `[...nextauth]`
  pages: {
    signIn: routes.pages.signIn,
    error: routes.pages.signIn,
  },
});

export default authMiddleware;
export const config = { matcher: ['/dashboard(.*)'] };
