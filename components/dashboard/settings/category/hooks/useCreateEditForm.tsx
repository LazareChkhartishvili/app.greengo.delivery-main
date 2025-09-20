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
  createEditCategorySchema,
  CreateEditCategorySchema,
} from '@/schemas/category-schema';

const useCreateEditForm = (token: string, data?: any, id?: string) => {
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

  const initialValues: CreateEditCategorySchema = {
    name_ka: data?.name_ka || '',
    name_en: data?.name_en || '',
    description_ka: data?.description_ka || '',
    description_en: data?.description_en || '',
    svg: data?.svg || '',
    status: data?.status,
    picture: data?.picture || '',
  };

  const form = useForm<z.infer<typeof createEditCategorySchema>>({
    resolver: zodResolver(createEditCategorySchema),
    defaultValues: initialValues,
  });

  const { setValue, getValues } = form;
  const pictureValue = getValues('picture');

  useEffect(() => {
    async function fetchBlobFromApi(url: string) {
      try {
        const response = await fetch('/api/picture-preview', {
          method: 'POST',
          body: JSON.stringify({ url }),
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          throw new Error('Failed to fetch the image from API');
        }

        const blob = await response.blob();
        const file = new File([blob], 'uploaded-image.jpg', {
          type: blob.type,
        });

        // Set the preview file
        setPreviewFile([file]);
        setValue('picture', file);
      } catch (error) {
        console.error(error);
      }
    }

    if (pictureValue && typeof pictureValue === 'string') {
      fetchBlobFromApi(pictureValue);
    }
  }, [pictureValue, setValue]);

  // Handler for replacing the file
  const handleFileChange = (newFiles: File[]) => {
    setFiles(newFiles); // Update the files state
    setValue('picture', newFiles[0]); // Update the form value
    setPreviewFile([]); // Clear the preview file when a new file is chosen
  };

  const onSubmit: SubmitHandler<CreateEditCategorySchema> = async (data) => {
    try {
      setLoading(true);

      const dataToSend = {
        ...data,
        status: data.status ? '1' : '0',
        picture: files[0] || data.picture,
      };

      const response = await api.services.category.createEditCategory(
        token,
        dataToSend,
        id
      );

      if (response?.ok) {
        setLoading(false);
        toast.success(MESSAGES.success);
        router.replace(routes.category.category);
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

    files,
    setFiles,
    onFileReject,
    handleFileChange,
    previewFile,
  };
};

export default useCreateEditForm;
