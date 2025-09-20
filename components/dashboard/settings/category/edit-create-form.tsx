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

function EditCreateForm({
  id,
  token,
  data,
}: {
  id?: string;
  token: string;
  data?: any;
}) {
  const {
    form,
    onSubmit,
    loading,
    files,
    onFileReject,
    handleFileChange,
    previewFile,
  } = useCreateEditForm(token, data, id);

  return (
    <Form {...form}>
      <div className="px-4 lg:px-6">
        <Card className="p-4 sm:p-10">
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
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
              <div>
                <FormField
                  disabled={loading}
                  control={form.control}
                  name="description_ka"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font">აღწერა ქართულად</FormLabel>
                      <FormControl>
                        <Textarea {...field} placeholder="აღწერა ქართულად" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div>
                <FormField
                  disabled={loading}
                  control={form.control}
                  name="description_en"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font">აღწერა ინგლისურად</FormLabel>
                      <FormControl>
                        <Textarea {...field} placeholder="აღწერა ინგლისურად" />
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
                  name="svg"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font">SVG აიქონი</FormLabel>
                      <FormControl>
                        <Textarea {...field} placeholder="SVG აიქონი" />
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
