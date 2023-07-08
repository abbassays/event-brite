import React from "react";
import { useForm } from "react-hook-form";

import { ChangePasswordType } from "../../types";

import Input from "../CustomUI/Input";
import Button from "../CustomUI/Button";
import ComponentContainer from "./ComponentContainer";

const ChangePasswordForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<ChangePasswordType>();

  const newPassword = watch("newPassword");

  const handleChangePassword = (data: any) => {
    console.log("Change Password", data);
  };

  return (
    <ComponentContainer title="Change Password">
      <form onSubmit={handleSubmit(handleChangePassword)}>
        <Input
          type="password"
          label="Old Password"
          placeholder="Old Password"
          name="oldPassword"
          register={register}
          errors={errors}
          rules={{ required: "Old Password is required" }}
        />
        <Input
          type="password"
          label="New Password"
          placeholder="New Password"
          name="newPassword"
          register={register}
          errors={errors}
          rules={{
            required: "New Password is required",
            minLength: {
              value: 8,
              message: "Password must have at least 8 characters",
            },
          }}
        />
        <Input
          type="password"
          label="Confirm Password"
          placeholder="Confirm Password"
          name="confirmPassword"
          register={register}
          errors={errors}
          rules={{
            required: "Confirm Password is required",
            validate: (value: string) =>
              value === newPassword || "Passwords don't match",
          }}
        />
        <div className="mt-6">
          <Button type="submit" variant="primary">
            Change Password
          </Button>
        </div>
      </form>
    </ComponentContainer>
  );
};

export default ChangePasswordForm;
