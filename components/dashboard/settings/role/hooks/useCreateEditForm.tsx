'use client';
import { ERROR_MESSAGES, MESSAGES, TOAST_TIME } from '@/config/constants';
import { routes } from '@/routes';
import { useRouter } from 'next/navigation';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod';
import {
  CreateEditRoleSchema,
  createEditRoleSchema,
} from '@/schemas/role-schema';
import { api } from '@/services';
import toast from 'react-hot-toast';

const useCreateEditForm = (token: string, data?: any, id?: string) => {
  const [reset, setReset] = useState({});
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const initialValues: CreateEditRoleSchema = {
    name: data?.name || '',
    code: data?.code || '',
  };

  const form = useForm<z.infer<typeof createEditRoleSchema>>({
    resolver: zodResolver(createEditRoleSchema),
    defaultValues: initialValues,
  });

  const onSubmit: SubmitHandler<CreateEditRoleSchema> = async (data) => {
    try {
      setLoading(true);

      const response = await api.services.roles.createEditRole(token, data, id);

      if (response?.ok) {
        setLoading(false);
        toast.success(MESSAGES.success);
        router.replace(routes.status.status);
        router.refresh();
      }
      if (!response.ok) {
        setLoading(false);
        toast.error(ERROR_MESSAGES.requestError);
      }
    } catch (error) {
      setLoading(false);
      toast.error(ERROR_MESSAGES.serverError);
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
    createEditRoleSchema,
    form,
  };
};

export default useCreateEditForm;
