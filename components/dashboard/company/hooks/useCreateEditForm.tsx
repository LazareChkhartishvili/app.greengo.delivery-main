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
  createEditCompanySchema,
  CreateEditCompanySchema,
} from '@/schemas/company-schema';

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

  const initialValues: CreateEditCompanySchema = {
    name_ka: data?.name_ka || '',
    name_en: data?.name_en || '',
    description_ka: data?.description_ka || '',
    description_en: data?.description_en || '',
    city_id: data?.city_id.toString() || '',
    category_id: data?.category_id.toString() || '',
    address_ka: data?.address_ka || '',
    address_en: data?.address_en || '',
    address_latitude: data?.address_latitude || '',
    address_longitude: data?.address_longitude || '',
    phone: data?.phone || '',
    email: data?.email || '',
    soc_facebook: data?.soc_facebook || '',
    soc_instagram: data?.soc_instagram || '',
    soc_youtobe: data?.soc_youtobe || '',
    status: data?.status === 1, // Convert number to boolean for Switch component
    picture: data?.picture || '',
  };

  const form = useForm<z.infer<typeof createEditCompanySchema>>({
    resolver: zodResolver(createEditCompanySchema),
    defaultValues: initialValues,
    mode: 'onChange',
  });

  const {
    setValue,
    getValues,
    formState: { errors },
  } = form;
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

  const onSubmit: SubmitHandler<CreateEditCompanySchema> = async (data) => {
    try {
      setLoading(true);

      const dataToSend = {
        ...data,
        status: data.status ? 1 : 0, // Convert boolean to number for API
        picture: files[0] || data.picture,
      };

      console.log('Sending data to API:', dataToSend);
      console.log('Status value being sent:', dataToSend.status);

      const response = await api.services.company.createEditCompany(
        token,
        dataToSend,
        id
      );

      if (response?.ok) {
        setLoading(false);
        toast.success(MESSAGES.success);
        // Force refresh the page to get updated data
        window.location.href = routes.company.company;
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
    createEditCompanySchema,
    form,
    setValue,
    getValues,
    files,
    setFiles,
    onFileReject,
    handleFileChange,
    previewFile,
  };
};

export default useCreateEditForm;
