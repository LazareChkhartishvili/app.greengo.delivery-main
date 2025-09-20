'use client';
import { useState } from 'react';
import { toast } from 'sonner';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { profileSchema } from '@/schemas/profile-edit-schema';
import { Avatar } from '@radix-ui/react-avatar';
import { UploadIcon, User2 } from 'lucide-react';
import { AvatarImage } from '@/components/ui/avatar';

export default function UserProfileCOntainer() {
  const form = useForm<z.infer<typeof profileSchema>>({
    resolver: zodResolver(profileSchema),
  });

  const [file, setFile] = useState<Blob>();
  const imagePreview = (file: Blob | MediaSource | undefined) => {
    if (file) {
      return URL.createObjectURL(file);
    }
  };

  const onChangeFile = (event: React.ChangeEvent<HTMLInputElement>) => {
    const target = event.currentTarget;
    if (target.files) {
      setFile(target.files[0]);
    }
  };

  function onSubmit(values: z.infer<typeof profileSchema>) {
    try {
      toast(
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(values, null, 2)}</code>
        </pre>
      );
    } catch (error) {
      console.error('Form submission error', error);
      toast.error('Failed to submit the form. Please try again.');
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
        <div className=" flex flex-col items-center gap-4">
          {!file && (
            <Avatar className="flex h-24 w-24 flex-shrink-0 items-center justify-center rounded-full border-2 border-primary">
              <User2 size={35} />
            </Avatar>
          )}
          {file && (
            <Avatar className="flex h-24 w-24 flex-shrink-0 items-center justify-center overflow-hidden rounded-full border-2 border-primary">
              <User2 size={35} />
              <AvatarImage src={imagePreview(file) as string} />
            </Avatar>
          )}

          <div className="flex h-9 w-9 items-center justify-center rounded-full">
            <Button type="button" variant="outline" size="sm">
              <label
                htmlFor="picture"
                className="flex cursor-pointer items-center justify-center rounded-md font-semibold focus-within:outline-none  focus-within:ring-0 focus-within:ring-offset-0"
              >
                <UploadIcon className="mr-2 h-4 w-4" />
                Change Photo
              </label>
            </Button>
          </div>

          <input
            //{...register("picture")}
            onChange={onChangeFile}
            type="file"
            id="picture"
            name="picture"
            className="hidden"
            accept=".png, .jpg, .jpeg"
          />
        </div>
        <FormField
          control={form.control}
          name="firstName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>First Name</FormLabel>
              <FormControl>
                <Input placeholder="First Name" type="text" {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="lastName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Last Name</FormLabel>
              <FormControl>
                <Input placeholder="Last Name" type="text" {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="Email" type="email" {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Phone</FormLabel>
              <FormControl>
                <Input placeholder="Phone" type="text" {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
