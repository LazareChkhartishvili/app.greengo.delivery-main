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

function EditCreateForm({
  id,
  token,
  data,
}: {
  id?: string;
  token: string;
  data?: any;
}) {
  const { form, onSubmit, loading } = useCreateEditForm(token, data, id);

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
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font">სტატუსი</FormLabel>
                      <FormControl>
                        <Input placeholder="როლი" {...field} />
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
                  name="code"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font">კოდი</FormLabel>
                      <FormControl>
                        <Input placeholder="კოდი" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
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
