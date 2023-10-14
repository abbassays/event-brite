import React, { ChangeEvent, useState } from "react";
import Input from "./Input";
import Image from "next/image";
import { FieldErrors, UseFormRegister } from "react-hook-form";

interface ImagePreviewProps {
  link?: string;
  register: UseFormRegister<any>;
  errors: FieldErrors<any>;
  name: string;
  uploadedImage: string;
  setUploadedImage: React.Dispatch<React.SetStateAction<string>>;
  square?: boolean;
}

const ImagePreview = ({
  link,
  register,
  errors,
  name,
  uploadedImage,
  setUploadedImage,
  square,
}: ImagePreviewProps) => {
  const handleImageUpload = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setUploadedImage(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };
  return (
    <div className="relative w-full max-w-md mx-auto overflow-hidden rounded-lg cursor-pointer aspect-square">
      <label htmlFor="avatar-upload">
        {uploadedImage || link ? (
          <div className="relative w-full h-full">
            <Image
              src={uploadedImage || link}
              alt={link}
              fill
              sizes="100vw"
              className="object-contain"
              priority
            />
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center h-full text-gray-400">
            Upload Image{" "}
          </div>
        )}
        <Input
          className="hidden"
          type="file"
          id="avatar-upload"
          label=""
          register={register}
          errors={errors}
          name="avatar"
          onChange={handleImageUpload}
          accept="image/*"
        />
      </label>
    </div>
  );
};

export default ImagePreview;
