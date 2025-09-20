'use client';
import { Card } from '@/components/ui/card';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import React from 'react';
import useCreateEditForm from './hooks/useCreateEditForm';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { BUTTON_MESSAGES } from '@/config/constants';
import { Textarea } from '@/components/ui/textarea';
import { Switch } from '@/components/ui/switch';
import { FileUploadPicture } from './file-upload';
import { ProductCategoryI } from '@/types';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

function EditCreateForm({
  id,
  token,
  productCategory,
  data,
  productId,
}: {
  id?: string;
  token: string;
  productCategory: ProductCategoryI[];
  data?: any;
  productId?: string;
}) {
  const {
    form,
    onSubmit,
    loading,
    files,
    onFileReject,
    handleFileChange,
    previewFile,
    setValue,
  } = useCreateEditForm(token, data, id, productId);

  return (
    <Form {...form}>
      <div className="px-4 lg:px-6">
        <Card className="p-4 sm:p-10">
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 ">
              <div className="grid gap-2">
                <FormField
                  disabled={loading}
                  control={form.control}
                  name="name_ka"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font">სახელი ქართულად</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="grid gap-2">
                <FormField
                  disabled={loading}
                  control={form.control}
                  name="name_en"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font">სახელი ინგლისურად</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="grid gap-2">
                <FormField
                  disabled={loading}
                  control={form.control}
                  name="description_ka"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font">აღწერა ქართულად</FormLabel>
                      <FormControl>
                        <Textarea {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="grid gap-2">
                <FormField
                  disabled={loading}
                  control={form.control}
                  name="description_en"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font">აღწერა ინგლისურად</FormLabel>
                      <FormControl>
                        <Textarea {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="grid gap-2">
                <FormField
                  disabled={loading}
                  control={form.control}
                  name="price"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font">ფასი</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="grid gap-2">
                <FormField
                  disabled={loading}
                  control={form.control}
                  name="old_price"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font">ძველი ფასი</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="grid gap-2">
                <FormField
                  disabled={loading}
                  control={form.control}
                  name="product_category_id"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font">კატეგორია</FormLabel>
                      <FormControl>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <SelectTrigger className="w-full">
                            <SelectValue placeholder="აირჩეთ კატეგორია" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectGroup>
                              {productCategory?.map((category) => (
                                <SelectItem
                                  key={category.id}
                                  value={category.id.toString()}
                                >
                                  {category.name_ka}
                                </SelectItem>
                              ))}
                            </SelectGroup>
                          </SelectContent>
                        </Select>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="mt-0 grid gap-2 sm:mt-8">
                <FormField
                  disabled={loading}
                  control={form.control}
                  name="status"
                  render={({ field }) => (
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <Switch
                          id="status"
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <FormLabel className="font">სტატუსი</FormLabel>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="grid gap-2">
                <FileUploadPicture
                  previewFile={previewFile}
                  handleFileChange={handleFileChange}
                  files={files}
                  onFileReject={onFileReject}
                />
              </div>
            </div>
            <div className="flex w-full items-center justify-end pt-10">
              <Button disabled={loading} type="submit">
                {loading ? BUTTON_MESSAGES.loading : BUTTON_MESSAGES.save}
              </Button>
            </div>
          </form>
        </Card>
      </div>
    </Form>
  );
}

export default EditCreateForm;
