'use client';
import { ERROR_MESSAGES, MESSAGES } from '@/config/constants';
import { routes } from '@/routes';
import { useRouter } from 'next/navigation';
import { zodResolver } from '@hookform/resolvers/zod';
import { useCallback, useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod';
import { api } from '@/services';
import toast from 'react-hot-toast';

import {
  createEditProductCategorySchema,
  CreateEditProductCategorySchema,
} from '@/schemas/productCategory-schema';

const useCreateEditForm = (
  token: string,
  data?: any,
  id?: string,
  productId?: string
) => {
  const [reset, setReset] = useState({});
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const [files, setFiles] = useState<File[]>([]);
  const [previewFile, setPreviewFile] = useState<File[]>([]);

  const onFileReject = useCallback((file: File) => {
    toast.error(
      `"${
        file.name.length > 20 ? `${file.name.slice(0, 20)}...` : file.name
      }" ${MESSAGES.pictureError}`
    );
  }, []);

  const initialValues: CreateEditProductCategorySchema = {
    name_ka: data?.name_ka || '',
    name_en: data?.name_en || '',
    svg: data?.icon || '',
    status: data?.status,
  };

  const form = useForm<z.infer<typeof createEditProductCategorySchema>>({
    resolver: zodResolver(createEditProductCategorySchema),
    defaultValues: initialValues,
    mode: 'onChange',
  });

  const { setValue } = form;

  const onSubmit: SubmitHandler<CreateEditProductCategorySchema> = async (
    data
  ) => {
    try {
      setLoading(true);

      const dataToSend = {
        ...data,
        status: data.status ? '1' : '0',
        company_id: id,
      };

      const response =
        await api.services.companyCategory.createEditCompanyCategory(
          token,
          dataToSend,
          productId
        );

      if (response?.ok) {
        setLoading(false);
        toast.success(MESSAGES.success);
        router.replace(
          id
            ? routes.companyCategory.companyCategory(id)
            : routes.company.company
        );
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
    createEditProductCategorySchema,
    form,
    setValue,
    files,
    setFiles,
    onFileReject,
    previewFile,
  };
};

export default useCreateEditForm;
