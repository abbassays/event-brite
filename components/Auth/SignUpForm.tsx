import React from "react";
import { useForm } from "react-hook-form";

import Input from "../UI/Input";
import Link from "next/link";

const SignUpForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const handleSignUp = (data: any) => {
    console.log("signup", data);
  };

  const password = watch("password");

  return (
    <form onSubmit={handleSubmit(handleSignUp)}>
      <Input
        label="Email"
        type="email"
        name="email"
        placeholder="
        Enter your email"
        errors={errors}
        register={register}
        rules={{
          required: "Email is required",
          pattern: {
            value: /\S+@\S+\.\S+/,
            message: "Invalid email",
          },
        }}
      />

      <Input
        label="Password"
        type="password"
        name="password"
        placeholder="********"
        errors={errors}
        register={register}
        rules={{
          required: "Password is required",
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
            value === password || "Passwords don't match",
        }}
      />

      <button
        type="submit"
        className="w-full mt-6 text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
      >
        Create an account
      </button>
      <div className="text-sm font-light text-gray-500 mt-4">
        Already have an account?{" "}
        <Link href={"/login"}>
          <div className="font-medium text-blue-600 hover:underline inline">
            Login here
          </div>
        </Link>
      </div>
    </form>
  );
};

export default SignUpForm;
