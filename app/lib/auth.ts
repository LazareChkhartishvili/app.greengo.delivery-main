import { routes } from '@/routes';
import type { NextAuthOptions, RequestInternal, User } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

export const authOptions: NextAuthOptions = {
  session: {
    maxAge: 2 * 60 * 60, // Max age for the session, in seconds
  },

  providers: [
    CredentialsProvider({
      id: 'credentials',
      name: 'Credentials',
      type: 'credentials',

      credentials: {
        email: { label: 'Email', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },

      async authorize(
        credentials: Record<'email' | 'password', string> | undefined,
        req: Pick<RequestInternal, 'body' | 'method' | 'headers' | 'query'>
      ): Promise<User | null> {
        const { email, password } = credentials as {
          email: string;
          password: string;
        };

        try {
          const res = await fetch(
            'https://greengo-api-production.up.railway.app/api/login',
            {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
              },
              body: JSON.stringify({
                email,
                password,
              }),
            }
          );
          const user: User = (await res.json()) as User;
          if (res.ok && user) {
            user.id = 'some-id'; // Add the 'id' property to the 'user' object
            return user;
          } else {
            return null;
          }
        } catch (error) {
          console.error(error);
          return null;
        }
      },
    }),
  ],
  pages: {
    signIn: routes.pages.signIn,
    signOut: routes.pages.signIn,
    error: routes.pages.signIn,
  },
  secret: process.env.NEXTAUTH_SECRET,

  callbacks: {
    jwt: async ({ token, user }) => {
      user && (token.user = user);

      return token;
    },

    session: async ({ session, token }) => {
      session.user = {
        ...(token.user as any),
      };

      return session;
    },
  },
};
