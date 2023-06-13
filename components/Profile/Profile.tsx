import React, { ChangeEvent, useEffect, useState } from "react";
import Image from "next/image";
import { useForm } from "react-hook-form";

import allUsers from "../../utils/all_users.json";
import { BillingAddressType, UserType } from "../../types";
type ProfileType = BillingAddressType & UserType;

import ComponentContainer from "./ComponentContainer";
import Button from "../UI/Button";
import Input from "../UI/Input";

const Profile = ({ userId }: { userId: string }) => {
  const [user, setUser] = useState<ProfileType>();

  const [uploadedImage, setUploadedImage] = useState<string | undefined>(
    user?.avatar
  );

  // ...

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

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserType>();

  const onSubmit = (data: any) => {
    console.log("Change Password", data);
  };

  const fetchUser = () => {
    /* function to fetch user details */
    const user = allUsers.find((user) => user.id === userId);
    setUser(user);
  };

  useEffect(() => {
    if (userId) fetchUser();
  }, [allUsers, userId]);

  return (
    <ComponentContainer title="User Profile">
      <div className="grid sm:grid-cols-3">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="sm:col-span-2 order-2 sm:order-1"
        >
          <Input
            type="text"
            label="Name"
            placeholder="Your Name"
            name="name"
            register={register}
            errors={errors}
            rules={{ required: "Name is required" }}
            defaultValue={user?.name}
          />

          <Input
            type="email"
            label="Email"
            placeholder="Your Email Address"
            name="email"
            register={register}
            errors={errors}
            rules={{
              required: "Email is required",
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: "Invalid email",
              },
            }}
            defaultValue={user?.email}
          />

          <Input
            type="text"
            label="Phone"
            placeholder="Your Phone Number"
            name="phone"
            register={register}
            errors={errors}
            rules={{
              required: "Phone is required",
              pattern: {
                value: /^[0-9]*$/,
                message: "Invalid phone number.",
              },
            }}
            defaultValue={user?.phone}
          />

          <div className="mt-6">
            <Button type="submit" variant="primary">
              Save
            </Button>
          </div>
        </form>

        <div className="order-1 sm:order-2 m-4 sm:m-6 bg-white border rounded-lg overflow-hidden p-2 aspect-square">
          <div className="max-w-md mx-auto w-full aspect-square relative rounded-lg overflow-hidden cursor-pointer">
            <label htmlFor="avatar-upload">
              {uploadedImage || user?.avatar ? (
                <Image
                  src={uploadedImage || user?.avatar}
                  alt={user?.name}
                  fill
                />
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
        </div>
      </div>
    </ComponentContainer>
  );
};

export default Profile;
