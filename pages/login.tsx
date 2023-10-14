import React from "react";
import { useRouter } from "next/router";
import LoginForm from "../components/Auth/LoginForm";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/components/CustomUI/Logo";

const LoginPage = () => {
  const router = useRouter();
  return (
    <section className="bg-gray-50">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="mb-6">
          <Link href="/" className="flex items-center">
            <Logo />
          </Link>
        </div>
        <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
              Sign in to your account
            </h1>
            <LoginForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
