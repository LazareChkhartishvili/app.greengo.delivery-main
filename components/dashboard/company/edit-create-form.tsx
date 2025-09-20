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
import { CategoryIRoot, CityIRoot } from '@/types';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import dynamic from 'next/dynamic';

const CompanyMap = dynamic(
  () => import('@/components/dashboard/company/company-map'),
  {
    loading: () => <p>Loading...</p>,
    ssr: false,
  }
);

function EditCreateForm({
  id,
  token,
  data,
  categories,
  cities,
}: {
  id?: string;
  token: string;
  data?: any;
  categories: CategoryIRoot;
  cities: CityIRoot;
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
    getValues,
  } = useCreateEditForm(token, data, id);

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
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font">ელ.ფოსტა</FormLabel>
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
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font">ტელეფონი</FormLabel>
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
                  name="city_id"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font">ქალაქი</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value.toString()}
                      >
                        <FormControl>
                          <SelectTrigger className="w-full">
                            <SelectValue placeholder="აირჩეთ ქალაქი" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {cities?.data?.map((city) => (
                            <SelectItem
                              key={city.id.toString()}
                              value={city.id.toString()}
                            >
                              {city.name_ka}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="grid gap-2">
                <FormField
                  disabled={loading}
                  control={form.control}
                  name="category_id"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font">კატეგორია</FormLabel>
                      <FormControl>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value.toString()}
                        >
                          <SelectTrigger className="w-full">
                            <SelectValue placeholder="აირჩეთ კატეგორია" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectGroup>
                              {categories?.data?.map((category) => (
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

              <div className="grid gap-2">
                <FormField
                  disabled={loading}
                  control={form.control}
                  name="address_ka"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font">მისამართი ქართულად</FormLabel>
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
                  name="address_en"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font">
                        მისამართი ინგლისურად
                      </FormLabel>
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
                  name="soc_facebook"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font">facebook</FormLabel>
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
                  name="soc_instagram"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font">instagram</FormLabel>
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
                  name="soc_youtobe"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font">Youtube</FormLabel>
                      <FormControl>
                        <Input {...field} />
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

              <div className="col-span-2 mt-4 flex h-[400px] w-full items-center justify-center gap-2">
                <FileUploadPicture
                  previewFile={previewFile}
                  handleFileChange={handleFileChange}
                  files={files}
                  onFileReject={onFileReject}
                />
                <CompanyMap getValues={getValues} setValue={setValue} />
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
