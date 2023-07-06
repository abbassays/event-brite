import React from "react";
import { useForm } from "react-hook-form";

import Input from "../CustomUI/Input";
import Link from "next/link";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleLogin = (data: any) => {
    console.log("login", data);
  };

  return (
    <form onSubmit={handleSubmit(handleLogin)}>
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

      <button
        type="submit"
        className="w-full mt-4 text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
      >
        Login
      </button>
      <div className="text-sm font-light text-gray-500 mt-6">
        Don’t have an account yet?{" "}
        <Link href={"/signup"}>
          <div className="font-medium text-blue-600 hover:underline inline">
            Sign up
          </div>
        </Link>
      </div>
    </form>
  );
};

export default LoginForm;
