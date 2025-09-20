'use client';
import { ERROR_MESSAGES, MESSAGES } from '@/config/constants';
import { routes } from '@/routes';
import { useRouter } from 'next/navigation';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod';
import { api } from '@/services';
import toast from 'react-hot-toast';
import {
  createEditCategorySchema,
  CreateEditCategorySchema,
} from '@/schemas/category-schema';

const useCreateEditForm = (token: string, data?: any, id?: string) => {
  const [reset, setReset] = useState({});
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const initialValues: CreateEditCategorySchema = {
    name_ka: data?.name_ka || '',
    name_en: data?.name_en || '',
    status: data?.status,
  };

  const form = useForm<z.infer<typeof createEditCategorySchema>>({
    resolver: zodResolver(createEditCategorySchema),
    defaultValues: initialValues,
  });

  const onSubmit: SubmitHandler<CreateEditCategorySchema> = async (data) => {
    try {
      setLoading(true);

      const dataToSend = {
        ...data,
        status: data.status ? '1' : '0',
      };

      const response = await api.services.city.createEditCity(
        token,
        dataToSend,
        id
      );

      if (response?.ok) {
        setLoading(false);
        toast.success(MESSAGES.success);
        router.replace(routes.city.city);
        router.refresh();
      }
      if (!response.ok) {
        setLoading(false);
        toast.error(ERROR_MESSAGES.requestError);
      }
    } catch (error) {
      setLoading(false);
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
    createEditCategorySchema,
    form,
  };
};

export default useCreateEditForm;
