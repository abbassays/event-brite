import { useState } from "react";
import { useForm } from "react-hook-form";

import { ProfileType, UserType } from "@/types";

import Button from "../CustomUI/Button";
import ImagePreview from "../CustomUI/ImagePreview";
import Input from "../CustomUI/Input";
import ComponentContainer from "./ComponentContainer";

const ProfileForm = ({ user }: { user: ProfileType }) => {
  const [uploadedImage, setUploadedImage] = useState<string | undefined>(
    user?.avatar
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserType>({
    defaultValues: {
      ...user,
    },
  });

  const onSubmit = (data: UserType) => {
    console.log("data", data);
  };

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
          />

          <div className="mt-6">
            <Button type="submit" variant="primary">
              Save
            </Button>
          </div>
        </form>

        <div className="order-1 sm:order-2 m-4 sm:m-6 bg-white border rounded-lg overflow-hidden p-2 aspect-square">
          <ImagePreview
            link={user?.avatar}
            name="avatar"
            register={register}
            errors={errors}
            uploadedImage={uploadedImage}
            setUploadedImage={setUploadedImage}
          />
        </div>
      </div>
    </ComponentContainer>
  );
};

export default ProfileForm;
