'use client';

import { Button } from '@/components/ui/button';
import {
  FileUpload,
  FileUploadDropzone,
  FileUploadItem,
  FileUploadItemDelete,
  FileUploadItemMetadata,
  FileUploadItemPreview,
  FileUploadList,
  FileUploadTrigger,
} from '@/components/ui/file-upload';
import { Upload, X } from 'lucide-react';
import Image from 'next/image';
import * as React from 'react';

type FileUploadProps = {
  onFileReject: (file: File, message: string) => void;
  files: File[];
  handleFileChange: (newFiles: File[]) => void;
  previewFile: File[];
};

export function FileUploadPicture({
  onFileReject,
  files,
  handleFileChange,
  previewFile,
}: FileUploadProps) {
  return (
    <FileUpload
      name="picture"
      id="picture"
      accept="image/*"
      maxFiles={1}
      maxSize={5 * 1024 * 1024}
      className="w-full max-w-md"
      value={files}
      onValueChange={handleFileChange}
      onFileReject={onFileReject}
      multiple={false}
    >
      <FileUploadDropzone>
        <div className="flex flex-col items-center gap-1 text-center">
          <div className="flex items-center justify-center rounded-full border p-2.5">
            <Upload className="size-6 text-muted-foreground" />
          </div>
          <p className="text-sm font-medium">გადმოიტანე ფოტო</p>
          <p className="text-xs text-muted-foreground">
            ან დააკლიკე (მაქსიმუმ 1 ფაილი არაუმეტეს 5MB)
          </p>
        </div>
        <FileUploadTrigger asChild>
          <Button variant="outline" size="sm" className="mt-2 w-fit">
            ფოტოს ძებნა
          </Button>
        </FileUploadTrigger>
      </FileUploadDropzone>
      {previewFile && previewFile?.length > 0 ? (
        <>
          {previewFile.map((file2, index) => (
            <div className="rounded-md border" key={index}>
              <Image
                src={URL.createObjectURL(file2)}
                alt="Preview"
                width={38}
                height={38}
                className="h-20 w-20 rounded-md object-cover p-3"
              />
            </div>
          ))}
        </>
      ) : (
        <FileUploadList>
          {files.map((file, index) => (
            <FileUploadItem key={index} value={file}>
              <FileUploadItemPreview />
              <FileUploadItemMetadata />
              <FileUploadItemDelete asChild>
                <Button
                  onClick={() => window.location.reload()}
                  variant="ghost"
                  size="icon"
                  className="size-7"
                >
                  <X />
                </Button>
              </FileUploadItemDelete>
            </FileUploadItem>
          ))}
        </FileUploadList>
      )}
    </FileUpload>
  );
}
