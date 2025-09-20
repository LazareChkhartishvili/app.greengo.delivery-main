import { ERROR_MESSAGES } from '@/config/constants';

import { loginSchema, LoginSchema } from '@/schemas/login-schema';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod';
import { routes } from '@/routes';
import toast from 'react-hot-toast';

const initialValues: LoginSchema = {
  email: '',
  password: '',
};

const useSignIn = () => {
  const [reset, setReset] = useState({});
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: initialValues,
  });

  const onSubmit: SubmitHandler<LoginSchema> = async (data) => {
    try {
      setLoading(true);

      // Direct API call to Railway backend
      const response = await fetch(
        'https://greengo-api-production.up.railway.app/api/login',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify({
            email: data.email,
            password: data.password,
          }),
        }
      );

      if (response.ok) {
        const userData = await response.json();

        // Use NextAuth signIn with the received user data
        const nextAuthResponse = await signIn('credentials', {
          redirect: false,
          email: data.email,
          password: data.password,
        });

        if (nextAuthResponse?.ok) {
          setLoading(false);
          window.location.replace(routes.dashboard.main);
        } else {
          setLoading(false);
          toast.error(ERROR_MESSAGES.loginError);
        }
      } else {
        setLoading(false);
        toast.error(ERROR_MESSAGES.loginError);
      }
    } catch (error) {
      setLoading(false);
      toast.error(ERROR_MESSAGES.loginError);
    }
  };

  return {
    reset,
    setReset,
    loading,
    setLoading,
    router,
    onSubmit,
    initialValues,
    loginSchema,
    form,
  };
};

export default useSignIn;
